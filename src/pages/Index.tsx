import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import HowToApply from "@/components/HowToApply";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

const Index = () => {
  // Prevent auto-scroll to hash anchors on initial page load
  useEffect(() => {
    // Only run on initial mount
    if (window.location.hash) {
      // Remove hash from URL without triggering scroll
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <main className="bg-background overflow-x-hidden w-full min-h-screen pt-[72px] md:pt-[80px]">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Gallery />
      <Partners />
      <HowToApply />
      <Footer />
      <MobileCallButton />
    </main>
  );
};

export default Index;
