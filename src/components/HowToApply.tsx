import { Phone, FileText, HandshakeIcon, CheckCircle, ArrowUpRight } from "lucide-react";

const HowToApply = () => {
  const steps = [
    { icon: Phone, number: "1", title: "Sazinieties ar mums", description: "Sazinieties ar mums pa tālruni vai e-pastu." },
    { icon: FileText, number: "2", title: "Objekta izvērtēšana", description: "Izvērtējam jūsu objektu un sagatavojam piedāvājumu." },
    { icon: HandshakeIcon, number: "3", title: "Vienošanās", description: "Vienojamies par nosacījumiem un termiņiem." },
    { icon: CheckCircle, number: "4", title: "Darbu izpilde", description: "Veicam darbus droši un kvalitatīvi." },
  ];

  // Стили кнопки: как в ServiceCard (компактная, с шимером и анимациями)
  const buttonBase =
    "group relative inline-flex items-center justify-center " +
    "h-11 px-6 md:px-8 rounded-lg font-sans font-bold " +
    "shadow-sm hover:shadow-md transition ease-out duration-200 " +
    "hover:scale-[1.02] active:scale-[0.97] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40 " +
    "overflow-hidden";
  const shimmer =
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r " +
    "before:from-transparent before:via-white/20 before:to-transparent " +
    "group-hover:before:translate-x-full before:transition-transform before:duration-700";
  const ctaClass = `bg-primary text-primary-foreground ${buttonBase} ${shimmer}`;

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white/0">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-12 md:mb-16 text-center animate-fade-in">
          Kā pieteikties pakalpojumam
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 animate-fade-in">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center gap-4 p-6 bg-background border border-border">
                <div className="relative">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary/10 border-2 border-primary">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-primary text-white font-mono font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-foreground text-lg mb-2">{step.title}</h3>
                  <p className="font-sans text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center animate-fade-in">
          <a href="#kontakti" className={ctaClass}>
            <span className="font-sans font-bold text-base">Sazināties ar mums</span>
            <ArrowUpRight className="ml-2 w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
