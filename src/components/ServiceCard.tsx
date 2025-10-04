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
  // Жёсткие размеры под сетку
  const CARD_TOTAL_CLASS = height === "tall" ? "h-[849px]" : "h-[410px]";
  const IMG_HEIGHT_CLASS = height === "tall" ? "h-[520px]" : "h-[200px]";
  const CONTENT_HEIGHT_CLASS = height === "tall" ? "h-[329px]" : "h-[210px]";
  const CLAMP_LINES = height === "tall" ? 4 : 2;

  const buttonBase =
    "mt-auto group relative flex items-center justify-between w-full px-6 md:px-8 py-3 md:py-4 " +
    // анимации/эффекты
    "rounded-lg shadow-sm hover:shadow-md " +
    "transition ease-out motion-safe:transition-all motion-safe:duration-200 " +
    "motion-safe:will-change-transform " +
    "motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.98] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40 " +
    "overflow-hidden"; // для шимера

  const shimmer =
    // бегущий блик
    "before:absolute before:inset-0 before:-translate-x-full " +
    "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent " +
    "motion-safe:group-hover:before:translate-x-full motion-safe:before:transition-transform motion-safe:before:duration-700";

  const buttonClass =
    variant === "accent"
      ? `bg-accent text-white ${buttonBase} ${shimmer}`
      : `bg-muted text-primary ${buttonBase} ${shimmer}`;

  return (
    <article className={`relative w-full ${CARD_TOTAL_CLASS} overflow-hidden rounded animate-fade-in bg-card shadow-[0_0_0_1px_var(--border)] flex flex-col`}>
      {/* Изображение фиксированной высоты */}
      <div className={`relative w-full ${IMG_HEIGHT_CLASS} flex-none overflow-hidden`}>
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        {showCursor && <></>}
      </div>

      {/* Белая подплашка фиксированной высоты */}
      <div className={`flex flex-col gap-4 p-4 md:p-6 ${CONTENT_HEIGHT_CLASS}`}>
        <div className="flex-1 min-h-0">
          <h3 className="font-sans font-bold text-foreground text-lg md:text-[21px] leading-normal">
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
