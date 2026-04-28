"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Fleet", href: "#fleet" },
  { name: "Destinations", href: "#destinations" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-soft py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2 group"
            aria-label="Majaz Tours & Travels - Home"
          >
            <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold group-hover:shadow-gold-lg transition-shadow duration-300 relative overflow-hidden">
              <Image
                src="/images/logo1.png"
                alt="Majaz Logo"
                fill
                className="object-contain p-1.5 rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-lg leading-tight text-charcoal">
                Majaz
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/60 font-inter">
                Tours & Travels
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="gold-underline text-sm font-medium text-charcoal/80 hover:text-charcoal transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <MagneticButton
              as="a"
              href="tel:+919744132005"
              ariaLabel="Call Majaz Tours"
              className="inline-flex items-center gap-2 bg-gold-gradient text-white px-6 py-2.5 rounded-full
                font-medium text-sm shadow-gold hover:shadow-gold-lg transition-all duration-300
                hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>9744132005</span>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-charcoal" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-menu-overlay"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-ivory z-50 shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-8">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="text-2xl font-playfair font-semibold text-charcoal hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-auto pb-12">
                  <div className="border-t border-cream-dark pt-8">
                    <a
                      href="tel:+919744132005"
                      className="inline-flex items-center gap-2 bg-gold-gradient text-white px-6 py-3 rounded-full
                        font-medium shadow-gold w-full justify-center"
                      aria-label="Call Majaz Tours"
                    >
                      <Phone className="w-4 h-4" />
                      <span>9744132005</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
