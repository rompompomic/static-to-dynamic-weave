import React from "react";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";

const STRIP_SRC =
  "https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-3.svg";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden md:min-h-[635px] bg-gradient-hero">
      {/* DESKTOP картинка справа */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-[52%] z-0">
        <img
          src={heroImage}
          alt="Construction site"
          className="w-full h-full object-cover"
        />
      </div>

      {/* MOBILE картинка сверху */}
      <div className="md:hidden relative z-0">
        <img
          src={heroImage}
          alt="Construction site"
          className="h-[300px] w-[115%] -translate-x-[7%] object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Заголовок слева по центру */}
        <div className="absolute inset-y-0 left-4 right-4 flex items-center">
          <h1 className="font-mono font-bold text-white text-[28px] leading-tight text-left">
            Jūsu uzticams<br />partneris būvniecībā
          </h1>
        </div>

        {/* Полоска (повернутая горизонтально) */}
        <div className="absolute -bottom-[1px] left-0 w-full z-10">
          <img
            src={STRIP_SRC}
            alt="hero strip"
            className="w-full h-[70px] object-cover rotate-90"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(49%) sepia(81%) saturate(312%) hue-rotate(128deg) brightness(92%) contrast(90%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
