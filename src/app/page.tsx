import Hero from "@/components/sections/Hero";
import HeroOverlay from "@/components/sections/HeroOverlay";
import StatsBar from "@/components/sections/StatsBar";
import Fleet from "@/components/sections/Fleet";
import Destinations from "@/components/sections/Destinations";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import About from "@/components/sections/About";
import EnquiryForm from "@/components/sections/EnquiryForm";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ParallaxSection from "@/components/sections/ParallaxSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Packages from "@/components/sections/Packages";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroOverlay />
      <StatsBar />
      <Fleet />
      
      <ParallaxSection 
        imageSrc="/images/parallax-road.png"
        title="Explore Hidden Trails"
        subtitle="Discover the unexplored beauty of Wayanad"
      />

      <Destinations />
      <Packages />
      <Testimonials />
      <WhyChooseUs />
      <About />

      <ParallaxSection 
        imageSrc="/images/parallax-sunset.png"
        title="Memories That Last"
        subtitle="Experience God's Own Country in total comfort"
      />

      <EnquiryForm />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}
