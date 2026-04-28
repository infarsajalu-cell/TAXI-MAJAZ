"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import RevealText from "@/components/RevealText";

const reviews = [
  { name: "Malaika", role: "International Guest", text: "Hello Jafar, thank you for taking us around Sultan Bathery and onto Mysore. Safe driver and very good service.", rating: 5 },
  { name: "Anjali Sharma", role: "Corporate Travel", text: "Punctual, polite, and very reliable. Used Majaz Tours for my business trip from the airport. Smooth ride!", rating: 5 },
  { name: "Robert Wilson", role: "Solo Traveler", text: "Exploring Wayanad was a breeze. They helped plan my itinerary and the driver was more like a local guide.", rating: 5 },
  { name: "David Miller", role: "Family Trip — UK", text: "Exceptional service! We booked an Innova Crysta for our family of 6. The vehicle was spotless and driver was patient.", rating: 5 },
  { name: "Priyanka Nair", role: "Sightseeing Tour", text: "The 4-day Wayanad package was perfectly planned. Saw all major spots without feeling rushed. Highly recommend.", rating: 5 },
  { name: "James Anderson", role: "Airport Transfer", text: "Used their airport service multiple times. Always on time, even for early morning flights. Efficient booking.", rating: 5 },
  { name: "Sarah Jenkins", role: "Leisure Trip", text: "Wonderful experience! The driver was very knowledgeable about local spots. Safe ride throughout.", rating: 5 },
  { name: "Rahul Verma", role: "Business Trip", text: "Professional service. The Innova was very premium and clean. Driver was well-behaved and punctual.", rating: 5 },
  { name: "Emma Thompson", role: "Honeymoon Trip", text: "Highly recommend for couples. They arranged everything perfectly. Very private and comfortable service.", rating: 5 },
  { name: "Karthik Raja", role: "Group Tour", text: "Best value for money. We were 12 people and the Traveller was very spacious. Great for long journeys.", rating: 5 },
  { name: "Sophia Lee", role: "International Student", text: "Safety was my priority and Majaz exceeded expectations. Reliable even at late night. Very trustworthy.", rating: 5 },
  { name: "Amit Patel", role: "Weekend Gateway", text: "Short trip but well managed. Quick booking and response. Will definitely use again for next visit.", rating: 5 },
  { name: "Olivia Brown", role: "Family Vacation", text: "Kids loved the trip! The driver was very friendly and showed us many hidden viewpoints. Excellent service.", rating: 5 },
  { name: "Zoya Khan", role: "Adventure Seeker", text: "Perfect for exploring rugged terrains. Their SUVs are in great condition. Smooth experience overall.", rating: 5 },
  { name: "Thomas Berg", role: "Travel Blogger", text: "If you want local insights and authentic Wayanad, Majaz is the answer. Exceptional knowledge of routes.", rating: 5 },
  { name: "Nandini Das", role: "Solo Woman Traveler", text: "Felt very safe and respected. The driver was professional and helpful with luggage. Highly recommended.", rating: 5 },
  { name: "Marcus Schmidt", role: "Business Executive", text: "Punctuality is key and they delivered. Smooth transfer to the airport. Very professional behavior.", rating: 5 },
  { name: "Isabella Rossi", role: "Tourist — Italy", text: "Beautiful Wayanad! Majaz made our trip so much better. Thank you for the wonderful memories.", rating: 5 },
  { name: "Vikram Seth", role: "Family Reunion", text: "Booked two cars for our large group. Both were clean and drivers were synchronized. Excellent coordination.", rating: 5 },
  { name: "Chloe Williams", role: "Nature Photographer", text: "The driver knew exactly where to stop for the best shots. Patient and accommodating to my schedule.", rating: 5 },
  { name: "Siddharth Malhotra", role: "Corporate Outing", text: "Excellent coordination for our team of 20. The drivers were very disciplined and the vehicles were top-notch.", rating: 5 },
  { name: "Elena Petrova", role: "Solo Traveler — Russia", text: "Great experience with Ashraf. He was very helpful and showed me the best local tea shops. Very safe driver.", rating: 5 },
  { name: "Kevin George", role: "Weekend Trip", text: "Seamless booking process via WhatsApp. The Ertiga was comfortable for our group of 5. Value for money.", rating: 5 },
  { name: "Maya Krishnan", role: "Family Trip", text: "Our driver Jafar was amazing. He treated us like family and made sure we were comfortable throughout.", rating: 5 },
  { name: "Daniel Wright", role: "Airport Transfer", text: "Reliable service from Calicut to Wayanad. The driver was waiting for us at the exit. Professional.", rating: 5 },
  { name: "Sneha Reddy", role: "Sightseeing", text: "Edakkal Caves and Banasura Dam visit was well-timed. No rushing, just pure enjoyment. Thank you Majaz!", rating: 5 },
  { name: "Lucas Garcia", role: "Traveler — Spain", text: "Incredible hospitality! Wayanad is beautiful and having a good driver makes all the difference.", rating: 5 },
  { name: "Anish Kumar", role: "Business Visit", text: "Quick response and punctual service. Highly recommend for any corporate needs in Wayanad.", rating: 5 },
  { name: "Grace O'Connor", role: "Solo Traveler — Ireland", text: "I felt very safe as a solo woman. The driver was very respectful and gave great local tips.", rating: 5 },
  { name: "Sameer Ahmed", role: "Group Pilgrimage", text: "Very respectful drivers. They accommodated all our stops at different religious sites with patience.", rating: 5 },
  { name: "Aarav Gupta", role: "Family Vacation", text: "Best way to see Wayanad. The kids had a great time. Comfortable AC and clean cars.", rating: 5 },
  { name: "Marie Dubois", role: "Tourist — France", text: "Excellente expérience! Le chauffeur était très professionnel et la voiture était impeccable.", rating: 5 },
  { name: "Arjun Singh", role: "Adventure Trip", text: "Booked the 4x4 for some off-road fun. Driver was skilled and safety-conscious. Awesome time!", rating: 5 },
  { name: "Lisa Wong", role: "International Guest — HK", text: "Communication in English was good. No issues with booking or payments. Very reliable service.", rating: 5 },
  { name: "Faizal Rahim", role: "Local Traveler", text: "The best taxi service in Sulthan Bathery. Always my first choice for family trips.", rating: 5 },
  { name: "Nina Ivanov", role: "Nature Lover", text: "Breathtaking views and a very calm driver. It was the peaceful vacation I needed. Thank you.", rating: 5 },
  { name: "Suresh Babu", role: "Temple Visit", text: "Very helpful driver. He knew the temple timings and helped us plan the day perfectly.", rating: 5 },
  { name: "Anna Müller", role: "Tourist — Germany", text: "Sehr zuverlässiger Service. Pünktlich und freundlich. Wir haben uns sehr sicher gefühlt.", rating: 5 },
  { name: "Prakash Iyer", role: "Business Trip", text: "Smooth transfer to Bangalore. Driver was experienced and maintained good speed throughout.", rating: 5 },
  { name: "Meera Nair", role: "Family Outing", text: "The Innova Crysta was so comfortable. My elderly parents were very happy with the ride.", rating: 5 },
  { name: "John Doe", role: "Regular Customer", text: "I've been using Majaz for years. They never disappoint. Quality and service are always consistent.", rating: 5 },
  { name: "Sara Ali", role: "Sightseeing", text: "Amazing trip to the waterfalls! The driver knew the best spots for photos. Very happy.", rating: 5 },
  { name: "Hiroshi Tanaka", role: "Tourist — Japan", text: "Very polite driver. The car was clean and the service was very professional. Arigato!", rating: 5 },
  { name: "Kavita Rao", role: "Solo Traveler", text: "Reliable and safe. Highly recommend for women traveling alone in Wayanad. Good behavior.", rating: 5 },
  { name: "George Varghese", role: "Airport Pickup", text: "Flight was delayed but the driver waited for me. Very grateful for the excellent service.", rating: 5 },
  { name: "Tanvi Shah", role: "Honeymoon", text: "Private and comfortable. They made our special trip even more memorable. 5 stars!", rating: 5 },
  { name: "Ramesh Kumar", role: "Local Commute", text: "Quick booking and prompt arrival. Best service in Sulthan Bathery area.", rating: 5 },
  { name: "Linda Evans", role: "Family Trip — USA", text: "Great experience exploring the spice plantations. Driver was very informative.", rating: 5 },
  { name: "Aditya Jain", role: "Business Meeting", text: "On time and professional. Exactly what I needed for my tight schedule. Well done.", rating: 5 },
  { name: "Sunita Devi", role: "Pilgrimage", text: "Very kind driver. He helped me with my luggage and was very patient throughout the journey.", rating: 5 },
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
