import React from 'react';

interface ImageAutoSliderProps {
    images: string[];
    title?: string;
    subtitle?: string;
}

export const ImageAutoSlider = ({
    images,
    title = "Gallery",
    subtitle
}: ImageAutoSliderProps) => {
    // Duplicate images for seamless loop
    const duplicatedImages = [...images, ...images];

    return (
        <>
            <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 25s linear infinite;
        }

        .infinite-scroll:hover {
          animation-play-state: paused;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>

            <div className="w-full py-16 bg-background relative overflow-hidden">
                {/* Header */}
                <div className="container mx-auto px-4 mb-10 text-center">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Scrolling images container */}
                <div className="relative w-full">
                    <div className="scroll-container w-full">
                        <div className="infinite-scroll flex gap-6 w-max">
                            {duplicatedImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="image-item flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden shadow-xl border border-border"
                                >
                                    <img
                                        src={image}
                                        alt={`Gallery image ${(index % images.length) + 1}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageAutoSlider;
