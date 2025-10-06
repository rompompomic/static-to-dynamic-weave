import ServiceCard from "@/components/ServiceCard";
import buvjuUnEkuDemontaza from "@/assets/buvju-un-eku-demontaza.webp";
import razosanasEkuDemontaza from "@/assets/razosanas-eku-demontaza.webp";
import zemesDarbi from "@/assets/zemes-darbi.webp";
import labiekartosana from "@/assets/labiekartosana.webp";
import buvgruzuIzvesana from "@/assets/buvgruzu-izvesana-un-utilizacija.webp";

const Services = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[#F6F6F6]">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[48px] leading-tight mb-6 md:mb-8">
          Mūsu pakalpojumi
        </h2>

        <p className="font-sans text-foreground text-base md:text-lg leading-relaxed mb-10 max-w-4xl">
          Mēs piedāvājam plašu demontāžas un zemes darbu klāstu – no dzīvojamo ēku nojaukšanas līdz industriālām būvēm
          un labiekārtošanai.
        </p>

        {/* Сетка: левая высокая + 4 компактные */}
        <div className="hidden lg:grid grid-cols-[1.2fr,1fr,1fr] grid-rows-2 gap-[28px]">
          {/* 1. Левая высокая */}
          <div className="col-span-1 row-span-2">
            <ServiceCard
              image={buvjuUnEkuDemontaza}
              title="Būvju un ēku demontāža"
              description="Dažāda tipa ēku demontāža droši un efektīvi, ar mūsdienīgu tehniku un normatīvu ievērošanu."
              href="/lv/pakalpojumi#eku-demontaza"
              size="tall"
              buttonStyle="white"
            />
          </div>

          {/* Верхний правый ряд */}
          <ServiceCard
            image={razosanasEkuDemontaza}
            title="Ražošanas ēku demontāža"
            description="Specifika industriālām konstrukcijām: rūpīga plānošana, izjaukšana, būvgružu utilizācija."
            href="/lv/pakalpojumi#razosanas-eku-demontaza"
            size="square"
            buttonStyle="white"
          />
          <ServiceCard
            image={labiekartosana}
            title="Labiekārtošana"
            description="Ceļu un laukumu izbūve, ainavu labiekārtošana un zaļo zonu izveide pēc demontāžas."
            href="/lv/pakalpojumi#labiekartosana"
            size="square"
            buttonStyle="white"
          />

          {/* Нижний правый ряд */}
          <ServiceCard
            image={zemesDarbi}
            title="Zemes darbi"
            description="Rakšana un grunts izlīdzināšana, pamatu sagatavošana un drenāža."
            href="/lv/pakalpojumi#zemes-darbi"
            size="square"
            buttonStyle="green"
          />
          <ServiceCard
            image={buvgruzuIzvesana}
            title="Būvgružu izvešana un utilizācija"
            description="Būvgružu savākšana, transportēšana un utilizācija atbilstoši vides aizsardzības normām."
            href="/lv/pakalpojumi#buvgruzu-izvesana"
            size="square"
            buttonStyle="white"
          />
        </div>

        {/* Mobile / Tablet layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:hidden">
          <ServiceCard
            image={buvjuUnEkuDemontaza}
            title="Būvju un ēku demontāža"
            description="Dažāda tipa ēku demontāža droši un efektīvi."
            href="/lv/pakalpojumi#eku-demontaza"
            buttonStyle="white"
          />
          <ServiceCard
            image={razosanasEkuDemontaza}
            title="Ražošanas ēku demontāža"
            description="Specifika industriālām konstrukcijām: rūpīga plānošana, izjaukšana, būvgružu utilizācija."
            href="/lv/pakalpojumi#razosanas-eku-demontaza"
            buttonStyle="white"
          />
          <ServiceCard
            image={labiekartosana}
            title="Labiekārtošana"
            description="Ceļu un laukumu izbūve, ainavu labiekārtošana un zaļo zonu izveide."
            href="/lv/pakalpojumi#labiekartosana"
            buttonStyle="white"
          />
          <ServiceCard
            image={zemesDarbi}
            title="Zemes darbi"
            description="Rakšana un grunts izlīdzināšana, pamatu sagatavošana un drenāža."
            href="/lv/pakalpojumi#zemes-darbi"
            buttonStyle="green"
          />
          <ServiceCard
            image={buvgruzuIzvesana}
            title="Būvgružu izvešana un utilizācija"
            description="Būvgružu savākšana, transportēšana un utilizācija atbilstoši normām."
            href="/lv/pakalpojumi#buvgruzu-izvesana"
            buttonStyle="white"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
