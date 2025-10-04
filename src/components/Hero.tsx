import { ArrowUpRight } from "lucide-react";
import React from "react";
import heroImage from "@/assets/hero-image.webp";

// исходная «полоска» (PNG/SVG) — с прозрачностями
const STRIPE_MASK =
  "https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-3.svg";

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-hero overflow-hidden">
      {/* Фото — растянуто на мобилке, без смещения */}
      <div className="relative md:absolute md:inset-0 z-0 flex justify-end">
        <img
          src={heroImage}
          alt="Construction site"
          className="
            w-full h-[320px] md:h-full
            object-cover object-center
            scale-[1.12] md:scale-100  /* растянули на мобилке */
            origin-center
          "
        />
        {/* затемнение только на мобилке */}
        <div className="absolute inset-0 bg-black/50 md:hidden" />
      </div>

      {/* Горизонтальная полоска, лежит на фото, окраска = цвет блока, PNG не заливается */}
      <div
        className="
          relative md:hidden z-10
          w-full h-[64px] -mt-[40px]
        "
        style={{
          // красим градиентом блока
          background: "var(--gradient-hero)",
          // используем картинку как маску, чтобы не красить прямоугольником
          WebkitMaskImage: `url(${STRIPE_MASK})`,
          maskImage: `url(${STRIPE_MASK})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskSize: "cover",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
        aria-hidden
      />

      {/* Правая декоративная полоса на десктопе — как было */}
      <img
        src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-3.svg"
        alt=""
        className="hidden lg:block absolute right-0 top-0 z-20 h-full w-[131px] object-cover pointer-events-none"
      />

      {/* Контент под полоской */}
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
