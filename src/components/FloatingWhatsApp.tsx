"use client";

import { BsWhatsapp } from "react-icons/bs";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919744132005?text=Hi%20Majaz%20Tours%2C%20I%20would%20like%20to%20enquire%20about%20a%20trip."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center
        shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 whatsapp-pulse group"
    >
      <BsWhatsapp className="text-white text-2xl group-hover:rotate-12 transition-transform duration-300" />
    </a>
  );
}
