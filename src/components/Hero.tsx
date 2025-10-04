import React from "react";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";
import heroStrip from "@/assets/hero-strip.svg"; // ← вернули svg-полоску

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden md:min-h-[635px] bg-gradient-hero">
      {/* === DESKTOP image справа === */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-[52%] z-0">
        <img src={heroImage} alt="Construction site" className="w-full h-full object-cover" />
      </div>

      {/* === MOBILE image сверху, растянута и затемнена === */}
      <div className="md:hidden relative z-0">
        <img
          src={heroImage}
          alt="Construction site"
          className="h-[300px] w-[118%] -translate-x-[9%] object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-x-0 top-7 flex justify-center px-6">
          <h1 className="font-mono font-bold text-white text-[28px] leading-tight text-center">
            Jūsu uzticams
            <br />
            partneris būvniecībā
          </h1>
        </div>
      </div>

      {/* Чёрная фигурная полоса справа (DESKTOP) */}
      <img
        src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-3.svg"
        alt=""
        className="hidden lg:block absolute right-0 top-0 z-20 h-full w-[131px] object-cover pointer-events-none"
      />

      {/* === MOBILE: полоска с БОЛЬШИМ заусенцем поверх фото === */}
      {/* Используем hero-strip.svg как mask-image и льём тот же градиент фоном */}
      <div
        className="md:hidden relative z-10 -mt-7 h-[74px] w-full"
        style={{
          background: "var(--gradient-hero)",
          WebkitMaskImage: `url(${heroStrip})`,
          maskImage: `url(${heroStrip})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      />

      {/* === Контент === */}
      {/* MOBILE: закрашенный блок тем же градиентом, чтобы с полоской был один цвет */}
      <div className="md:hidden relative z-10 bg-gradient-hero">
        <div className="container mx-auto px-4 py-8">
          <p className="font-sans text-white text-base leading-relaxed mb-6">
            Mūsu būvniecības uzņēmums piedāvā augstas kvalitātes pakalpojumus, kas aptver visu būvniecības procesu – no
            sākotnējām idejām līdz gataviem projektiem.
          </p>
          <button className="inline-flex justify-center gap-2.5 px-6 py-3 bg-white items-center hover:bg-opacity-90 transition-all">
            <span className="font-sans font-bold text-primary text-sm">Uzzināt vairāk</span>
            <ArrowUpRight className="w-5 h-5 text-primary" />
          </button>

          {/* Статистика */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <span className="font-mono font-bold text-white text-4xl leading-none">120+</span>
                <span className="font-sans text-white text-sm">Pabeigti projekti</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono font-bold text-white text-4xl leading-none">32</span>
                <span className="font-sans text-white text-sm">Profesionāļi komandā</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP: контент слева (как был) */}
      <div className="hidden md:block relative z-10">
        <div className="container mx-auto px-8 lg:px-[75px] py-20">
          <div className="max-w-[630px]">
            <h1 className="font-mono font-bold text-white text-4xl lg:text-[50px] leading-tight">
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

            {/* Статистика и короткая линия */}
            <div className="mt-12 pt-6 border-t border-white/20 max-w-[634px]">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
