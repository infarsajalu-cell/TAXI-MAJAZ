"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  ChevronRight,
  Plane,
  Compass,
  Phone,
  MessageCircle,
  Mountain,
  TreePine,
  Waves,
  Landmark,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import RevealText from "@/components/RevealText";
import MagneticButton from "@/components/MagneticButton";

const wayanadDays = [
  {
    day: 1,
    title: "Western Wayanad Wonders",
    icon: Mountain,
    spots: [
      "Lakkidi View Point",
      "Pookode Lake",
      "Vythiri Park",
      "Ultra Park",
      "Horny Museum",
      "Jain Tree (Ancient Banyan)",
    ],
  },
  {
    day: 2,
    title: "Heritage & History Trail",
    icon: Landmark,
    spots: [
      "Jain Temple",
      "Edakkal Caves",
      "Heritage Museum",
      "Karapuzha Dam",
      "Phantom Rock",
    ],
  },
  {
    day: 3,
    title: "Adventure & Thrills",
    icon: Waves,
    spots: [
      "Kanthanpara Waterfalls",
      "900 Kandi Glass Bridge",
      "Attamala View Point",
      "Sentinel Rock",
      "Zip Line",
      "Tea Plantation Cycling",
    ],
  },
  {
    day: 4,
    title: "Nature & Serenity",
    icon: TreePine,
    spots: [
      "Banasura Sagar Dam",
      "Banasura Ayurvedic Garden & Spices",
      "Karlad Lake",
      "Tea Museum",
      "Bamboo Climbing",
    ],
  },
];

const packages = [
  {
    id: "wayanad-explorer",
    title: "Wayanad Explorer",
    subtitle: "4 Days / 3 Nights",
    tagline: "The Complete Wayanad Experience",
    description:
      "Discover every hidden gem of Wayanad with our curated 4-day itinerary covering waterfalls, caves, dams, viewpoints, and adventure activities.",
    icon: Compass,
    color: "from-emerald-900 to-emerald-700",
    accent: "#10B981",
    image: "/images/pkg-explorer.png",
    featured: true,
    whatsappMsg:
      "Hi Majaz Tours! I am interested in the 4-Day Wayanad Explorer Package. Please share the details and pricing.",
  },
  {
    id: "airport-transfer",
    title: "Airport Transfer",
    subtitle: "Pickup & Drop",
    tagline: "Hassle-Free Airport Service",
    description:
      "Reliable airport pickup and departure service from Calicut (Kozhikode) International Airport to Wayanad and back. On-time, every time.",
    icon: Plane,
    color: "from-charcoal to-charcoal/80",
    accent: "#C9A84C",
    image: "/images/pkg-airport.png",
    featured: false,
    whatsappMsg:
      "Hi Majaz Tours! I need an airport transfer (Calicut Airport <-> Wayanad). Please share the details and pricing.",
  },
  {
    id: "custom-package",
    title: "Custom Package",
    subtitle: "Your Itinerary, Your Way",
    tagline: "Tailored Just For You",
    description:
      "Have a specific destination in mind? We will create a personalised tour package based on your preferences, budget, and schedule. Just tell us your plan!",
    icon: Phone,
    color: "from-gold-dark to-gold",
    accent: "#C9A84C",
    image: "/images/pkg-custom.png",
    featured: false,
    whatsappMsg:
      "Hi Majaz Tours! I would like to create a custom tour package. Here are my requirements:",
  },
];

export default function Packages() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="packages" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Tour Packages
          </motion.span>
          <RevealText
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-charcoal"
          >
            Curated Wayanad Experiences
          </RevealText>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-charcoal/60 max-w-xl mx-auto font-inter"
          >
            Choose a package or let us build one just for you
          </motion.p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative group rounded-2xl overflow-hidden ${
                pkg.featured ? "lg:row-span-1" : ""
              }`}
            >
              {/* Card Background */}
              <div
                className="h-full flex flex-col min-h-[480px] relative overflow-hidden rounded-2xl"
              >
                {/* Background Image */}
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />

                {/* Content Wrapper */}
                <div className="relative z-10 p-8 h-full flex flex-col">

                {/* Featured Badge */}
                {pkg.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold text-white uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pkg.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                    {pkg.subtitle}
                  </p>
                  <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-white/50 font-inter italic mb-4">
                    {pkg.tagline}
                  </p>
                  <p className="text-sm text-white/70 font-inter leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <MagneticButton
                    as="a"
                    href={`https://wa.me/919744132005?text=${encodeURIComponent(
                      pkg.whatsappMsg
                    )}`}
                    target="_blank"
                    ariaLabel={`Enquire about ${pkg.title}`}
                    className="inline-flex items-center gap-3 w-full justify-center py-3.5 rounded-xl 
                      bg-white/15 backdrop-blur-sm text-white text-sm font-semibold 
                      hover:bg-white/25 transition-all duration-300 group/btn border border-white/10"
                    strength={0.15}
                  >
                    <BsWhatsapp className="w-4 h-4" />
                    Enquire on WhatsApp
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>
          ))}
        </div>

        {/* Detailed Itinerary — Wayanad Explorer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal">
              Wayanad Explorer — Day-by-Day Itinerary
            </h3>
            <p className="text-charcoal/50 font-inter text-sm mt-2">
              Click on each day to explore the full itinerary
            </p>
          </div>

          {/* Day Selector Tabs */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {wayanadDays.map((day, index) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(index)}
                className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeDay === index
                    ? "bg-charcoal text-white shadow-lg scale-105"
                    : "bg-cream text-charcoal/60 hover:bg-cream-dark hover:text-charcoal"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Day {day.day}
                </span>
                {activeDay === index && (
                  <motion.div
                    layoutId="activeDay"
                    className="absolute inset-0 bg-charcoal rounded-xl -z-10"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Day Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gold/10 shadow-soft-lg p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center">
                  {(() => {
                    const IconComp = wayanadDays[activeDay].icon;
                    return <IconComp className="w-7 h-7 text-gold" />;
                  })()}
                </div>
                <div>
                  <p className="text-xs text-gold font-semibold uppercase tracking-[0.2em]">
                    Day {wayanadDays[activeDay].day}
                  </p>
                  <h4 className="text-xl font-playfair font-bold text-charcoal">
                    {wayanadDays[activeDay].title}
                  </h4>
                </div>
              </div>

              {/* Spots Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {wayanadDays[activeDay].spots.map((spot, i) => (
                  <motion.div
                    key={spot}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-cream/50 hover:bg-cream transition-colors duration-300 group/spot"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover/spot:bg-gold/20 transition-colors">
                      <MapPin className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-sm font-medium text-charcoal font-inter">
                      {spot}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom CTA for Wayanad Explorer */}
          <div className="flex justify-center mt-8">
            <MagneticButton
              as="a"
              href={`https://wa.me/919744132005?text=${encodeURIComponent(
                "Hi Majaz Tours! I'm interested in the 4-Day Wayanad Explorer Package. Please share the details and pricing."
              )}`}
              target="_blank"
              ariaLabel="Book Wayanad Explorer package via WhatsApp"
              className="inline-flex items-center gap-3 bg-gold-gradient text-white px-10 py-4 rounded-full 
                font-semibold text-base shadow-gold-lg hover:shadow-gold transition-all duration-300 hover:scale-105"
              strength={0.2}
            >
              <MessageCircle className="w-5 h-5" />
              Book This Package
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
