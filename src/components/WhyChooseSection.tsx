import { Check, Zap, Users, Smile, FileText, Shield, Languages } from "lucide-react";

const reasons = [
  { icon: Zap, text: "Electrifying stage presence" },
  { icon: Users, text: "Instant audience connect" },
  { icon: Smile, text: "Zero dull seconds" },
  { icon: FileText, text: "Custom scripts + humor" },
  { icon: Shield, text: "Crowd control like a pro" },
  { icon: Languages, text: "Multi-lingual command" },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="font-body text-primary text-sm uppercase tracking-wider mb-2">
              The Difference
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Why <span className="text-primary">Emcee Manoj</span>?
            </h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-background rounded-2xl p-5 border border-border group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-heading font-semibold text-foreground">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>

          {/* Punchline */}
          <div className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <p className="font-accent text-2xl md:text-3xl text-foreground">
              Good anchors host events.
            </p>
            <p className="font-heading text-3xl md:text-4xl font-extrabold text-primary mt-2">
              He elevates them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
