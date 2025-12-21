import { Instagram, Youtube, Linkedin, Mic } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/emcee_manoj/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@emceemanoj/", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/manojkohale96/", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-4">
            <img
              src="/logo.png"
              alt="Emcee Manoj"
              className="h-16 w-auto"
            />
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

          {/* Copyright */}
          <p className="text-sm text-muted-foreground mb-2">
            © {new Date().getFullYear()} Emcee Manoj. All Rights Reserved.
          </p>

          {/* Built by */}
          <p className="text-xs text-muted-foreground/70">
            Built with 💗 by{" "}
            <a
              href="https://pluginpop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              pluginpop.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
