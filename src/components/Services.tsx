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
      description: "Droša un efektīva dažāda tipa ēku nojaukšana ar mūsdienīgu tehniku un normatīvu ievērošanu",
      href: "/lv/pakalpojumi#eku-demontaza",
      large: true,
    },
    {
      image: razosanasEkuDemontaza,
      title: "Ražošanas ēku demontāža",
      description: "Rūpīga industriālo konstrukciju plānošana, izjaukšana un būvgružu utilizācija",
      href: "/lv/pakalpojumi#razosanas-eku-demontaza",
    },
    {
      image: labiekartosana,
      title: "Labiekārtošana",
      description: "Ceļu un laukumu izbūve, ainavu labiekārtošana un zaļo zonu izveide pēc demontāžas",
      href: "/lv/pakalpojumi#labiekartosana",
    },
    {
      image: zemesDarbi,
      title: "Zemes darbi",
      description: "Grunts rakšana, izlīdzināšana, pamatu sagatavošana un drenāža",
      href: "/lv/pakalpojumi#zemes-darbi",
    },
    {
      image: buvgruzuIzvesana,
      title: "Būvgružu izvešana un utilizācija",
      description: "Būvgružu savākšana, transportēšana un utilizācija saskaņā ar vides normām",
      href: "/lv/pakalpojumi#buvgruzu-izvesana",
    },
  ];

  return (
    <section id="pakalpojumi" className="w-full py-16 md:py-20 bg-[#f9f9f9] scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        {/* === Заголовок === */}
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-10">
          Mūsu pakalpojumi
        </h2>

        {/* === DESKTOP === */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-[28px] items-start">
          {/* Левая высокая карточка */}
          <div className="row-span-2">
            <ServiceCard {...services[0]} large />
          </div>

          {/* Правые карточки (4 шт.) */}
          <div className="grid grid-cols-2 gap-[28px] col-span-2">
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
const ServiceCard = ({ image, title, description, href, large }: any) => {
  return (
    <div
      className={`w-full bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col ${
        large ? "h-full" : ""
      }`}
    >
      {/* Изображение */}
      <div className={`${large ? "h-[460px]" : "h-[220px]"} w-full`}>
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Контент */}
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
