import sharp from 'sharp';
import { readdir, mkdir, stat, writeFile } from 'fs/promises';
import { join, relative, parse, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const CONFIG = {
    inputDir: join(__dirname, '../public'),
    outputDir: join(__dirname, '../public/optimized'),
    sizes: {
        thumbnail: { width: 400, quality: 80 },
        medium: { width: 800, quality: 85 },
        large: { width: 1920, quality: 90 }
    },
    // File extensions to optimize
    extensions: ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'],
    // Skip these directories
    skipDirs: ['optimized', 'node_modules', '.git'],
    // Skip these specific files (favicons need specific formats)
    skipFiles: ['favicon.ico', 'favicon-16x16.png', 'favicon-32x32.png',
        'android-chrome-192x192.png', 'android-chrome-512x512.png',
        'apple-touch-icon.png', 'site.webmanifest']
};

// Stats tracking
let stats = {
    totalFiles: 0,
    processedFiles: 0,
    skippedFiles: 0,
    errors: 0,
    totalOriginalSize: 0,
    totalOptimizedSize: 0,
    fileDetails: []
};

/**
 * Recursively get all image files from a directory
 */
async function getImageFiles(dir, fileList = []) {
    const files = await readdir(dir);

    for (const file of files) {
        const filePath = join(dir, file);
        const fileStat = await stat(filePath);

        if (fileStat.isDirectory()) {
            // Skip certain directories
            if (!CONFIG.skipDirs.includes(file)) {
                await getImageFiles(filePath, fileList);
            }
        } else {
            // Check if file should be processed
            const ext = parse(file).ext;
            if (CONFIG.extensions.includes(ext) && !CONFIG.skipFiles.includes(file)) {
                fileList.push(filePath);
            }
        }
    }

    return fileList;
}

/**
 * Create output directory structure
 */
async function ensureDir(dirPath) {
    try {
        await mkdir(dirPath, { recursive: true });
    } catch (err) {
        if (err.code !== 'EEXIST') throw err;
    }
}

/**
 * Convert bytes to human-readable format
 */
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Optimize a single image
 */
async function optimizeImage(inputPath) {
    try {
        const relativePath = relative(CONFIG.inputDir, inputPath);
        const parsedPath = parse(relativePath);
        const baseName = parsedPath.name;
        const outputDir = join(CONFIG.outputDir, parsedPath.dir);

        // Ensure output directory exists
        await ensureDir(outputDir);

        // Get original file size
        const originalStat = await stat(inputPath);
        const originalSize = originalStat.size;

        console.log(`\n📸 Processing: ${relativePath}`);
        console.log(`   Original size: ${formatBytes(originalSize)}`);

        const sizeVariants = {};

        // Process each size variant
        for (const [sizeName, config] of Object.entries(CONFIG.sizes)) {
            const outputPath = join(outputDir, `${baseName}-${sizeName}.webp`);

            await sharp(inputPath)
                .rotate() // Automatically rotate based on EXIF orientation
                .resize(config.width, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .webp({ quality: config.quality })
                .toFile(outputPath);

            const outputStat = await stat(outputPath);
            const outputSize = outputStat.size;
            const reduction = ((1 - outputSize / originalSize) * 100).toFixed(1);

            sizeVariants[sizeName] = {
                path: relative(CONFIG.inputDir, outputPath),
                size: outputSize,
                reduction: `${reduction}%`
            };

            console.log(`   ✅ ${sizeName}: ${formatBytes(outputSize)} (${reduction}% smaller)`);
        }

        // Update stats
        stats.processedFiles++;
        stats.totalOriginalSize += originalSize;
        stats.totalOptimizedSize += Object.values(sizeVariants).reduce((sum, v) => sum + v.size, 0) / 3;

        stats.fileDetails.push({
            original: relativePath,
            originalSize: formatBytes(originalSize),
            variants: sizeVariants
        });

    } catch (error) {
        console.error(`❌ Error processing ${inputPath}:`, error.message);
        stats.errors++;
    }
}

/**
 * Main optimization function
 */
async function optimizeAllImages() {
    console.log('🚀 Starting Image Optimization\n');
    console.log('━'.repeat(60));

    const startTime = Date.now();

    // Get all image files
    console.log('\n🔍 Scanning for images...');
    const imageFiles = await getImageFiles(CONFIG.inputDir);
    stats.totalFiles = imageFiles.length;

    console.log(`📦 Found ${stats.totalFiles} images to optimize`);
    console.log('━'.repeat(60));

    // Process each image
    for (const imagePath of imageFiles) {
        await optimizeImage(imagePath);
    }

    // Generate manifest
    const manifestPath = join(CONFIG.outputDir, 'manifest.json');
    await writeFile(manifestPath, JSON.stringify(stats.fileDetails, null, 2));

    // Print summary
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    const avgReduction = ((1 - stats.totalOptimizedSize / stats.totalOriginalSize) * 100).toFixed(1);

    console.log('\n' + '━'.repeat(60));
    console.log('✨ OPTIMIZATION COMPLETE!\n');
    console.log(`📊 Summary:`);
    console.log(`   Total images found: ${stats.totalFiles}`);
    console.log(`   Successfully processed: ${stats.processedFiles}`);
    console.log(`   Errors: ${stats.errors}`);
    console.log(`   Original total size: ${formatBytes(stats.totalOriginalSize)}`);
    console.log(`   Optimized avg size: ${formatBytes(stats.totalOptimizedSize)}`);
    console.log(`   Average reduction: ${avgReduction}%`);
    console.log(`   Time taken: ${duration}s`);
    console.log(`\n📄 Manifest saved to: ${relative(process.cwd(), manifestPath)}`);
    console.log('━'.repeat(60));
    console.log('\n✅ All images optimized successfully!');
    console.log(`📁 Optimized images are in: public/optimized/\n`);
}

// Run the optimization
optimizeAllImages().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
