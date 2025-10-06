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
      <section className="relative w-full overflow-hidden min-h-[500px] md:min-h-[635px] bg-gradient-hero pt-[72px] md:pt-0">
        {/* DESKTOP image (справа) */}
        <div className="hidden md:flex absolute inset-y-0 right-0 z-0 justify-end md:w-[50%] lg:w-[52%] pointer-events-none select-none">
          <img src={heroImage} alt="Construction site" className="h-full w-auto object-cover object-center" />
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
            className="absolute inset-0 flex items-center justify-center z-10"
            style={{
              paddingLeft: "max(env(safe-area-inset-left), 1rem)",
              paddingRight: "max(env(safe-area-inset-right), 1rem)",
            }}
          >
            <h1 className="font-mono font-bold text-white text-[28px] leading-tight px-[5px] text-center">404</h1>
            <h2 className="font-mono font-bold text-white text-[28px] leading-tight px-[5px] text-center">
              LAPA NAV ATRASTA
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Mobile toothed block */}
          <div
            className="md:hidden bg-gradient-hero"
            style={{
              clipPath: "polygon(0 56px, 18% 56px, 25% 36px, 75% 36px, 82% 56px, 100% 56px, 100% 100%, 0 100%)",
            }}
          >
            <div className="container mx-auto px-4 pb-8 pt-20 -mt-[56px]">
              <p className="font-sans text-white text-base leading-relaxed my-[30px]">
                Ups! Lapa, ko meklējat, neeksistē. Tā varētu būt pārvietota vai dzēsta.
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
                  xl:pr-[calc(48%+131px)] 2xl:pr-[calc(45%+131px)]
                "
            >
              <div className="w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1200px]">
                <h1 className="font-mono font-bold text-white text-4xl md:text-[40px] lg:text-[50px] leading-tight xl:whitespace-nowrap">
                  404
                  <br />
                  LAPA NAV ATRASTA
                </h1>
                <p className="mt-6 font-sans text-white text-lg leading-relaxed max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1000px]">
                  Ups! Lapa, ko meklējat, neeksistē. Tā varētu būt pārvietota vai dzēsta.
                </p>
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
