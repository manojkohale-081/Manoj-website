import { useEffect } from "react";
import { Instagram } from "lucide-react";

// Extend Window interface for Instagram embed
declare global {
    interface Window {
        instgrm?: {
            Embeds: {
                process: () => void;
            };
        };
    }
}

const reels = [
    "https://www.instagram.com/reel/DM-NlnBsWyO/",
    "https://www.instagram.com/reel/C9uvci1IxA8/",
    "https://www.instagram.com/reel/DQwnvNtjF70/",
    "https://www.instagram.com/reel/DQWQyRMjJyB/",
    "https://www.instagram.com/reel/DNXYym9IAQs/",
    "https://www.instagram.com/reel/DJt9KzcvY2P/",
];

const InstagramReels = () => {
    useEffect(() => {
        // Load Instagram embed script
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        // Process embeds when script loads
        script.onload = () => {
            if (typeof window !== "undefined" && window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="mt-16">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2">
                <Instagram className="w-7 h-7 text-primary" />
                Watch the Energy
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {reels.map((reelUrl, index) => (
                    <div
                        key={index}
                        className="relative aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-xl border border-border/50"
                    >
                        <iframe
                            src={`${reelUrl}embed/captioned`}
                            className="absolute inset-0 w-full h-full"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstagramReels;
