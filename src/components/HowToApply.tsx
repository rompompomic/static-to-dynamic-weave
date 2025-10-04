import { Phone, FileText, HandshakeIcon, CheckCircle, ArrowUpRight } from "lucide-react";
const HowToApply = () => {
  const steps = [{
    icon: Phone,
    number: "1",
    title: "Sazinieties ar mums",
    description: "Sazinieties ar mums pa tālruni vai e-pastu."
  }, {
    icon: FileText,
    number: "2",
    title: "Objekta izvērtēšana",
    description: "Izvērtējam jūsu objektu un sagatavojam piedāvājumu."
  }, {
    icon: HandshakeIcon,
    number: "3",
    title: "Vienošanās",
    description: "Vienojamies par nosacījumiem un termiņiem."
  }, {
    icon: CheckCircle,
    number: "4",
    title: "Darbu izpilde",
    description: "Veicam darbus droši un kvalitatīvi."
  }];
  return <section className="w-full py-12 md:py-16 lg:py-20 bg-white/0">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-12 md:mb-16 text-center animate-fade-in">
          Kā pieteikties pakalpojumam
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 animate-fade-in">
          {steps.map((step, index) => {
          const Icon = step.icon;
          return <div key={index} className="flex flex-col items-center text-center gap-4 p-6 bg-background border border-border">
                <div className="relative">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary/10 border-2 border-primary">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-primary text-white font-mono font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-foreground text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>;
        })}
        </div>

        <div className="flex justify-center animate-fade-in">
          <a href="#kontakti" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-all">
            <span className="font-sans font-bold text-base">
              Sazināties ar mums
            </span>
            <ArrowUpRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>;
};
export default HowToApply;