import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  variant?: "default" | "accent";
  height?: "tall" | "short";
  showCursor?: boolean;
}

const ServiceCard = ({
  image,
  title,
  description,
  variant = "default",
  height = "short",
  showCursor = false,
}: ServiceCardProps) => {
  const heightClass = height === "tall" ? "h-[769px]" : "h-[370px]";
  const buttonClass =
    variant === "accent"
      ? "bg-accent text-white"
      : "bg-muted text-primary";

  return (
    <div
      className={`relative flex flex-col w-[410px] ${heightClass} items-start justify-end overflow-hidden group`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      {showCursor && (
        <img
          className="absolute top-[104px] left-1/2 -translate-x-1/2 w-9 h-9 opacity-0 group-hover:opacity-100 transition-opacity"
          src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/clarity-cursor-hand-line.svg"
          alt="Cursor"
        />
      )}

      <div className="flex flex-col items-start gap-4 p-4 w-full bg-card">
        <div className="flex flex-col items-start gap-1.5">
          <h3 className="font-sans font-bold text-foreground text-[21px] leading-normal">
            {title}
          </h3>
          <p className="font-sans font-normal text-foreground text-base leading-normal">
            {description}
          </p>
        </div>

        <button
          className={`flex items-center justify-between px-8 py-4 w-full ${buttonClass} hover:opacity-90 transition-opacity`}
        >
          <span className="font-sans font-bold text-base">
            Uzzināt vairāk
          </span>
          <ArrowUpRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
