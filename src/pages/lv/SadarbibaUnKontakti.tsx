import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import heroImage from "@/assets/hero-image.webp";
import heroStrip from "@/assets/hero-strip.svg";
import { Phone, Mail, MessageSquare } from "lucide-react";
const SadarbibaUnKontakti = () => {
  return <>
      <Helmet>
        <title>Sadarbība un kontakti | DEMCO</title>
        <meta name="description" content="Sazinieties ar DEMCO – jūsu uzticamo partneri būvniecībā. Piedāvājam risinājumus jūsu objektam." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        {/* HERO */}
        <section className="relative w-full overflow-hidden min-h-[500px] md:min-h-[635px] bg-gradient-hero">
          {/* DESKTOP image (справа) */}
          <div className="hidden md:flex absolute inset-y-0 right-0 z-0 justify-end md:w-[50%] lg:w-[52%] pointer-events-none select-none">
            <img src={heroImage} alt="Construction site" className="h-full w-auto object-cover object-center" />
          </div>
        
          {/* MOBILE image */}
          <div className="md:hidden relative z-0 -mx-4">
            <img src={heroImage} alt="Construction site" className="max-w-none w-[130vw] -translate-x-[15vw] h-[300px] object-cover object-center" />
            {/* затемнение */}
            <div className="absolute inset-0 bg-black/45" />
            {/* заголовок поверх фото */}
            <div className="absolute inset-0 flex items-center z-10" style={{
            paddingLeft: "max(env(safe-area-inset-left), 1rem)"
          }}>
              <h1 className="font-mono font-bold text-white text-[28px] leading-tight px-[5px]">
                Sadarbība un kontakti
              </h1>
            </div>
          </div>
        
          {/* Right strip (tablet+desktop) */}
          <img src={heroStrip} alt="" className="hidden md:block absolute right-0 top-0 z-20 h-full w-[131px] object-cover pointer-events-none" />
        
          {/* Content */}
          <div className="relative z-10">
            {/* Mobile toothed block */}
            <div className="md:hidden bg-gradient-hero" style={{
            clipPath: "polygon(0 56px, 18% 56px, 25% 36px, 75% 36px, 82% 56px, 100% 56px, 100% 100%, 0 100%)"
          }}>
              <div className="container mx-auto px-4 pb-8 pt-20 -mt-[56px]">
                <p className="font-sans text-white text-base leading-relaxed my-[30px]">
                  Mēs vienmēr esam atvērti jaunai sadarbībai. Rakstiet, zvaniet vai aizpildiet formu – kopā atradīsim labāko risinājumu jūsu objektam.
                </p>
              </div>
            </div>
        
            {/* Desktop / Tablet */}
            <div className="hidden md:block">
              <div
                className="
                  container mx-auto px-8 lg:px-[75px]
                  md:min-h-[635px] md:flex md:items-center
                  md:pr-[calc(50%+24px)] lg:pr-[calc(52%+131px)]
                "
              >
                <div className="w-[900px] max-w-[900px]">
                  <h1 className="font-mono font-bold text-white text-4xl lg:text-[50px] leading-tight">
                    Sadarbība un kontakti
                  </h1>
                  <p className="mt-6 font-sans text-white text-lg leading-relaxed max-w-[720px] lg:max-w-[800px]">
                    Mēs vienmēr esam atvērti jaunai sadarbībai. Rakstiet, zvaniet vai aizpildiet formu – kopā atradīsim labāko risinājumu jūsu objektam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <main className="flex-1">
          {/* How to Apply Section */}
          <section className="w-full py-12 md:py-16 lg:py-20 bg-white/0">
            <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
              <h1 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-8 text-center animate-fade-in">
                Kā pieteikties pakalpojumam
              </h1>
              
              <p className="font-sans text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12 animate-fade-in">
                Sazinieties ar mums, un mēs piedāvāsim risinājumu jūsu objektam.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 animate-fade-in">
                <div className="flex flex-col items-center text-center gap-4 p-6 bg-background border border-border">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary/10 border-2 border-primary">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-foreground text-lg mb-2">Zvans</h3>
                    <p className="font-sans text-muted-foreground text-sm">Zvaniet mums jebkurā laikā</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 p-6 bg-background border border-border">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary/10 border-2 border-primary">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-foreground text-lg mb-2">E-pasts</h3>
                    <p className="font-sans text-muted-foreground text-sm">Rakstiet mums e-pastu</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 p-6 bg-background border border-border">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary/10 border-2 border-primary">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-foreground text-lg mb-2">Forma</h3>
                    <p className="font-sans text-muted-foreground text-sm">Aizpildiet tiešsaistes formu</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
              <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-12 text-center animate-fade-in">
                Tiešsaistes forma
              </h2>
              <ContactForm />
            </div>
          </section>

          {/* Contact Info Section */}
          <ContactInfo />
        </main>
        <Footer />
        <MobileCallButton />
      </div>
    </>;
};
export default SadarbibaUnKontakti;