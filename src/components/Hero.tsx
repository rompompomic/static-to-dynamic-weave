import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[635px] bg-gradient-hero overflow-hidden">
      {/* Hero Image - Now visible on all screen sizes */}
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover opacity-40 md:opacity-100 md:w-[50%] lg:w-[685px] md:absolute md:right-0"
          src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/image.png"
          alt="Construction site"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-[75px] py-12 md:py-20">
        <div className="max-w-full md:max-w-[630px] flex flex-col items-start gap-6 md:gap-8 animate-fade-in">
          <h1 className="font-mono font-bold text-white text-3xl md:text-4xl lg:text-[50px] leading-tight md:leading-normal">
            Jūsu uzticams partneris būvniecībā
          </h1>
          
          <p className="font-sans font-normal text-white text-base md:text-lg leading-relaxed">
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

        {/* Stats Section - Responsive */}
        <div className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/20 max-w-full md:max-w-[634px]">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-[120px]">
            <div className="flex flex-col gap-1">
              <span className="font-mono font-bold text-white text-4xl md:text-[50px] leading-normal">
                120+
              </span>
              <span className="font-sans font-normal text-white text-sm md:text-base leading-normal">
                Pabeigti projekti
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono font-bold text-white text-4xl md:text-[50px] leading-normal">
                32
              </span>
              <span className="font-sans font-normal text-white text-sm md:text-base leading-normal">
                Profesionāļi komandā
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
