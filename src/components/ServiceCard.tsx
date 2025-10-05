interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  height?: "tall" | "short";
  imageHeight?: string;
}

const ServiceCard = ({
  image,
  title,
  description,
  height = "short",
  imageHeight,
}: ServiceCardProps) => {
  const CARD_TOTAL_CLASS =
    height === "tall" ? "lg:h-[849px]" : "lg:h-[410px]";
  const IMG_HEIGHT_CLASS =
    imageHeight || (height === "tall" ? "h-[520px]" : "h-[180px]");

  return (
    <div
      className={`flex flex-col justify-between bg-card border border-border rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden ${CARD_TOTAL_CLASS}`}
    >
      {/* Картинка */}
      <div className={`relative w-full ${IMG_HEIGHT_CLASS}`}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Контент — без нижних отступов */}
      <div className="flex flex-col flex-grow justify-between p-5 md:p-6">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="font-sans font-bold text-foreground text-lg md:text-xl leading-tight">
              {title}
            </h3>
            <p className="font-sans text-muted-foreground text-sm md:text-base leading-snug mt-1">
              {description}
            </p>
          </div>
          {/* пустоты снизу убраны */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
