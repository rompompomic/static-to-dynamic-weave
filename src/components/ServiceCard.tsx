interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  height?: "tall" | "short"; // оставим, если где-то используешь
}

const ServiceCard = ({
  image,
  title,
  description,
  height = "short",
}: ServiceCardProps) => {
  // Фиксируем только высоту изображения, НО НЕ всей карточки
  const IMG_HEIGHT_CLASS =
    height === "tall"
      ? "h-[400px] md:h-[420px] lg:h-[460px]"
      : "h-[180px] md:h-[220px] lg:h-[240px]";

  return (
    <div className="flex flex-col w-full bg-card border border-border rounded-lg shadow-md overflow-hidden">
      {/* Изображение — без паддингов, без маргинов */}
      <div className={`w-full ${IMG_HEIGHT_CLASS}`}>
        <img src={image} alt={title} className="block w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Текст — никаких внешних отступов, только небольшой внутренний */}
      <div className="px-5 pt-3 pb-5">
        <h3 className="m-0 font-sans font-bold text-foreground text-lg md:text-xl leading-tight">
          {title}
        </h3>
        <p className="m-0 mt-2 font-sans text-muted-foreground text-sm md:text-base leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
