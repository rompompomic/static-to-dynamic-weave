import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  size?: "tall" | "default";
  imageHeight?: string;
  href?: string;
  fixed?: boolean;
}

const ServiceCard = ({
  image,
  title,
  description,
  size = "default",
  imageHeight,
  href,
  fixed = false,
}: ServiceCardProps) => {
  // Немного уменьшил высоту белого блока у tall-карточки
  const imgH = imageHeight || (size === "tall" ? "h-[440px]" : "h-[220px]");

  return (
    <div
      className="
        w-full bg-card border border-border rounded-2xl shadow 
        hover:shadow-lg transition-all duration-300 overflow-hidden
        flex flex-col
      "
    >
      {/* Изображение */}
      <div className={`w-full ${fixed ? "h-[220px]" : imgH}`}>
        <img src={image} alt={title} className="block w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Контент */}
      <div className="flex flex-col justify-between px-6 py-4 flex-grow bg-white">
        <div>
          <h3 className="font-mono font-bold text-lg md:text-xl text-foreground mb-1 whitespace-normal leading-snug">
            {title}
          </h3>
          <p className="font-sans text-sm text-muted-foreground leading-snug whitespace-normal">{description}</p>
        </div>

        {href && (
          <Link
            to={href}
            className="
              mt-3 inline-flex items-center justify-center gap-2
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
