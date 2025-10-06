import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import HowToApply from "@/components/HowToApply";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import { ArrowUpRight } from "lucide-react";

import buvjuUnEkuDemontaza from "@/assets/buvju-un-eku-demontaza.webp";
import razosanasEkuDemontaza from "@/assets/razosanas-eku-demontaza.webp";
import labiekartosana from "@/assets/labiekartosana.webp";
import zemesDarbi from "@/assets/zemes-darbi.webp";
import buvgruzuIzvesana from "@/assets/buvgruzu-izvesana-un-utilizacija.webp";
import demontazaIndustrial from "@/assets/demontaza-industrial.webp";

const Index = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      image: buvjuUnEkuDemontaza,
      title: "Būvju un ēku demontāža",
      description: "Dažādu objektu nojaukšana ar drošām un efektīvām metodēm",
      href: "/lv/pakalpojumi#eku-demontaza",
      large: true,
    },
    {
      image: razosanasEkuDemontaza,
      title: "Ražošanas ēku demontāža",
      description: "Industriālo konstrukciju izjaukšana ar rūpīgu plānošanu",
      href: "/lv/pakalpojumi#razosanas-eku-demontaza",
    },
    {
      image: labiekartosana,
      title: "Labiekārtošana",
      description: "Ceļu, laukumu un zaļo zonu izbūve pēc demontāžas",
      href: "/lv/pakalpojumi#labiekartosana",
    },
    {
      image: zemesDarbi,
      title: "Zemes darbi",
      description: "Grunts rakšana, izlīdzināšana un pamatu sagatavošana",
      href: "/lv/pakalpojumi#zemes-darbi",
    },
    {
      image: buvgruzuIzvesana,
      title: "Būvgružu izvešana",
      description: "Savākšana, transportēšana un utilizācija atbilstoši normām",
      href: "/lv/pakalpojumi#buvgruzu-izvesana",
    },
    {
      image: demontazaIndustrial,
      title: "Industriālo objektu nojaukšana",
      description: "Kompleksa ražošanas teritoriju demontāža un attīrīšana",
      href: "/lv/pakalpojumi#industrial-demontaza",
    },
  ];

  return (
    <main className="bg-background overflow-x-hidden w-full min-h-screen pt-[72px] md:pt-[80px]">
      <Header />
      <Hero />
      <AboutUs />

      {/* === MŪSU PAKALPOJUMI === */}
      <section id="pakalpojumi" className="w-full py-16 md:py-20 bg-[#f9f9f9]">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-10">
            Mūsu pakalpojumi
          </h2>

          {/* === Desktop layout === */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-[28px] items-start">
            {/* Left large card */}
            <div className="row-span-2">
              <ServiceCard {...services[0]} large />
            </div>

            {/* Right grid of 5 cards */}
            <div className="grid grid-cols-2 gap-[28px] col-span-2">
              {services.slice(1).map((service, i) => (
                <ServiceCard key={i} {...service} />
              ))}
            </div>
          </div>

          {/* === Mobile / Tablet layout === */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:hidden">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <Partners />
      <HowToApply />
      <Footer />
      <MobileCallButton />
    </main>
  );
};

export default Index;

/* --- Local inline card component --- */
const ServiceCard = ({ image, title, description, href, large }: any) => {
  return (
    <div
      className={`w-full bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col ${
        large ? "h-full" : ""
      }`}
    >
      {/* Image */}
      <div className={`${large ? "h-[460px]" : "h-[220px]"} w-full`}>
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Content */}
      <div className="px-6 py-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-mono font-bold text-lg md:text-xl text-foreground mb-1">{title}</h3>
          <p className="font-sans text-sm text-muted-foreground">{description}</p>
        </div>

        <a
          href={href}
          className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary/10 text-primary font-sans font-semibold rounded-md hover:bg-primary/20 transition-transform duration-200 hover:scale-[1.05]"
        >
          <span>Uzzināt vairāk</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default Index;
