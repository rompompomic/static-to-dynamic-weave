import { Phone } from "lucide-react";

const MobileCallButton = () => {
  return (
    <a
      href="tel:+37120000000"
      className="md:hidden fixed bottom-6 right-6 z-50 bg-gradient-hero text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-all animate-fade-in"
      aria-label="Zvanīt"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default MobileCallButton;
