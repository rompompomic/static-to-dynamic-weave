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
   * Фиксируем РАЗМЕР КАРТОЧКИ (как в текущей сетке),
   * фиксируем РАЗМЕР ИЗОБРАЖЕНИЯ,
   * а белая подплашка занимает остаток — у всех short она одинаковая.
   */
  const cardHeightClass =
    height === "tall"
      ? "h-[849px] md:h-[680px]"  // tall = две short + gap (ничего не меняем визуально)
      : "h-[410px] md:h-[340px]"; // short единая высота

  const imageHeightClass =
    height === "tall"
      ? "h-[420px] md:h-[340px]"  // фото в tall
      : "h-[200px] md:h-[180px]"; // фото в short (одинаково у всех)

  const buttonClass =
    variant === "accent" ? "bg-accent text-white" : "bg-muted text-primary";

  return (
    <article
      className={`relative w-full overflow-hidden rounded animate-fade-in bg-card shadow-[0_0_0_1px_var(--border)] ${cardHeightClass} flex flex-col`}
    >
      {/* Изображение фиксированной высоты (одинаковое для карточек одного типа) */}
      <div className={`relative w-full ${imageHeightClass} flex-none overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {showCursor && <></>}
      </div>

      {/* Белая подплашка: занимает остаток высоты карточки → одинаковая у всех short */}
      <div className="flex-1 flex flex-col gap-4 p-4 md:p-6">
        <div className="flex-1 min-h-0">
          <h3 className="font-sans font-bold text-foreground text-lg md:text-[21px] leading-normal">
            {title}
          </h3>

          {/* Описание ограничиваем по строкам, чтобы не "раздувало" подплашку */}
          <p
            className="font-sans font-normal text-foreground text-sm md:text-base leading-normal mt-1"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,       // 2 строки на всех брейкпоинтах
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
