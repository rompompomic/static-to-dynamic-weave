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
  // === фикс только на больших экранах; ниже — авто-высота ===
  const CARD_TOTAL_CLASS =
    height === "tall" ? "lg:h-[849px]" : "lg:h-[410px]";

  // На мобильных/планшетах даём разумную высоту картинки, без клиппинга контента
  const IMG_HEIGHT_CLASS =
    height === "tall"
      ? "h-[220px] md:h-[300px] lg:h-[520px]"
      : "h-[180px] md:h-[200px] lg:h-[200px]";

  // Контент без фиксированной высоты до lg; на lg возвращаем прежние значения
  const CONTENT_HEIGHT_CLASS =
    height === "tall" ? "h-auto lg:h-[329px]" : "h-auto lg:h-[210px]";

  // Сколько строк показывать в описании (оставим прежнее)
  const CLAMP_LINES = height === "tall" ? 4 : 2;

  const buttonBase =
    "mt-auto group relative flex items-center justify-between w-full px-6 md:px-8 py-3 md:py-4 " +
    "rounded-lg shadow-sm hover:shadow-md transition ease-out motion-safe:transition-all motion-safe:duration-200 " +
    "motion-safe:will-change-transform motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.98] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40 overflow-hidden";

  const shimmer =
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r " +
    "before:from-transparent before:via-white/20 before:to-transparent " +
    "motion-safe:group-hover:before:translate-x-full motion-safe:before:transition-transform motion-safe:before:duration-700";

  const buttonClass =
    variant === "accent"
      ? `bg-accent text-white ${buttonBase} ${shimmer}`
      : `bg-muted text-primary ${buttonBase} ${shimmer}`;

  return (
    <article className={`relative w-full ${CARD_TOTAL_CLASS} overflow-hidden rounded animate-fade-in bg-card shadow-[0_0_0_1px_var(--border)] flex flex-col`}>
      {/* Изображение */}
      <div className={`relative w-full ${IMG_HEIGHT_CLASS} flex-none overflow-hidden`}>
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        {showCursor && <></>}
      </div>

      {/* Контент */}
      <div className={`flex flex-col gap-4 p-4 md:p-6 ${CONTENT_HEIGHT_CLASS}`}>
        <div className="flex-1 min-h-0">
          <h3
            className="font-sans font-bold text-foreground text-lg md:text-[21px] leading-normal
                       line-clamp-2"
            style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
          >
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

        <button className={buttonClass}>
          <span className="font-sans font-bold text-sm md:text-base">Uzzināt vairāk</span>
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  );
};

export default ServiceCard;
