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
  // Жёсткие размеры под сетку (только на lg+)
  const CARD_TOTAL_CLASS =
    height === "tall" ? "lg:h-[849px]" : "lg:h-[410px]";

  const IMG_HEIGHT_CLASS =
    height === "tall"
      ? "h-[220px] md:h-[300px] lg:h-[520px]"
      : "h-[180px] md:h-[200px] lg:h-[200px]";

  const CONTENT_HEIGHT_CLASS =
    height === "tall" ? "h-auto lg:h-[329px]" : "h-auto lg:h-[210px]";

  const CLAMP_LINES = height === "tall" ? 4 : 2;

  // Стили кнопки — компактная по высоте
  const buttonBase =
    "mt-auto group relative flex items-center justify-between w-full " +
    "h-10 md:h-11 px-4 md:px-5 rounded-lg " + // фиксированная меньшая высота
    "shadow-sm hover:shadow-md transition ease-out duration-200 " +
    "hover:scale-[1.02] active:scale-[0.97] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40 overflow-hidden";

  const shimmer =
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r " +
    "before:from-transparent before:via-white/20 before:to-transparent " +
    "group-hover:before:translate-x-full before:transition-transform before:duration-700";

  const buttonClass =
    variant === "accent"
      ? `bg-accent text-white ${buttonBase} ${shimmer}`
      : `bg-muted text-primary ${buttonBase} ${shimmer}`;

  return (
    <article
      className={`relative w-full ${CARD_TOTAL_CLASS} overflow-hidden rounded animate-fade-in bg-card shadow-[0_0_0_1px_var(--border)] flex flex-col`}
    >
      {/* Изображение */}
      <div className={`relative w-full ${IMG_HEIGHT_CLASS} flex-none overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {showCursor && <></>}
      </div>

      {/* Контент */}
      <div className={`flex flex-col gap-4 p-4 md:p-6 ${CONTENT_HEIGHT_CLASS}`}>
        <div className="flex-1 min-h-0">
          <h3 className="font-sans font-bold text-foreground text-lg md:text-[21px] leading-normal line-clamp-2">
            {title}
          </h3>
          <p
            className="font-sans font-normal text-foreground text-sm md:text-base leading-normal mt-1"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: CLAMP_LINES,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </p>
        </div>

        {/* Кнопка */}
        <button className={buttonClass}>
          <span className="font-sans font-bold text-[13px] md:text-sm leading-none">
            Uzzināt vairāk
          </span>
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  );
};

export default ServiceCard;
