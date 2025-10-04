import { ArrowUpRight } from "lucide-react";
import React from "react";
import heroImage from "@/assets/hero-image.webp";

/** URL вашей полоски-«клюва» (тот же, что на десктопе, но повернём и перекрасим) */
const VECTOR_SRC = "https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-3.svg";

interface HeroProps {
  /** Затемнение: "none" | "always" | "mobile" */
  overlayMode?: "none" | "always" | "mobile";
  /** Показывать блок статистики */
  withStats?: boolean;
}

const Stats = () => (
  <div className="mt-6 md:mt-16 pt-4 md:pt-8 border-t border-white/20 max-w-full md:max-w-[634px]">
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-[120px]">
      <div className="flex flex-col gap-1">
        <span className="font-mono font-bold text-white text-4xl md:text-[50px] leading-none">120+</span>
        <span className="font-sans text-white text-sm md:text-base">Pabeigti projekti</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-mono font-bold text-white text-4xl md:text-[50px] leading-none">32</span>
        <span className="font-sans text-white text-sm md:text-base">Profesionāļi komandā</span>
      </div>
    </div>
  </div>
);

const Hero = ({ overlayMode = "mobile", withStats = true }: HeroProps) => {
  return (
    <section className="relative w-full bg-gradient-hero overflow-hidden">
      {/* ===== MOBILE ===== */}
      <div className="md:hidden">
        {/* 1) Фото + заголовок */}
        <div className="relative w-full">
          <img src={heroImage} alt="Construction site" className="w-full h-[300px] object-cover" />
          {(overlayMode === "always" || overlayMode === "mobile") && (
            <div className="absolute inset-0 bg-black/50" />
          )}
          <div className="absolute inset-x-4 bottom-4">
            <h1 className="font-mono font-bold text-white text-3xl leading-tight">
              Jūsu uzticams partneris būvniecībā
            </h1>
          </div>
        </div>

        {/* 2) Горизонтальная ПОЛОСА-КАРТИНКА (цвет = brand) */}
        <div className="relative -mt-1 h-[80px] z-10 pointer-events-none flex items-start justify-center">
          <div
            className="w-[220px] h-[80px] rotate-90"
            style={{
              // красим картинку через mask, фон — ваш фирменный градиент
              background: "var(--gradient-hero)",
              WebkitMaskImage: `url("${VECTOR_SRC}")`,
              maskImage: `url("${VECTOR_SRC}")`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
        </div>

        {/* 3) Контентный блок под полосой (закрашенный фон секции) */}
        <div className="px-4 py-6">
          <p className="font-sans text-white/95 text-base leading-relaxed mb-4">
            Mūsu būvniecības uzņēmums piedāvā augstas kvalitātes pakalpojumus, kas aptver visu būvniecības
            procesu – no sākotnējām idejām līdz gataviem projektiem.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold hover:bg-white/90 transition">
            Uzzināt vairāk
            <ArrowUpRight className="w-5 h-5" />
          </button>
          {withStats && <Stats />}
        </div>
      </div>

      {/* ===== DESKTOP / TABLET ===== */}
      <div className="hidden md:block relative min-h-[635px]">
        {/* Фото справа */}
        <div className="absolute inset-0 z-0 flex justify-end">
          <img src={heroImage} alt="Construction site" className="h-full w-auto object-cover object-center" />
          {overlayMode === "always" && <div className="absolute inset-0 bg-black/50" />}
        </div>

        {/* Вертикальная полоса как была */}
        <img
          src={VECTOR_SRC}
          alt=""
          className="hidden lg:block absolute right-0 top-0 z-20 h-full w-[131px] object-cover pointer-events-none"
        />

        {/* Контент слева */}
        <div className="relative z-10 container mx-auto px-8 lg:px-[75px] py-20">
          <div className="max-w-[430px] flex flex-col items-start gap-8">
            <h1 className="font-mono font-bold text-white text-4xl lg:text-[50px] leading-tight">
              Jūsu uzticams partneris būvniecībā
            </h1>
            <p className="font-sans text-white text-lg leading-relaxed">
              Mūsu būvniecības uzņēmums piedāvā augstas kvalitātes pakalpojumus, kas aptver visu būvniecības procesu –
              no sākotnējām idejām līdz gataviem projektiem.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold hover:bg-white/90 transition">
              Uzzināt vairāk
              <ArrowUpRight className="w-6 h-6" />
            </button>
            {withStats && (
              <div className="mt-16 pt-8 border-t border-white/20 max-w-[634px]">
                <div className="flex gap-[120px]">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono font-bold text-white text-[50px] leading-none">120+</span>
                    <span className="font-sans text-white">Pabeigti projekti</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono font-bold text-white text-[50px] leading-none">32</span>
                    <span className="font-sans text-white">Profesionāļi komandā</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
