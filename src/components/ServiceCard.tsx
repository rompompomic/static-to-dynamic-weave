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
      className={`flex flex-col bg-card border border-border rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden ${CARD_TOTAL_CLASS}`}
    >
      <div className={`relative w-full ${IMG_HEIGHT_CLASS}`}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-end p-5 md:p-6 flex-1">
        <h3 className="font-sans font-bold text-foreground text-lg md:text-xl mb-2">
          {title}
        </h3>
        <p className="font-sans text-muted-foreground text-sm md:text-base leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
