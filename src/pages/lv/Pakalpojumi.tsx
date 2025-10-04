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
import { ArrowRight, ShieldCheck, Clock, Wallet, Recycle, Truck, HardHat, Handshake, Sparkles, Phone, Mail } from "lucide-react";
const Pakalpojumi = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  return <main className="bg-background overflow-x-hidden w-full min-h-screen">
      <Helmet>
        <title>Pakalpojumi – DEMCO</title>
        <meta name="description" content="Profesionāli demontāžas, zemes un labiekārtošanas pakalpojumi. DEMCO – uzticams partneris būvniecībā." />
        <meta property="og:title" content="Pakalpojumi – DEMCO" />
        <meta property="og:description" content="Profesionāli demontāžas, zemes un labiekārtošanas pakalpojumi. DEMCO – uzticams partneris būvniecībā." />
        <link rel="canonical" href="https://yourdomain.com/lv/pakalpojumi" />
      </Helmet>

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
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 z-10 flex items-center" style={{
          paddingLeft: "max(env(safe-area-inset-left), 1rem)"
        }}>
            <h1 className="font-mono font-bold text-white text-[28px] leading-tight pr-4 px-[10px]">
              Pakalpojumi
            </h1>
          </div>
        </div>
      
        {/* Right strip */}
        <img src={heroStrip} alt="" className="hidden lg:block absolute right-0 top-0 z-20 h-full w-[131px] object-cover pointer-events-none" />
      
        {/* Desktop copy */}
        <div className="relative z-10">
          {/* Mobile toothed block */}
          <div className="md:hidden bg-gradient-hero" style={{
          clipPath: "polygon(0 56px, 18% 56px, 25% 36px, 75% 36px, 82% 56px, 100% 56px, 100% 100%, 0 100%)"
        }}>
            <div className="container mx-auto px-4 pb-8 pt-24 -mt-[64px]">
              <p className="font-sans text-white text-base leading-relaxed">
                Mūsu uzņēmums piedāvā profesionālus demontāžas un būvniecības
                pakalpojumus dažāda mēroga projektiem.
              </p>
            </div>
          </div>
      
          {/* Desktop / Tablet: контент слева с правым паддингом под картинку */}
          <div className="hidden md:block">
            <div className="
                container mx-auto px-8 lg:px-[75px]
                md:min-h-[635px] md:flex md:items-center
                md:pr-[calc(50%+24px)] lg:pr-[calc(52%+131px)]
              ">
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
          УСЛУГИ (в каждом по 2 блока)
       ========================= */}
      <section id="eku-demontaza" className="container mx-auto px-4 md:px-8 lg:px-[75px] py-12 md:py-16 bg-white/0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
          <div className="overflow-hidden">
            <img src={buvjuUnEkuDemontaza} alt="Būvju un ēku demontāža - dzīvojamo un saimniecības ēku nojaukšana" className="w-full h-auto object-cover" />
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

      <section id="razosanas-demontaza" className="container mx-auto px-4 md:px-8 lg:px-[75px] py-12 md:py-16 bg-[#a4a4a4]/[0.08]">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
          <div className="order-2 md:order-1">
            <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
              Ražošanas ēku demontāža
            </h2>
            <p className="font-sans text-foreground text-base leading-relaxed mb-6">
              Specializējamies industriālo objektu demontāžā ar smago tehniku,
              ievērojot augstus drošības standartus un vides prasības.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card shadow p-6">
                <h3 className="font-mono font-bold text-lg mb-2">
                  Industriālie objekti
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Noliktavas, angāri, cehi — darba zonu nožogošana un
                  koordinācija ar operatīvajiem dienestiem.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card shadow p-6">
                <h3 className="font-mono font-bold text-lg mb-2">
                  Utilizācija & šķirošana
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Metāla lūžņu realizācija, bīstamo atkritumu nodošana, pilnas
                  atskaites.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden order-1 md:order-2">
            <img src={razosanasEkuDemontaza} alt="Ražošanas ēku demontāža - industriālo objektu un angāru nojaukšana" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <section id="zemes-darbi" className="container mx-auto px-4 md:px-8 lg:px-[75px] py-12 md:py-16 bg-white/0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
          <div className="overflow-hidden">
            <img src={zemesDarbi} alt="Zemes darbi - rakšana, grunts izlīdzināšana un pamatu sagatavošana" className="w-full h-auto object-cover" />
          </div>
          <div>
            <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
              Zemes darbi
            </h2>
            <p className="font-sans text-foreground text-base leading-relaxed mb-6">
              Pilns spektrs: pamatu rakšana, grunts maiņa, planēšana, tranšeju
              rakšana inženierkomunikācijām, drenāžas risinājumi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card shadow p-6">
                <h3 className="font-mono font-bold text-lg mb-2">
                  Pamati & planēšana
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pamatu bedres, laukumu sagatavošana, precīza līmeņošana ar
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

      <section id="labiekartosana" className="container mx-auto px-4 md:px-8 lg:px-[75px] py-12 md:py-16 bg-[#a4a4a4]/[0.08]">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
          <div className="order-2 md:order-1">
            <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
              Labiekārtošana
            </h2>
            <p className="font-sans text-foreground text-base leading-relaxed mb-6">
              Ceļi un laukumi, segumu ieklāšana, apzaļumošana un funkcionāls
              teritorijas dizains privātām un komerciālām vajadzībām.
            </p>

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
            <img src={labiekartosana} alt="Labiekārtošana - teritoriju tīrīšana, ceļu izbūve un apzaļumošana" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* =========================
          ПРЕИМУЩЕСТВА
       ========================= */}
      <section className="py-16 md:py-20 bg-white/0">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="text-center mb-10">
            <h2 className="font-mono font-bold text-2xl md:text-3xl lg:text-4xl">
              Kāpēc DEMCO?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Strādājam ātri, droši un caurspīdīgi — no pirmā zvana līdz nodošanai
              ekspluatācijā.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[{
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Sertificēta drošība",
            text: "Darbu plāni, riska novērtējumi un atbildīgā meistara kontrole uz vietas."
          }, {
            icon: <Clock className="w-6 h-6" />,
            title: "Termiņi bez pārsteigumiem",
            text: "Detalizēts grafiks un regulātas atskaites — jūs vienmēr zināt statusu."
          }, {
            icon: <Wallet className="w-6 h-6" />,
            title: "Godīgas tāmes",
            text: "Fiksētas vienošanās, skaidra izmaksu struktūra bez slēptām pozīcijām."
          }, {
            icon: <Recycle className="w-6 h-6" />,
            title: "Atkritumu šķirošana",
            text: "Būvgruži nodoti sertificētiem poligoniem ar pavaddokumentiem."
          }, {
            icon: <Truck className="w-6 h-6" />,
            title: "Pašu tehnika",
            text: "Ekskavatori, hidrauliskie āmuri, vedēji — mazāk atkarības no nomas."
          }, {
            icon: <HardHat className="w-6 h-6" />,
            title: "Pieredzējušas brigādes",
            text: "Komanda ar reāliem industriālo objektu projektiem portfelī."
          }].map((card, i) => <div key={i} className="group rounded-2xl border border-border bg-card p-6 shadow hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <h3 className="font-mono font-bold text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </div>)}
          </div>

          {/* микро-бейджи доверия */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1">
              <Sparkles className="w-4 h-4" /> 100% darba vietas sakārtošana
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1">
              <Handshake className="w-4 h-4" /> Fiksēti termiņi līgumā
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1">
              <ShieldCheck className="w-4 h-4" /> Apdrošināšana iekļauta
            </span>
          </div>
        </div>
      </section>

      {/* =========================
          CTA (усиленный)
       ========================= */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-[#a4a4a4]/[0.08]">
        {/* мягкий фон/градиент */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-4">
                <Sparkles className="w-4 h-4" />
                Bezmaksas sākotnējā konsultācija
              </div>
              <h2 className="font-mono font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
                Vēlaties tāmi vai ekspertu ieteikumu?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Atsūtiet īsu aprakstu un foto — sagatavosim orientējošu tāmi un
                darba plānu 24h laikā (darba dienās).
              </p>

              {/* буллеты */}
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 mt-0.5" />
                  <span>Drošības un vides prasību ievērošana</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5" />
                  <span>Precīzi termiņi un skaidra loģistika</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wallet className="w-5 h-5 mt-0.5" />
                  <span>Fiksētas izmaksas pēc apsekošanas</span>
                </li>
              </ul>

              {/* действия */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                
                <a href="tel:+37100000000" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border hover:bg-muted transition">
                  <Phone className="w-5 h-5" />
                  +371 00 000 000
                </a>
                <a href="mailto:info@yourdomain.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border hover:bg-muted transition">
                  <Mail className="w-5 h-5" />
                  info@yourdomain.com
                </a>
              </div>

              {/* бейдж доверия */}
              <p className="mt-4 text-xs text-muted-foreground">
                * Sākotnējā konsultācija ir bez maksas un neuzliek saistības.
              </p>
            </div>

            {/* визуальная карточка-обещание */}
            <div className="rounded-3xl border border-border bg-card/80 backdrop-blur p-6 md:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6" />
                <h3 className="font-mono font-bold text-xl">
                  Ko jūs saņemsiet pēc pieteikuma
                </h3>
              </div>
              <ol className="space-y-4 text-sm text-foreground list-decimal pl-5">
                <li>
                  Īss zvans vai e-pasts, lai precizētu apjomu un termiņus.
                </li>
                <li>
                  Orientējoša tāme un īss darba plāns ar posmiem un atbildībām.
                </li>
                <li>
                  Piedāvājums apsekošanai uz vietas un gala tāmes sagatavošanai.
                </li>
              </ol>

              <div className="mt-6 grid sm:grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border p-3">
                  <div className="text-2xl font-mono font-bold">24h</div>
                  <div className="text-xs text-muted-foreground">
                    sākotnējā atbilde
                  </div>
                </div>
                <div className="rounded-xl border p-3">
                  <div className="text-2xl font-mono font-bold">0€</div>
                  <div className="text-xs text-muted-foreground">
                    konsultācija
                  </div>
                </div>
                <div className="rounded-xl border p-3">
                  <div className="text-2xl font-mono font-bold">100%</div>
                  <div className="text-xs text-muted-foreground">
                    caurspīdīgums
                  </div>
                </div>
              </div>

              <a
                href="/lv/sadarbiba-un-kontakti#forma"
                className="
                  mt-8 w-full group relative inline-flex items-center justify-center gap-2
                  h-11 px-6 md:px-8 rounded-xl
                  bg-foreground text-background font-sans font-bold
                  shadow-sm hover:shadow-md transition ease-out duration-200
                  hover:scale-[1.02] active:scale-[0.97]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40
                  overflow-hidden
                  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r
                  before:from-transparent before:via-white/20 before:to-transparent
                  group-hover:before:translate-x-full before:transition-transform before:duration-700
                "
              >
                <span className="text-sm md:text-base">Aizpildīt pieteikumu</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCallButton />
    </main>;
};
export default Pakalpojumi;