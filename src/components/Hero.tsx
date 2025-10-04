import { ArrowUpRight } from "lucide-react";
import React from "react";
import heroImage from "@/assets/hero-image.webp";

// Горизонтальная полоска (та же картинка, что и была)
const VECTOR_SRC =
  "https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-3.svg";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[635px] bg-gradient-hero overflow-hidden">
      {/* Картинка */}
      <div className="relative md:absolute md:inset-0 z-0 flex justify-end">
        <img
          src={heroImage}
          alt="Construction site"
          className="
            h-[320px] w-[110%] -translate-x-[5%]         /* мобилка: чуть шире и смещаем влево */
            object-cover object-center
            md:h-full md:w-auto md:translate-x-0        /* десктоп: как было, без искажений */
          "
        />
        {/* затемнение только на мобилке */}
        <div className="absolute inset-0 bg-black/50 md:hidden" />
      </div>

      {/* Мобильная горизонтальная полоска поверх фото */}
      <div className="relative md:hidden -mt-[40px] z-10">
        <img
          src={VECTOR_SRC}
          alt="decorative stripe"
          className="w-full h-[60px] object-cover"
          /* красим в основной цвет, не заливая прозрачности */
          style={{
            filter:
              "invert(47%) sepia(85%) saturate(362%) hue-rotate(128deg) brightness(92%) contrast(90%)",
          }}
        />
      </div>

      {/* Десктопная правая чёрная полоса (вернули как было, и НЕ трогаем) */}
      <img
        src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-3.svg"
        alt=""
        className="hidden lg:block absolute right-0 top-0 z-20 h-full w-[131px] object-cover pointer-events-none"
      />

      {/* Контент */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-[75px] py-8 md:py-20">
        <div className="max-w-full md:max-w-[430px] flex flex-col items-start gap-6 md:gap-8">
          <h1 className="font-mono font-bold text-white text-3xl md:text-4xl lg:text-[50px] leading-tight md:leading-normal">
            Jūsu uzticams partneris būvniecībā
          </h1>
          <p className="font-sans text-white text-base md:text-lg leading-relaxed">
            Mūsu būvniecības uzņēmums piedāvā augstas kvalitātes pakalpojumus, kas aptver visu būvniecības procesu – no
            sākotnējām idejām līdz gataviem projektiem.
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
