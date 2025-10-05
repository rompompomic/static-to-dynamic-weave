import ServiceCard from "./ServiceCard";
import { ArrowUpRight } from "lucide-react";

import buvjuUnEkuDemontaza from "@/assets/buvju-un-eku-demontaza.webp";
import razosanasEkuDemontaza from "@/assets/razosanas-eku-demontaza.webp";
import zemesDarbi from "@/assets/zemes-darbi.webp";
import labiekartosana from "@/assets/labiekartosana.webp";
import buvgruzuIzvesana from "@/assets/buvgruzu-izvesana-un-utilizacija.webp";

const Services = () => {
  const services = [
    {
      id: 1,
      image: buvjuUnEkuDemontaza,
      title: "Būvju un ēku demontāža",
      description:
        "Dažāda tipa ēku demontāža droši un efektīvi, ar mūsdienīgu tehniku un normatīvu ievērošanu.",
      height: "tall" as const,
    },
    {
      id: 2,
      image: razosanasEkuDemontaza,
      title: "Ražošanas ēku demontāža",
      description:
        "Specifika industriālām konstrukcijām: rūpīga plānošana, izjaukšana, būvgružu utilizācija.",
      height: "short" as const,
    },
    {
      id: 3,
      image: zemesDarbi,
      title: "Zemes darbi",
      description:
        "Rakšana, grunts izlīdzināšana, pamatu sagatavošana, drenāža un teritorijas stabilizācija.",
      height: "short" as const,
    },
    {
      id: 4,
      image: labiekartosana,
      title: "Labiekārtošana",
      description:
        "Ceļu un laukumu izbūve, ainavu labiekārtošana un zaļo zonu izveide pēc demontāžas.",
      height: "short" as const,
    },
    {
      id: 5,
      image: buvgruzuIzvesana,
      title: "Būvgružu izvešana un utilizācija",
      description:
        "Būvgružu savākšana, transportēšana un utilizācija atbilstoši vides aizsardzības normām. Pēc darbiem nodrošinām tīru un drošu teritoriju.",
      height: "short" as const,
    },
  ];

  return (
    <section
      id="pakalpojumi"
      className="w-full py-12 md:py-16 lg:py-20 bg-[#a4a4a4]/[0.08]"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-6 md:mb-8 animate-fade-in">
          Mūsu pakalpojumi
        </h2>

        <p className="font-sans text-foreground text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-4xl animate-fade-in">
          Mēs piedāvājam plašu demontāžas un zemes darbu klāstu – no dzīvojamo
          ēku nojaukšanas līdz industriālām būvēm un labiekārtošanai.
        </p>

        {/* === Сетка карточек === */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-6 md:gap-8
            lg:auto-rows-[minmax(280px,1fr)]
          "
        >
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`${
                service.id === 1
                  ? "lg:row-span-2" // 👈 первая растягивается на 2 строки
                  : ""
              }`}
            >
              <ServiceCard {...service} hideButton />
            </div>
          ))}
        </div>

        {/* CTA кнопка снизу */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="/lv/pakalpojumi"
            className="
              group relative inline-flex items-center justify-center gap-2.5
              h-12 px-8 rounded-lg
              bg-primary text-white font-sans font-bold
              shadow-sm hover:shadow-md transition ease-out duration-200
              hover:scale-[1.02] active:scale-[0.97]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40
              overflow-hidden
              before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r
              before:from-transparent before:via-white/20 before:to-transparent
              group-hover:before:translate-x-full before:transition-transform before:duration-700
            "
          >
            <span className="text-base md:text-lg">Skatīt visus pakalpojumus</span>
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
