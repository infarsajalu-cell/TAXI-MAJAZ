"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // 1.8 seconds preloader

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-charcoal"
        >
          <div className="relative text-center">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                ease: "easeOut"
              }}
              className="relative w-48 h-48 md:w-64 md:h-64 mb-6"
            >
              <Image
                src="/images/logo1.png"
                alt="Majaz Tours Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Cinematic Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="space-y-2"
            >
              <h1 className="text-white font-playfair text-2xl md:text-3xl tracking-[0.3em] font-light">
                MAJAZ
              </h1>
              <p className="text-gold text-xs md:text-sm tracking-[0.5em] font-inter uppercase">
                Tours & Travels
              </p>
            </motion.div>

            {/* Loading Bar */}
            <motion.div 
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-white/10 overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-full h-full bg-gold"
              />
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.05),transparent_70%)]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
