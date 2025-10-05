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
      <div className={`relative w-full ${IMG_HEIGHT_CLASS} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex-1 flex flex-col justify-end p-5 md:p-6">
        <h3 className="font-sans font-bold text-foreground text-lg md:text-xl mb-3">
          {title}
        </h3>
        <p className="font-sans text-muted-foreground text-sm md:text-base leading-normal">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;
