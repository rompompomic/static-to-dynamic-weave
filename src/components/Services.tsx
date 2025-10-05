import { ArrowUpRight } from "lucide-react";

import buvjuUnEkuDemontaza from "@/assets/buvju-un-eku-demontaza.webp";
import razosanasEkuDemontaza from "@/assets/razosanas-eku-demontaza.webp";
import zemesDarbi from "@/assets/zemes-darbi.webp";
import labiekartosana from "@/assets/labiekartosana.webp";
import buvgruzuIzvesana from "@/assets/buvgruzu-izvesana-un-utilizacija.webp";

// === Компонент карточки ===
interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  imageHeight?: string;
}

const ServiceCard = ({
  image,
  title,
  description,
  imageHeight,
}: ServiceCardProps) => {
  return (
    <div
      className="
        flex flex-col 
        w-full 
        bg-card border border-border rounded-lg shadow-md hover:shadow-lg 
        transition duration-300 overflow-hidden
        h-[400px] sm:h-[420px] md:h-[440px] lg:h-auto
      "
    >
      <div className={`w-full ${imageHeight || "h-[220px]"} flex-shrink-0`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-between px-5 pt-3 pb-5 flex-grow">
        <div>
          <h3 className="font-sans font-bold text-foreground text-lg md:text-xl leading-tight">
            {title}
          </h3>
          <p className="mt-2 font-sans text-muted-foreground text-sm md:text-base leading-snug line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// === Основной компонент секции ===
const Services = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[#a4a4a4]/[0.08]">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        {/* Заголовок и описание */}
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-6 md:mb-8">
          Mūsu pakalpojumi
        </h2>

        <p className="font-sans text-foreground text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-4xl">
          Mēs piedāvājam plašu demontāžas un zemes darbu klāstu – no dzīvojamo
          ēku nojaukšanas līdz industriālām būvēm un labiekārtošanai.
        </p>

        {/* Адаптивная сетка карточек */}
        <div
          className="
            grid 
            grid-cols-1               /* мобильные */
            sm:grid-cols-2            /* планшеты */
            lg:grid-cols-3            /* десктоп */
            gap-6 md:gap-8
          "
        >
          <ServiceCard
            image={buvjuUnEkuDemontaza}
            title="Būvju un ēku demontāža"
            description="Dažāda tipa ēku demontāža droši un efektīvi, ar mūsdienīgu tehniku un normatīvu ievērošanu."
            imageHeight="h-[260px] sm:h-[220px] md:h-[240px]"
          />
          <ServiceCard
            image={razosanasEkuDemontaza}
            title="Ražošanas ēku demontāža"
            description="Specifika industriālām konstrukcijām: rūpīga plānošana, izjaukšana, būvgružu utilizācija."
            imageHeight="h-[260px] sm:h-[220px] md:h-[240px]"
          />
          <ServiceCard
            image={zemesDarbi}
            title="Zemes darbi"
            description="Rakšana, grunts izlīdzināšana, pamatu sagatavošana, drenāža un teritorijas stabilizācija."
            imageHeight="h-[260px] sm:h-[220px] md:h-[240px]"
          />
          <ServiceCard
            image={labiekartosana}
            title="Labiekārtošana"
            description="Ceļu un laukumu izbūve, ainavu labiekārtošana un zaļo zonu izveide pēc demontāžas."
            imageHeight="h-[260px] sm:h-[220px] md:h-[240px]"
          />
          <ServiceCard
            image={buvgruzuIzvesana}
            title="Būvgružu izvešana un utilizācija"
            description="Būvgružu savākšana, transportēšana un utilizācija atbilstoši vides aizsardzības normām."
            imageHeight="h-[260px] sm:h-[220px] md:h-[240px]"
          />
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="/lv/pakalpojumi"
            className="
              group relative inline-flex items-center justify-center gap-2.5
              h-12 px-8 rounded-lg
              bg-primary text-white font-sans font-bold
              shadow-sm hover:shadow-md transition ease-out duration-200
              hover:scale-[1.02] active:scale-[0.97]
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
