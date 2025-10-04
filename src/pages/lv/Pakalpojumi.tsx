import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import heroImage from "@/assets/hero-image.webp";
import heroStrip from "@/assets/hero-strip.svg";
import buvjuUnEkuDemontaza from "@/assets/services-buvju-un-eku-demontaza.webp";
import razosanasEkuDemontaza from "@/assets/services-razosanas-eku-demontaza.webp";
import zemesDarbi from "@/assets/services-zemes-darbi.webp";
import labiekartosana from "@/assets/services-zemes-darbi.webp";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Wallet,
  Recycle,
  Truck,
  HardHat,
  Handshake,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";

const Pakalpojumi = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el)
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <main className="bg-background overflow-x-hidden w-full min-h-screen">
      <Helmet>
        <title>Pakalpojumi – DEMCO</title>
        <meta
          name="description"
          content="Profesionāli demontāžas, zemes un labiekārtošanas pakalpojumi. DEMCO – uzticams partneris būvniecībā."
        />
        <meta property="og:title" content="Pakalpojumi – DEMCO" />
        <meta
          property="og:description"
          content="Profesionāli demontāžas, zemes un labiekārtošanas pakalpojumi. DEMCO – uzticams partneris būvniecībā."
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/lv/pakalpojumi"
        />
      </Helmet>

      <Header />

      {/* HERO */}
      <section className="relative w-full overflow-hidden min-h-[500px] md:min-h-[635px] bg-gradient-hero">
        {/* DESKTOP image */}
        <div className="hidden md:flex absolute inset-y-0 right-0 z-0 justify-end md:w-[50%] lg:w-[52%] pointer-events-none select-none">
          <img
            src={heroImage}
            alt="Construction site"
            className="h-full w-auto object-cover object-center"
          />
        </div>

        {/* MOBILE image */}
        <div className="md:hidden relative z-0 -mx-4">
          <img
            src={heroImage}
            alt="Construction site"
            className="max-w-none w-[130vw] -translate-x-[15vw] h-[300px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div
            className="absolute inset-0 z-10 flex items-center"
            style={{ paddingLeft: "max(env(safe-area-inset-left), 1rem)" }}
          >
            <h1 className="font-mono font-bold text-white text-[28px] leading-tight pr-4 px-[10px]">
              Pakalpojumi
            </h1>
          </div>
        </div>

        {/* Right strip */}
        <img
          src={heroStrip}
          alt=""
          className="hidden lg:block absolute right-0 top-0 z-20 h-full w-[131px] object-cover pointer-events-none"
        />

        {/* Desktop copy */}
        <div className="relative z-10">
          {/* Mobile toothed block */}
          <div
            className="md:hidden bg-gradient-hero"
            style={{
              clipPath:
                "polygon(0 56px, 18% 56px, 25% 36px, 75% 36px, 82% 56px, 100% 56px, 100% 100%, 0 100%)",
            }}
          >
            <div className="container mx-auto px-4 pb-8 pt-24 -mt-[64px]">
              <p className="font-sans text-white text-base leading-relaxed">
                Mūsu uzņēmums piedāvā profesionālus demontāžas un būvniecības
                pakalpojumus dažāda mēroga projektiem.
              </p>
            </div>
          </div>

          {/* Desktop / Tablet copy */}
          <div className="hidden md:block">
            <div
              className="
                container mx-auto px-8 lg:px-[75px]
                md:min-h-[635px] md:flex md:items-center
                md:pr-[calc(50%+24px)] lg:pr-[calc(52%+131px)]
              "
            >
              <div className="max-w-[630px]">
                <h1 className="font-mono font-bold text-white text-4xl lg:text-[50px] leading-tight">
                  Pakalpojumi
                </h1>
                <p className="mt-6 font-sans text-white text-lg leading-relaxed max-w-[600px]">
                  Mūsu uzņēmums piedāvā profesionālus demontāžas un būvniecības
                  pakalpojumus dažāda mēroga projektiem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          УСЛУГИ
       ========================= */}
      <section
        id="eku-demontaza"
        className="w-full py-12 md:py-16 bg-white/0"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
            <div className="overflow-hidden">
              <img
                src={buvjuUnEkuDemontaza}
                alt="Būvju un ēku demontāža"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
                Būvju un ēku demontāža
              </h2>
              <p className="font-sans text-foreground text-base leading-relaxed mb-6">
                Veicam dzīvojamo, saimniecības un nelielu komerciālo objektu
                demontāžu ar pilnu atļauju noformēšanu...
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card shadow p-6">
                  <h3 className="font-mono font-bold text-lg mb-2">
                    Dzīvojamās & saimniecības ēkas
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Nojaukšana līdz pamatiem, būvgružu izvešana...
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card shadow p-6">
                  <h3 className="font-mono font-bold text-lg mb-2">
                    Drošība & dokumentācija
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Saskaņojumi ar pašvaldību, darbu plāns...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="razosanas-demontaza"
        className="w-full py-12 md:py-16 bg-[#a4a4a4]/[0.08]"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
            <div className="order-2 md:order-1">
              <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
                Ražošanas ēku demontāža
              </h2>
              <p className="font-sans text-foreground text-base leading-relaxed mb-6">
                Specializējamies industriālo objektu demontāžā...
              </p>
            </div>
            <div className="overflow-hidden order-1 md:order-2">
              <img
                src={razosanasEkuDemontaza}
                alt="Ražošanas ēku demontāža"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="zemes-darbi"
        className="w-full py-12 md:py-16 bg-white/0"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
            <div className="overflow-hidden">
              <img
                src={zemesDarbi}
                alt="Zemes darbi"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
                Zemes darbi
              </h2>
              <p className="font-sans text-foreground text-base leading-relaxed mb-6">
                Pilns spektrs: pamatu rakšana, grunts maiņa...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="labiekartosana"
        className="w-full py-12 md:py-16 bg-[#a4a4a4]/[0.08]"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
            <div className="order-2 md:order-1">
              <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
                Labiekārtošana
              </h2>
              <p className="font-sans text-foreground text-base leading-relaxed mb-6">
                Ceļi un laukumi, segumu ieklāšana, apzaļumošana...
              </p>
            </div>
            <div className="overflow-hidden order-1 md:order-2">
              <img
                src={labiekartosana}
                alt="Labiekārtošana"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ПРЕИМУЩЕСТВА + CTA
       ========================= */}
      {/* ... остальной код без изменений ... */}

      <Footer />
      <MobileCallButton />
    </main>
  );
};

export default Pakalpojumi;
