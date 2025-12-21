import { useState, useEffect } from "react";
import { Building2, Heart, Trophy, Music2, Image, X } from "lucide-react";
import InstagramReels from "./InstagramReels";

const portfolioCategories = [
  {
    icon: Building2,
    title: "Corporate Experiences",
    description: "Award shows, annual days & leadership events that boost engagement & make teams feel celebrated.",
    tagline: "Brands trust him. Audiences remember him.",
    locations: "Corporate Anchor in Pune | Mumbai | Nagpur",
    color: "from-blue-500/20 to-transparent",
    image: "/Corporate/Corporate Exp.JPG",
  },
  {
    icon: Heart,
    title: "Wedding & Sangeet Magic",
    description: "Your love story, amplified. Family fun, emotional moments, dance battles → all perfectly hosted so that everyone feels included.",
    tagline: "Every memory becomes a reel.",
    locations: "Wedding Anchor India | Hindi/Marathi Emcee",
    color: "from-pink-500/20 to-transparent",
    image: "/Shadi events/Weeding and Sangeet Night.jpg",
  },
  {
    icon: Trophy,
    title: "Sports & Cricket Hosting",
    description: "High-energy commentary, team hype, live emotion. From Maharashtra Premier League to university leagues.",
    tagline: "He keeps the crowd roaring higher than the scoreboard.",
    locations: "Sports Anchor Maharashtra",
    color: "from-green-500/20 to-transparent",
    image: "/Mpl/MPL Hosting.JPG",
  },
  {
    icon: Music2,
    title: "Concerts & Entertainment Nights",
    description: "40,000 fans. Big lights. Loud cheers. Pure adrenaline.",
    tagline: "He isn't just hosting, he's running the vibe.",
    locations: "Concert Emcee | Event Host India",
    color: "from-purple-500/20 to-transparent",
    image: "/Corporate/Concert.JPG",
  },
];

const galleryImages = [
  "6D5A9982.JPG",
  "DSC00439.jpg",
  "DSC09651.JPG",
  "DSC_7917.JPG",
  "IMG_1861.JPG",
  "IMG_3322.JPG",
  "MHRA3599.JPG",
  "MHRA4176.JPG",
  "MHRA6206.JPG",
  "NMG05427.JPG",
  "Prajakta mali .JPG",
  "Yashraj mukhate.JPG"
];

// Shuffle function
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const PortfolioSection = () => {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Shuffle images on component mount
    setShuffledImages(shuffleArray(galleryImages));
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Every Stage. Every Emotion. Every Audience.
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From boardrooms to baraats… Emcee Manoj adapts, connects, and delivers unforgettable energy, every single time.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {portfolioCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border card-hover"
            >
              {/* Image area */}
              <div className={`aspect-video bg-gradient-to-br ${category.color} from-accent/50 to-card relative overflow-hidden`}>
                {category.image ? (
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Image className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Gallery Image</p>
                    </div>
                  </div>
                )}
                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
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

        {/* Gallery Grid */}
        <div className="text-center">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8">
            Gallery & BTS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {shuffledImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="aspect-square rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all hover:scale-105 cursor-pointer"
              >
                <img
                  src={`/Bts/${image}`}
                  alt={`Behind the scenes ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="font-accent text-muted-foreground mt-6 italic">
            "You can feel the energy even in pictures."
          </p>

          {/* Instagram Reels Section */}
          <InstagramReels />
        </div>

        {/* Image Popup/Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/Bts/${selectedImage}`}
                alt="Gallery image"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
