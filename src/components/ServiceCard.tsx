import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  href?: string;
}

const ServiceCard = ({ image, title, description, href }: ServiceCardProps) => {
  return (
    <div
      className="
        w-full bg-card border border-border shadow-sm hover:shadow-md 
        transition duration-300 overflow-hidden flex flex-col 
        rounded-none
      "
    >
      {/* Картинка */}
      <div className="w-full h-[220px] flex-shrink-0">
        <img src={image} alt={title} className="block w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Контент */}
      <div className="flex flex-col justify-between px-5 pt-4 pb-4 flex-grow">
        <div>
          <h3 className="font-sans font-bold text-foreground text-base leading-snug truncate">{title}</h3>
          <p className="font-sans text-muted-foreground text-sm leading-tight truncate mt-1">{description}</p>
        </div>

        {href && (
          <Link
            to={href}
            className="
              group inline-flex items-center justify-between mt-4
              bg-[#E7F0ED] hover:bg-[#009B72] transition-colors duration-200
              text-[#009B72] hover:text-white font-sans font-semibold text-sm
              h-10 px-5 w-full
            "
          >
            <span>Uzzināt vairāk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
