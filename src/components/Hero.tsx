import React from "react";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";
import heroStrip from "@/assets/hero-strip.svg";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden md:min-h-[635px] bg-gradient-hero">
      {/* Картинка справа (tablet+ / desktop) */}
      <div className="hidden md:flex absolute inset-y-0 right-0 z-0 justify-end md:w-[50%] lg:w-[52%] pointer-events-none select-none">
        <img
          src={heroImage}
          alt="Construction site"
          className="h-full w-auto object-cover object-center"
        />
      </div>

      {/* Мобилка (full-bleed) */}
      <div className="md:hidden relative z-0 -mx-4">
        <img
          src={heroImage}
          alt="Construction site"
          className="max-w-none w-[130vw] -translate-x-[15vw] h-[300px] object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div
          className="absolute inset-0 flex items-center z-10"
          style={{ paddingLeft: "max(env(safe-area-inset-left), 1rem)" }}
        >
          <h1 className="font-mono font-bold text-white text-[28px] leading-tight px-[10px]">
            Jūsu uzticams
            <br /> partneris būvniecībā
          </h1>
        </div>
      </div>

      {/* Полоса справа (tablet+) */}
      <img
        src={heroStrip}
        alt="Decorative stripe"
        className="hidden md:block absolute right-0 top-0 z-20 h-full w-[131px] object-cover pointer-events-none"
      />

      {/* Контент */}
      <div className="relative z-10">
        {/* Мобилка: блок с «заусенцем» */}
        <div
          className="md:hidden bg-gradient-hero"
          style={{
            clipPath:
              "polygon(0 56px, 18% 56px, 25% 36px, 75% 36px, 82% 56px, 100% 56px, 100% 100%, 0 100%)",
          }}
        >
          <div className="container mx-auto px-4 pb-8 pt-20 -mt-[56px]">
            <p className="font-sans text-white text-base leading-relaxed mb-6">
              Mūsu būvniecības uzņēmums piedāvā augstas kvalitātes pakalpojumus,
              kas aptver visu būvniecības procesu – no sākotnējām idejām līdz
              gataviem projektiem.
            </p>
            <button className="inline-flex justify-center gap-2.5 px-6 py-3 bg-white items-center hover:bg-opacity-90 transition-all">
              <span className="font-sans font-bold text-primary text-sm">
                Uzzināt vairāk
              </span>
              <ArrowUpRight className="w-5 h-5 text-primary" />
            </button>

            {/* Статистика (mobile) */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <span className="font-mono font-bold text-white text-4xl leading-none">
                    120+
                  </span>
                  <span className="font-sans text-white text-sm">
                    Pabeigti projekti
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono font-bold text-white text-4xl leading-none">
                    32
                  </span>
                  <span className="font-sans text-white text-sm">
                    Profesionāļi komandā
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet / Desktop */}
        <div className="hidden md:block">
          <div
            className="
              container mx-auto px-8 lg:px-[75px] max-w-[1920px]
              md:min-h-[635px] md:flex md:items-center
              md:pr-[calc(50%+96px)] lg:pr-[calc(52%+131px)]
            "
          >
            {/* ВАЖНО: fluid-ширина колонки + fluid-типографика */}
            <div className="
                w-full
                md:max-w-[clamp(440px,48vw,760px)]
                xl:max-w-[clamp(520px,46vw,820px)]
                2xl:max-w-[clamp(600px,44vw,900px)]
              ">
              <h1
                className="
                  font-mono font-bold text-white leading-[1.05]
                  text-[clamp(28px,4vw,50px)]
                "
              >
                Jūsu uzticams
                <br /> partneris būvniecībā
              </h1>

              <p
                className="
                  mt-6 font-sans text-white leading-relaxed
                  text-[clamp(16px,1.4vw,20px)]
                "
              >
                Mūsu būvniecības uzņēmums piedāvā augstas kvalitātes pakalpojumus,
                kas aptver visu būvniecības procesu – no sākotnējām idejām līdz
                gataviem projektiem.
              </p>

              <button
                className="
                  mt-8 group relative inline-flex items-center justify-center gap-2.5
                  h-11 px-6 md:px-8 rounded-lg
                  bg-white text-primary font-sans font-bold
                  shadow-sm hover:shadow-md transition ease-out duration-200
                  hover:scale-[1.02] active:scale-[0.97]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40
                  overflow-hidden
                  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r
                  before:from-transparent before:via-white/20 before:to-transparent
                  group-hover:before:translate-x-full before:transition-transform before:duration-700
                "
              >
                <span className="text-[clamp(14px,1.2vw,16px)]">Uzzināt vairāk</span>
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-primary transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </button>

              {/* Статистика (desktop) — та же fluid-ширина */}
              <div className="
                  mt-12 pt-6 border-t border-white/20
                  md:max-w-[clamp(440px,48vw,760px)]
                  xl:max-w-[clamp(520px,46vw,820px)]
                  2xl:max-w-[clamp(600px,44vw,900px)]
                ">
                <div className="flex gap-[min(8vw,120px)]">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono font-bold text-white leading-none text-[clamp(36px,3.2vw,50px)]">
                      120+
                    </span>
                    <span className="font-sans text-white text-[clamp(14px,1.1vw,16px)]">
                      Pabeigti projekti
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono font-bold text-white leading-none text-[clamp(36px,3.2vw,50px)]">
                      32
                    </span>
                    <span className="font-sans text-white text-[clamp(14px,1.1vw,16px)]">
                      Profesionāļi komandā
                    </span>
                  </div>
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
