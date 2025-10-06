import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
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

      {/* === HERO === */}
      <section className="relative w-full overflow-hidden md:min-h-[635px] bg-gradient-hero pt-[72px] md:pt-0">
        {/* Desktop Image */}
        <div className="hidden md:flex absolute inset-y-0 right-0 z-0 justify-end w-[52%] pointer-events-none select-none">
          <img src={heroImage} alt="Construction site" className="h-full w-auto object-cover object-center" />
        </div>

        {/* Mobile Image */}
        <div className="md:hidden relative z-0 -mx-4">
          <img
            src={heroImage}
            alt="Construction site"
            className="max-w-none w-[130vw] -translate-x-[15vw] h-[300px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4"
            style={{
              paddingLeft: "max(env(safe-area-inset-left), 1rem)",
              paddingRight: "max(env(safe-area-inset-right), 1rem)",
            }}
          >
            <h1 className="font-mono font-bold text-white text-[48px] leading-none mb-2">404</h1>
            <p className="font-mono font-bold text-white text-[20px] leading-tight mb-6">LAPA NAV ATRASTA</p>
            <a
              href="/"
              className="
                group relative inline-flex items-center justify-center gap-2.5
                h-10 md:h-11 px-6 rounded-lg
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

        {/* Desktop / Tablet */}
        <div className="hidden md:block relative z-10">
          <div
            className="
              container mx-auto px-4 md:px-8 lg:px-[75px]
              md:min-h-[635px] md:flex md:items-center
              md:pr-[calc(50%+24px)] lg:pr-[calc(52%+131px)]
              xl:pr-[calc(48%+131px)] 2xl:pr-[calc(45%+131px)]
            "
          >
            <div className="max-w-[550px] lg:max-w-[650px]">
              <h1 className="font-mono font-bold text-white text-[70px] leading-none">404</h1>
              <h2 className="font-mono font-bold text-white text-[36px] leading-tight mt-2 mb-6">Lapa nav atrasta</h2>
              <p className="font-sans text-white text-lg leading-relaxed mb-10">
                Ups! Lapa, ko meklējat, neeksistē. Tā varētu būt pārvietota vai dzēsta.
              </p>
              <a
                href="/"
                className="
                  group relative inline-flex items-center justify-center gap-2.5
                  h-11 px-8 rounded-lg
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
      </section>

      <Footer />
      <MobileCallButton />
    </main>
  );
};

export default NotFound;
