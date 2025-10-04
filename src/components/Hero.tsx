import React from "react";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";

// та же декоративная полоска, что и раньше
const VECTOR_SRC = "https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-3.svg";

const Stats = () => (
  <div className="mt-8 pt-6 border-t border-white/20">
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-[120px]">
      <div className="flex flex-col gap-1">
        <span className="font-mono font-bold text-white text-4xl md:text-[50px] leading-normal">120+</span>
        <span className="font-sans text-white text-sm md:text-base leading-normal">Pabeigti projekti</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-mono font-bold text-white text-4xl md:text-[50px] leading-normal">32</span>
        <span className="font-sans text-white text-sm md:text-base leading-normal">Profesionāļi komandā</span>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section
      className="
        relative w-full overflow-hidden
        md:min-h-[635px] md:bg-gradient-hero     /* десктоп: как было */
      "
    >
      {/* === КАРТИНКА === */}
      <div className="relative md:absolute md:inset-0 z-0 flex justify-end">
        <img
          src={heroImage}
          alt="Construction site"
          className="
            h-[320px] w-[110%] -translate-x-[5%]      /* мобилка: шире и чуть сдвигаем влево, чтобы скрыть фон */
            object-cover object-center
            md:h-full md:w-auto md:translate-x-0      /* десктоп: без искажений как раньше */
          "
        />
        {/* затемнение только на мобилке для читаемости оверлея */}
        <div className="absolute inset-0 bg-black/45 md:hidden" />

        {/* Мобильный заголовок поверх картинки */}
        <div className="md:hidden absolute left-4 right-4 bottom-5">
          <h1 className="font-mono font-bold text-white text-[28px] leading-tight">
            Jūsu uzticams<br />partneris būvniecībā
          </h1>
        </div>
      </div>

      {/* === ГОРИЗОНТАЛЬНАЯ ПОЛОСКА НА МОБИЛКЕ (лежит на картинке) === */}
      <div className="relative md:hidden -mt-[34px] z-10">
        <img
          src={VECTOR_SRC}
          alt="decorative stripe"
          className="w-full h-[56px] object-cover"
          /* красим, не трогая прозрачность PNG */
          style={{
            filter:
              "invert(47%) sepia(85%) saturate(362%) hue-rotate(128deg) brightness(92%) contrast(90%)",
          }}
        />
      </div>

      {/* === ПРАВАЯ ЧЁРНАЯ ПОЛОСА (ДЕСКТОП, как было) === */}
      <img
        src={VECTOR_SRC}
        alt=""
        className="hidden lg:block absolute right-0 top-0 z-20 h-full w-[131px] object-cover pointer-events-none"
      />

      {/* === КОНТЕНТ === */}
      {/* Мобилка: отдельный закрашенный блок под полоской */}
      <div className="md:hidden relative z-20 bg-gradient-hero">
        <div className="container mx-auto px-4 py-8">
          <p className="font-sans text-white text-base leading-relaxed mb-6">
            Mūsu būvniecības uzņēmums piedāvā augstas kvalitātes pakalpojumus, kas aptver visu būvniecības procesu – no
            sākotnējām idejām līdz gataviem projektiem.
          </p>
          <button className="inline-flex justify-center gap-2.5 px-6 py-3 bg-white items-center hover:bg-opacity-90 transition-all">
            <span className="font-sans font-bold text-primary text-sm">Uzzināt vairāk</span>
            <ArrowUpRight className="w-5 h-5 text-primary" />
          </button>
          <Stats />
        </div>
      </div>

      {/* Десктоп: исходный текстовый блок слева + статистика (как было) */}
      <div className="hidden md:block relative z-10">
        <div className="container mx-auto px-8 lg:px-[75px] py-20 max-w-[630px]">
          <h1 className="font-mono font-bold text-white text-4xl lg:text-[50px] leading-normal">
            Jūsu uzticams partneris būvniecībā
          </h1>
          <p className="mt-6 font-sans text-white text-lg leading-relaxed">
            Mūsu būvniecības uzņēmums piedāvā augstas kvalitātes pakalpojumus, kas aptver visu būvniecības procesu – no
            sākotnējām idejām līdz gataviem projektiem.
          </p>
          <button className="mt-8 inline-flex justify-center gap-2.5 px-8 py-4 bg-white items-center hover:bg-opacity-90 transition-all">
            <span className="font-sans font-bold text-primary">Uzzināt vairāk</span>
            <ArrowUpRight className="w-6 h-6 text-primary" />
          </button>
          <div className="max-w-[634px]">
            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
