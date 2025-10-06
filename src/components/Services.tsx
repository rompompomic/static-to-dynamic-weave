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

        {/* Desktop: 3 колонки, левая карточка — высокая, как две правые */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-[29px] items-start">
          {/* Левая высокая карточка (та самая) */}
          <div className="flex flex-col">
            <ServiceCard
              image={buvjuUnEkuDemontaza}
              title="Būvju un ēku demontāža"
              description="Dažāda tipa ēku demontāža droši un efektīvi, ar mūsdienīgu tehniku un normatīvu ievērošanu."
              size="tall"
              imageHeight="h-[500px]" // высота как две правые
              href="/lv/pakalpojumi#eku-demontaza"
              squareImage={false} // у высокой — не квадрат
              buttonVariant="soft" // цвет кнопки как в макете (светлый)
            />
          </div>

          {/* Средняя колонка (квадратные карточки) */}
          <div className="flex flex-col gap-[29px]">
            <ServiceCard
              image={razosanasEkuDemontaza}
              title="Ražošanas ēku demontāža"
              description="Specifika industriālām konstrukcijām: rūpīga plānošana, izjaukšana, būvgružu utilizācija."
              href="/lv/pakalpojumi#razosanas-eku-demontaza"
              squareImage // квадрат
              buttonVariant="soft"
            />
            <ServiceCard
              image={zemesDarbi}
              title="Zemes darbi"
              description="Rakšana un grunts izlīdzināšana, pamatu sagatavošana un drenāža."
              href="/lv/pakalpojumi#zemes-darbi"
              squareImage
              buttonVariant="solid" // пример «заливки», как на макете на одной карточке
            />
          </div>

          {/* Правая колонка (квадратные карточки) */}
          <div className="flex flex-col gap-[29px]">
            <ServiceCard
              image={labiekartosana}
              title="Labiekārtošana"
              description="Ceļu un laukumu izbūve, ainavu labiekārtošana un zaļo zonu izveide pēc demontāžas."
              href="/lv/pakalpojumi#labiekartosana"
              squareImage
              buttonVariant="soft"
            />
            <ServiceCard
              image={buvgruzuIzvesana}
              title="Būvgružu izvešana un utilizācija"
              description="Būvgružu savākšana, transportēšana un utilizācija atbilstoši vides aizsardzības normām."
              href="/lv/pakalpojumi#buvgruzu-izvesana"
              squareImage
              buttonVariant="soft"
            />
          </div>
        </div>

        {/* Mobile / Tablet — равные карточки, квадратные изображения */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:hidden">
          <ServiceCard
            image={buvjuUnEkuDemontaza}
            title="Būvju un ēku demontāža"
            description="Dažāda tipa ēku demontāža droši un efektīvi, ar mūsdienīgu tehniku un normatīvu ievērošanu."
            href="/lv/pakalpojumi#eku-demontaza"
            squareImage
            buttonVariant="soft"
          />
          <ServiceCard
            image={razosanasEkuDemontaza}
            title="Ražošanas ēku demontāža"
            description="Specifika industriālām konstrukcijām: rūpīga plānošana, izjaukšana, būvgružu utilizācija."
            href="/lv/pakalpojumi#razosanas-eku-demontaza"
            squareImage
            buttonVariant="soft"
          />
          <ServiceCard
            image={zemesDarbi}
            title="Zemes darbi"
            description="Rakšana, grunts izlīdzināšana, pamatu sagatavošana, drenāža un teritorijas stabilizācija."
            href="/lv/pakalpojumi#zemes-darbi"
            squareImage
            buttonVariant="solid"
          />
          <ServiceCard
            image={labiekartosana}
            title="Labiekārtošana"
            description="Ceļu un laukumu izbūve, ainavu labiekārtošana un zaļo zonu izveide pēc demontāžas."
            href="/lv/pakalpojumi#labiekartosana"
            squareImage
            buttonVariant="soft"
          />
          <ServiceCard
            image={buvgruzuIzvesana}
            title="Būvgružu izvešana un utilizācija"
            description="Būvgružu savākšana, transportēšana un utilizācija atbilstoši vides aizsardzības normām."
            href="/lv/pakalpojumi#buvgruzu-izvesana"
            squareImage
            buttonVariant="soft"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
