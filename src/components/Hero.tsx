import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[635px] bg-gradient-hero overflow-hidden">
      {/* IMAGE: без искажений, прижат к правому краю */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <img
          src={heroImage}
          alt="Construction site"
          className="
            object-cover object-center
            w-full h-auto
            md:h-full md:w-auto
          "
        />
      </div>

      {/* Правая чёрная полоска прижата к правому краю, поверх картинки */}
      <img
        src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-3.svg"
        alt=""
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-20 w-[131px] h-[812px] pointer-events-none"
      />

      {/* Контент */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-[75px] py-12 md:py-20">
        <div className="max-w-full md:max-w-[630px] flex flex-col items-start gap-6 md:gap-8 animate-fade-in">
          <h1 className="font-mono font-bold text-white text-3xl md:text-4xl lg:text-[50px] leading-tight md:leading-normal">
            Jūsu uzticams partneris būvniecībā
          </h1>

          <p className="font-sans font-normal text-white text-base md:text-lg leading-relaxed">
            Mūsu būvniecības uzņēmums piedāvā augstas kvalitātes pakalpojumus, kas aptver visu būvniecības procesu – no sākotnējām idejām līdz gataviem projektiem.
          </p>

          <button className="inline-flex justify-center gap-2.5 px-6 md:px-8 py-3 md:py-4 bg-white items-center hover:bg-opacity-90 transition-all">
            <span className="font-sans font-bold text-primary text-sm md:text-base">
              Uzzināt vairāk
            </span>
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </button>

          {/* Статистика */}
          <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/20 w-full">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
