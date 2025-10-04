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
            <h1 className="font-mono font-bold text-white text-[28px] leading-tight pr-4 px-[10px]">
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
          ДАЛЕЕ — разделы услуг (в каждом 2 блока)
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
              un drošības pasākumu ievērošanu. Iekļauts būvgružu izvešana,
              inženierkomunikāciju atslēgšana un pilnīga objekta likvidācija.
            </p>

            {/* ДВА БЛОКА */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card shadow p-6">
                <h3 className="font-mono font-bold text-lg mb-2">
                  Dzīvojamās & saimniecības ēkas
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nojaukšana līdz pamatiem, būvgružu izvešana, laukuma
                  izlīdzināšana turpmākajiem darbiem.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card shadow p-6">
                <h3 className="font-mono font-bold text-lg mb-2">
                  Drošība & dokumentācija
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Saskaņojumi ar pašvaldību, darbu plāns un riska novērtējums,
                  satiksmes organizācija.
                </p>
              </div>
            </div>
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
              Veicam metāla konstrukciju demontāžu, bīstamo zonu marķēšanu un
              būvgružu šķirošanu.
            </p>

            {/* ДВА БЛОКА */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card shadow p-6">
                <h3 className="font-mono font-bold text-lg mb-2">
                  Industriālie objekti
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Noliktavas, angāri, cehi — ar tehnikas piesaisti un darba
                  zonu nožogošanu.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card shadow p-6">
                <h3 className="font-mono font-bold text-lg mb-2">
                  Utilizācija & šķirošana
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Metāla lūžņu realizācija, atkritumu nodošana sertificētos
                  poligonos, atskaites par apjomiem.
                </p>
              </div>
            </div>
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
              Pilns spektrs: pamatu rakšana, grunts maiņa, planēšana, tranšeju
              rakšana inženierkomunikācijām, drenāžas risinājumi.
            </p>

            {/* ДВА БЛОКА */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card shadow p-6">
                <h3 className="font-mono font-bold text-lg mb-2">
                  Pamati & planēšana
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pamatu bedres, plankuma sagatavošana, precīza līmeņošana ar
                  lāzera kontroli.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card shadow p-6">
                <h3 className="font-mono font-bold text-lg mb-2">
                  Drenāža & komunikācijas
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Drenāžas sistēmas, ūdens novade, tranšejas elektrībai, ūdenim
                  un kanalizācijai.
                </p>
              </div>
            </div>
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
              Ceļi un laukumi, segumu ieklāšana, apzaļumošana un funkcionāls
              teritorijas dizains privātām un komerciālām vajadzībām.
            </p>

            {/* ДВА БЛОКА */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card shadow p-6">
                <h3 className="font-mono font-bold text-lg mb-2">
                  Celiņi & segumi
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bruģis, šķembas, asfaltbetons; apmales, līmeņi un
                  ūdensnoteces.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card shadow p-6">
                <h3 className="font-mono font-bold text-lg mb-2">
                  Apzaļumošana & dizains
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Zālieni, stādījumi, apgaismojums, mazo arhitektūras formu
                  integrācija.
                </p>
              </div>
            </div>
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
            Sazināties
          </a>
        </div>
      </section>

      <Footer />
      <MobileCallButton />
    </main>
  );
};

export default Pakalpojumi;
