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
  /**
   * Жёсткие размеры под твою сетку:
   *  - short total = 410px  (img 200 + content 210)
   *  - gap = 29px
   *  - tall total = 410*2 + 29 = 849px
   */
  const CARD_TOTAL_CLASS =
    height === "tall"
      ? "h-[849px]" // ровно две short + gap
      : "h-[410px]"; // все short одинаковые

  const IMG_HEIGHT_CLASS =
    height === "tall"
      ? "h-[400px]" // картинка tall
      : "h-[200px]"; // картинка short

  const CONTENT_HEIGHT_CLASS =
    height === "tall"
      ? "h-[449px]" // 849 - 400 = 449 (кнопка не обрезается)
      : "h-[210px]"; // 410 - 200 = 210

  const buttonClass =
    variant === "accent" ? "bg-accent text-white" : "bg-muted text-primary";

  return (
    <article
      className={`relative w-full ${CARD_TOTAL_CLASS} overflow-hidden rounded animate-fade-in bg-card shadow-[0_0_0_1px_var(--border)] flex flex-col`}
    >
      {/* Изображение фиксированной высоты (не меняем контент картинки) */}
      <div className={`relative w-full ${IMG_HEIGHT_CLASS} flex-none overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {showCursor && <></>}
      </div>

      {/* Белая подплашка фиксированной высоты — у short всегда одинаковая; у tall — рассчитана.
          Кнопка прижата вниз, текст не «раздувает» блок. */}
      <div className={`flex flex-col gap-4 p-4 md:p-6 ${CONTENT_HEIGHT_CLASS}`}>
        <div className="flex-1 min-h-0">
          <h3 className="font-sans font-bold text-foreground text-lg md:text-[21px] leading-normal">
            {title}
          </h3>
          <p
            className="font-sans font-normal text-foreground text-sm md:text-base leading-normal mt-1"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,      // ограничиваем на 2 строки, чтобы не ломать высоту
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
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
