import { Mic, Users, Calendar, Globe } from "lucide-react";

const stats = [
  { icon: Mic, value: "1000+", label: "Shows Hosted" },
  { icon: Users, value: "14K+", label: "Audience Community" },
  { icon: Calendar, value: "8+", label: "Years on Stage" },
  { icon: Globe, value: "Global", label: "Pan India + International" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
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
                  {stat.value}
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
