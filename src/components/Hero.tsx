import React from "react";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";
import heroStrip from "@/assets/hero-strip.svg"; // оставил, если понадобится позже

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden md:min-h-[635px] bg-gradient-hero">
      {/* === IMAGE: desktop (справа, без растяжения), mobile (вверху, тянем по ширине) === */}
      {/* Desktop */}
      <div className="hidden md:flex absolute inset-y-0 right-0 z-0 justify-end">
        {/* h-full = по высоте секции; w-auto = ширина по пропорциям → НЕ растягиваем */}
        <img
          src={heroImage}
          alt="Construction site"
          className="h-full w-auto object-cover object-center"
        />
      </div>

      {/* Mobile */}
      <div className="md:hidden relative z-0">
        {/* Шире контейнера и немного сдвинуто влево → без пустых полей по бокам */}
        <img
          src={heroImage}
          alt="Construction site"
          className="h-[300px] w-[115%] -translate-x-[7%] object-cover object-center"
        />
        {/* затемнение только на мобилке */}
        <div className="absolute inset-0 bg-black/45" />
        {/* Заголовок на фото — слева по горизонтали, по центру по вертикали */}
        <div className="absolute inset-0 flex items-center z-10">
          <h1 className="font-mono font-bold text-white text-[28px] leading-tight px-4">
            Jūsu uzticams
            <br />
            partneris būvniecībā
          </h1>
        </div>
      </div>

      {/* Правая чёрная декоративная полоса (десктоп) — как было */}
      <img
        src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-3.svg"
        alt=""
        className="hidden lg:block absolute right-0 top-0 z-20 h-full w-[131px] object-cover pointer-events-none"
      />

      {/* === Контент (desktop слева; mobile — закрашенный блок с заусенцем) === */}
      <div className="relative z-10">
        {/* Mobile: блок с «заусенцем» (отрисовываем клип-фигурой) */}
        <div
          className="md:hidden bg-gradient-hero"
          style={{
            clipPath:
              "polygon(0 56px, 27% 56px, 37% 10px, 63% 10px, 73% 56px, 100% 56px, 100% 100%, 0 100%)",
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

        {/* Desktop: контент слева, как раньше */}
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

              {/* Статистика (desktop, укороченная линия) */}
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
