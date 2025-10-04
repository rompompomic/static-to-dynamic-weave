import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
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

      {/* ==== HERO (только для страницы услуг) ==== */}
      <section className="relative w-full overflow-hidden md:min-h-[420px] bg-gradient-hero">
        {/* Desktop картинка справа */}
        <div className="hidden md:flex absolute inset-y-0 right-0 z-0 justify-end">
          <img
            src={heroImage}
            alt="Construction site"
            className="h-full w-auto object-cover object-center"
          />
        </div>

        {/* Mobile картинка */}
        <div className="md:hidden relative z-0 -mx-4">
          <img
            src={heroImage}
            alt="Construction site"
            className="max-w-none w-[130vw] -translate-x-[15vw] h-[260px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />

          {/* Заголовок поверх фото */}
          <div className="absolute inset-0 flex items-center z-10 px-4">
            <h1 className="font-mono font-bold text-white text-[26px] leading-tight">
              Pakalpojumi
            </h1>
          </div>
        </div>

        {/* Правая декоративная полоса (desktop) */}
        <img
          src={heroStrip}
          alt="Decorative stripe"
          className="hidden lg:block absolute right-0 top-0 z-20 h-full w-[131px] object-cover pointer-events-none"
        />

        {/* Контент */}
        <div className="relative z-10">
          {/* Mobile блок с заусенцем */}
          <div
            className="md:hidden bg-gradient-hero"
            style={{
              clipPath:
                "polygon(0 56px, 18% 56px, 25% 36px, 75% 36px, 82% 56px, 100% 56px, 100% 100%, 0 100%)",
            }}
          >
            <div className="container mx-auto px-4 pb-8 pt-20 -mt-[56px]">
              <p className="font-sans text-white text-base leading-relaxed">
                Mūsu uzņēmums piedāvā profesionālus demontāžas un būvniecības
                pakalpojumus dažāda mēroga projektiem.
              </p>
            </div>
          </div>

          {/* Desktop контент */}
          <div className="hidden md:block">
            <div className="container mx-auto px-8 lg:px-[75px] py-16">
              <div className="max-w-[600px]">
                <h1 className="font-mono font-bold text-white text-4xl lg:text-[50px] leading-tight mb-6">
                  Pakalpojumi
                </h1>
                <p className="font-sans text-white text-lg leading-relaxed">
                  Mūsu uzņēmums piedāvā profesionālus demontāžas un būvniecības
                  pakalpojumus dažāda mēroga projektiem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==== /HERO ==== */}

      {/* дальше всё без изменений */}
      {/* Service 1 */}
      <section id="eku-demontaza" className="container mx-auto px-4 md:px-8 lg:px-[75px] py-12 md:py-16">
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
              Veicam dzīvojamo, saimniecības un nelielu komerciālo objektu demontāžu ar pilnu atļauju noformēšanu,
              teritorijas norobežošanu un drošības pasākumu ievērošanu. Process ietver būvgružu izvešanu,
              inženierkomunikāciju atslēgšanu un pilnīgu objekta likvidāciju saskaņā ar spēkā esošajiem noteikumiem.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Dzīvojamās ēkas un privātmājas</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Saimniecības ēkas un garāžas</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Nelieli komerciālie objekti</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Koka un ķieģeļu konstrukcijas</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Būvgružu izvešana un utilizācija</span></li>
            </ul>
            <a href="/lv/sadarbiba-un-kontakti#forma" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-sans font-bold">
              Uzzināt vairāk <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Service 2 */}
      <section id="razosanas-demontaza" className="container mx-auto px-4 md:px-8 lg:px-[75px] py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
          <div className="order-2 md:order-1">
            <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
              Ražošanas ēku demontāža
            </h2>
            <p className="font-sans text-foreground text-base leading-relaxed mb-6">
              Specializējamies industriālo objektu demontāžā, izmantojot profesionālu smago tehniku un ievērojot
              visus drošības standartus. Veicam bīstamo vielu identifikāciju, metāla konstrukciju demontāžu ar
              iespēju realizēt lūžņus, kā arī nodrošinām būvgružu šķirošanu un savākšanu atbilstoši vides prasībām.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Noliktavas un ražotnes</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Angāri un metāla konstrukcijas</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Silosi un industriālie objekti</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Bīstamo vielu kontrole un utilizācija</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Metāllūžņu savākšana un realizācija</span></li>
            </ul>
            <a href="/lv/sadarbiba-un-kontakti#forma" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-sans font-bold">
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

      {/* Service 3 */}
      <section id="zemes-darbi" className="container mx-auto px-4 md:px-8 lg:px-[75px] py-12 md:py-16">
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
              Piedāvājam pilnu spektru zemes darbu pakalpojumus – no pamatu rakšanas līdz teritorijas planēšanai.
              Izmantojam modernu tehniku grunts maiņai, drenāžas sistēmu izbūvei un komunikāciju tranšeju rakšanai.
              Nodrošinām precīzu teritorijas sagatavošanu turpmākai būvniecībai vai labiekārtošanai.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Augsnes noņemšana un grunts maiņa</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Teritorijas planēšana un izlīdzināšana</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Pamatu bedru un tranšeju rakšana</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Komunikāciju ieklāšana</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Drenāžas sistēmu izbūve</span></li>
            </ul>
            <a href="/lv/sadarbiba-un-kontakti#forma" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-sans font-bold">
              Uzzināt vairāk <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Service 4 */}
      <section id="labiekartosana" className="container mx-auto px-4 md:px-8 lg:px-[75px] py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
          <div className="order-2 md:order-1">
            <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
              Labiekārtošana
            </h2>
            <p className="font-sans text-foreground text-base leading-relaxed mb-6">
              Pēc demontāžas vai zemes darbu pabeigšanas piedāvājam teritorijas labiekārtošanu – ceļu un laukumu
              izbūvi, segumu ieklāšanu, apzaļumošanu. Izveidojam funkcionālas un estētiskas teritorijas gan privātām,
              gan komerciālām vajadzībām, ievērojot visus ainavu arhitektūras un būvnormatīvu principus.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Bruģa un asfalta segumu ieklāšana</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Apmales un robežakmens uzstādīšana</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Zaļo zonu veidošana un zālāja ierīkošana</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Stādījumu izvietošana</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span className="font-sans text-foreground">Autostāvvietu un gājēju celiņu izbūve</span></li>
            </ul>
            <a href="/lv/sadarbiba-un-kontakti#forma" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-sans font-bold">
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
          <a href="/lv/sadarbiba-un-kontakti#forma" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary hover:bg-opacity-90 transition-all font-sans font-bold">
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
