import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import heroImage from "@/assets/hero-image.webp";
import buvjuUnEkuDemontaza from "@/assets/services-buvju-un-eku-demontaza.webp";
import razosanasEkuDemontaza from "@/assets/services-razosanas-eku-demontaza.webp";
import zemesDarbi from "@/assets/services-zemes-darbi.webp";
import labiekartosana from "@/assets/services-labiekartosana.webp";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Wallet,
  Recycle,
  HardHat,
  Handshake,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";

// ⬇️ добавили импорт иконки экскаватора
import excavator from "@/assets/excavator.webp";

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
        <link rel="canonical" href="https://yourdomain.com/lv/pakalpojumi" />
      </Helmet>

      <Header />

      {/* HERO ... (без изменений) */}

      {/* ======== услуги блоки ======== */}
      {/* ... (всё как у тебя — без изменений) */}

      {/* =========================
          ПРЕИМУЩЕСТВА
       ========================= */}
      <section className="w-full py-16 md:py-20 bg-white/0">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="text-center mb-10">
            <h2 className="font-mono font-bold text-2xl md:text-3xl lg:text-4xl">
              Kāpēc DEMCO?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Strādājam ātri, droši un caurspīdīgi — no pirmā zvana līdz
              nodošanai ekspluatācijā.
            </p>
          </div>

          {/* ⬇️ заменили Truck на маску с экскаватором, остальные — в том же стиле */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                kind: "icon" as const,
                icon: <ShieldCheck className="w-6 h-6 text-primary" />,
                title: "Sertificēta drošība",
                text:
                  "Darbu plāni, riska novērtējumi un atbildīgā meistara kontrole uz vietas.",
              },
              {
                kind: "icon" as const,
                icon: <Clock className="w-6 h-6 text-primary" />,
                title: "Termiņi bez pārsteigumiem",
                text:
                  "Detalizēts grafiks un regulātas atskaites — jūs vienmēr zināt statusu.",
              },
              {
                kind: "icon" as const,
                icon: <Wallet className="w-6 h-6 text-primary" />,
                title: "Godīgas tāmes",
                text:
                  "Fiksētas vienošanās, skaidra izmaksu struktūra bez slēptām pozīcijām.",
              },
              {
                kind: "icon" as const,
                icon: <Recycle className="w-6 h-6 text-primary" />,
                title: "Atkritumu šķirošana",
                text:
                  "Būvgruži nodoti sertificētiem poligoniem ar pavaddokumentiem.",
              },
              {
                // ⬇️ БЫЛ Truck — теперь маска с экскаватором в цвете primary
                kind: "mask" as const,
                title: "Pašu tehnika",
                text:
                  "Ekskavatori, hidrauliskie āmuri, vedēji — mazāk atkarības no nomas.",
                maskSrc: excavator,
              },
              {
                kind: "icon" as const,
                icon: <HardHat className="w-6 h-6 text-primary" />,
                title: "Pieredzējušas brigādes",
                text:
                  "Komanda ar reāliem industriālo objektu projektiem portfelī.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card p-6 shadow hover:shadow-lg transition-shadow"
              >
                {/* Единый фон баджа, как мы делали ранее */}
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  {card.kind === "mask" ? (
                    <div
                      className="w-6 h-6 bg-primary"
                      style={{
                        WebkitMaskImage: `url(${card.maskSrc})`,
                        maskImage: `url(${card.maskSrc})`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  ) : (
                    card.icon
                  )}
                </div>

                <h3 className="font-mono font-bold text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

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

      {/* CTA и остальное — без изменений */}

      <Footer />
      <MobileCallButton />
    </main>
  );
};

export default Pakalpojumi;
