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
      description:
        "Droša un efektīva ēku nojaukšana ar modernu tehniku, ievērojot visus drošības un normatīvos standartus.",
      href: "/lv/pakalpojumi#eku-demontaza",
    },
    {
      image: razosanasEkuDemontaza,
      title: "Ražošanas ēku demontāža",
      description:
        "Industriālo ēku izjaukšana ar rūpīgu plānošanu, drošības pasākumiem un pilnīgu būvgružu utilizāciju.",
      href: "/lv/pakalpojumi#razosanas-eku-demontaza",
    },
    {
      image: labiekartosana,
      title: "Labiekārtošana",
      description: "Ceļu, laukumu un zaļo zonu labiekārtošana pēc būvdarbiem, radot estētisku un funkcionālu vidi.",
      href: "/lv/pakalpojumi#labiekartosana",
    },
    {
      image: zemesDarbi,
      title: "Zemes darbi",
      description:
        "Grunts rakšana, izlīdzināšana, drenāža un pamatu sagatavošana ar kvalitatīvu tehniku un profesionālu pieeju.",
      href: "/lv/pakalpojumi#zemes-darbi",
      highlight: true,
    },
    {
      image: buvgruzuIzvesana,
      title: "Būvgružu izvešana un utilizācija",
      description: "Būvgružu savākšana, transportēšana un utilizācija tiek veikta saskaņā ar visām vides prasībām.",
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
          <div className="row-span-2">
            <ServiceCard {...services[0]} large />
          </div>
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

/* === Компонент карточки === */
const ServiceCard = ({ image, title, description, href, highlight = false, large = false }: any) => {
  return (
    <article
      className={`flex flex-col w-full rounded-2xl overflow-hidden bg-cover bg-center border border-gray-200`}
      style={{
        backgroundImage: `url(${image})`,
        height: large ? "500px" : "240px",
      }}
    >
      <div className="flex flex-col items-start gap-4 p-4 mt-auto bg-white w-full">
        <header className="flex flex-col items-start gap-1.5">
          <h3 className="font-[Onest] font-bold text-[#222] text-[21px] leading-tight">{title}</h3>
          <p className="font-[Onest] text-base text-[#222] leading-snug">{description}</p>
        </header>

        <a
          href={href}
          className={`group flex items-center justify-between pl-8 pr-7 py-4 w-full no-underline transition-colors focus:outline-none focus:ring-2 focus:ring-[#27ab8c] focus:ring-offset-2 rounded-md ${
            highlight ? "bg-[#19ae89] text-white hover:opacity-90" : "bg-[#f6f6f6] text-[#27ab8c] hover:bg-[#eeeeee]"
          }`}
          aria-label={`Uzzināt vairāk par ${title}`}
        >
          <span className="font-[Onest] font-bold text-base leading-normal">Uzzināt vairāk</span>
          <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
};
