import { ArrowUpRight } from "lucide-react";

import buvjuUnEkuDemontaza from "@/assets/buvju-un-eku-demontaza.webp";
import razosanasEkuDemontaza from "@/assets/razosanas-eku-demontaza.webp";
import labiekartosana from "@/assets/labiekartosana.webp";
import zemesDarbi from "@/assets/zemes-darbi.webp";
import buvgruzuIzvesana from "@/assets/buvgruzu-izvesana-un-utilizacija.webp";

const GAP = 24; // тот самый gap в сетке (px)
const SMALL_H = 320; // общая высота малой карточки (px)
const LARGE_H = SMALL_H * 2 + GAP; // высота большой = две малые + промежуток

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
      special: true, // зелёная кнопка
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

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-[24px]">
          {/* Левая высокая: фикс. высота = LARGE_H */}
          <div className="row-span-2" style={{ height: `${LARGE_H}px` }}>
            <ServiceCard {...services[0]} large />
          </div>

          {/* Правая 2×2: каждая малая с общей фикс. высотой SMALL_H */}
          <div className="col-span-2 grid grid-cols-2 gap-[24px]">
            {services.slice(1).map((s, i) => (
              <div key={i} style={{ height: `${SMALL_H}px` }}>
                <ServiceCard {...s} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:hidden">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

/* === Карточка === */
const ServiceCard = ({ image, title, description, href, large = false, special = false }: any) => {
  // Внутренние доли: картинка фикс., контент — оставшееся место.
  // Для малых: картинка 120px, контент тянется; для большой: картинка 420px (как в макете).
  const imgH = large ? 420 : 120;

  return (
    <article className="w-full h-full bg-white rounded-none overflow-hidden flex flex-col">
      {/* Картинка фикс. высоты — стиль ровный при любых правках */}
      <div style={{ height: `${imgH}px` }} className="w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Контент занимает оставшуюся высоту карточки */}
      <div className="flex flex-col justify-between flex-1 px-5 py-4">
        <div>
          <h3 className="font-mono font-bold text-[15px] md:text-base text-foreground leading-tight mb-1">{title}</h3>
          <p className="font-sans text-[12px] text-muted-foreground leading-snug">{description}</p>
        </div>

        <a
          href={href}
          className={`relative group inline-flex items-center justify-between gap-2 mt-3
                      h-9 px-4 rounded-none font-sans font-bold text-[13px]
                      transition ease-out duration-200 overflow-hidden
                      shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]
                      before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r
                      before:from-transparent before:via-white/20 before:to-transparent
                      group-hover:before:translate-x-full before:transition-transform before:duration-700
                      ${special ? "bg-[#19ae89] text-white" : "bg-[#f6f6f6] text-[#19ae89]"}`}
        >
          <span>Uzzināt vairāk</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
};
