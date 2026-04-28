"use client";

import { motion } from "framer-motion";
import { Users, Snowflake, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Card3D from "@/components/Card3D";
import RevealText from "@/components/RevealText";
import MagneticButton from "@/components/MagneticButton";

const fleet = [
  {
    name: "Toyota Etios",
    type: "Classic Sedan",
    passengers: 4,
    features: ["AC", "Comfortable Seating", "Luggage Space"],
    description:
      "A perfect blend of reliability and comfort for small groups or city transfers.",
    color: "from-white to-ivory",
    accent: "#1A1A1A", // Charcoal
    image: "/images/etios.png",
  },
  {
    name: "Ertiga Traveller",
    type: "Family MPV",
    passengers: 7,
    features: ["AC", "Spacious Interior", "Family Friendly"],
    description:
      "Ample space and superior comfort for family trips and group tours across Kerala.",
    color: "from-white to-cream",
    accent: "#C9A84C", // Gold
    image: "/images/ertiga.png",
  },
  {
    name: "Innova Crysta",
    type: "Premium SUV",
    passengers: 7,
    features: ["AC", "Premium Interior", "Captain Seats"],
    description:
      "Experience the pinnacle of luxury travel with our flagship premium service.",
    color: "from-cream to-ivory",
    accent: "#C9A84C", // Gold
    image: "/images/innova.png",
  },
  {
    name: "Force Traveller",
    type: "Group Van",
    passengers: 17,
    features: ["AC", "High Roof", "Spacious Interior"],
    description:
      "The ultimate choice for large groups and families. Comfort and space for long journeys.",
    color: "from-white to-ivory",
    accent: "#1A1A1A", // Charcoal
    image: "/images/traveller.png",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="section-padding bg-cream-gradient">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Our Premium Fleet
          </motion.span>
          <RevealText
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-charcoal"
          >
            Travel in Style & Comfort
          </RevealText>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-charcoal/60 max-w-xl mx-auto font-inter"
          >
            Choose from our handpicked fleet of well-maintained, air-conditioned vehicles
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {fleet.map((car, index) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="w-full"
            >
              <Card3D className="h-full">
                <div
                  className={`bg-gradient-to-br ${car.color} rounded-2xl border border-white/60 
                    shadow-soft hover:shadow-soft-lg transition-shadow duration-500 overflow-hidden h-full flex flex-col`}
                >
                  {/* Car Visual */}
                  <div className="relative h-80 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at 50% 80%, ${car.accent}60 0%, transparent 70%)`,
                      }}
                    />
                    <div className="relative w-[110%] h-[110%] transform transition-transform duration-700 group-hover:scale-125">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-contain"
                      />
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-semibold"
                      style={{ color: car.accent }}
                    >
                      {car.type}
                    </div>
                  </div>

                  {/* Car Info */}
                  <div className="p-6 pt-2 flex flex-col flex-grow">
                    <h3 className="text-xl font-playfair font-bold text-charcoal mb-2">
                      {car.name}
                    </h3>
                    <p className="text-sm text-charcoal/60 font-inter mb-4 leading-relaxed flex-grow">
                      {car.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/70 text-xs font-medium text-charcoal/70">
                        <Users className="w-3 h-3" />
                        {car.passengers} Passengers
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/70 text-xs font-medium text-charcoal/70">
                        <Snowflake className="w-3 h-3" />
                        AC
                      </span>
                      {car.type === "Premium SUV" && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold/10 text-xs font-medium text-gold-dark">
                          <Star className="w-3 h-3" />
                          Premium
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <MagneticButton
                      as="a"
                      href={`https://wa.me/919744132005?text=Hi%2C%20I%20want%20to%20enquire%20about%20${encodeURIComponent(car.name)}%20booking.`}
                      target="_blank"
                      ariaLabel={`Enquire about ${car.name}`}
                      className="inline-flex items-center gap-2 w-full justify-center py-3 rounded-xl
                        bg-charcoal text-white text-sm font-semibold hover:bg-charcoal/90 
                        transition-all duration-300 group"
                      strength={0.15}
                    >
                      Enquire Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </MagneticButton>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
