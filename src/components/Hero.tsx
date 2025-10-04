import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-hero overflow-hidden">
      <div className="flex flex-col md:block">
        {/* Картинка */}
        <div className="relative w-full md:absolute md:inset-0 md:flex md:justify-end">
          <img
            src={heroImage}
            alt="Construction site"
            className="
              w-full h-[250px] sm:h-[320px] object-cover
              md:h-full md:w-auto
            "
          />
          {/* затемнение только на мобилках */}
          <div className="absolute inset-0 bg-black/50 md:hidden" />
        </div>

        {/* Контент */}
        <div
          className="
            relative z-10 container mx-auto px-4 md:px-8 lg:px-[75px] py-10 md:py-20
            bg-gradient-hero
            md:bg-transparent
          "
          style={{
            clipPath: "polygon(0 20px, 50% 0, 100% 20px, 100% 100%, 0 100%)",
          }}
        >
          <div className="max-w-full md:max-w-[430px] flex flex-col items-start gap-6 md:gap-8 animate-fade-in">
            <h1 className="font-mono font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight">
              Jūsu uzticams partneris būvniecībā
            </h1>

            <p className="font-sans font-normal text-white text-base sm:text-lg leading-relaxed">
              Mūsu būvniecības uzņēmums piedāvā augstas kvalitātes pakalpojumus,
              kas aptver visu būvniecības procesu – no sākotnējām idejām līdz
              gataviem projektiem.
            </p>

            <button className="mt-4 inline-flex justify-center gap-2.5 px-6 py-3 bg-white items-center hover:bg-opacity-90 transition-all">
              <span className="font-sans font-bold text-primary text-sm md:text-base">
                Uzzināt vairāk
              </span>
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </button>

            {/* Статистика */}
            <div className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-white/20 w-full">
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-[80px]">
                <div className="flex flex-col gap-1">
                  <span className="font-mono font-bold text-white text-3xl sm:text-4xl md:text-[50px]">
                    120+
                  </span>
                  <span className="font-sans text-white text-sm md:text-base">
                    Pabeigti projekti
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono font-bold text-white text-3xl sm:text-4xl md:text-[50px]">
                    32
                  </span>
                  <span className="font-sans text-white text-sm md:text-base">
                    Profesionāļi komandā
                  </span>
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
