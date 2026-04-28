"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Calendar, Clock } from "lucide-react";
import CounterAnimation from "@/components/CounterAnimation";

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    icon: MapPin,
    value: 125,
    suffix: "+",
    label: "Destinations",
  },
  {
    icon: Calendar,
    value: 26,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Available",
  },
];

export default function StatsBar() {
  return (
    <section className="relative -mt-16 z-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto glass rounded-2xl shadow-soft-lg p-8 md:p-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-1">
                <CounterAnimation end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-charcoal/60 font-inter">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
