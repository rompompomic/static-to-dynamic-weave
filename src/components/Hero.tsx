import React from "react";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";
import heroStrip from "@/assets/hero-strip.svg"; // ← добавьте svg/ png полоски в /assets

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
    <section className="relative w-full overflow-hidden md:min-h-[635px] md:bg-gradient-hero">
      {/* IMAGE */}
      <div className="relative md:absolute md:inset-0 z-0 flex justify-end">
        <img
          src={heroImage}
          alt="Construction site"
          className="
            h-[320px] w-[120%] -translate-x-[10%]         /* шире и сдвигаем влево на мобилке */
            object-cover object-center
            md:h-full md:w-auto md:translate-x-0
          "
        />
        {/* затемнение только на мобилке */}
        <div className="absolute inset-0 bg-black/45 md:hidden" />

        {/* Заголовок на фото — поднят выше */}
        <div className="md:hidden absolute left-4 right-4 top-6">
          <h1 className="font-mono font-bold text-white text-[28px] leading-tight">
            Jūsu uzticams<br />partneris būvniecībā
          </h1>
        </div>
      </div>

      {/* ==== ГОРИЗОНТАЛЬНАЯ ПОЛОСКА (маска) — ЛЕЖИТ НА ФОТО ==== */}
      <div
        className="md:hidden relative z-10 h-[56px] -mt-[22px] w-full"
        style={{
          background: "var(--gradient-hero)",            // цвет/градиент блока
          WebkitMaskImage: `url(${heroStrip})`,           // маска для Safari/iOS
          maskImage: `url(${heroStrip})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskSize: "cover",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />

      {/* ПРАВАЯ ЧЁРНАЯ ПОЛОСА (десктоп — как было) */}
      <img
        src={heroStrip}
        alt=""
        className="hidden lg:block absolute right-0 top-0 z-20 h-full w-[131px] object-cover pointer-events-none"
        style={{
          // на десктопе не меняем цвет — оставляем как было
          filter: "none",
        }}
      />

      {/* КОНТЕНТ: мобилка — закрашенный блок под полоской; десктоп — как было */}
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
