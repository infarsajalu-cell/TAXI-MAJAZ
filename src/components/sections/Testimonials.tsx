"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import RevealText from "@/components/RevealText";

const reviews = [
  {
    name: "Malaika",
    role: "International Guest — Austria",
    text: "Hello Jafar, thank you for taking us around Sultan Bathery and onto Mysore. You have a very good service and safe driver. We were very happy with your service.",
    rating: 5,
  },
  {
    name: "Anjali Sharma",
    role: "Corporate Travel",
    text: "Punctual, polite, and very reliable. I used Majaz Tours for my business trip from Calicut Airport to Sulthan Bathery. The Etios was well-maintained and the ride was very smooth. Five stars!",
    rating: 5,
  },
  {
    name: "Robert Wilson",
    role: "Solo Traveler",
    text: "Exploring Wayanad was a breeze with Majaz. They helped me plan my itinerary and the driver was more like a local guide. Very honest pricing and excellent service throughout.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/testimonials-bg.png"
          alt="Peaceful Landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ivory/95 lg:bg-ivory/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-transparent to-ivory" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Guest Experiences
          </motion.span>
          <RevealText
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-charcoal"
          >
            What Our Travelers Say
          </RevealText>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-white/50 backdrop-blur-md border border-white/80 
                hover:bg-white hover:shadow-soft-lg transition-all duration-500 group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-white shadow-gold-lg
                group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-5 h-5" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-charcoal/70 font-inter italic leading-relaxed mb-8">
                &quot;{review.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-cream border border-gold/20 flex items-center justify-center text-gold font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-charcoal">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gold font-semibold uppercase tracking-wider">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
