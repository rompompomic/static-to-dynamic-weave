import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      id: 1,
      image: "https://c.animaapp.com/mgb0i1n04Vr9F3/img/frame-11.png",
      title: "Būvju un ēku demontāža",
      description:
        "Dažāda tipa ēku demontāža droši un efektīvi, ar mūsdienīgu tehniku un normatīvu ievērošanu.",
      height: "tall" as const,
      variant: "default" as const,
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mgb0i1n04Vr9F3/img/frame-11-1.png",
      title: "Ražošanas ēku demontāža",
      description:
        "Specifika industriālām konstrukcijām: rūpīga plānošana, izjaukšana, būvgružu utilizācija.",
      height: "short" as const,
      variant: "default" as const,
    },
    {
      id: 3,
      image: "https://c.animaapp.com/mgb0i1n04Vr9F3/img/frame-11-2.png",
      title: "Zemes darbi",
      description:
        "Rakšana, grunts izlīdzināšana, pamatu sagatavošana, drenāža un teritorijas stabilizācija.",
      height: "short" as const,
      variant: "accent" as const,
      showCursor: true,
    },
    {
      id: 4,
      image: "https://c.animaapp.com/mgb0i1n04Vr9F3/img/frame-11-3.png",
      title: "Labiekārtošana",
      description:
        "Ceļu un laukumu izbūve, ainavu labiekārtošana un zaļo zonu izveide pēc demontāžas.",
      height: "short" as const,
      variant: "default" as const,
    },
    // ✅ Новая услуга — вывоз и утилизация строительных отходов
    {
      id: 5,
      image:
        // можно заменить на свой ассет; временно ставлю плейсхолдер с индустриальным кадром
        "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1200&auto=format&fit=crop",
      title: "Būvgružu izvešana un utilizācija",
      description:
        "Būvgružu savākšana, transportēšana un utilizācija atbilstoši vides aizsardzības normām. Pēc darbiem nodrošinām tīru un drošu teritoriju.",
      height: "short" as const,
      variant: "default" as const,
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-6 md:mb-8 animate-fade-in">
          Mūsu pakalpojumi
        </h2>

        <p className="font-sans text-foreground text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-4xl animate-fade-in">
          Mēs piedāvājam plašu demontāžas un zemes darbu klāstu – no dzīvojamo
          ēku nojaukšanas līdz industriālām būvēm un labiekārtošanai.
        </p>

        {/* Mobile & Tablet Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-[29px]">
          {/* 1-я колонка — одна высокая карточка */}
          <div className="flex flex-col">
            <ServiceCard {...services[0]} />
          </div>

          {/* 2-я колонка — две короткие */}
          <div className="flex flex-col gap-[29px]">
            <ServiceCard {...services[1]} />
            <ServiceCard {...services[2]} />
          </div>

          {/* 3-я колонка — две короткие (старая + новая) */}
          <div className="flex flex-col gap-[29px]">
            <ServiceCard {...services[4]} />
            <ServiceCard {...services[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
