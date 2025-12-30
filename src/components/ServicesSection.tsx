import { Briefcase, Heart, Music, Mic2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Briefcase,
    title: "Corporate Hosting",
    subtitle: "Awards Nights | Launches | Offsites | Annual Days",
    description: "Engagement that even CEOs can't resist.",
    tags: ["Corporate Anchor Pune", "Corporate Emcee Mumbai", "Corporate Anchor India"],
    link: "/services/corporate",
  },
  {
    icon: Heart,
    title: "Wedding & Sangeet Hosting",
    subtitle: "Receptions | Sangeets | Haldi | Cocktail Nights",
    description: "He brings the love, the laughs, and the legendary dance-offs, and he makes sure it all flows.",
    tags: ["Wedding Anchor Nagpur", "Wedding Anchor Pune", "Wedding Anchor India"],
    link: "/services/wedding",
  },
  {
    icon: Music,
    title: "Concerts & Entertainment Shows",
    subtitle: "Fan zones | Festivals | Celebrity nights",
    description: "Cheers louder. Flash brighter. Vibe higher.",
    tags: ["Concert Host India", "Entertainment Emcee"],
    link: "/services/concerts",
  },
  {
    icon: Mic2,
    title: "Public Speaking & Coaching",
    subtitle: "Workshops | Online & Offline",
    description: "Training future anchors through @talktermanoj & @speakoskills",
    tags: ["Public Speaking Trainer", "Communication Coach Maharashtra"],
    link: "/services/public-speaking",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-spotlight opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Services
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From stadiums to weddings, professional hosting for every occasion
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-8 border border-border card-hover relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-primary mb-3">
                  {service.subtitle}
                </p>
                <p className="font-body text-foreground/70 mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-accent/50 text-accent-foreground px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Explore Button */}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  See More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
