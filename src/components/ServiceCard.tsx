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
  showCursor = false,
}: ServiceCardProps) => {
  // Высота для карточек
  const cardHeightClass =
    height === "tall"
      ? "lg:h-[849px] md:h-[680px] h-[680px]" // tall = ровно как две short + gap
      : "lg:h-[410px] md:h-[340px] h-[340px]"; // short одинаковые

  const buttonClass =
    variant === "accent" ? "bg-accent text-white" : "bg-muted text-primary";

  return (
    <article
      className={`relative flex flex-col w-full overflow-hidden rounded animate-fade-in bg-card shadow-[0_0_0_1px_var(--border)] ${cardHeightClass}`}
    >
      {/* Фото занимает верхнюю часть */}
      <div className="relative w-full flex-1 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {showCursor && <></>}
      </div>

      {/* Белый блок снизу фиксированной высоты */}
      <div className="flex flex-col gap-4 p-4 md:p-6 bg-card">
        <div className="flex flex-col gap-1.5 flex-1 min-h-0">
          <h3 className="font-sans font-bold text-foreground text-lg md:text-[21px] leading-normal">
            {title}
          </h3>
          <p className="font-sans font-normal text-foreground text-sm md:text-base leading-normal overflow-hidden">
            {description}
          </p>
        </div>

        <button
          className={`mt-auto flex items-center justify-between px-6 md:px-8 py-3 md:py-4 w-full ${buttonClass} hover:opacity-90 transition-opacity`}
        >
          <span className="font-sans font-bold text-sm md:text-base">
            Uzzināt vairāk
          </span>
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </article>
  );
};

export default ServiceCard;
