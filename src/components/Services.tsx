import { ArrowUpRight } from "lucide-react";

import buvjuUnEkuDemontaza from "@/assets/buvju-un-eku-demontaza.webp";
import razosanasEkuDemontaza from "@/assets/razosanas-eku-demontaza.webp";
import labiekartosana from "@/assets/labiekartosana.webp";
import zemesDarbi from "@/assets/zemes-darbi.webp";
import buvgruzuIzvesana from "@/assets/buvgruzu-izvesana-un-utilizacija.webp";

const Services = () => {
  const services = [
    {
      image: buvjuUnEkuDemontaza,
      title: "Būvju un ēku demontāža",
      description: "Droša ēku nojaukšana ar modernu tehniku un pilnīgu atkritumu kontroli.",
      href: "/lv/pakalpojumi#eku-demontaza",
    },
    {
      image: razosanasEkuDemontaza,
      title: "Ražošanas ēku demontāža",
      description: "Industriālo objektu izjaukšana ar precīzu plānošanu un drošību.",
      href: "/lv/pakalpojumi#razosanas-eku-demontaza",
    },
    {
      image: labiekartosana,
      title: "Labiekārtošana",
      description: "Laukumu un zaļo zonu veidošana ar kvalitatīvu rezultātu.",
      href: "/lv/pakalpojumi#labiekartosana",
    },
    {
      image: zemesDarbi,
      title: "Zemes darbi",
      description: "Rakšana, drenāža un pamatu sagatavošana ar precizitāti.",
      href: "/lv/pakalpojumi#zemes-darbi",
      highlight: true,
    },
    {
      image: buvgruzuIzvesana,
      title: "Būvgružu izvešana un utilizācija",
      description: "Savākšana un utilizācija saskaņā ar vides standartiem.",
      href: "/lv/pakalpojumi#buvgruzu-izvesana",
    },
  ];

  return (
    <section id="pakalpojumi" className="w-full py-16 md:py-20 bg-[#f9f9f9] scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-10">
          Mūsu pakalpojumi
        </h2>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-[28px] items-start">
          <div className="row-span-2">
            <ServiceCard {...services[0]} large />
          </div>
          <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-[28px]">
            {services.slice(1).map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:hidden">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

/* === CARD COMPONENT === */
const ServiceCard = ({ image, title, description, href, highlight = false, large = false }: any) => {
  return (
    <article
      className={`flex flex-col w-full overflow-hidden bg-cover bg-center`}
      style={{
        backgroundImage: `url(${image})`,
        height: large ? "520px" : "260px",
      }}
    >
      <div className="flex flex-col justify-between p-5 mt-auto bg-white w-full">
        <header>
          <h3 className="font-[Onest] font-bold text-[#222] text-[18px] mb-1 leading-tight">{title}</h3>
          <p className="font-[Onest] text-[13px] text-[#444] leading-snug">{description}</p>
        </header>

        <a
          href={href}
          className={`relative group inline-flex items-center justify-between gap-2 mt-4 h-11 px-6 rounded-none font-[Onest] font-bold text-[14px] transition ease-out duration-200 overflow-hidden
            before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
            group-hover:before:translate-x-full before:transition-transform before:duration-700
            ${
              highlight
                ? "bg-[#19ae89] text-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.97]"
                : "bg-[#f6f6f6] text-[#19ae89] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.97]"
            }`}
        >
          <span>Uzzināt vairāk</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
};
