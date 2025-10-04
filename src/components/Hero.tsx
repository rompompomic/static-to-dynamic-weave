import React from "react";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";
import heroStrip from "@/assets/hero-strip.svg";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden md:min-h-[635px] bg-gradient-hero">
      {/* === IMAGE: desktop (правый край), mobile (вверху) === */}
      {/* Desktop */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-[52%] z-0">
        <img
          src={heroImage}
          alt="Construction site"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile */}
      <div className="md:hidden relative z-0">
        <img
          src={heroImage}
          alt="Construction site"
          className="h-[300px] w-[112%] -translate-x-[6%] object-cover object-center"
        />
        {/* затемнение только на мобилке */}
        <div className="absolute inset-0 bg-black/45" />
        {/* Заголовок на фото — выше */}
        <div className="absolute left-4 right-4 top-6 z-10">
          <h1 className="font-mono font-bold text-white text-[28px] leading-tight">
            Jūsu uzticams
            <br />
            partneris būvniecībā
          </h1>
        </div>
      </div>

      {/* Правая чёрная декоративная полоса (ДЕСКТОП, не трогаем) */}
      <img
        src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-3.svg"
        alt=""
        className="hidden lg:block absolute right-0 top-0 z-20 h-full w-[131px] object-cover pointer-events-none"
      />

      {/* === MOBILE: горизонтальная «полоска с заусенцем» поверх картинки === */}
      <img
        src={heroStrip}
        alt=""
        className="md:hidden relative z-10 -mt-8 w-full"
        style={{ transform: "scaleY(-1)" }}
      />

      {/* === Контент (desktop слева; mobile — закрашенный блок) === */}
      <div className="relative z-10">
        {/* Mobile: под полоской отдельный закрашенный блок тем же градиентом */}
        <div className="md:hidden bg-gradient-hero -mt-px">
          <div className="container mx-auto px-4 py-8">
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

            {/* Статистика */}
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

        {/* Desktop: ничего не центрируем — контент слева, как раньше */}
        <div className="hidden md:block">
          <div className="container mx-auto px-8 lg:px-[75px] py-20">
            <div className="max-w-[630px]">
              <h1 className="font-mono font-bold text-white text-4xl lg:text-[50px] leading-tight">
                Jūsu uzticams partneris būvniecībā
              </h1>
              <p className="mt-6 font-sans text-white text-lg leading-relaxed">
                Mūsu būvniecības uzņēmums piedāvā augstas kvalitātes pakalpojumus,
                kas aptver visu būvniecības procesu – no sākotnējām idejām līdz
                gataviem projektiem.
              </p>
              <button className="mt-8 inline-flex justify-center gap-2.5 px-8 py-4 bg-white items-center hover:bg-opacity-90 transition-all">
                <span className="font-sans font-bold text-primary">
                  Uzzināt vairāk
                </span>
                <ArrowUpRight className="w-6 h-6 text-primary" />
              </button>

              {/* Статистика (короткая линия, не «во всю ширину») */}
              <div className="mt-12 pt-6 border-t border-white/20 max-w-[634px]">
                <div className="flex gap-[120px]">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono font-bold text-white text-[50px] leading-none">
                      120+
                    </span>
                    <span className="font-sans text-white">Pabeigti projekti</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono font-bold text-white text-[50px] leading-none">
                      32
                    </span>
                    <span className="font-sans text-white">
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
