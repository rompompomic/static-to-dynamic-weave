import { ArrowUpRight } from "lucide-react";
import buvjuUnEkuDemontaza from "@/assets/services-buvju-un-eku-demontaza.webp";
import razosanasEkuDemontaza from "@/assets/services-razosanas-eku-demontaza.webp";
import zemesDarbi from "@/assets/services-zemes-darbi.webp";
import labiekartosana from "@/assets/services-labiekartosana.webp";
import buvgruzuIzvesana from "@/assets/services-buvgruzu-izvesana-un-utilizacija.webp";
const Services = () => {
  const services = [{
    image: buvjuUnEkuDemontaza,
    title: "Būvju un ēku demontāža",
    description: "Droša un efektīva dažāda tipa ēku nojaukšana ar mūsdienīgu tehniku un normatīvu ievērošanu",
    href: "/lv/pakalpojumi#eku-demontaza",
    large: true
  }, {
    image: razosanasEkuDemontaza,
    title: "Ražošanas ēku demontāža",
    description: "Rūpīga industriālo konstrukciju plānošana, izjaukšana un būvgružu utilizācija",
    href: "/lv/pakalpojumi#razosanas-eku-demontaza"
  }, {
    image: labiekartosana,
    title: "Labiekārtošana",
    description: "Ceļu un laukumu izbūve, ainavu labiekārtošana un zaļo zonu izveide pēc demontāžas",
    href: "/lv/pakalpojumi#labiekartosana"
  }, {
    image: zemesDarbi,
    title: "Zemes darbi",
    description: "Grunts rakšana, izlīdzināšana, pamatu sagatavošana un drenāža",
    href: "/lv/pakalpojumi#zemes-darbi"
  }, {
    image: buvgruzuIzvesana,
    title: "Būvgružu izvešana un utilizācija",
    description: "Būvgružu savākšana, transportēšana un utilizācija saskaņā ar vides normām",
    href: "/lv/pakalpojumi#buvgruzu-izvesana"
  }];
  return <section id="pakalpojumi" className="w-full py-16 md:py-20 scroll-mt-20 bg-[#a4a4a4]/[0.08]">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        {/* Заголовок */}
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-10">
          Mūsu pakalpojumi
        </h2>

        {/* DESKTOP */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-[28px] items-start">
          <div className="row-span-2">
            <ServiceCard {...services[0]} large />
          </div>

          <div className="grid grid-cols-2 gap-[28px] col-span-2">
            {services.slice(1).map((service, i) => <ServiceCard key={i} {...service} />)}
          </div>
        </div>

        {/* MOBILE / TABLET — все одинаковые */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:hidden">
          {services.map((service, i) => <ServiceCard key={i} {...service} uniform />)}
        </div>
      </div>
    </section>;
};
export default Services;

/* === КАРТОЧКА === */
const ServiceCard = ({
  image,
  title,
  description,
  href,
  large = false,
  uniform = false
}: any) => {
  // на мобилках и планшетах все одинаковые
  const imgH = uniform ? 180 : large ? 480 : 160;
  return <a href={href} className={`
        group w-full bg-white overflow-hidden flex flex-col rounded-none 
        transition-all duration-200 hover:shadow-md hover:scale-[1.01]
        cursor-pointer
      `}>
      {/* Изображение */}
      <div style={{
      height: `${imgH}px`
    }} className="w-full flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
      </div>

      {/* Контент */}
      <div className={`
          flex flex-col justify-between flex-1 px-5 py-3
          ${uniform ? "min-h-[190px]" : ""}
        `}>
        <div>
          <h3 className="font-mono font-bold text-[15px] md:text-[16px] text-foreground leading-tight mb-1">{title}</h3>
          <p className="font-sans text-[13px] text-muted-foreground leading-snug">{description}</p>
        </div>

        {/* Кнопка */}
        <div className={`
            mt-3 relative inline-flex items-center justify-center gap-1.5
            h-9 px-4 font-sans font-bold text-[13px]
            rounded-none transition-all duration-200
            text-[#19ae89] bg-[#f6f6f6]
            group-hover:bg-[#19ae89] group-hover:text-white
            shadow-sm overflow-hidden
          `}>
          <span>Uzzināt vairāk</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </div>
      </div>
    </a>;
};