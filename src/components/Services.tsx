import ServiceCard from "./ServiceCard";
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
      imageHeight: "h-[150px]",
    },
    {
      id: 3,
      image: zemesDarbi,
      title: "Zemes darbi",
      description:
        "Rakšana, grunts izlīdzināšana, pamatu sagatavošana, drenāža un teritorijas stabilizācija.",
      imageHeight: "h-[150px]",
    },
    {
      id: 4,
      image: labiekartosana,
      title: "Labiekārtošana",
      description:
        "Ceļu un laukumu izbūve, ainavu labiekārtošana un zaļo zonu izveide pēc demontāžas.",
      imageHeight: "h-[150px]",
    },
    {
      id: 5,
      image: buvgruzuIzvesana,
      title: "Būvgružu izvešana un utilizācija",
      description:
        "Būvgružu savākšana, transportēšana un utilizācija atbilstoši vides aizsardzības normām.",
      imageHeight: "h-[150px]",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[#a4a4a4]/[0.08]">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-6 md:mb-8">
          Mūsu pakalpojumi
        </h2>

        <p className="font-sans text-foreground text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-4xl">
          Mēs piedāvājam plašu demontāžas un zemes darbu klāstu – no dzīvojamo
          ēku nojaukšanas līdz industriālām būvēm un labiekārtošanai.
        </p>

        <div className="hidden lg:grid lg:grid-cols-3 gap-[29px] items-stretch">
          <div className="flex flex-col">
            <ServiceCard {...services[0]} />
          </div>

          <div className="flex flex-col gap-[29px]">
            <ServiceCard {...services[1]} />
            <ServiceCard {...services[2]} />
          </div>

          <div className="flex flex-col gap-[29px]">
            <ServiceCard {...services[3]} />
            <ServiceCard {...services[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
