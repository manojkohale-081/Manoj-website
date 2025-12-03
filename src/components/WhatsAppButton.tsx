import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917387655461?text=Hi%20Emcee%20Manoj!%20I%20would%20like%20to%20inquire%20about%20booking%20you%20for%20my%20event."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;
