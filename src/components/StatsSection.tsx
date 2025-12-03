import { useState, useEffect, useRef } from "react";
import { Mic, Users, Calendar, Globe } from "lucide-react";

const stats = [
  { icon: Mic, value: "1000+", label: "Shows Hosted", numericValue: 1000 },
  { icon: Users, value: "14K+", label: "Audience Community", numericValue: 14000 },
  { icon: Calendar, value: "8+", label: "Years on Stage", numericValue: 8 },
  { icon: Globe, value: "Global", label: "Pan India + International", numericValue: null },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const formatValue = (index: number) => {
    const stat = stats[index];
    if (stat.numericValue === null) return stat.value;

    const count = counts[index];
    if (stat.value.includes("K")) {
      return `${(count / 1000).toFixed(count >= stat.numericValue ? 0 : 1)}K+`;
    }
    return `${count}+`;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-spotlight pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-3xl bg-card border border-border card-hover"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-2">
                  {formatValue(index)}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Punchline */}
          <div className="text-center">
            <p className="font-accent text-2xl md:text-3xl text-foreground italic">
              Proof that the mic{" "}
              <span className="text-primary font-semibold">chose him.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
