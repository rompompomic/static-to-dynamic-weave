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
  const [featured, ...others] = services;
  const middleColumn = others.slice(0, 2);
  const rightColumn = others.slice(2);

  return (
    <section className="w-full bg-[#F5F7FA] py-12 md:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <h2 className="font-mono text-3xl font-bold leading-tight text-[#0F172A] md:text-[42px] lg:text-[52px]">
          Mūsu pakalpojumi
        </h2>

        <div className="mt-10 hidden gap-8 lg:grid lg:grid-cols-[1.45fr_1fr_1fr]">
          <ServiceCard
            image={featured.image}
            title={featured.title}
            description={featured.description}
            href={featured.href}
            size="tall"
            imageHeight="h-[320px] md:h-[360px] lg:h-[540px]"
          />

          <div className="flex flex-col gap-8">
            {middleColumn.map((service) => (
              <ServiceCard
                key={service.href}
                image={service.image}
                title={service.title}
                description={service.description}
                href={service.href}
                imageHeight="h-[220px] md:h-[230px] lg:h-[240px]"
              />
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {rightColumn.map((service) => (
              <ServiceCard
                key={service.href}
                image={service.image}
                title={service.title}
                description={service.description}
                href={service.href}
                imageHeight="h-[220px] md:h-[230px] lg:h-[240px]"
              />
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          {services.map((service) => (
            <ServiceCard
              key={service.href}
              image={service.image}
              title={service.title}
              description={service.description}
              href={service.href}
              fixed
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
