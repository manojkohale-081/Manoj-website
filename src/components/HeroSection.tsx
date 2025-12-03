import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Play, Instagram, Facebook, Linkedin, Youtube, MapPin, X } from "lucide-react";
import { AnimatedDock } from "@/components/ui/animated-dock";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="font-heading text-5xl md:text-7xl font-extrabold mb-4">
                <span className="text-primary">Emcee</span>{" "}
                <span className="text-foreground">Manoj</span>
              </h1>
            </motion.div>

            {/* Acronym Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border"
            >
              <div className="flex justify-center lg:justify-start gap-3 mb-4">
                {acronymData.map((item, index) => (
                  <span
                    key={item.letter}
                    className={`font-heading text-3xl md:text-4xl font-extrabold transition-all duration-300 ${index === activeIndex
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
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-2"
            >
              <p className="font-accent text-xl md:text-2xl text-foreground/80 italic">
                Transitioned from Medicines to the Mic
              </p>
              <p className="font-body text-lg text-muted-foreground">
                Now Prescribing Smiles, Cheers & Goosebumps.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
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
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-90" />

              {/* Hero Image */}
              <div
                className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl cursor-pointer transition-transform hover:scale-105"
                onClick={() => setIsImagePopupOpen(true)}
              >
                <img
                  src="/hero-manoj.jpg"
                  alt="Emcee Manoj - Professional Anchor and Host"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Social Media Dock */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-6 flex justify-center"
              >
                <AnimatedDock
                  items={[
                    {
                      link: "https://www.instagram.com/emcee_manoj/",
                      target: "_blank",
                      Icon: <Instagram size={22} />,
                    },
                    {
                      link: "https://www.facebook.com/emceemanojj/",
                      target: "_blank",
                      Icon: <Facebook size={22} />,
                    },
                    {
                      link: "https://www.linkedin.com/in/manojkohale96/",
                      target: "_blank",
                      Icon: <Linkedin size={22} />,
                    },
                    {
                      link: "https://www.youtube.com/@emceemanoj/",
                      target: "_blank",
                      Icon: <Youtube size={22} />,
                    },
                    {
                      link: "https://maps.app.goo.gl/VBNqhy1iRcFcVn7y7",
                      target: "_blank",
                      Icon: <MapPin size={22} />,
                    },
                  ]}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Popup Modal */}
      <AnimatePresence>
        {isImagePopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setIsImagePopupOpen(false)}
          >
            <button
              onClick={() => setIsImagePopupOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/hero-manoj.jpg"
                alt="Emcee Manoj - Professional Anchor and Host"
                className="w-full h-full object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
