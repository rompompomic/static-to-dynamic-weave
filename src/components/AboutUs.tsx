import { Clock, Shield, Users } from "lucide-react";
import tractor from "@/assets/tractor.webp";

const AboutUs = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Ātrums",
      description: "Efektīva darbu izpilde",
    },
    {
      icon: Shield,
      title: "Drošība",
      description: "Atbilstība standartiem",
    },
    {
      icon: Users,
      title: "Profesionāla komanda",
      description: "Pieredzējuši speciālisti",
    },
    {
      icon: "tractor",
      title: "Mūsdienīga tehnika",
      description: "Jaunākais aprīkojums",
    },
  ];

  return (
    <section id="par-mums" className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-8 md:mb-12 animate-fade-in">
          Par mums
        </h2>

        <div className="max-w-4xl mb-12 animate-fade-in">
          <p className="font-sans text-foreground text-base md:text-lg leading-relaxed mb-6">
            SIA DEMCO ir būvniecības uzņēmums ar vairāk nekā 10 gadu pieredzi demontāžas un zemes darbu jomā. Mēs
            nodrošinām pilnu ciklu – no sākotnējās objekta izvērtēšanas līdz pilnīgai darbu pabeigšanai.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20">
              <span className="font-sans font-bold text-primary text-sm md:text-base">10+ gadu pieredze</span>
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20">
              <span className="font-sans font-bold text-primary text-sm md:text-base">
                Darbi atbilstoši drošības un kvalitātes standartiem
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 animate-fade-in">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-background border border-border hover:border-primary/50 transition-colors rounded-md"
            >
              {/* Иконка */}
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-primary/10 rounded-md shrink-0">
                {advantage.icon === "tractor" ? (
                  <div
                    className="w-8 h-8 md:w-10 md:h-10 bg-primary"
                    style={{
                      WebkitMaskImage: `url(${tractor})`,
                      maskImage: `url(${tractor})`,
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                ) : (
                  <advantage.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                )}
              </div>

              {/* Текст */}
              <div className="flex flex-col">
                <h3 className="font-sans font-bold text-foreground text-lg mb-1">{advantage.title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-snug">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
