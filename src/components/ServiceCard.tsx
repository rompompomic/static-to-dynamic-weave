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
        w-full bg-card border border-border rounded-2xl shadow 
        hover:shadow-lg transition-all duration-300 overflow-hidden
        flex flex-col
      "
    >
      {/* Изображение */}
      <div className="w-full h-[220px]">
        <img src={image} alt={title} className="block w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Контент */}
      <div className="flex flex-col justify-between px-6 py-5 flex-grow">
        <div>
          <h3 className="font-mono font-bold text-lg md:text-xl text-foreground mb-2">{title}</h3>
          <p className="font-sans text-sm text-muted-foreground truncate">{description}</p>
        </div>

        {href && (
          <Link
            to={href}
            className="
              mt-4 inline-flex items-center justify-center gap-2
              px-5 py-2.5 bg-primary/10 text-primary font-sans font-semibold
              rounded-md hover:bg-primary/20 transition-colors duration-200
              group
            "
          >
            <span>Uzzināt vairāk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
