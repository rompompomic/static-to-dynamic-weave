import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-[635px] bg-gradient-hero overflow-hidden">
      {/* Hero Image */}
      <img
        className="absolute top-0 right-0 w-[685px] h-full object-cover"
        src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/image.png"
        alt="Construction site"
      />

      {/* Decorative Vector */}
      <img
        className="absolute -top-[179px] right-[110px] w-[131px] h-[812px]"
        src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-3.svg"
        alt=""
      />

      {/* Hero Content */}
      <div className="absolute top-[80px] left-[75px] w-[630px] flex flex-col items-start gap-8">
        <h1 className="font-mono font-bold text-white text-[50px] leading-normal">
          Jūsu uzticams partneris būvniecībā
        </h1>
        
        <p className="font-sans font-normal text-white text-lg leading-normal">
          Mūsu būvniecības uzņēmums piedāvā augstas kvalitātes pakalpojumus, kas aptver visu būvniecības procesu – no
          sākotnējām idejām līdz gataviem projektiem.
        </p>

        <button className="inline-flex justify-center gap-2.5 px-8 py-4 bg-white items-center hover:bg-opacity-90 transition-all">
          <span className="font-sans font-bold text-primary text-base">
            Uzzināt vairāk
          </span>
          <ArrowUpRight className="w-6 h-6 text-primary" />
        </button>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-[20px] left-[74px] flex items-end gap-[270px]">
        <img
          className="w-[634px] h-px absolute -top-[29px] left-0"
          src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/vector-2.svg"
          alt=""
        />
        
        <div className="flex flex-col gap-1">
          <span className="font-mono font-normal text-white text-[50px] leading-normal">
            120+
          </span>
          <span className="font-sans font-normal text-white text-base leading-normal ml-[130px]">
            Skatīt pakalpojumus
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-mono font-normal text-white text-[50px] leading-normal">
            32
          </span>
          <span className="font-sans font-normal text-white text-base leading-normal ml-[70px]">
            Skatīt pakalpojumus
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
