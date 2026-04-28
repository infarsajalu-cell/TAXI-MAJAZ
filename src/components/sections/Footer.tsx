"use client";

import { Phone, MapPin, ArrowUp } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Fleet", href: "#fleet" },
  { name: "Destinations", href: "#destinations" },
  { name: "About Us", href: "#about" },
  { name: "Book Trip", href: "#enquiry" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Airport Transfers",
  "Wayanad Tour Packages",
  "Outstation Cabs",
  "Wedding Car Rental",
  "Corporate Travel",
  "Hourly Rentals",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-white/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/logo1.png"
                  alt="Majaz Logo"
                  fill
                  className="object-contain p-1.5 rounded-full"
                />
              </div>
              <div>
                <span className="font-playfair font-bold text-lg text-white">Majaz</span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Tours & Travels</p>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Your premium travel partner in Wayanad, Kerala. Comfortable AC taxis for all your travel needs.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/40">
              <MapPin className="w-4 h-4" />
              <span>Sulthan Bathery, Wayanad</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-gold transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service} className="text-sm text-white/50">{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+919744132005" className="flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors"
                aria-label="Call 9744132005">
                <Phone className="w-4 h-4" />9744132005
              </a>
              <a href="tel:+919495018055" className="flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors"
                aria-label="Call 9495018055">
                <Phone className="w-4 h-4" />9495018055
              </a>
              <a href="https://wa.me/919744132005" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp 9744132005">
                <BsWhatsapp className="w-4 h-4" />9744132005
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © 2025 Majaz Tours & Travels. All Rights Reserved.
          </p>
          <button onClick={scrollToTop} aria-label="Scroll to top"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300 text-white/30">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
