"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import RevealText from "@/components/RevealText";

const reviews = [
  { name: "Suresh Menon", role: "Family Trip", text: "Ashraf and Jafar were wonderful! They took our family from Sulthan Bathery to Mysore in a very clean Innova Crysta. Highly recommend Majaz Tours.", rating: 5 },
  { name: "Vinod Kumar", role: "Corporate Travel", text: "Punctual airport transfer to Wayanad. The Etios was well-maintained and Jafar was very professional. Best cab service in Bathery.", rating: 5 },
  { name: "Hans Zimmer", role: "Solo Traveler — Germany", text: "Exploring Chembra Peak and Edakkal Caves was easy with Majaz. Jafar is more like a local guide than just a driver. Very honest pricing.", rating: 5 },
  { name: "The Miller Family", role: "Family Trip — UK", text: "Booked the 17-seater Force Traveller for our large group. Perfect for Wayanad's winding roads. Majaz Tours made our trip memorable.", rating: 5 },
  { name: "Meera Nair", role: "Sightseeing Tour", text: "Majaz planned our Banasura Dam and Pookode Lake visit perfectly. No hidden charges. The Ertiga was very comfortable for my family.", rating: 5 },
  { name: "John Stephenson", role: "Airport Transfer", text: "Reliable airport service to Calicut. Ashraf was waiting at the airport on time. The best taxi booking experience in Sulthan Bathery.", rating: 5 },
  { name: "Shaji Varghese", role: "Leisure Trip", text: "Wonderful 4-day tour of Wayanad with Majaz. The driver knew all the best local food spots in Bathery. Safe and professional service.", rating: 5 },
  { name: "Abhijit Verma", role: "Business Trip", text: "The Innova Crysta was premium and clean. Driver was well-behaved and knew all the shortcuts to avoid Wayanad traffic. Great job Majaz.", rating: 5 },
  { name: "Alice & Bob", role: "Honeymoon Trip — USA", text: "Perfect honeymoon trip! Majaz arranged a private Etios for our sightseeing. Very comfortable and respectful service throughout.", rating: 5 },
  { name: "The Reddy Group", role: "Group Tour", text: "Our group of 15 loved the Force Traveller. Plenty of space for luggage. Majaz is the best for group cab booking in Wayanad.", rating: 5 },
  { name: "Lars Erikson", role: "International Student", text: "Felt very safe traveling alone from Naikatty. Ashraf is very trustworthy. Highly recommend Majaz for any solo woman traveler.", rating: 5 },
  { name: "Pradeep Pillai", role: "Weekend Gateway", text: "Quick response on WhatsApp! Booked a taxi from Bathery to Ooty last minute and Majaz handled it perfectly. Excellent service.", rating: 5 },
  { name: "The Arun Family", role: "Family Vacation", text: "Kids enjoyed the Wildlife Sanctuary trip. Jafar was very patient and knowledgeable about the area. Thank you Majaz Tours!", rating: 5 },
  { name: "Zoya Khan", role: "Adventure Seeker", text: "Reliable SUVs for exploring the hills. Majaz's Ertiga handled the terrain well. Professional and punctual drivers in Wayanad.", rating: 5 },
  { name: "Thomas Berg", role: "Travel Blogger — Norway", text: "If you want authentic Wayanad insights, book with Majaz. Ashraf has 26+ years of experience and it shows in his service.", rating: 5 },
  { name: "Nandini Das", role: "Solo Woman Traveler", text: "Felt respected and safe. The driver helped with my heavy bags and gave great tips for local shopping in Sulthan Bathery.", rating: 5 },
  { name: "Marcus Schmidt", role: "Business Executive — Germany", text: "Top-tier service. Smooth transfer from Wayanad to Bangalore airport. Punctuality is their hallmark. Well done Majaz.", rating: 5 },
  { name: "Isabella Rossi", role: "Tourist — Italy", text: "Beautiful Wayanad! Our driver from Majaz made the trip so special. The car was spotless and the driving was very safe.", rating: 5 },
  { name: "The Iyer Family", role: "Family Reunion", text: "Booked two Innovas for our large group. Majaz coordinated both perfectly. Best way to travel together in Kerala.", rating: 5 },
  { name: "Chloe Williams", role: "Nature Photographer — UK", text: "Jafar knew the best viewpoints for sunset. Very patient with my photography stops. Best taxi service for explorers.", rating: 5 },
  { name: "Siddharth Malhotra", role: "Corporate Outing", text: "Excellent team coordination for our Wayanad retreat. The Force Travellers were clean and comfortable. Professional staff at Majaz.", rating: 5 },
  { name: "Elena Petrova", role: "Solo Traveler — Russia", text: "Ashraf is a gentleman. He showed me the best hidden waterfalls in Wayanad. Very safe and reliable cab service.", rating: 5 },
  { name: "Kevin George", role: "Weekend Trip", text: "Seamless booking. The Ertiga was perfect for our trip to Coorg. Majaz Tours is definitely the most trusted in Bathery.", rating: 5 },
  { name: "Maya Krishnan", role: "Family Trip", text: "Jafar treated us like family. He made sure my parents were comfortable. The Etios was well-maintained. Thank you Majaz!", rating: 5 },
  { name: "Daniel Wright", role: "Airport Transfer — Canada", text: "Smooth ride from Wayanad to the airport. The driver was professional and arrived 10 minutes early. Highly recommend Majaz.", rating: 5 },
  { name: "Sneha Reddy", role: "Sightseeing", text: "Edakkal Caves and Banasura Dam visit was well-timed. Majaz knows the routes perfectly. No rushing, just great service.", rating: 5 },
  { name: "Lucas Garcia", role: "Traveler — Spain", text: "Amazing hospitality from Ashraf. Wayanad's beauty is best seen with Majaz Tours. Professional and very friendly service.", rating: 5 },
  { name: "Anish Kumar", role: "Business Visit", text: "Quick response and punctual. Best choice for any corporate travel needs in Sulthan Bathery and Wayanad area.", rating: 5 },
  { name: "Grace O'Connor", role: "Solo Traveler — Ireland", text: "Felt very safe. The driver was respectful and gave great local tips for my stay in Bathery. Thank you Majaz!", rating: 5 },
  { name: "Sameer Ahmed", role: "Group Pilgrimage", text: "Respectful drivers. They accommodated all our temple stops in Wayanad with patience. Very well-maintained vehicles.", rating: 5 },
  { name: "The Gupta Family", role: "Family Vacation", text: "Best way to see Wayanad. The kids had a great time in the Ertiga. Comfortable AC and very clean car. Good job Majaz.", rating: 5 },
  { name: "Marie Dubois", role: "Tourist — France", text: "Excellente expérience avec Majaz! Le chauffeur était très professionnel et l'Innova était parfaite pour les collines.", rating: 5 },
  { name: "Muhammed Ashique", role: "Solo Traveler", text: "Amazing waterfalls trip! Jafar knew the best hidden spots for photos. Majaz Tours is the best for explorers.", rating: 5 },
  { name: "Rahmanul Faris", role: "Adventure Trip", text: "Booked a cab for the wildlife safari. Driver was skilled and very familiar with the forest routes. Great experience with Majaz.", rating: 5 },
  { name: "Adharsh", role: "Sightseeing", text: "Edakkal Caves and Banasura Dam visit was well-timed. Majaz knows the routes perfectly. No rushing, just great service.", rating: 5 },
  { name: "Athul", role: "Weekend Trip", text: "Seamless booking. The Ertiga was perfect for our trip to Coorg. Majaz Tours is definitely the most trusted in Bathery.", rating: 5 },
  { name: "Shihabudheen", role: "Group Pilgrimage", text: "Respectful drivers. They accommodated all our temple stops in Wayanad with patience. Very well-maintained vehicles.", rating: 5 },
  { name: "Shamsudhueen", role: "Family Outing", text: "The Innova Crysta was so comfortable for my parents. Majaz's attention to detail is impressive. Will book again.", rating: 5 },
  { name: "Prakash Iyer", role: "Business Trip", text: "Smooth transfer to Bangalore. The driver was experienced and maintained safety throughout. Best taxi service in Bathery.", rating: 5 },
  { name: "Meera Nair", role: "Family Outing", text: "The Innova Crysta was so comfortable for my parents. Majaz's attention to detail is impressive. Will book again.", rating: 5 },
  { name: "Bijoy Thomas", role: "Regular Customer", text: "Been using Majaz since 2010. Ashraf and his team are the most reliable in Wayanad. Quality service every single time.", rating: 5 },
  { name: "Fathima Zahra", role: "Sightseeing", text: "Amazing waterfalls trip! Jafar knew the best hidden spots for photos. Majaz Tours is the best for explorers.", rating: 5 },
  { name: "Hiroshi Tanaka", role: "Tourist — Japan", text: "Very polite driver. The car was clean and professional. Arigato Majaz Tours for the wonderful Wayanad trip!", rating: 5 },
  { name: "Bindu Madhavan", role: "Solo Traveler", text: "Reliable and safe. Highly recommend for any woman traveling alone to Wayanad. Majaz drivers are very respectful.", rating: 5 },
  { name: "George Varghese", role: "Airport Pickup", text: "Flight delayed but Majaz's driver waited for me with a name board. Excellent service and communication.", rating: 5 },
  { name: "Sruthi Lakshmi", role: "Honeymoon", text: "Private and comfortable Etios. Majaz made our Wayanad honeymoon special. Thank you for the wonderful memories.", rating: 5 },
  { name: "Shaji Kumaran", role: "Local Commute", text: "Prompt arrival at my hotel in Bathery. Majaz is the most efficient cab service I've used in Wayanad. Top class.", rating: 5 },
  { name: "Linda Evans", role: "Family Trip — Australia", text: "Great experience exploring the tea plantations with Majaz. Driver was very informative and the Innova was comfy.", rating: 5 },
  { name: "Aditya Jain", role: "Business Meeting", text: "On time and professional. Majaz handled my tight schedule across Wayanad perfectly. Reliable and recommended.", rating: 5 },
  { name: "Sunita Devi", role: "Pilgrimage", text: "Kind driver who helped with my luggage. Majaz made my pilgrimage to Wayanad very smooth and comfortable.", rating: 5 },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  const getVisibleReviews = () => {
    const nextIndex = (currentIndex + 1) % reviews.length;
    return [reviews[currentIndex], reviews[nextIndex]];
  };

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

        {/* Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto min-h-[450px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              className="absolute w-full grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {getVisibleReviews().map((review, idx) => (
                <div key={`${review.name}-${idx}`} className={`relative p-8 md:p-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-soft-2xl group h-full flex flex-col ${idx === 1 ? "hidden md:flex" : "flex"}`}>
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-white shadow-gold-lg
                    group-hover:scale-110 transition-transform duration-500">
                    <Quote className="w-5 h-5" />
                  </div>

                  <div className="flex flex-col h-full">
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-lg text-charcoal/80 font-inter italic leading-relaxed mb-8 flex-grow">
                      &quot;{review.text}&quot;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-lg font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-playfair text-xl font-bold text-charcoal">
                          {review.name}
                        </h4>
                        <p className="text-[10px] text-gold font-semibold uppercase tracking-widest">
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-20">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-20">
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Indicator Bar */}
        <div className="mt-20 flex justify-center items-center gap-2 max-w-sm mx-auto overflow-hidden px-4">
          <div className="w-full bg-gold/10 h-1 rounded-full relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gold rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentIndex + 1) / reviews.length) * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          <span className="text-[10px] font-semibold text-gold whitespace-nowrap">
            {currentIndex + 1} / {reviews.length}
          </span>
        </div>
      </div>
    </section>
  );
}
