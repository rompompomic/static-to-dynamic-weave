interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  height?: "tall" | "short";
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
      : "h-[180px] md:h-[220px] lg:h-[200px]";

  return (
    <div
      className={`flex flex-col w-full bg-white border border-border rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden ${CARD_TOTAL_CLASS}`}
    >
      {/* Картинка */}
      <div className={`relative w-full ${IMG_HEIGHT_CLASS}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover block"
          loading="lazy"
        />
      </div>

      {/* Текст */}
      <div className="flex flex-col justify-start flex-1 px-5 py-4">
        <h3 className="font-sans font-bold text-foreground text-lg md:text-xl leading-tight mb-1">
          {title}
        </h3>
        <p className="font-sans text-muted-foreground text-sm md:text-base leading-snug tracking-[0.01em]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
