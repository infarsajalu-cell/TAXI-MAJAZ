"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Car, Calendar, Users, MapPin, User, Phone, MessageSquare } from "lucide-react";
import Image from "next/image";
import RevealText from "@/components/RevealText";
import MagneticButton from "@/components/MagneticButton";

const carOptions = [
  { value: "", label: "Select Car Type" },
  { value: "Toyota Etios", label: "Toyota Etios — Sedan (4 Pax)" },
  { value: "Ertiga Traveller", label: "Ertiga — MPV (7 Pax)" },
  { value: "Innova Crysta", label: "Innova Crysta — Premium (7 Pax)" },
];

interface FormData {
  name: string;
  phone: string;
  pickup: string;
  drop: string;
  date: string;
  carType: string;
  passengers: string;
  notes: string;
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "", phone: "", pickup: "", drop: "",
    date: "", carType: "", passengers: "", notes: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!formData.name.trim()) errs.name = "Required";
    if (!formData.phone.trim()) errs.phone = "Required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ""))) errs.phone = "Invalid phone";
    if (!formData.pickup.trim()) errs.pickup = "Required";
    if (!formData.drop.trim()) errs.drop = "Required";
    if (!formData.date) errs.date = "Required";
    if (!formData.carType) errs.carType = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const msg = `🚕 *New Trip Enquiry*\n\n👤 ${formData.name}\n📱 ${formData.phone}\n📍 From: ${formData.pickup}\n📍 To: ${formData.drop}\n📅 ${formData.date}\n🚗 ${formData.carType}\n👥 ${formData.passengers || "N/A"}\n📝 ${formData.notes || "None"}`;
    window.open(`https://wa.me/919744132005?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const fields = [
    { name: "name", label: "Full Name", icon: User, type: "text", placeholder: "Your full name", required: true },
    { name: "phone", label: "Phone", icon: Phone, type: "tel", placeholder: "10-digit number", required: true },
    { name: "pickup", label: "Pickup", icon: MapPin, type: "text", placeholder: "Pickup location", required: true },
    { name: "drop", label: "Drop", icon: MapPin, type: "text", placeholder: "Drop location", required: true },
    { name: "date", label: "Travel Date", icon: Calendar, type: "date", placeholder: "", required: true },
    { name: "passengers", label: "Passengers", icon: Users, type: "number", placeholder: "Count", required: false },
  ];

  return (
    <section id="enquiry" className="relative section-padding overflow-hidden">
      {/* Lifestyle Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/enquiry-bg.png"
          alt="Travel Planning"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ivory/95 lg:bg-ivory/90" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Book Your Trip
          </motion.span>
          <RevealText as="h2" className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-charcoal">
            Plan Your Journey
          </RevealText>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="mt-4 text-charcoal/60 max-w-xl mx-auto font-inter">
            Fill in details and we&apos;ll respond instantly on WhatsApp
          </motion.p>
        </div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gold/10 shadow-soft-lg p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fields.map((f) => (
              <div key={f.name}>
                <label className="flex items-center gap-2 text-sm font-medium text-charcoal/70 mb-2">
                  <f.icon className="w-4 h-4 text-gold" />{f.label} {f.required && "*"}
                </label>
                <input type={f.type} name={f.name} value={formData[f.name as keyof FormData]}
                  onChange={handleChange} placeholder={f.placeholder}
                  min={f.type === "number" ? "1" : undefined} max={f.type === "number" ? "7" : undefined}
                  className="form-input-box" aria-label={f.label} />
                {errors[f.name as keyof FormData] && <p className="text-red-500 text-xs mt-1">{errors[f.name as keyof FormData]}</p>}
              </div>
            ))}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-charcoal/70 mb-2">
                <Car className="w-4 h-4 text-gold" />Car Type *
              </label>
              <select name="carType" value={formData.carType} onChange={handleChange} className="form-input-box" aria-label="Car Type">
                {carOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              {errors.carType && <p className="text-red-500 text-xs mt-1">{errors.carType}</p>}
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-charcoal/70 mb-2">
                <MessageSquare className="w-4 h-4 text-gold" />Notes
              </label>
              <textarea name="notes" value={formData.notes} onChange={handleChange}
                placeholder="Special requests?" rows={1} className="form-input-box resize-none" aria-label="Notes" />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <MagneticButton as="button" ariaLabel="Send enquiry via WhatsApp"
              className="inline-flex items-center gap-3 bg-gold-gradient text-white px-10 py-4 rounded-full font-semibold text-base shadow-gold-lg hover:shadow-gold transition-all duration-300 hover:scale-105"
              strength={0.2}>
              <Send className="w-5 h-5" />Send via WhatsApp
            </MagneticButton>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
