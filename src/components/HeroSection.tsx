import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Play } from "lucide-react";

const acronymData = [
  { letter: "M", meaning: "Memorable Experiences" },
  { letter: "A", meaning: "Applause Guaranteed" },
  { letter: "N", meaning: "Non-Stop Entertainment" },
  { letter: "O", meaning: "Occasion Perfect Host" },
  { letter: "J", meaning: "Just the Best Vibes" },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % acronymData.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-spotlight pointer-events-none" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* Name */}
            <div>
              <h1 className="font-heading text-5xl md:text-7xl font-extrabold mb-4">
                <span className="text-primary">Emcee</span>{" "}
                <span className="text-foreground">Manoj</span>
              </h1>
            </div>

            {/* Acronym Animation */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
              <div className="flex justify-center lg:justify-start gap-3 mb-4">
                {acronymData.map((item, index) => (
                  <span
                    key={item.letter}
                    className={`font-heading text-3xl md:text-4xl font-extrabold transition-all duration-300 ${
                      index === activeIndex
                        ? "text-primary scale-125"
                        : "text-foreground/40"
                    } ${index === activeIndex && isAnimating ? "letter-flip" : ""}`}
                  >
                    {item.letter}
                  </span>
                ))}
              </div>
              <p className="font-accent text-lg md:text-xl text-primary italic min-h-[2rem]">
                {acronymData[activeIndex].meaning}
              </p>
            </div>

            {/* Tagline */}
            <div className="space-y-2">
              <p className="font-accent text-xl md:text-2xl text-foreground/80 italic">
                Transitioned from Medicines to the Mic
              </p>
              <p className="font-body text-lg text-muted-foreground">
                Now Prescribing Smiles, Cheers & Goosebumps.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact" className="flex items-center gap-2">
                  <Mic className="w-5 h-5" />
                  Book Emcee Manoj
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#portfolio" className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch the Magic
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Image placeholder */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-90" />
              
              {/* Image placeholder - user will provide image */}
              <div className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-3xl bg-gradient-to-br from-card to-accent overflow-hidden border-4 border-primary/30 shadow-2xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <Mic className="w-20 h-20 text-primary mb-4 animate-float" />
                  <p className="font-heading text-xl text-foreground/60">
                    Your Image Here
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Energetic Corporate and Wedding Anchor in India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
