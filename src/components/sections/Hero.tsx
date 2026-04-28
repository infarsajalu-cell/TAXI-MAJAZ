"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";
import RevealText from "@/components/RevealText";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-bg.png"
          alt="Wayanad Misty Hills"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Gradient overlay for readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-ivory" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.15)_0%,transparent_60%)]" /> */}
        
        {/* Misty layers */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-ivory via-ivory/50 to-transparent" />
        <div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-transparent via-white/10 to-transparent animate-float-slow" />
        
        {/* Mountain silhouettes */}
        {/* <svg
          className="absolute bottom-[25%] left-0 w-full h-[30%] text-[#1a3a2a]/40"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,400 L0,250 Q120,150 240,200 Q360,100 480,180 Q600,80 720,150 Q840,60 960,130 Q1080,50 1200,120 Q1320,70 1440,100 L1440,400 Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="absolute bottom-[20%] left-0 w-full h-[25%] text-[#2d4a3e]/50"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,400 L0,300 Q180,200 360,260 Q540,180 720,230 Q900,150 1080,210 Q1260,160 1440,180 L1440,400 Z"
            fill="currentColor"
          />
        </svg> */}

        {/* Stars */}
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute top-[8%] left-[45%] w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[15%] left-[75%] w-1 h-1 bg-white/35 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[5%] left-[60%] w-0.5 h-0.5 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[12%] left-[30%] w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Floating car silhouette */}
      <motion.div
        className="absolute bottom-[28%] w-full pointer-events-none"
        aria-hidden="true"
      >
        <div className="animate-car-move">
          <svg
            width="120"
            height="50"
            viewBox="0 0 120 50"
            fill="none"
            className="opacity-20"
          >
            <path
              d="M20,35 L25,15 Q30,8 45,8 L75,8 Q90,8 95,15 L100,35 Z"
              fill="rgba(201,168,76,0.6)"
            />
            <rect x="10" y="35" width="100" height="8" rx="4" fill="rgba(201,168,76,0.4)" />
            <circle cx="30" cy="43" r="6" fill="rgba(201,168,76,0.5)" />
            <circle cx="90" cy="43" r="6" fill="rgba(201,168,76,0.5)" />
          </svg>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm font-inter">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Trusted Since 2000 — 26+ Years of Excellence
          </span>
        </motion.div>

        <div className="mb-6">
          <RevealText
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight"
            delay={0.3}
          >
            Wayanad&apos;s Most Trusted Taxi Service
          </RevealText>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-white/70 font-inter font-light mb-10 max-w-2xl mx-auto"
        >
          Cab Booking in Sulthan Bathery & Wayanad — Airport Transfers, Sightseeing & Outstation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton
            as="a"
            href="https://wa.me/919744132005?text=Hi%20Majaz%20Tours%2C%20I%20would%20like%20to%20book%20a%20trip."
            target="_blank"
            ariaLabel="Book now on WhatsApp"
            className="inline-flex items-center gap-2 bg-gold-gradient text-white px-8 py-4 rounded-full
              font-semibold text-base shadow-gold-lg hover:shadow-gold transition-all duration-300
              hover:scale-105"
          >
            Book Now
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.642-.82-6.454-2.272l-.45-.367-3.3 1.106 1.106-3.3-.367-.45A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
            </svg>
          </MagneticButton>

          <MagneticButton
            as="a"
            href="#fleet"
            ariaLabel="View our fleet"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full
              font-semibold text-base border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            View Our Fleet
            <ChevronDown className="w-4 h-4" />
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs font-inter uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
