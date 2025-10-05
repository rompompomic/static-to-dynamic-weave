// ServiceCard.tsx
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
  // heights: big left card vs smaller ones on the right
  const CARD_TOTAL_CLASS = height === "tall" ? "lg:h-[850px]" : "lg:h-[410px]";
  const IMG_HEIGHT_CLASS =
    height === "tall" ? "h-[520px] lg:h-[520px]" : "h-[200px] lg:h-[200px]";

  return (
    <div
      className={`w-full bg-white border border-border rounded-lg shadow-md overflow-hidden ${CARD_TOTAL_CLASS}`}
      role="group"
    >
      {/* image container: no padding, no gap */}
      <div className={`${IMG_HEIGHT_CLASS} w-full block`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover block"
          loading="lazy"
        />
      </div>

      {/* text container: no top margin, tight spacing */}
      <div className="px-5 pb-5 pt-3">
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
