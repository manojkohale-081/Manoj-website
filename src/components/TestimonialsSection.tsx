import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            What People Say After the Event Ends 🎤
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Corporate leaders to dancing uncles, they all agree on one thing:{" "}
            <span className="text-primary font-semibold">Emcee Manoj = The Vibe Setter.</span>
          </p>
        </div>

        {/* Stagger Testimonials Component */}
        <StaggerTestimonials />

        {/* See More Reviews Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a
              href="https://maps.app.goo.gl/x4ZDWKjsVHekdwpU9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              See More Reviews
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
