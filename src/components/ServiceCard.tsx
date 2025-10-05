interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  height?: "tall" | "short";
  hideButton?: boolean;
}

const ServiceCard = ({
  image,
  title,
  description,
  height = "short",
}: ServiceCardProps) => {
  const CARD_TOTAL_CLASS =
    height === "tall" ? "lg:h-[850px]" : "lg:h-[410px]";
  const IMG_HEIGHT_CLASS =
    height === "tall"
      ? "h-[400px] lg:h-[520px]"
      : "h-[180px] md:h-[200px] lg:h-[200px]";

  return (
    <article
      className={`flex flex-col w-full h-full bg-card border border-border rounded-lg shadow-md hover:shadow-lg transition duration-300 ${CARD_TOTAL_CLASS}`}
    >
      {/* === Изображение === */}
      <div className={`relative w-full ${IMG_HEIGHT_CLASS} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* === Контент === */}
      <div className="flex flex-col justify-start p-4 md:p-5 lg:p-5 pt-2"> 
        {/* 👆 pt-2 — минимальный отступ, чтобы текст не прилипал к фото */}
        <h3 className="font-sans font-bold text-foreground text-lg md:text-xl leading-tight">
          {title}
        </h3>
        <p className="font-sans text-muted-foreground text-sm md:text-base leading-snug mt-1">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;
