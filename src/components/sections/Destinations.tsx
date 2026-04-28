"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import RevealText from "@/components/RevealText";
import MagneticButton from "@/components/MagneticButton";

const destinations = [
  {
    name: "Chembra Peak",
    distance: "15 km",
    image: "/images/destinations/chembra.png",
    description: "Heart-shaped lake atop Wayanad's highest peak",
  },
  {
    name: "Banasura Sagar Dam",
    distance: "20 km",
    image: "/images/destinations/banasura.png",
    description: "India's largest earth dam surrounded by lush hills",
  },
  {
    name: "Edakkal Caves",
    distance: "12 km",
    image: "/images/destinations/edakkal.png",
    description: "Ancient cave with prehistoric stone-age carvings",
  },
  {
    name: "Wildlife Sanctuary",
    distance: "18 km",
    image: "/images/destinations/wildlife.png",
    description: "Home to elephants, tigers, and rare wildlife",
  },
  {
    name: "Meenmutty Falls",
    distance: "25 km",
    image: "/images/destinations/meenmutty.png",
    description: "Magnificent three-tiered waterfall in dense forest",
  },
  {
    name: "Pookode Lake",
    distance: "10 km",
    image: "/images/destinations/pookode.png",
    description: "Serene freshwater lake surrounded by evergreen forest",
  },
  {
    name: "Calicut",
    distance: "95 km",
    image: "/images/destinations/calicut.png",
    description: "Historic port city with beaches and culture",
  },
  {
    name: "Mysore",
    distance: "140 km",
    image: "/images/destinations/mysore.png",
    description: "City of palaces and heritage splendor",
  },
  {
    name: "Ooty",
    distance: "120 km",
    image: "/images/destinations/ooty.png",
    description: "Queen of the Nilgiris hill station",
  },
  {
    name: "Bangalore",
    distance: "280 km",
    image: "/images/destinations/bangalore.png",
    description: "India's Silicon Valley garden city",
  },
  {
    name: "Cochin Airport",
    distance: "260 km",
    image: "/images/destinations/cochin.png",
    description: "Airport transfers with comfort & punctuality",
  },
  {
    name: "Kozhikode",
    distance: "100 km",
    image: "/images/destinations/kozhikode.png",
    description: "City of spices with culinary heritage",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Destinations
          </motion.span>
          <RevealText
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-charcoal"
          >
            Popular Destinations from Wayanad
          </RevealText>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-charcoal/60 max-w-xl mx-auto font-inter"
          >
            From local gems to outstation journeys — we take you everywhere
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group ${
                index === 0 || index === 5
                  ? "sm:col-span-2 lg:col-span-2 xl:col-span-2"
                  : ""
              }`}
            >
              <div
                className={`relative rounded-2xl overflow-hidden img-zoom cursor-pointer
                  ${index === 0 || index === 5 ? "h-64" : "h-56"}`}
              >
                {/* Destination Image */}
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {dest.distance}
                    </span>
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-white mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-white/70 text-xs font-inter line-clamp-1">
                    {dest.description}
                  </p>
                </div>

                {/* Hover CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300">
                  <MagneticButton
                    as="a"
                    href={`https://wa.me/919744132005?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20to%20${encodeURIComponent(dest.name)}.`}
                    target="_blank"
                    ariaLabel={`Book trip to ${dest.name}`}
                    className="inline-flex items-center gap-2 bg-gold text-white px-5 py-2.5 rounded-full 
                      text-sm font-semibold shadow-gold-lg hover:bg-gold-light transition-colors duration-300"
                    strength={0.2}
                  >
                    Book Trip
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
