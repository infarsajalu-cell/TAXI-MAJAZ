"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import RevealText from "@/components/RevealText";

const faqs = [
  {
    question: "How do I book a taxi in Wayanad?",
    answer:
      "Booking a Wayanad taxi with Majaz Tours is simple. You can call us directly at 9744132005, send a WhatsApp message to 9744132005, or fill out the enquiry form on our website. We respond within minutes and confirm your cab booking instantly. We serve all areas across Wayanad including Sulthan Bathery, Kalpetta, Mananthavady, and Naiketty.",
  },
  {
    question: "What types of cabs are available in Sulthan Bathery?",
    answer:
      "We offer three well-maintained AC vehicles for cab booking in Sulthan Bathery: Toyota Etios (4 passengers, ideal for couples and small groups), Suzuki Ertiga (7 passengers, perfect for families), and Toyota Innova Crysta (7 passengers, our premium SUV with captain seats). All vehicles are regularly serviced, fully insured, and driven by professional licensed drivers.",
  },
  {
    question: "Do you provide airport taxi services to all airports?",
    answer:
      "Yes! Airport transfers to all major airports — including Calicut, Cochin, Bangalore, Kannur, and Mysore — is one of our specialty services. We offer reliable, on-time airport taxi service available 24/7. Whether it's an early morning flight or a late-night arrival, our drivers will be there with name boards to welcome you.",
  },
  {
    question: "What is the taxi fare for airport transfers from Wayanad?",
    answer:
      "Our taxi fares for airport transfers to Calicut, Cochin, or Bangalore are transparent and competitive — no hidden charges or surge pricing. The fare depends on the destination airport and vehicle type (Etios, Ertiga, Innova Crysta, or Traveller). Call us at 9744132005 for an instant, accurate quote for any airport in South India.",
  },
  {
    question: "Is 24-hour taxi service available in Wayanad?",
    answer:
      "Absolutely. Majaz Tours & Travels operates a 24-hour taxi service across Wayanad and Sulthan Bathery. Whether you need an early morning airport drop, a late-night pickup, or an emergency ride, we are just a phone call away. Our drivers are available round the clock, 365 days a year, with no extra night charges for standard routes.",
  },
  {
    question: "Do you offer Wayanad sightseeing tour packages?",
    answer:
      "Yes, we offer comprehensive Wayanad sightseeing taxi packages covering all major attractions — Chembra Peak, Edakkal Caves, Banasura Sagar Dam, Pookode Lake, Meenmutty Falls, Wayanad Wildlife Sanctuary, and more. We also provide outstation cab service to popular destinations like Mysore, Ooty, Bangalore, Coorg, and Calicut. Our drivers double as knowledgeable local guides who know the best routes and hidden gems.",
  },
  {
    question: "Why should I choose Majaz Tours over other taxi services in Wayanad?",
    answer:
      "With 26+ years of experience since 2000, Majaz Tours & Travels is the most trusted taxi service in Wayanad. We offer transparent pricing with no hidden charges, a well-maintained AC fleet (Etios, Ertiga, Innova Crysta), professional licensed drivers, 24/7 availability, and instant WhatsApp booking. Our 1000+ happy customers and international guests trust us for safe, comfortable, and reliable travel across Kerala.",
  },
];

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-cream-gradient">
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Got Questions?
          </motion.span>
          <RevealText
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-charcoal"
          >
            Frequently Asked Questions
          </RevealText>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-charcoal/60 max-w-xl mx-auto font-inter"
          >
            Everything you need to know about our Wayanad taxi service
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => toggle(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  openIndex === index
                    ? "bg-white shadow-soft-lg border border-gold/20"
                    : "bg-white/50 hover:bg-white/80 border border-transparent"
                }`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      openIndex === index ? "bg-gold/20" : "bg-gold/10"
                    }`}>
                      <HelpCircle className={`w-5 h-5 transition-colors duration-300 ${
                        openIndex === index ? "text-gold" : "text-gold/60"
                      }`} />
                    </div>
                    <h3 className="font-playfair font-bold text-charcoal text-lg pt-1.5">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gold flex-shrink-0 mt-2 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-charcoal/60 font-inter leading-relaxed mt-4 pl-14">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
