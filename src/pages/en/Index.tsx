import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroEN from "@/components/en/Hero";
import AboutUsEN from "@/components/en/AboutUs";
import ServicesEN from "@/components/en/Services";
import Gallery from "@/components/Gallery";
import PartnersEN from "@/components/en/Partners";
import HowToApplyEN from "@/components/en/HowToApply";
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
        <HeroEN />
        <AboutUsEN />
        <ServicesEN />
        <Gallery />
        <PartnersEN />
        <HowToApplyEN />
        <Footer />
        <MobileCallButton />
      </main>
    </>
  );
};

export default IndexEN;
