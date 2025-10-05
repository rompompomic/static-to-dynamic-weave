import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import HowToApply from "@/components/HowToApply";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

const IndexEN = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>DEMCO - Your Trusted Construction Partner</title>
        <meta name="description" content="Professional demolition, earthworks and landscaping services. DEMCO - your trusted construction partner with over 10 years of experience." />
        <meta property="og:title" content="DEMCO - Your Trusted Construction Partner" />
        <meta property="og:description" content="Professional demolition, earthworks and landscaping services. DEMCO - your trusted construction partner with over 10 years of experience." />
        <link rel="canonical" href="https://yourdomain.com/en/" />
      </Helmet>
      
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
    </>
  );
};

export default IndexEN;
