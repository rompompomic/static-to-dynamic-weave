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
      image: zemesDarbi,
      title: "Zemes darbi",
      description: "Grunts rakšana, izlīdzināšana, pamatu sagatavošana un drenāža",
      href: "/lv/pakalpojumi#zemes-darbi",
      highlight: true,
    },
    {
      image: labiekartosana,
      title: "Labiekārtošana",
      description: "Ceļu un laukumu izbūve, ainavu labiekārtošana un zaļo zonu izveide pēc demontāžas",
      href: "/lv/pakalpojumi#labiekartosana",
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

/* === Компонент карточки === */
const ServiceCard = ({ image, title, description, href, highlight = false, large = false }: any) => {
  const buttonBase =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md transition-transform duration-200 ease-out group";
  const buttonStyle = highlight
    ? "bg-[#19ae89] text-white hover:opacity-90"
    : "bg-[#f6f6f6] text-[#19ae89] hover:bg-[#e8e8e8]";

  return (
    <div
      className={`w-full bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col`}
      style={{
        height: large ? "500px" : "240px",
      }}
    >
      {/* Изображение */}
      <div className="w-full h-[60%]">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Контент */}
      <div className="h-[40%] flex flex-col justify-between px-6 py-4">
        <div>
          <h3 className="font-mono font-bold text-lg md:text-xl text-foreground mb-1">{title}</h3>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <a href={href} className={`${buttonBase} ${buttonStyle}`}>
          <span className="font-sans font-bold text-base">Uzzināt vairāk</span>
          <ArrowUpRight className="ml-1 w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};
