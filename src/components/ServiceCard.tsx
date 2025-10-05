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
      className={`flex flex-col w-full h-full bg-card border border-border rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden ${CARD_TOTAL_CLASS}`}
    >
      {/* === Изображение === */}
      <div className={`w-full ${IMG_HEIGHT_CLASS} shrink-0`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover block"
          loading="lazy"
        />
      </div>

      {/* === Контент === */}
      <div className="p-4 md:p-5 lg:p-5 pt-[10px]">
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
