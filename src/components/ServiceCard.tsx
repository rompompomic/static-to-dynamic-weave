import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

type ButtonVariant = "soft" | "solid";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  size?: "tall" | "default";
  imageHeight?: string; // для tall карточки
  href?: string;
  squareImage?: boolean; // делает картинку квадратной (для default)
  buttonVariant?: ButtonVariant; // цвет кнопки: soft (по макету светлый) / solid (заливка)
}

const btnBase =
  "group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md font-sans font-semibold " +
  "shadow-sm hover:shadow-md transition ease-out duration-200 hover:scale-[1.02] active:scale-[0.97] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40";

const ServiceCard = ({
  image,
  title,
  description,
  size = "default",
  imageHeight,
  href,
  squareImage = true,
  buttonVariant = "soft",
}: ServiceCardProps) => {
  const imgH = imageHeight || (size === "tall" ? "h-[500px]" : "h-[220px]");

  const btnColor =
    buttonVariant === "solid" ? "bg-primary text-white" : "bg-primary/10 text-primary hover:bg-primary/20";

  return (
    <div className="w-full bg-card border border-border rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
      {/* Изображение */}
      <div className={`w-full ${size === "default" && squareImage ? "aspect-square" : imgH}`}>
        <img src={image} alt={title} className="block w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Контент */}
      <div className="flex flex-col justify-between px-6 py-5 flex-grow">
        <div>
          <h3 className="font-mono font-bold text-lg md:text-xl text-foreground mb-2">{title}</h3>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {href && (
          <Link to={href} className={`${btnBase} ${btnColor} mt-4`}>
            <span>Uzzināt vairāk</span>
            <ArrowUpRight className="ml-2 w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
