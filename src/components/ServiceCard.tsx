import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  variant?: "default" | "accent";
  height?: "tall" | "short";
  showCursor?: boolean;
}

const ServiceCard = ({
  image,
  title,
  description,
  variant = "default",
  height = "short",
  showCursor = false
}: ServiceCardProps) => {
  // у tall оставляем как было, у short делаем фиксированную побольше
  const heightClass =
    height === "tall"
      ? "lg:h-[769px] h-[400px]"
      : "lg:h-[420px] h-[360px]"; // увеличил высоту коротких карточек

  const buttonClass =
    variant === "accent"
      ? "bg-accent text-white"
      : "bg-muted text-primary";

  return (
    <div
      className={`relative flex flex-col w-full ${heightClass} items-start justify-end overflow-hidden group animate-fade-in`}
    >
      {/* Картинка теперь отдельным img с фиксированной высотой */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {showCursor}

      <div className="relative flex flex-col items-start gap-4 p-4 md:p-6 w-full bg-card">
        <div className="flex flex-col items-start gap-1.5">
          <h3 className="font-sans font-bold text-foreground text-lg md:text-[21px] leading-normal">
            {title}
          </h3>
          <p className="font-sans font-normal text-foreground text-sm md:text-base leading-normal">
            {description}
          </p>
        </div>

        <button
          className={`flex items-center justify-between px-6 md:px-8 py-3 md:py-4 w-full ${buttonClass} hover:opacity-90 transition-opacity`}
        >
          <span className="font-sans font-bold text-sm md:text-base">
            Uzzināt vairāk
          </span>
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
