import React from "react";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden md:min-h-[635px] bg-gradient-hero">
      {/* === IMAGE === */}
      {/* Desktop */}
      <div className="hidden md:flex absolute inset-y-0 right-0 z-0 justify-end">
        <img
          src={heroImage}
          alt="Construction site"
          className="h-full w-auto object-cover object-center" 
          // ✅ высота равна блоку, ширина авто → не растягивается
        />
      </div>

      {/* Mobile */}
      <div className="md:hidden relative z-0">
        <img
          src={heroImage}
          alt="Construction site"
          className="h-[300px] w-[115%] -translate-x-[7%] object-cover object-center" 
          // ✅ растягиваем ширину, чтобы не было полей
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Заголовок */}
        <div className="absolute inset-0 flex items-center z-10">
          <h1 className="font-mono font-bold text-white text-[28px] leading-tight px-4">
            Jūsu uzticams
            <br />
            partneris būvniecībā
          </h1>
        </div>
      </div>

      {/* Правая чёрная декоративная полоса (desktop only) */}
      <img
        src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-3.svg"
        alt=""
        className="hidden lg:block absolute right-0 top-0 z-20 h-full w-[131px] object-cover pointer-events-none"
      />

      {/* === Контент (desktop & mobile blocks как у тебя) === */}
      {/* ... оставляю как есть ... */}
    </section>
  );
};

export default Hero;
