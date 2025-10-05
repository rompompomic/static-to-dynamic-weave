import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  height?: "tall" | "short";
  showCursor?: boolean;
  href?: string;
  hideButton?: boolean;
}

const ServiceCard = ({
  image,
  title,
  description,
  height = "short",
  showCursor = false,
  href = "/lv/pakalpojumi",
  hideButton = false,
}: ServiceCardProps) => {
  // карточки нормальной высоты, но картинка занимает больше места
  const CARD_TOTAL_CLASS =
    height === "tall" ? "lg:h-[820px]" : "lg:h-[460px]";

  // увеличиваем высоту изображения
  const IMG_HEIGHT_CLASS =
    height === "tall"
      ? "h-[280px] md:h-[300px] lg:h-[580px]"
      : "h-[220px] md:h-[260px] lg:h-[300px]";

  const CLAMP_LINES = height === "tall" ? 4 : 2;

  // shimmer эффект
  const shimmer =
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r " +
    "before:from-transparent before:via-white/20 before:to-transparent " +
    "group-hover:before:translate-x-full before:transition-transform before:duration-700";

  // кнопка в цвете Zemes darbi
  const buttonClass = `
    group relative inline-flex items-center justify-center gap-2
    w-full h-11 px-6 rounded-lg font-sans font-bold text-base
    bg-primary text-white shadow-sm hover:shadow-md
    transition ease-out duration-300
    hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.97]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40
    overflow-hidden ${shimmer}
  `;

  return (
    <article
      className={`flex flex-col w-full h-full bg-card border border-border rounded-lg shadow-md hover:shadow-lg transition duration-300 ${CARD_TOTAL_CLASS}`}
    >
      {/* Изображение (увеличенное) */}
      <div className={`relative w-full ${IMG_HEIGHT_CLASS} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {showCursor && null}
      </div>

      {/* Контент */}
      <div className="flex-1 flex flex-col justify-between p-5 md:p-6">
        <div>
          <h3 className="font-sans font-bold text-foreground text-lg md:text-xl mb-3 leading-snug">
            {title}
          </h3>
          <p
            className="font-sans text-muted-foreground text-sm md:text-base leading-normal"
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

        {/* Кнопка (если не скрыта) */}
        {!hideButton && (
          <div className="mt-5">
            <a href={href} className={buttonClass}>
              <span>Uzzināt vairāk</span>
              <ArrowUpRight className="ml-2 w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default ServiceCard;
