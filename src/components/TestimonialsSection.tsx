import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The way he handled the audience was beyond professional.",
    author: "HR Lead",
    event: "Corporate Annual Day",
    rating: 5,
  },
  {
    quote: "Energy + emotions = unforgettable sangeet!",
    author: "Bride's Brother",
    event: "Wedding Sangeet",
    rating: 5,
  },
  {
    quote: "Our team was hooked the entire time!",
    author: "Event Head",
    event: "Corporate Offsite",
    rating: 5,
  },
  {
    quote: "He kept every generation smiling — kids to grandparents.",
    author: "Groom's Sister",
    event: "Wedding Reception",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm uppercase tracking-wider mb-2">
            Social Proof
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            What People Say After the Event Ends 🎤
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Corporate leaders to dancing uncles — they all agree on one thing:{" "}
            <span className="text-primary font-semibold">Emcee Manoj = The Vibe Setter.</span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-3xl p-8 border border-border relative card-hover"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-accent text-xl text-foreground italic mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
