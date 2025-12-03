import { Building2, Heart, Trophy, Music2, Image } from "lucide-react";

const portfolioCategories = [
  {
    icon: Building2,
    title: "Corporate Experiences",
    description: "Award shows, annual days & leadership events that boost engagement & make teams feel celebrated.",
    tagline: "Brands trust him. Audiences remember him.",
    locations: "Corporate Anchor in Pune | Mumbai | Nagpur",
    color: "from-blue-500/20 to-transparent",
  },
  {
    icon: Heart,
    title: "Wedding & Sangeet Magic",
    description: "Your love story — amplified. Family fun, emotional moments, dance battles → all perfectly hosted so that everyone feels included.",
    tagline: "Every memory becomes a reel.",
    locations: "Wedding Anchor India | Hindi/Marathi Emcee",
    color: "from-pink-500/20 to-transparent",
  },
  {
    icon: Trophy,
    title: "Sports & Cricket Hosting",
    description: "High-energy commentary, team hype, live emotion. From Maharashtra Premier League to university leagues.",
    tagline: "He keeps the crowd roaring higher than the scoreboard.",
    locations: "Sports Anchor Maharashtra",
    color: "from-green-500/20 to-transparent",
  },
  {
    icon: Music2,
    title: "Concerts & Entertainment Nights",
    description: "40,000 fans. Big lights. Loud cheers. Pure adrenaline.",
    tagline: "He isn't just hosting — he's running the vibe.",
    locations: "Concert Emcee | Event Host India",
    color: "from-purple-500/20 to-transparent",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm uppercase tracking-wider mb-2">
            Portfolio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Every Stage. Every Emotion. Every Audience.
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From boardrooms to baraats… Emcee Manoj adapts, connects, and delivers unforgettable energy — every single time.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {portfolioCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border card-hover"
            >
              {/* Image placeholder area */}
              <div className={`h-48 bg-gradient-to-br ${category.color} from-accent/50 to-card relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Image className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Gallery Image</p>
                  </div>
                </div>
                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/90 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="font-body text-foreground/70 mb-3">
                  {category.description}
                </p>
                <p className="font-accent text-primary italic mb-4">
                  {category.tagline}
                </p>
                <p className="text-xs text-muted-foreground">
                  {category.locations}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Grid Placeholder */}
        <div className="text-center">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8">
            Gallery & BTS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square rounded-2xl bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <div className="text-center">
                  <Image className="w-8 h-8 text-muted-foreground/30 mx-auto" />
                </div>
              </div>
            ))}
          </div>
          <p className="font-accent text-muted-foreground mt-6 italic">
            "You can feel the energy even in pictures."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
