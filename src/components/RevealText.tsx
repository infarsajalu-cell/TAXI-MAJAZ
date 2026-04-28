"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  splitBy?: "letter" | "word" | "line";
}

export default function RevealText({
  children,
  className = "",
  delay = 0,
  as: Component = "h2",
  splitBy = "word",
}: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const items =
    splitBy === "letter"
      ? children.split("")
      : splitBy === "word"
      ? children.split(" ")
      : [children];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: splitBy === "letter" ? 0.02 : 0.08,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.8, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={`overflow-hidden ${className}`}
      aria-label={children}
    >
      <Component className={className}>
        {items.map((item, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="inline-block"
            style={{
              marginRight: splitBy === "letter" ? 0 : "0.3em",
            }}
            aria-hidden="true"
          >
            {item === " " ? "\u00A0" : item}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
}
