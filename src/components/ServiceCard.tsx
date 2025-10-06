import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

type ButtonVariant = "soft" | "solid";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  size?: "tall" | "default";
  href?: string;
  buttonVariant?: ButtonVariant;
  className?: string; // для h-full и позиционирования в гриде
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
  href,
  buttonVariant = "soft",
  className = "",
}: ServiceCardProps) => {
  const btnColor =
    buttonVariant === "solid" ? "bg-primary text-white" : "bg-primary/10 text-primary hover:bg-primary/20";

  return (
    <div
      className={`w-full h-full bg-card border border-border rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col ${className}`}
    >
      {/* Изображение */}
      <div
        className={
          size === "tall"
            ? "flex-1" // тянем изображение на всю доступную высоту в высокой карточке
            : "aspect-square" // квадрат для обычных карточек
        }
      >
        <img src={image} alt={title} className="block w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Контент */}
      <div className="flex flex-col gap-2 px-6 py-5">
        <h3 className="font-mono font-bold text-lg md:text-xl text-foreground">{title}</h3>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed">{description}</p>

        {href && (
          <Link to={href} className={`${btnBase} ${btnColor} mt-2 self-start`}>
            <span>Uzzināt vairāk</span>
            <ArrowUpRight className="ml-2 w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
