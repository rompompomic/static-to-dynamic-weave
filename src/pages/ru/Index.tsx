import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroRU from "@/components/ru/Hero";
import AboutUsRU from "@/components/ru/AboutUs";
import ServicesRU from "@/components/ru/Services";
import Gallery from "@/components/Gallery";
import PartnersRU from "@/components/ru/Partners";
import HowToApplyRU from "@/components/ru/HowToApply";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

const IndexRU = () => {
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
        <title>DEMCO - Ваш надежный партнер в строительстве</title>
        <meta name="description" content="Профессиональные услуги демонтажа, земляных и благоустроительных работ. DEMCO - ваш надежный партнер в строительстве с опытом более 10 лет." />
        <meta property="og:title" content="DEMCO - Ваш надежный партнер в строительстве" />
        <meta property="og:description" content="Профессиональные услуги демонтажа, земляных и благоустроительных работ. DEMCO - ваш надежный партнер в строительстве с опытом более 10 лет." />
        <link rel="canonical" href="https://yourdomain.com/ru/" />
      </Helmet>
      
      <main className="bg-background overflow-x-hidden w-full min-h-screen pt-[72px] md:pt-[80px]">
        <Header />
        <HeroRU />
        <AboutUsRU />
        <ServicesRU />
        <Gallery />
        <PartnersRU />
        <HowToApplyRU />
        <Footer />
        <MobileCallButton />
      </main>
    </>
  );
};

export default IndexRU;
