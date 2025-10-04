import { ArrowUpRight } from "lucide-react";
import React from "react";
import heroImage from "@/assets/hero-image.webp";

interface HeroProps {
  children?: React.ReactNode;
  /** "none" = без затемнения; "always" = всегда; "mobile" = только на мобилке */
  overlayMode?: "none" | "always" | "mobile";
  /** Показать блок со статистикой */
  withStats?: boolean;
}

const Stats = () => (
  <div className="mt-6 pt-4 border-t border-white/20">
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
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
);

const Hero = ({ children, overlayMode = "mobile", withStats = true }: HeroProps) => {
  return (
    <section className="relative w-full bg-gradient-hero overflow-hidden">

      {/* ========== MOBILE VERSION ========== */}
      <div className="md:hidden">
        {/* 1) Картинка с заголовком */}
        <div className="relative w-full">
          <img
            src={heroImage}
            alt="Construction site"
            className="w-full h-[300px] object-cover"
          />
          {(overlayMode === "always" || overlayMode === "mobile") && (
            <div className="absolute inset-0 bg-black/50" />
          )}

          {/* Заголовок поверх фото */}
          <div className="absolute inset-x-4 bottom-4">
            <h1 className="font-mono font-bold text-white text-3xl leading-tight">
              Jūsu uzticams partneris būvniecībā
            </h1>
          </div>
        </div>

        {/* 2) Закрашенный блок, который заходит на фото + заусенец */}
        <div className="-mt-3 relative z-10">
          <div className="relative bg-gradient-hero text-white px-4 py-6">
            {/* Заусенец (вверх) — та же заливка, ложится на фото */}
            <div
              className="absolute -top-3 left-0 right-0 h-3"
              style={{
                background: "var(--gradient-hero)",
                // центральный «пик» вверх
                clipPath:
                  "polygon(0% 100%, 42% 100%, 46% 35%, 50% 0%, 54% 35%, 58% 100%, 100% 100%, 100% 0%, 0% 0%)",
              }}
            />

            {/* Контент блока: описание/кнопки/статы */}
            <div className="max-w-[600px]">
              {children ? (
                children
              ) : (
                <>
                  <p className="font-sans text-white/95 text-base leading-relaxed mb-4">
                    Mūsu būvniecības uzņēmums piedāvā augstas kvalitātes pakalpojumus,
                    kas aptver visu būvniecības procesu – no sākotnējām idejām līdz
                    gataviem projektiem.
                  </p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold hover:bg-white/90 transition">
                    Uzzināt vairāk
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                  {withStats && <Stats />}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ========== DESKTOP / TABLET VERSION (как было) ========== */}
      <div className="hidden md:block relative min-h-[635px]">
        {/* Картинка фоном справа */}
        <div className="absolute inset-0 z-0 flex justify-end">
          <img
            src={heroImage}
            alt="Construction site"
            className="object-cover object-center w-auto h-full"
          />
          {overlayMode === "always" && <div className="absolute inset-0 bg-black/50" />}
        </div>

        {/* Правая декоративная полоса */}
        <img
          src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-3.svg"
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
              Mūsu būvniecības uzņēmums piedāvā augstas kvalitātes pakalpojumus, kas aptver visu būvniecības procesu – no
              sākotnējām idejām līdz gataviem projektiem.
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
