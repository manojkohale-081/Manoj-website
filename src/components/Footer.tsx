import { Instagram, Youtube, Linkedin, Mic } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <Mic className="w-8 h-8 text-primary" />
            <span className="font-heading text-2xl font-extrabold">
              <span className="text-primary">Emcee</span>{" "}
              <span className="text-foreground">Manoj</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="font-accent text-lg text-muted-foreground mb-6">
            The Mic That Makes Every Moment Epic
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright & Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-4">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Emcee Manoj. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
