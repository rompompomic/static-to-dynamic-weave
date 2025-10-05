import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import heroImage from "@/assets/hero-image.webp";
import buvjuUnEkuDemontaza from "@/assets/services-buvju-un-eku-demontaza.webp";
import razosanasEkuDemontaza from "@/assets/services-razosanas-eku-demontaza.webp";
import zemesDarbi from "@/assets/services-zemes-darbi.webp";
import labiekartosana from "@/assets/services-labiekartosana.webp";
import excavator from "@/assets/excavator.webp";
import { ArrowRight, ShieldCheck, Clock, Wallet, Recycle, Truck, HardHat, Handshake, Sparkles, Phone, Mail } from "lucide-react";

const PakalpojumiEN = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return <main className="bg-background overflow-x-hidden w-full min-h-screen">
      <Helmet>
        <title>Services – DEMCO</title>
        <meta name="description" content="Professional demolition, earthworks and landscaping services. DEMCO – your trusted construction partner." />
        <meta property="og:title" content="Services – DEMCO" />
        <meta property="og:description" content="Professional demolition, earthworks and landscaping services. DEMCO – your trusted construction partner." />
        <link rel="canonical" href="https://yourdomain.com/en/pakalpojumi" />
      </Helmet>

      <Header />

      {/* HERO */}
      <section className="relative w-full overflow-hidden min-h-[500px] md:min-h-[635px] bg-gradient-hero">
        {/* Desktop image (right) */}
        <div className="hidden md:flex absolute inset-y-0 right-0 z-0 justify-end md:w-[50%] lg:w-[52%] pointer-events-none select-none">
          <img src={heroImage} alt="Construction site" className="h-full w-auto object-cover object-center" />
        </div>
      
        {/* Mobile image */}
        <div className="md:hidden relative z-0 -mx-4">
          <img src={heroImage} alt="Construction site" className="max-w-none w-[130vw] -translate-x-[15vw] h-[300px] object-cover object-center" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex items-center justify-center z-10" style={{
            paddingLeft: "max(env(safe-area-inset-left), 1rem)",
            paddingRight: "max(env(safe-area-inset-right), 1rem)"
          }}>
            <h1 className="font-mono font-bold text-white text-[28px] leading-tight px-[5px] text-center">
              Professional Demolition and Earthworks Services
            </h1>
          </div>
        </div>
      
        {/* Content */}
        <div className="relative z-10">
          {/* Mobile toothed block */}
          <div className="md:hidden bg-gradient-hero" style={{
            clipPath: "polygon(0 56px, 18% 56px, 25% 36px, 75% 36px, 82% 56px, 100% 56px, 100% 100%, 0 100%)"
          }}>
            <div className="container mx-auto px-4 pb-8 pt-20 -mt-[56px]">
              <p className="font-sans text-white text-base leading-relaxed my-[30px]">
                From demolition to landscaping, we offer a full range of solutions tailored for both private and industrial projects.
              </p>
            </div>
          </div>
      
          {/* Desktop / Tablet */}
          <div className="hidden md:block">
            <div className="
                container mx-auto px-8 lg:px-[75px]
                md:min-h-[635px] md:flex md:items-center
                md:pr-[calc(50%+24px)] lg:pr-[calc(52%+131px)]
                xl:pr-[calc(48%+131px)] 2xl:pr-[calc(45%+131px)]
              ">
              <div className="w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1200px]">
                <h1 className="font-mono font-bold text-white text-4xl md:text-[40px] lg:text-[50px] leading-tight xl:whitespace-nowrap">
                  Cooperation and Contacts
                </h1>
                <p className="mt-6 font-sans text-white text-lg leading-relaxed max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1000px]">
                  We are always open to new collaborations. Write, call or fill out the form – together we will find the best solution for your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      
      {/* Building and Structure Demolition */}
      <section id="eku-demontaza" className="w-full py-12 md:py-16 bg-white/0">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
            <div className="overflow-hidden">
              <img
                src={buvjuUnEkuDemontaza}
                alt="Building and structure demolition - residential and commercial building demolition"
                className="w-full h-auto object-cover"
              />
            </div>
      
            <div>
              <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
                Building and Structure Demolition
              </h2>
              <p className="font-sans text-foreground text-base leading-relaxed mb-6">
                We perform demolition of residential, commercial and small commercial buildings with full permit processing,
                site fencing and compliance with safety measures. Includes debris removal,
                utility disconnection and complete site clearance.
              </p>
      
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Residential & Commercial Buildings
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Demolition to foundations, debris removal, site leveling for further work.
                  </p>
                </div>
      
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Safety & Documentation
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Municipal approvals, work plans and risk assessments, traffic management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industrial Building Demolition */}
      <section id="razosanas-demontaza" className="w-full py-12 md:py-16 bg-[#a4a4a4]/[0.08]">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
            <div className="order-2 md:order-1">
              <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
                Industrial Building Demolition
              </h2>
              <p className="font-sans text-foreground text-base leading-relaxed mb-6">
                We specialize in industrial site demolition with heavy equipment, observing high safety
                standards and environmental requirements.
              </p>
      
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Industrial Sites
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Warehouses, hangars, workshops – work zone fencing and coordination with emergency services.
                  </p>
                </div>
      
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Disposal & Sorting
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Metal scrap processing, hazardous waste disposal, full reporting.
                  </p>
                </div>
              </div>
            </div>
      
            <div className="overflow-hidden order-1 md:order-2">
              <img
                src={razosanasEkuDemontaza}
                alt="Industrial building demolition - factories and warehouses"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Earthworks */}
      <section id="zemes-darbi" className="w-full py-12 md:py-16 bg-white/0">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
            <div className="overflow-hidden">
              <img
                src={zemesDarbi}
                alt="Earthworks - excavation, soil leveling and foundation preparation"
                className="w-full h-auto object-cover"
              />
            </div>
      
            <div>
              <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
                Earthworks
              </h2>
              <p className="font-sans text-foreground text-base leading-relaxed mb-6">
                Full range: foundation excavation, soil replacement, grading, utility trenching,
                drainage solutions.
              </p>
      
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Foundations & Grading
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Foundation pits, site preparation, precise leveling with laser control.
                  </p>
                </div>
      
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Drainage & Utilities
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Drainage systems, water drainage, trenches for electricity, water and sewage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Landscaping */}
      <section id="labiekartosana" className="w-full py-12 md:py-16 bg-[#a4a4a4]/[0.08]">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
            <div className="order-2 md:order-1">
              <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
                Landscaping
              </h2>
              <p className="font-sans text-foreground text-base leading-relaxed mb-6">
                Roads and squares, paving, landscaping and functional
                territory design for private and commercial needs.
              </p>
      
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Paths & Paving
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Paving stones, gravel, asphalt; curbs, levels and drainage.
                  </p>
                </div>
      
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Landscaping & Design
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Lawns, plantings, lighting, integration of small architectural forms.
                  </p>
                </div>
              </div>
            </div>
      
            <div className="overflow-hidden order-1 md:order-2">
              <img
                src={labiekartosana}
                alt="Landscaping - site cleaning, road construction and greening"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="w-full py-16 md:py-20 bg-white/0">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="text-center mb-10">
            <h2 className="font-mono font-bold text-2xl md:text-3xl lg:text-4xl">
              Why DEMCO?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We work fast, safely and transparently – from the first call to
              final handover.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                kind: "icon" as const,
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Certified Safety",
                text: "Work plans, risk assessments and site foreman control.",
              },
              {
                kind: "icon" as const,
                icon: <Clock className="w-6 h-6" />,
                title: "No Deadline Surprises",
                text: "Detailed schedule and regular reports – you always know the status.",
              },
              {
                kind: "icon" as const,
                icon: <Wallet className="w-6 h-6" />,
                title: "Fair Estimates",
                text: "Fixed agreements, clear cost structure without hidden items.",
              },
              {
                kind: "icon" as const,
                icon: <Recycle className="w-6 h-6" />,
                title: "Waste Sorting",
                text: "Construction waste delivered to certified landfills with accompanying documents.",
              },
              {
                kind: "mask" as const,
                title: "Own Equipment",
                text: "Excavators, hydraulic hammers, trucks – less reliance on rentals.",
                maskSrc: excavator,
              },
              {
                kind: "icon" as const,
                icon: <HardHat className="w-6 h-6" />,
                title: "Experienced Teams",
                text: "Team with real industrial project portfolio.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card p-6 shadow hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 text-foreground">
                  {card.kind === "mask" ? (
                    <div
                      className="w-8 h-8 md:w-9 md:h-9 bg-current"
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

          <div className="mt-12 text-center">
            <h3 className="font-mono font-bold text-lg mb-2">
              Ready to start?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Contact us today for a free consultation.
            </p>
            <div className="mt-4 flex items-center justify-center space-x-4">
              <a href="tel:+37126668883" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2">
                <Phone className="w-4 h-4 mr-2" />
                Call +371 26668883
              </a>
              <a href="mailto:info@demco.lv" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2">
                <Mail className="w-4 h-4 mr-2" />
                info@demco.lv
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCallButton />
    </main>;
};

export default PakalpojumiEN;
