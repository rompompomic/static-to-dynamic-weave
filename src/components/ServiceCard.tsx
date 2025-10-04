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
  // Фиксируем высоту именно ДЛЯ ИЗОБРАЖЕНИЯ, чтобы у всех short карточек она была одинаковой.
  // Для tall — большее изображение.
  const imageHeightClass =
    height === "tall"
      ? "h-[360px] md:h-[420px] lg:h-[520px]"
      : "h-[210px] md:h-[230px] lg:h-[240px]"; // одинаковая высота фото у всех short

  // Общая высота карточки нам больше не нужна (иначе снова будет «съедать» картинку).
  // Высота будет естественно складываться из блока изображения + контента.
  const buttonClass =
    variant === "accent" ? "bg-accent text-white" : "bg-muted text-primary";

  return (
    <article className="relative flex flex-col w-full overflow-hidden rounded animate-fade-in bg-card shadow-[0_0_0_1px_var(--border)]">
      {/* Блок изображения с фиксированной высотой */}
      <div className={`relative w-full ${imageHeightClass} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {showCursor && <></>}
      </div>

      {/* Контент */}
      <div className="flex flex-col items-start gap-4 p-4 md:p-6">
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
    </article>
  );
};

export default ServiceCard;
