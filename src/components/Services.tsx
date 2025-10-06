import ServiceCard from "@/components/ServiceCard";

import buvjuUnEkuDemontaza from "@/assets/buvju-un-eku-demontaza.webp";
import razosanasEkuDemontaza from "@/assets/razosanas-eku-demontaza.webp";
import zemesDarbi from "@/assets/zemes-darbi.webp";
import labiekartosana from "@/assets/labiekartosana.webp";
import buvgruzuIzvesana from "@/assets/buvgruzu-izvesana-un-utilizacija.webp";

const services = [
  {
    image: buvjuUnEkuDemontaza,
    title: "Būvju un ēku demontāža",
    description: "Dažāda tipa ēku demontāža droši un efektīvi, ar mūsdienīgu tehniku un normatīvu ievērošanu.",
    href: "/lv/pakalpojumi#eku-demontaza",
    featured: true,
    imageHeight: "h-[280px] md:h-[340px] lg:h-[540px]",
  },
  {
    image: razosanasEkuDemontaza,
    title: "Ražošanas ēku demontāža",
    description: "Specifika industriālām konstrukcijām: rūpīga plānošana, izjaukšana, būvgružu utilizācija.",
    href: "/lv/pakalpojumi#razosanas-eku-demontaza",
  },
  {
    image: zemesDarbi,
    title: "Zemes darbi",
    description: "Rakšana un grunts izlīdzināšana, pamatu sagatavošana un drenāža.",
    href: "/lv/pakalpojumi#zemes-darbi",
  },
  {
    image: labiekartosana,
    title: "Labiekārtošana",
    description: "Ceļu un laukumu izbūve, ainavu labiekārtošana un zaļo zonu izveide pēc demontāžas.",
    href: "/lv/pakalpojumi#labiekartosana",
  },
  {
    image: buvgruzuIzvesana,
    title: "Būvgružu izvešana un utilizācija",
    description: "Būvgružu savākšana, transportēšana un utilizācija atbilstoši vides aizsardzības normām.",
    href: "/lv/pakalpojumi#buvgruzu-izvesana",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-[#F6F7FB] py-12 md:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-10 lg:px-0">
        <h2 className="font-mono text-3xl font-bold leading-tight text-[#0F172A] md:text-[42px] lg:text-[52px]">
          Mūsu pakalpojumi
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:auto-rows-[1fr]">
          {services.map((service) => (
            <div key={service.href} className={service.featured ? "lg:row-span-2 lg:h-full" : ""}>
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
                href={service.href}
                size={service.featured ? "tall" : "default"}
                imageHeight={service.imageHeight}
                fixed={!service.featured}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
