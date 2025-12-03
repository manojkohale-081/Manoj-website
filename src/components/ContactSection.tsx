import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7387655461 / +91 7387179259",
    href: "tel:+917387655461",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Emceemanoj.india@gmail.com",
    href: "mailto:Emceemanoj.india@gmail.com",
  },
  {
    icon: MapPin,
    label: "Locations",
    value: "Pune | Mumbai | Nagpur | Pan India | Abroad",
    href: null,
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. Emcee Manoj will get back to you soon!",
    });
    setFormData({ name: "", email: "", phone: "", eventType: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm uppercase tracking-wider mb-2">
            Get in Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Let's Make Your Event{" "}
            <span className="text-primary">Unforgettable</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-background rounded-2xl border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Button
              variant="default"
              size="xl"
              className="w-full bg-[#25D366] hover:bg-[#20BD5A]"
              asChild
            >
              <a
                href="https://wa.me/917387655461?text=Hi%20Emcee%20Manoj!%20I%20would%20like%20to%20inquire%20about%20booking%20you%20for%20my%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </a>
            </Button>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-background rounded-3xl p-8 border border-border"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Quick Inquiry
            </h3>
            <div className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <Input
                name="eventType"
                placeholder="Event Type (e.g., Wedding, Corporate)"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="h-12"
              />
              <Textarea
                name="message"
                placeholder="Tell us about your event..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="resize-none"
              />
              <Button type="submit" variant="hero" className="w-full">
                <Send className="w-5 h-5" />
                Send Inquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
