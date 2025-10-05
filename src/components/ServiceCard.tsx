interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  size?: "tall" | "default";
  imageHeight?: string; // опционально переопределить высоту картинки
}

const ServiceCard = ({
  image,
  title,
  description,
  size = "default",
  imageHeight,
}: ServiceCardProps) => {
  // Только высота ИЗОБРАЖЕНИЯ, у всей карточки высота авто → пустот снизу не будет
  const imgH =
    imageHeight ||
    (size === "tall"
      ? "h-[460px] md:h-[500px] lg:h-[520px]"
      : "h-[200px] md:h-[220px] lg:h-[240px]");

  return (
    <div className="w-full bg-card border border-border rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      {/* Картинка: блок, заполняет контейнер */}
      <div className={`w-full ${imgH}`}>
        <img
          src={image}
          alt={title}
          className="block w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Текст: никаких внешних маргинов, только внутренние паддинги */}
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
