import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import heroImage from "@/assets/hero-image.webp";

const PakalpojumiRU = () => {
  return <main className="bg-background overflow-x-hidden w-full min-h-screen">
      <Helmet>
        <title>Услуги – DEMCO</title>
        <meta name="description" content="Профессиональные услуги демонтажа, земляных и благоустроительных работ. DEMCO – надежный партнер в строительстве." />
      </Helmet>

      <Header />

      {/* HERO */}
      <section className="relative w-full overflow-hidden min-h-[500px] md:min-h-[635px] bg-gradient-hero">
        <div className="hidden md:flex absolute inset-y-0 right-0 z-0 justify-end md:w-[50%] lg:w-[52%] pointer-events-none select-none">
          <img src={heroImage} alt="Construction site" className="h-full w-auto object-cover object-center" />
        </div>
      
        <div className="md:hidden relative z-0 -mx-4">
          <img src={heroImage} alt="Construction site" className="max-w-none w-[130vw] -translate-x-[15vw] h-[300px] object-cover object-center" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex items-center justify-center z-10" style={{
            paddingLeft: "max(env(safe-area-inset-left), 1rem)",
            paddingRight: "max(env(safe-area-inset-right), 1rem)"
          }}>
            <h1 className="font-mono font-bold text-white text-[28px] leading-tight px-[5px] text-center">
              Профессиональные услуги демонтажа и земляных работ
            </h1>
          </div>
        </div>
      
        <div className="relative z-10">
          <div className="md:hidden bg-gradient-hero" style={{
            clipPath: "polygon(0 56px, 18% 56px, 25% 36px, 75% 36px, 82% 56px, 100% 56px, 100% 100%, 0 100%)"
          }}>
            <div className="container mx-auto px-4 pb-8 pt-20 -mt-[56px]">
              <p className="font-sans text-white text-base leading-relaxed my-[30px]">
                От демонтажа до благоустройства предлагаем полный спектр решений, адаптированных как для частных, так и для промышленных проектов.
              </p>
            </div>
          </div>
      
          <div className="hidden md:block">
            <div className="
                container mx-auto px-8 lg:px-[75px]
                md:min-h-[635px] md:flex md:items-center
                md:pr-[calc(50%+24px)] lg:pr-[calc(52%+131px)]
                xl:pr-[calc(48%+131px)] 2xl:pr-[calc(45%+131px)]
              ">
              <div className="w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1200px]">
                <h1 className="font-mono font-bold text-white text-4xl md:text-[40px] lg:text-[50px] leading-tight xl:whitespace-nowrap">
                  Сотрудничество и контакты
                </h1>
                <p className="mt-6 font-sans text-white text-lg leading-relaxed max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1000px]">
                  Мы всегда открыты для нового сотрудничества. Пишите, звоните или заполните форму – вместе найдем лучшее решение для вашего объекта.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of services content... */}
      
      <Footer />
      <MobileCallButton />
    </main>;
};

export default PakalpojumiRU;
