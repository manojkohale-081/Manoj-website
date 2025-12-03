import { useState, useEffect, useRef } from "react";
import { MapPin, Users, Calendar, Globe } from "lucide-react";

const stats = [
  { icon: Calendar, value: "8+", label: "Years Experience", numericValue: 8 },
  { icon: Users, value: "1000+", label: "Live Shows", numericValue: 1000 },
  { icon: Users, value: "40,000+", label: "Audience Reached", numericValue: 40000 },
  { icon: Globe, value: "Global", label: "Presence", numericValue: null },
];

const AboutSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          stats.forEach((stat, index) => {
            if (stat.numericValue !== null) {
              const duration = 2000; // 2 seconds
              const steps = 60;
              const increment = stat.numericValue / steps;
              let currentStep = 0;

              const timer = setInterval(() => {
                currentStep++;
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.min(
                    Math.round(increment * currentStep),
                    stat.numericValue!
                  );
                  return newCounts;
                });

                if (currentStep >= steps) {
                  clearInterval(timer);
                }
              }, duration / steps);
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const formatValue = (index: number) => {
    const stat = stats[index];
    if (stat.numericValue === null) return stat.value;

    const count = counts[index];
    if (stat.value.includes(",")) {
      return `${count.toLocaleString()}+`;
    }
    return `${count}+`;
  };

  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="font-accent text-primary text-lg mb-2">
              A former pharma guy… who found a cure for boring events.
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Who is <span className="text-primary">Emcee Manoj</span>?
            </h2>
          </div>

          {/* Bio Content */}
          <div className="bg-background/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border mb-12">
            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
              <strong className="text-foreground">Manoj Rameshwar Kohale</strong> — aka{" "}
              <span className="text-primary font-semibold">Emcee Manoj</span> — is a high-energy anchor with{" "}
              <strong className="text-foreground">8+ years of experience</strong>, over{" "}
              <strong className="text-foreground">1000+ live shows</strong>, and stages that have seen{" "}
              <strong className="text-foreground">40,000 people cheering</strong> under his mic.
            </p>

            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-8">
              He hosts <span className="text-primary">corporate events</span>,{" "}
              <span className="text-primary">weddings</span>,{" "}
              <span className="text-primary">concerts</span> &{" "}
              <span className="text-primary">sports</span> with a style that is professional + playful — a rare mix that audiences love.
            </p>

            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <span className="flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-primary" />
                Shows across India + internationally
              </span>
              <span className="flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-primary" />
                14k+ Social Community
              </span>
              <span className="flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4 text-primary" />
                Thailand, Vietnam & more
              </span>
            </div>
          </div>

          {/* USP Line */}
          <div className="text-center mb-16">
            <p className="font-accent text-2xl md:text-3xl text-foreground italic">
              "An anchor who doesn't wait for applause —{" "}
              <span className="text-primary font-semibold">he creates it.</span>"
            </p>
          </div>

          {/* Stats Grid with Counting Animation */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 text-center border border-border card-hover"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
                  {formatValue(index)}
                </p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
