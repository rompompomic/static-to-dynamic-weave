import { ArrowUpRight } from "lucide-react";
import React from "react";
import heroImage from "@/assets/hero-image.webp";

// импорт PNG/SVG полоски
const VECTOR_SRC =
  "https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-3.svg";

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-hero overflow-hidden">
      {/* Картинка */}
      <div className="relative md:absolute md:inset-0 z-0 flex justify-end">
        <img
          src={heroImage}
          alt="Construction site"
          className="
            w-[110%] -translate-x-[5%]  /* шире и сдвинута влево на мобилках */
            h-[320px] md:h-full
            object-cover object-center
            md:w-auto md:translate-x-0
          "
        />
        {/* затемнение только на мобилках */}
        <div className="absolute inset-0 bg-black/50 md:hidden" />
      </div>

      {/* Полоска (PNG/SVG), лежит поверх фото */}
      <div className="relative md:hidden -mt-[40px] z-10">
        <img
          src={VECTOR_SRC}
          alt="decorative stripe"
          className="w-full h-[60px] object-cover"
          style={{
            filter: "invert(47%) sepia(85%) saturate(362%) hue-rotate(128deg) brightness(92%) contrast(90%)",
          }}
        />
      </div>

      {/* Контент под полоской */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-[75px] py-8 md:py-20">
        <div className="max-w-full md:max-w-[430px] flex flex-col items-start gap-6 md:gap-8">
          <h1 className="font-mono font-bold text-white text-3xl md:text-4xl lg:text-[50px] leading-tight md:leading-normal">
            Jūsu uzticams partneris būvniecībā
          </h1>
          <p className="font-sans text-white text-base md:text-lg leading-relaxed">
            Mūsu būvniecības uzņēmums piedāvā augstas kvalitātes pakalpojumus,
            kas aptver visu būvniecības procesu – no sākotnējām idejām līdz
            gataviem projektiem.
          </p>
          <button className="inline-flex justify-center gap-2.5 px-6 md:px-8 py-3 md:py-4 bg-white items-center hover:bg-opacity-90 transition-all">
            <span className="font-sans font-bold text-primary text-sm md:text-base">
              Uzzināt vairāk
            </span>
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
