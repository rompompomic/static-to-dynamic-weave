import { ArrowUpRight } from "lucide-react";
import servicesBuvjuUnEkuDemontaza from "@/assets/services-buvju-un-eku-demontaza.webp";
import servicesRazosanasEkuDemontaza from "@/assets/services-razosanas-eku-demontaza.webp";
import servicesZemesDarbi from "@/assets/services-zemes-darbi.webp";
import servicesLabiekartosana from "@/assets/services-labiekartosana.webp";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  size?: "tall" | "default";
  imageHeight?: string;
  fixed?: boolean;
}

const ServiceCard = ({
  image,
  title,
  description,
  size = "default",
  imageHeight,
}: ServiceCardProps) => {
  const imgH =
    imageHeight ||
    (size === "tall"
      ? "h-[460px] md:h-[500px] lg:h-[520px]"
      : "h-[200px] md:h-[220px] lg:h-[240px]");

  return (
    <div
      className={`
        w-full bg-card border border-border rounded-lg shadow-md hover:shadow-lg 
        transition duration-300 overflow-hidden 
        flex flex-col 
        h-[360px] md:h-[380px] lg:h-auto
      `}
    >
      <div className={`w-full ${imgH} flex-shrink-0`}>
        <img
          src={image}
          alt={title}
          className="block w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-between px-5 pt-3 pb-5 flex-grow">
        <div>
          <h3 className="m-0 font-sans font-bold text-foreground text-lg md:text-xl leading-tight">
            {title}
          </h3>
          <p className="m-0 mt-2 font-sans text-muted-foreground text-sm md:text-base leading-snug line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ServicesEN = () => {
  const buttonBase =
    "group relative inline-flex items-center justify-center " +
    "h-11 px-6 md:px-8 rounded-lg font-sans font-bold " +
    "shadow-sm hover:shadow-md transition ease-out duration-200 " +
    "hover:scale-[1.02] active:scale-[0.97] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40 " +
    "overflow-hidden";
  const shimmer =
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r " +
    "before:from-transparent before:via-white/20 before:to-transparent " +
    "group-hover:before:translate-x-full before:transition-transform before:duration-700";
  const ctaClass = `bg-primary text-primary-foreground ${buttonBase} ${shimmer}`;

  return (
    <section id="services" className="w-full py-12 md:py-16 lg:py-20 bg-[#a4a4a4]/[0.08]">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        {/* Mobile / Tablet */}
        <div className="block lg:hidden mb-12 animate-fade-in">
          <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl leading-tight mb-4">
            Services
          </h2>
          <p className="font-sans text-foreground text-base md:text-lg leading-relaxed mb-6">
            We offer a wide range of construction services, from demolition to landscaping.
          </p>
          <a href="/en/pakalpojumi" className={ctaClass}>
            <span className="text-base">View all services</span>
            <ArrowUpRight className="ml-2 w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </a>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex justify-between items-start mb-12 animate-fade-in">
          <div className="max-w-2xl">
            <h2 className="font-mono font-bold text-foreground text-[50px] leading-tight mb-4">
              Services
            </h2>
            <p className="font-sans text-foreground text-lg leading-relaxed">
              We offer a wide range of construction services, from demolition to landscaping.
            </p>
          </div>
          <a href="/en/pakalpojumi" className={ctaClass}>
            <span className="text-base">View all services</span>
            <ArrowUpRight className="ml-2 w-6 h-6 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          <ServiceCard
            image={servicesBuvjuUnEkuDemontaza}
            title="Building and Structure Demolition"
            description="Professional demolition of buildings and structures of any complexity with waste disposal."
          />
          <ServiceCard
            image={servicesRazosanasEkuDemontaza}
            title="Industrial Facility Demolition"
            description="Safe dismantling of production buildings, old factories, and warehouses."
          />
          <ServiceCard
            image={servicesZemesDarbi}
            title="Earthworks"
            description="Excavation, leveling, foundation preparation, trenching, and drainage."
          />
          <ServiceCard
            image={servicesLabiekartosana}
            title="Landscaping"
            description="Territory planning, road construction, paving, lawn installation, and drainage systems."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesEN;
