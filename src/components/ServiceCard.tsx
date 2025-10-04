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
   * Жёсткие размеры под сетку (lg: 3 колонки, gap 29px):
   *  short total = 410px (img 200 + content 210)
   *  tall total  = 410*2 + 29 = 849px
   */
  const CARD_TOTAL_CLASS =
    height === "tall" ? "h-[849px]" : "h-[410px]";

  // Увеличили фото у tall, чтобы белый блок был меньше
  const IMG_HEIGHT_CLASS =
    height === "tall" ? "h-[520px]" : "h-[200px]";

  // Соответственно уменьшили высоту контента у tall
  const CONTENT_HEIGHT_CLASS =
    height === "tall" ? "h-[329px]" : "h-[210px]";

  // Сколько строк показывать в описании
  const CLAMP_LINES = height === "tall" ? 4 : 2;

  const buttonClass =
    variant === "accent" ? "bg-accent text-white" : "bg-muted text-primary";

  return (
    <article
      className={`relative w-full ${CARD_TOTAL_CLASS} overflow-hidden rounded animate-fade-in bg-card shadow-[0_0_0_1px_var(--border)] flex flex-col`}
    >
      {/* Изображение фиксированной высоты */}
      <div className={`relative w-full ${IMG_HEIGHT_CLASS} flex-none overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
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
