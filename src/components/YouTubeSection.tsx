import { Youtube, Play } from "lucide-react";

// YouTube videos - Your actual showcase videos
const youtubeVideos = [
    { id: "jfIJCDjsI34", title: "Retro Musical Faceoff" },
    { id: "jIdtPiU4Ao8", title: "Grand Sangeet Night" },
    { id: "hlfIpGonXJo", title: "Bollywood Movie Quiz" },
    { id: "x5OT1daoUZg", title: "Ultimate Dance Battle" },
    { id: "P54qtpyQdg0", title: "Wedding Hosting Vlog" },
    { id: "QhCeHZu9p24", title: "Cultural Sangeet Magic" },
    { id: "-NO9C8QPG6g", title: "Destination Wedding Vibes" },
    { id: "6JGtLvDzrNo", title: "Sindhi Sandhya Hosting" },
    { id: "cQeBBYvl1No", title: "Haldi Ceremony Fun" },
];

const YouTubeSection = () => {
    return (
        <section id="videos" className="py-20 bg-background relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Youtube className="w-10 h-10 text-primary" />
                        <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
                            Watch the Energy
                        </h2>
                    </div>
                    <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                        Don't just take our word for it, see Emcee Manoj in action across events, stages, and crowds.
                    </p>
                </div>

                {/* YouTube Videos Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {youtubeVideos.map((video, index) => (
                        <div
                            key={index}
                            className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:scale-105 card-hover"
                        >
                            {/* Video Container */}
                            <div className="aspect-video relative bg-muted">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Video Title */}
                            <div className="p-4 bg-card/95 backdrop-blur-sm">
                                <div className="flex items-center gap-2">
                                    <Play className="w-4 h-4 text-primary flex-shrink-0" />
                                    <h3 className="font-heading text-sm font-semibold text-foreground line-clamp-1">
                                        {video.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More on YouTube Button */}
                <div className="text-center mt-12">
                    <a
                        href="https://www.youtube.com/@emceemanoj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
                    >
                        <Youtube className="w-5 h-5" />
                        View All Videos on YouTube
                    </a>
                </div>
            </div>
        </section>
    );
};

export default YouTubeSection;
