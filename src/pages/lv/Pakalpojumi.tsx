import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

import heroImage from "@/assets/hero-image.webp";
import heroStrip from "@/assets/hero-strip.svg";

import buvjuUnEkuDemontaza from "@/assets/buvju-un-eku-demontaza.webp";
import razosanasEkuDemontaza from "@/assets/razosanas-eku-demontaza.webp";
import zemesDarbi from "@/assets/zemes-darbi.webp";
import labiekartosana from "@/assets/labiekartosana.webp";

const Pakalpojumi = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
        <link rel="canonical" href="https://yourdomain.com/lv/pakalpojumi" />
      </Helmet>

      <Header />

      {/* HERO */}
      <section className="relative w-full overflow-hidden min-h-[500px] md:min-h-[635px] bg-gradient-hero">
        {/* DESKTOP image (справа), не растягиваем по ширине, только по высоте */}
        <div className="hidden md:flex absolute inset-y-0 right-0 z-0 justify-end w-[52%]">
          <img
            src={heroImage}
            alt="Construction site"
            className="h-full w-auto object-cover object-center"
          />
        </div>

        {/* MOBILE image (full-bleed + затемнение) */}
        <div className="md:hidden relative z-0 -mx-4">
          <img
            src={heroImage}
            alt="Construction site"
            className="max-w-none w-[130vw] -translate-x-[15vw] h-[300px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
          {/* Заголовок на фото — слева, по вертикали по центру, с безопасным отступом */}
          <div
            className="absolute inset-0 z-10 flex items-center"
            style={{ paddingLeft: "max(env(safe-area-inset-left), 1rem)" }}
          >
            <h1 className="font-mono font-bold text-white text-[28px] leading-tight pr-4">
              Pakalpojumi
            </h1>
          </div>
        </div>

        {/* Правая чёрная полоса (как на главной) */}
        <img
          src={heroStrip}
          alt=""
          className="hidden lg:block absolute right-0 top-0 z-20 h-full w-[131px] object-cover pointer-events-none"
        />

        {/* Контент: desktop — слева, центр по вертикали; mobile — блок с «заусенцем» */}
        <div className="relative z-10">
          {/* Mobile: блок с «заусенцем» */}
          <div className="md:hidden bg-gradient-hero" style={{
          clipPath: "polygon(0 56px, 18% 56px, 25% 36px, 75% 36px, 82% 56px, 100% 56px, 100% 100%, 0 100%)",
        }}>
            <div className="container mx-auto px-4 pb-8 pt-24 -mt-[64px]">
              <p className="font-sans text-white text-base leading-relaxed">
                Mūsu uzņēmums piedāvā profesionālus demontāžas un būvniecības
                pakalpojumus dažāda mēroga projektiem.
              </p>
            </div>
          </div>

          {/* DESKTOP: текст слева, по вертикали центр (как на главной) */}
          <div className="hidden md:block">
            <div className="container mx-auto px-8 lg:px-[75px] h-[635px] flex items-center">
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
          ДАЛЕЕ — разделы услуг
      ========================= */}
      <section
        id="eku-demontaza"
        className="container mx-auto px-4 md:px-8 lg:px-[75px] py-12 md:py-16"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
          <div className="overflow-hidden">
            <img
              src={buvjuUnEkuDemontaza}
              alt="Būvju un ēku demontāža - dzīvojamo un saimniecības ēku nojaukšana"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
              Būvju un ēku demontāža
            </h2>
            <p className="font-sans text-foreground text-base leading-relaxed mb-6">
              Veicam dzīvojamo, saimniecības un nelielu komerciālo objektu
              demontāžu ar pilnu atļauju noformēšanu, teritorijas norobežošanu
              un drošības pasākumu ievērošanu. Process ietver būvgružu izvešanu,
              inženierkomunikāciju atslēgšanu un pilnīgu objekta likvidāciju
              saskaņā ar spēkā esošajiem noteikumiem.
            </p>
            <a
              href="/lv/sadarbiba-un-kontakti#forma"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-sans font-bold"
            >
              Uzzināt vairāk <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="razosanas-demontaza"
        className="container mx-auto px-4 md:px-8 lg:px-[75px] py-12 md:py-16"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
          <div className="order-2 md:order-1">
            <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
              Ražošanas ēku demontāža
            </h2>
            <p className="font-sans text-foreground text-base leading-relaxed mb-6">
              Specializējamies industriālo objektu demontāžā, izmantojot
              profesionālu smago tehniku un ievērojot visus drošības standartus.
              Veicam bīstamo vielu identifikāciju, metāla konstrukciju demontāžu
              ar iespēju realizēt lūžņus, kā arī nodrošinām būvgružu šķirošanu
              un savākšanu atbilstoši vides prasībām.
            </p>
            <a
              href="/lv/sadarbiba-un-kontakti#forma"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-sans font-bold"
            >
              Uzzināt vairāk <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="overflow-hidden order-1 md:order-2">
            <img
              src={razosanasEkuDemontaza}
              alt="Ražošanas ēku demontāža - industriālo objektu un angāru nojaukšana"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="zemes-darbi"
        className="container mx-auto px-4 md:px-8 lg:px-[75px] py-12 md:py-16"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
          <div className="overflow-hidden">
            <img
              src={zemesDarbi}
              alt="Zemes darbi - rakšana, grunts izlīdzināšana un pamatu sagatavošana"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
              Zemes darbi
            </h2>
            <p className="font-sans text-foreground text-base leading-relaxed mb-6">
              Piedāvājam pilnu spektru zemes darbu pakalpojumus – no pamatu
              rakšanas līdz teritorijas planēšanai. Izmantojam modernu tehniku
              grunts maiņai, drenāžas sistēmu izbūvei un komunikāciju tranšeju
              rakšanai. Nodrošinām precīzu teritorijas sagatavošanu turpmākai
              būvniecībai vai labiekārtošanai.
            </p>
            <a
              href="/lv/sadarbiba-un-kontakti#forma"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-sans font-bold"
            >
              Uzzināt vairāk <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="labiekartosana"
        className="container mx-auto px-4 md:px-8 lg:px-[75px] py-12 md:py-16"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
          <div className="order-2 md:order-1">
            <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
              Labiekārtošana
            </h2>
            <p className="font-sans text-foreground text-base leading-relaxed mb-6">
              Pēc demontāžas vai zemes darbu pabeigšanas piedāvājam teritorijas
              labiekārtošanu – ceļu un laukumu izbūvi, segumu ieklāšanu,
              apzaļumošanu. Izveidojam funkcionālas un estētiskas teritorijas gan
              privātām, gan komerciālām vajadzībām, ievērojot visus ainavu
              arhitektūras un būvnormatīvu principus.
            </p>
            <a
              href="/lv/sadarbiba-un-kontakti#forma"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-sans font-bold"
            >
              Uzzināt vairāk <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="overflow-hidden order-1 md:order-2">
            <img
              src={labiekartosana}
              alt="Labiekārtošana - teritoriju tīrīšana, ceļu izbūve un apzaļumošana"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-hero py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px] text-center animate-fade-in">
          <h2 className="font-mono font-bold text-white text-2xl md:text-3xl lg:text-4xl mb-6">
            Vēlaties konsultāciju vai tāmi?
          </h2>
          <a
            href="/lv/sadarbiba-un-kontakti#forma"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary hover:bg-opacity-90 transition-all font-sans font-bold"
          >
            Sazināties <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      <Footer />
      <MobileCallButton />
    </main>
  );
};

export default Pakalpojumi;
