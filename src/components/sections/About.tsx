"use client";

import { motion } from "framer-motion";
import { MapPin, Award, Heart } from "lucide-react";
import Image from "next/image";
import RevealText from "@/components/RevealText";

export default function About() {
  return (
    <section id="about" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4"
            >
              About Us
            </motion.span>

            <RevealText
              as="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-charcoal mb-6"
            >
              Your Trusted Travel Partner
            </RevealText>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 text-charcoal/70 font-inter leading-relaxed"
            >
              <p>
                <strong className="text-charcoal">Majaz Tours & Travels</strong> is Wayanad&apos;s
                most trusted <strong className="text-charcoal">taxi service</strong>, proudly based in{" "}
                <strong className="text-charcoal">Sulthan Bathery</strong> and serving travelers
                since <strong className="text-charcoal">2000</strong>. With over 26 years of
                experience, we are the go-to choice for <strong className="text-charcoal">cab booking
                in Wayanad</strong> and surrounding areas including <strong className="text-charcoal">Sulthan Bathery, Kalpetta, and Mananthavady.</strong>
              </p>
              <p>
                Led by <strong className="text-charcoal">Muhammed Ashraf</strong>, our service covers
                everything from <strong className="text-charcoal">Airports transfers</strong> and{" "}
                <strong className="text-charcoal">Wayanad sightseeing</strong> tours to{" "}
                <strong className="text-charcoal">outstation trips</strong> to Mysore, Ooty, Bangalore,
                and Coorg. Whether you need a quick <strong className="text-charcoal">Sulthan Bathery
                taxi</strong> or a multi-day Kerala tour package, we ensure every journey is
                safe, comfortable, and memorable.
              </p>
              <p>
                Our fleet includes well-maintained <strong className="text-charcoal">AC vehicles</strong> —{" "}
               <strong className="text-charcoal"> Toyota Etios, Suzuki Ertiga, Innova Crysta, and Force Traveller (17 Seater)</strong> —
                driven by professional, licensed drivers who know every route across Wayanad.
                We offer <strong className="text-charcoal">24-hour taxi service</strong> with
                transparent pricing and no hidden charges. Book your{" "}
                <strong className="text-charcoal">Wayanad cab</strong> today and experience
                the warmth of Kerala hospitality on the road.
              </p>
            </motion.div>

            {/* Address Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex items-start gap-3 p-5 rounded-xl bg-cream border border-cream-dark"
            >
              <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-charcoal text-sm">Office Address</p>
                <p className="text-sm text-charcoal/60 mt-1">
                  Naikatty PO, Sulthan Bathery,
                  <br />
                  Wayanad, Kerala - 673592
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              {/* About Section Image */}
              <Image
                src="/images/about.png"
                alt="Wayanad Landscape"
                fill
                className="object-cover"
              />
              
              {/* Overlay for cinematic feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gold/5 mix-blend-overlay" />

              {/* Center content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/90 p-6 glass m-4 rounded-2xl border border-white/20">
                  <Heart className="w-8 h-8 text-gold mx-auto mb-3 animate-pulse" />
                  <p className="font-playfair text-2xl font-bold mb-1">God&apos;s Own</p>
                  <p className="font-playfair text-lg">Country</p>
                  <div className="w-12 h-0.5 bg-gold/40 mx-auto mt-3" />
                  <p className="text-sm text-white/60 mt-3 font-inter">Wayanad, Kerala</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 md:left-6 glass rounded-xl p-4 shadow-soft-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Trusted Service</p>
                  <p className="text-xs text-charcoal/50">Since 2000</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
