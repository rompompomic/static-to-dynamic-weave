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
      description: "Būvgružu savākšana un utilizācija pēc vides standartiem.",
      href: "/lv/pakalpojumi#buvgruzu-izvesana",
    },
  ];

  return (
    <section id="pakalpojumi" className="w-full py-16 md:py-20 bg-[#f9f9f9] scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-10">
          Mūsu pakalpojumi
        </h2>

        {/* === DESKTOP === */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-[28px]">
          {/* Левая высокая карточка */}
          <div className="row-span-2">
            <ServiceCard {...services[0]} large />
          </div>

          {/* Правая сетка 2x2 */}
          <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-[28px]">
            {services.slice(1).map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>

        {/* === MOBILE / TABLET === */}
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

/* === Карточка === */
const ServiceCard = ({ image, title, description, href, highlight = false, large = false }: any) => {
  return (
    <article
      className={`flex flex-col w-full border border-gray-300 overflow-hidden bg-cover bg-center`}
      style={{
        backgroundImage: `url(${image})`,
        height: large ? "500px" : "240px",
      }}
    >
      <div className="flex flex-col items-start gap-3 p-4 mt-auto bg-white w-full border-t border-gray-200">
        <header className="flex flex-col items-start gap-1.5">
          <h3 className="font-[Onest] font-bold text-[#222] text-[18px] leading-tight">{title}</h3>
          <p className="font-[Onest] text-sm text-[#444] leading-snug">{description}</p>
        </header>

        <a
          href={href}
          className={`group flex items-center justify-between pl-8 pr-7 py-3 w-full no-underline transition-colors focus:outline-none focus:ring-2 focus:ring-[#27ab8c] focus:ring-offset-2 ${
            highlight ? "bg-[#19ae89] text-white hover:opacity-90" : "bg-[#f6f6f6] text-[#27ab8c] hover:bg-[#eeeeee]"
          }`}
          aria-label={`Uzzināt vairāk par ${title}`}
        >
          <span className="font-[Onest] font-bold text-[15px] leading-normal">Uzzināt vairāk</span>
          <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
};
