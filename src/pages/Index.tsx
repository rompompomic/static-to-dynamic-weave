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
  useEffect(() => {
    // Reset scroll to top on mount
    const timer = setTimeout(() => {
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 50);

    return () => clearTimeout(timer);
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
