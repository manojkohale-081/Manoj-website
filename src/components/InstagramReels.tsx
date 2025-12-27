import { Instagram, ExternalLink } from "lucide-react";

const reels = [
    "/reels/1.mp4",
    "/reels/2.mp4",
    "/reels/3.mp4",
    "/reels/4.mp4",
    "/reels/5.mp4",
    "/reels/6.mp4",
];

const InstagramReels = () => {
    return (
        <div id="reels" className="mt-16 scroll-mt-20">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2">
                <Instagram className="w-7 h-7 text-primary" />
                Watch the Energy
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {reels.map((reelPath, index) => (
                    <div
                        key={index}
                        className="relative w-full overflow-hidden rounded-2xl border-4 border-yellow-400 bg-black aspect-[9/16]"
                    >
                        <video
                            src={reelPath}
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                            preload="metadata"
                            loop
                        />
                    </div>
                ))}
            </div>

            {/* Watch More Button */}
            <div className="flex justify-center mt-10">
                <a
                    href="https://www.instagram.com/emcee_manoj/reels/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-heading font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                    <Instagram className="w-5 h-5" />
                    Watch More Reels
                    <ExternalLink className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
};

export default InstagramReels;
