import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import heroImage from "@/assets/hero-image.webp";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="bg-background overflow-x-hidden w-full min-h-screen">
      <Helmet>
        <title>404 - Lapa nav atrasta – DEMCO</title>
        <meta name="description" content="Lapa, ko meklējat, neeksistē. Atgriezieties uz sākumlapu." />
      </Helmet>

      <Header />

      {/* HERO */}
      <section className="relative w-full overflow-hidden min-h-[500px] md:min-h-[635px] bg-gradient-hero">
        {/* DESKTOP image (справа) */}
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
          {/* затемнение */}
          <div className="absolute inset-0 bg-black/45" />
          {/* заголовок поверх фото */}
          <div
            className="absolute inset-0 flex items-center justify-center z-10 text-center px-4"
            style={{
              paddingLeft: "max(env(safe-area-inset-left), 1rem)",
              paddingRight: "max(env(safe-area-inset-right), 1rem)",
            }}
          >
            <div>
              <h1 className="font-mono font-bold text-white text-[64px] leading-none mb-2">
                404
              </h1>
              <h2 className="font-mono font-bold text-white text-[20px] leading-tight px-[10px]">
                LAPA NAV ATRASTA
              </h2>
            </div>
          </div>
        </div>
      
        {/* Content */}
        <div className="relative z-10">
          {/* Mobile toothed block */}
          <div
            className="md:hidden bg-gradient-hero"
            style={{
              clipPath:
                "polygon(0 56px, 18% 56px, 25% 36px, 75% 36px, 82% 56px, 100% 56px, 100% 100%, 0 100%)",
            }}
          >
            <div className="container mx-auto px-4 pb-8 pt-20 -mt-[56px]">
              <p className="font-sans text-white text-base leading-relaxed mb-6 text-left">
                Ups! Lapa, ko meklējat, neeksistē. Tā varētu būt pārvietota vai dzēsta.
              </p>
              <a
                href="/"
                className="inline-flex justify-center gap-2.5 px-6 py-3 bg-white items-center hover:bg-opacity-90 transition-all"
              >
                <span className="font-sans font-bold text-primary text-sm">
                  Atgriezties uz sākumu
                </span>
                <ArrowRight className="w-5 h-5 text-primary" />
              </a>
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
              <div className="w-full max-w-[600px]">
                <h1 className="font-mono font-bold text-white text-[80px] md:text-[100px] leading-none mb-4">
                  404
                </h1>
                <h2 className="font-mono font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
                  LAPA NAV ATRASTA
                </h2>
                <p className="font-sans text-white text-base md:text-lg leading-relaxed mb-8">
                  Ups! Lapa, ko meklējat, neeksistē. Tā varētu būt pārvietota vai dzēsta.
                </p>
                <a
                  href="/"
                  className="
                    group relative inline-flex items-center justify-center gap-2.5
                    h-10 md:h-11 px-4 md:px-6 lg:px-8 rounded-lg
                    bg-white text-primary font-sans font-bold
                    shadow-sm hover:shadow-md transition ease-out duration-200
                    hover:scale-[1.02] active:scale-[0.97]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40
                    overflow-hidden
                    before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r
                    before:from-transparent before:via-white/20 before:to-transparent
                    group-hover:before:translate-x-full before:transition-transform before:duration-700
                  "
                >
                  <span className="text-sm md:text-base">Atgriezties uz sākumu</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCallButton />
    </main>
  );
};

export default NotFound;
