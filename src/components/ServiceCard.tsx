import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  variant?: "default" | "accent";
  height?: "tall" | "short";
  showCursor?: boolean;
  href?: string;
}

const ServiceCard = ({
  image,
  title,
  description,
  variant = "default",
  height = "short",
  showCursor = false,
  href = "/lv/pakalpojumi",
}: ServiceCardProps) => {
  // Высота карточки
  const CARD_TOTAL_CLASS =
    height === "tall" ? "md:h-full lg:h-[849px]" : "md:h-full lg:h-[410px]";

  // Высота изображения
  const IMG_HEIGHT_CLASS =
    height === "tall"
      ? "h-[220px] md:h-[220px] lg:h-[520px]"
      : "h-[180px] md:h-[220px] lg:h-[200px]";

  // Контент
  const CONTENT_HEIGHT_CLASS =
    height === "tall" ? "h-auto lg:h-[329px]" : "h-auto lg:h-[210px]";

  const CLAMP_LINES = height === "tall" ? 4 : 2;

  // Базовые стили кнопки
  const baseButton =
    "group relative inline-flex w-full items-center justify-between " +
    "h-10 md:h-11 px-4 md:px-5 rounded-lg " +
    "transition ease-out duration-200 " +
    "hover:scale-[1.02] active:scale-[0.97] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40 z-10";

  const shimmer =
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r " +
    "before:from-transparent before:via-white/20 before:to-transparent " +
    "group-hover:before:translate-x-full before:transition-transform before:duration-700";

  // Гарантированно видимая кнопка
  const buttonShell =
    variant === "accent"
      ? `inline-flex w-full items-center justify-between rounded-lg 
         bg-primary text-white shadow-md hover:shadow-lg ring-1 ring-primary/20 overflow-hidden ${shimmer}`
      : `inline-flex w-full items-center justify-between rounded-lg 
         bg-white text-primary border border-border shadow-sm hover:shadow-md overflow-hidden ${shimmer}`;

  return (
    <article
      className={`grid grid-rows-[auto,1fr,auto] w-full h-full overflow-hidden rounded 
      animate-fade-in bg-card shadow-[0_0_0_1px_var(--border)] ${CARD_TOTAL_CLASS}`}
    >
      {/* Изображение */}
      <div className={`relative w-full ${IMG_HEIGHT_CLASS} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {showCursor && null}
      </div>

      {/* Контент */}
      <div
        className={`flex flex-col gap-4 p-4 md:p-6 ${CONTENT_HEIGHT_CLASS} min-h-0`}
      >
        <h3 className="font-sans font-bold text-foreground text-lg md:text-[21px] leading-normal line-clamp-2">
          {title}
        </h3>
        <p
          className="font-sans text-foreground text-sm md:text-base leading-normal"
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
      <div className="px-4 pb-4 md:px-6 md:pb-6">
        <a
          href={href}
          className={baseButton}
          role="button"
          aria-label={`Uzzināt vairāk par: ${title}`}
        >
          <span className={buttonShell}>
            <span className="font-sans font-bold text-[13px] md:text-sm leading-none pl-0">
              Uzzināt vairāk
            </span>
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 mr-0 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </span>
        </a>
      </div>
    </article>
  );
};

export default ServiceCard;
