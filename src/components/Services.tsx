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
    <section className="relative w-full py-16 px-[75px]">
      <h2 className="font-mono font-bold text-foreground text-[50px] leading-normal mb-[94px]">
        Mūsu pakalpojumi
      </h2>

      <div className="relative w-full min-h-[769px]">
        {/* First column - tall card */}
        <div className="absolute top-0 left-0">
          <ServiceCard {...services[0]} />
        </div>

        {/* Second column - two short cards stacked */}
        <div className="absolute top-0 left-[440px] flex flex-col gap-[29px]">
          <ServiceCard {...services[1]} />
          <ServiceCard {...services[2]} />
        </div>

        {/* Third column - two short cards stacked */}
        <div className="absolute top-0 left-[880px] flex flex-col gap-[29px]">
          <ServiceCard {...services[3]} />
          <ServiceCard {...services[4]} />
        </div>
      </div>
    </section>
  );
};

export default Services;
