"use client";

import { motion } from "framer-motion";
import {
  Car,
  UserCheck,
  MapPin,
  Wallet,
  Clock,
  Shield,
} from "lucide-react";
import Image from "next/image";
import RevealText from "@/components/RevealText";

const features = [
  {
    icon: Car,
    title: "Well-maintained AC Vehicles",
    description:
      "Our fleet is regularly serviced and maintained to ensure a smooth, comfortable ride every time.",
  },
  {
    icon: UserCheck,
    title: "Professional, Licensed Drivers",
    description:
      "Experienced, courteous drivers who know every route and prioritize your safety and comfort.",
  },
  {
    icon: MapPin,
    title: "Local Wayanad Expertise",
    description:
      "Born and raised in Wayanad — we know the hidden gems, best routes, and perfect timing for every destination.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description:
      "No hidden charges, no surge pricing. What we quote is what you pay. Honest and upfront always.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Need a ride at dawn or midnight? We're always just a call away, round the clock.",
  },
  {
    icon: Shield,
    title: "Safe & Comfortable Journeys",
    description:
      "Your safety is our top priority. GPS-tracked vehicles, sanitized interiors, and insured rides.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/why-choose-bg.png"
          alt="Luxury Car Interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ivory/95 lg:bg-ivory/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Why Us
          </motion.span>
          <RevealText
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-charcoal"
          >
            Why Choose Majaz Tours
          </RevealText>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-charcoal/60 max-w-xl mx-auto font-inter"
          >
            We go the extra mile to make your journey memorable
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/70 border border-white/80
                hover:bg-white hover:shadow-soft-lg transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5
                group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>

              <h3 className="text-lg font-playfair font-bold text-charcoal mb-3">
                {feature.title}
              </h3>

              <p className="text-sm text-charcoal/60 font-inter leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] bg-gold/5 
                  group-hover:bg-gold/10 transition-colors duration-300"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
