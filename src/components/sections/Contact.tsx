"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, User, MessageCircle } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import RevealText from "@/components/RevealText";

const contactInfo = [
  { icon: Phone, label: "Phone", values: [
    { text: "9744132005", href: "tel:+919744132005" },
    { text: "9495018055", href: "tel:+919495018055" },
  ]},
  { icon: BsWhatsapp, label: "WhatsApp", values: [
    { text: "9744132005", href: "https://wa.me/919744132005" },
  ]},
  { icon: User, label: "Owner", values: [
    { text: "Muhammed Ashraf P B", href: "" },
  ]},
  { icon: MapPin, label: "Address", values: [
    { text: "Naikatty PO, Sulthan Bathery, Wayanad - 673592", href: "" },
  ]},
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Get in Touch
          </motion.span>
          <RevealText as="h2" className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-charcoal">
            Contact Us
          </RevealText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-cream/50 hover:bg-cream transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal/50 mb-1">{item.label}</p>
                  {item.values.map((val) => (
                    val.href ? (
                      <a key={val.text} href={val.href} target={val.href.startsWith("http") ? "_blank" : undefined}
                        rel={val.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block text-charcoal font-semibold hover:text-gold transition-colors duration-300"
                        aria-label={`${item.label}: ${val.text}`}>
                        {val.text}
                      </a>
                    ) : (
                      <p key={val.text} className="text-charcoal font-semibold">{val.text}</p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a href="tel:+919744132005"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-charcoal text-white text-sm font-medium hover:bg-charcoal/90 transition-colors"
                aria-label="Call now">
                <Phone className="w-4 h-4" />Call Now
              </a>
              <a href="https://wa.me/919744132005" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white text-sm font-medium hover:bg-[#20BD5A] transition-colors"
                aria-label="Chat on WhatsApp">
                <MessageCircle className="w-4 h-4" />WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-soft-lg border border-cream-dark h-[400px] lg:h-full min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.1!2d76.2711!3d11.6645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6199a7a8e0001%3A0x0!2sSultan%20Bathery%2C%20Wayanad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Majaz Tours Location - Sulthan Bathery, Wayanad"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
