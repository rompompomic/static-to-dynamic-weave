import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  href?: string;
  size?: "tall" | "square";
  buttonStyle?: "green" | "white";
}

const ServiceCard = ({ image, title, description, href, size = "square", buttonStyle = "white" }: ServiceCardProps) => {
  const imgHeight =
    size === "tall"
      ? "h-[480px]" // высокая карточка
      : "h-[210px]"; // квадратные компактные

  const buttonBase =
    "group relative inline-flex items-center justify-center gap-2.5 h-10 md:h-11 px-4 md:px-6 rounded-lg font-sans font-semibold transition ease-out duration-200 hover:scale-[1.02] active:scale-[0.97] overflow-hidden shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40";

  const buttonVariants = {
    green:
      "bg-[#009C74] text-white before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent group-hover:before:translate-x-full before:transition-transform before:duration-700",
    white:
      "bg-[#F5F5F5] text-[#009C74] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-[#009C74]/10 before:to-transparent group-hover:before:translate-x-full before:transition-transform before:duration-700",
  };

  return (
    <div className="w-full h-full bg-white border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
      <div className={`w-full ${imgHeight} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-sans font-bold text-lg text-foreground mb-2 leading-tight">{title}</h3>
          <p className="font-sans text-sm text-muted-foreground line-clamp-1">{description}</p>
        </div>

        {href && (
          <Link to={href} className={`${buttonBase} ${buttonVariants[buttonStyle]} mt-4`}>
            <span className="text-sm font-bold">Uzzināt vairāk</span>
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-current transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
