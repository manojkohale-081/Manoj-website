import { Contact2 } from "@/components/ui/contact-2";

const ContactSection = () => {
  return (
    <Contact2
      title="Let's Make Your Event Unforgettable"
      description="From corporate events to dream weddings, I bring energy, professionalism, and unforgettable moments to every occasion. Ready to make your event extraordinary?"
      phone="+91 7387655461 / +91 7387179259"
      email="Emceemanoj.india@gmail.com"
      web={{ label: "WhatsApp Booking", url: "https://wa.me/917387655461?text=Hi%20Emcee%20Manoj!%20I%20would%20like%20to%20inquire%20about%20booking%20you%20for%20my%20event." }}
    />
  );
};

export default ContactSection;
