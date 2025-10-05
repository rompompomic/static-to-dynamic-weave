import { Clock, Shield, Users } from "lucide-react";
import tractor from "@/assets/tractor.webp";

const AboutUsEN = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Speed",
      description: "Efficient work execution",
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Compliance with standards",
    },
    {
      icon: Users,
      title: "Professional team",
      description: "Experienced specialists",
    },
    {
      icon: "tractor",
      title: "Modern equipment",
      description: "Latest machinery",
    },
  ];

  return (
    <section
      id="about-us"
      className="w-full py-12 md:py-16 lg:py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-8 md:mb-12 animate-fade-in">
          About Us
        </h2>

        <div className="max-w-4xl mb-12 animate-fade-in">
          <p className="font-sans text-foreground text-base md:text-lg leading-relaxed mb-6">
            DEMCO Ltd. is a construction company with over 10 years of experience
            in demolition and earthworks. We provide a full cycle – from
            initial site assessment to complete project completion.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20">
              <span className="font-sans font-bold text-primary text-sm md:text-base">
                10+ years of experience
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20">
              <span className="font-sans font-bold text-primary text-sm md:text-base">
                Work in accordance with safety and quality standards
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 animate-fade-in">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 p-6 bg-background border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-primary/10 rounded-md">
                {advantage.icon === "tractor" ? (
                  <div
                    className="w-10 h-10 md:w-14 md:h-14 bg-primary"
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

              <div>
                <h3 className="font-sans font-bold text-foreground text-lg mb-2">
                  {advantage.title}
                </h3>
                <p className="font-sans text-muted-foreground text-sm">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsEN;
