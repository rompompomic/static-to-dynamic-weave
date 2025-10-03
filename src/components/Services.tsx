import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      id: 1,
      image: "https://c.animaapp.com/mgb0i1n04Vr9F3/img/frame-11.png",
      title: "Būvju un ēku demontāža",
      description: "kādus objektus nojaucam, kā notiek process.",
      height: "tall" as const,
      variant: "default" as const,
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mgb0i1n04Vr9F3/img/frame-11-1.png",
      title: "Būvju un ēku demontāža",
      description: "kādus objektus nojaucam, kā notiek process.",
      height: "short" as const,
      variant: "default" as const,
    },
    {
      id: 3,
      image: "https://c.animaapp.com/mgb0i1n04Vr9F3/img/frame-11-2.png",
      title: "Būvju un ēku demontāža",
      description: "kādus objektus nojaucam, kā notiek process.",
      height: "short" as const,
      variant: "accent" as const,
      showCursor: true,
    },
    {
      id: 4,
      image: "https://c.animaapp.com/mgb0i1n04Vr9F3/img/frame-11-3.png",
      title: "Būvju un ēku demontāža",
      description: "kādus objektus nojaucam, kā notiek process.",
      height: "short" as const,
      variant: "default" as const,
    },
    {
      id: 5,
      image: "https://c.animaapp.com/mgb0i1n04Vr9F3/img/frame-11-4.png",
      title: "Būvju un ēku demontāža",
      description: "kādus objektus nojaucam, kā notiek process.",
      height: "short" as const,
      variant: "default" as const,
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-8 md:mb-12 lg:mb-[94px] animate-fade-in">
          Mūsu pakalpojumi
        </h2>

        {/* Mobile & Tablet Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-[29px]">
          {/* First column - tall card */}
          <div className="flex flex-col">
            <ServiceCard {...services[0]} />
          </div>

          {/* Second column - two short cards stacked */}
          <div className="flex flex-col gap-[29px]">
            <ServiceCard {...services[1]} />
            <ServiceCard {...services[2]} />
          </div>

          {/* Third column - two short cards stacked */}
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
