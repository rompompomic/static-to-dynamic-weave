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
      description: "Droša ēku nojaukšana ar modernu tehniku un pilnīgu kontroli.",
      href: "/lv/pakalpojumi#eku-demontaza",
      large: true,
    },
    {
      image: razosanasEkuDemontaza,
      title: "Ražošanas ēku demontāža",
      description: "Industriālo objektu izjaukšana ar precīzu plānošanu.",
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
      description: "Rakšana un pamatu sagatavošana ar precizitāti.",
      href: "/lv/pakalpojumi#zemes-darbi",
      special: true,
    },
    {
      image: buvgruzuIzvesana,
      title: "Būvgružu izvešana un utilizācija",
      description: "Savākšana un utilizācija atbilstoši vides standartiem.",
      href: "/lv/pakalpojumi#buvgruzu-izvesana",
    },
  ];

  return (
    <section id="pakalpojumi" className="w-full py-16 md:py-20 bg-[#f9f9f9] scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-10">
          Mūsu pakalpojumi
        </h2>

        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-[20px] items-start">
          <div className="row-span-2">
            <ServiceCard {...services[0]} large />
          </div>

          <div className="grid grid-cols-2 gap-[20px] col-span-2">
            {services.slice(1).map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>

        {/* Mobile layout */}
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
const ServiceCard = ({ image, title, description, href, large, special }: any) => {
  return (
    <div className="w-full bg-white rounded-none overflow-hidden flex flex-col h-full">
      {/* Изображение */}
      <div className={`${large ? "h-[370px]" : "h-[130px]"} w-full`}>
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Контент */}
      <div className="px-5 py-3 flex flex-col justify-between flex-grow min-h-[120px]">
        <div>
          <h3 className="font-mono font-bold text-[15px] md:text-base text-foreground mb-1 leading-tight">{title}</h3>
          <p className="font-sans text-[12px] text-muted-foreground leading-snug">{description}</p>
        </div>

        {/* Кнопка */}
        <a
          href={href}
          className={`
            mt-3 group relative inline-flex items-center justify-center gap-2 
            h-9 px-4 rounded-none font-sans font-bold text-[13px]
            transition ease-out duration-200
            ${special ? "bg-[#19ae89] text-white" : "bg-[#f6f6f6] text-[#19ae89]"}
            hover:scale-[1.03] active:scale-[0.98]
            shadow-sm hover:shadow-md overflow-hidden
            before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r
            before:from-transparent before:via-white/20 before:to-transparent
            group-hover:before:translate-x-full before:transition-transform before:duration-700
          `}
        >
          <span>Uzzināt vairāk</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};
