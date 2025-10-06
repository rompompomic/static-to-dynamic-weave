import ServiceCard from "@/components/ServiceCard";
import buvjuUnEkuDemontaza from "@/assets/buvju-un-eku-demontaza.webp";
import razosanasEkuDemontaza from "@/assets/razosanas-eku-demontaza.webp";
import zemesDarbi from "@/assets/zemes-darbi.webp";
import labiekartosana from "@/assets/labiekartosana.webp";
import buvgruzuIzvesana from "@/assets/buvgruzu-izvesana-un-utilizacija.webp";

const Services = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[#a4a4a4]/[0.08]">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-6 md:mb-8">
          Mūsu pakalpojumi
        </h2>

        <p className="font-sans text-foreground text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-4xl">
          Mēs piedāvājam plašu demontāžas un zemes darbu klāstu – no dzīvojamo ēku nojaukšanas līdz industriālām būvēm
          un labiekārtošanai.
        </p>

        {/* Desktop layout: 1 высокая слева + 2×2 справа */}
        <div className="hidden lg:grid gap-[29px] lg:grid-cols-[1.2fr,1fr,1fr] lg:grid-rows-2 items-stretch">
          {/* 1 карточка — левая высокая, занимает 2 ряда */}
          <div className="col-[1] row-[1/3]">
            <ServiceCard
              image={buvjuUnEkuDemontaza}
              title="Būvju un ēku demontāža"
              description="Dažāda tipa ēku demontāža droši un efektīvi, ar mūsdienīgu tehniku un normatīvu ievērošanu."
              size="tall"
              href="/lv/pakalpojumi#eku-demontaza"
              buttonVariant="soft"
              className="h-full"
            />
          </div>

          {/* 2 карточка — верхний правый столбец (середина) */}
          <div className="col-[2] row-[1]">
            <ServiceCard
              image={razosanasEkuDemontaza}
              title="Ražošanas ēku demontāža"
              description="Specifika industriālām konstrukcijām: rūpīga plānošana, izjaukšana, būvgružu utilizācija."
              href="/lv/pakalpojumi#razosanas-eku-demontaza"
              buttonVariant="soft"
              className="h-full"
            />
          </div>

          {/* 3 карточка — верхняя правая колонка */}
          <div className="col-[3] row-[1]">
            <ServiceCard
              image={labiekartosana}
              title="Labiekārtošana"
              description="Ceļu un laukumu izbūve, ainavu labiekārtošana un zaļo zonu izveide pēc demontāžas."
              href="/lv/pakalpojumi#labiekartosana"
              buttonVariant="soft"
              className="h-full"
            />
          </div>

          {/* 4 карточка — нижняя средняя колонка */}
          <div className="col-[2] row-[2]">
            <ServiceCard
              image={zemesDarbi}
              title="Zemes darbi"
              description="Rakšana un grunts izlīdzināšana, pamatu sagatavošana un drenāža."
              href="/lv/pakalpojumi#zemes-darbi"
              buttonVariant="solid" // заливка как в макете
              className="h-full"
            />
          </div>

          {/* 5 карточка — нижняя правая колонка */}
          <div className="col-[3] row-[2]">
            <ServiceCard
              image={buvgruzuIzvesana}
              title="Būvgružu izvešana un utilizācija"
              description="Būvgružu savākšana, transportēšana un utilizācija atbilstoši vides aizsardzības normām."
              href="/lv/pakalpojumi#buvgruzu-izvesana"
              buttonVariant="soft"
              className="h-full"
            />
          </div>
        </div>

        {/* Mobile / Tablet — обычная сетка 1-2 колонки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:hidden">
          <ServiceCard
            image={buvjuUnEkuDemontaza}
            title="Būvju un ēku demontāža"
            description="Dažāda tipa ēku demontāža droši un efektīvi, ar mūsdienīgu tehniku un normatīvu ievērošanu."
            href="/lv/pakalpojumi#eku-demontaza"
          />
          <ServiceCard
            image={razosanasEkuDemontaza}
            title="Ražošanas ēku demontāža"
            description="Specifika industriālām konstrukcijām: rūpīga plānošana, izjaukšana, būvgružu utilizācija."
            href="/lv/pakalpojumi#razosanas-eku-demontaza"
          />
          <ServiceCard
            image={labiekartosana}
            title="Labiekārtošana"
            description="Ceļu un laukumu izbūve, ainavu labiekārtošana un zaļo zonu izveide pēc demontāžas."
            href="/lv/pakalpojumi#labiekartosana"
          />
          <ServiceCard
            image={zemesDarbi}
            title="Zemes darbi"
            description="Rakšana, grunts izlīdzināšana, pamatu sagatavošana, drenāža un teritorijas stabilizācija."
            href="/lv/pakalpojumi#zemes-darbi"
            buttonVariant="solid"
          />
          <ServiceCard
            image={buvgruzuIzvesana}
            title="Būvgružu izvešana un utilizācija"
            description="Būvgružu savākšana, transportēšana un utilizācija atbilstoši vides aizsardzības normām."
            href="/lv/pakalpojumi#buvgruzu-izvesana"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
