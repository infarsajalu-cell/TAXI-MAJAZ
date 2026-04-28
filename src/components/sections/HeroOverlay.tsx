"use client";


import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroOverlay() {
  const { scrollY } = useScroll();
  
  // As user scrolls down, the car moves UP faster than the scroll (parallax)
  // At scroll 0, y is 0. At scroll 500, y is -200.
  const y = useTransform(scrollY, [0, 800], [0, -300]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 300, 600], [1, 1, 0]);

  return (
    <div className="relative z-20 -mt-32 md:-mt-48 lg:-mt-64 pointer-events-none select-none">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        <motion.div
          style={{ y, scale, opacity }}
          className="relative w-[300px] md:w-[500px] lg:w-[700px] aspect-[16/9]"
        >
          {/* Reflective Shadow */}
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[10%]blur-2xl rounded-[100%]" />
          
          <Image
            src="/images/logo2.png"
            alt="Premium SUV"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
          
          {/* Subtle Shine/Glow */}
          {/* <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-white/20 mix-blend-overlay opacity-50" /> */}
        </motion.div>
      </div>
    </div>
  );
}
