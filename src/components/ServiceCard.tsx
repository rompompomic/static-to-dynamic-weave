import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  size?: "tall" | "default";
  imageHeight?: string;
  href?: string;
  fixed?: boolean;
}

const ServiceCard = ({
  image,
  title,
  description,
  size = "default",
  imageHeight,
  href,
  fixed = false,
}: ServiceCardProps) => {
  const calculatedImageHeight = imageHeight
    ? imageHeight
    : fixed
      ? "h-[240px] md:h-[260px]"
      : size === "tall"
        ? "h-[280px] md:h-[340px] lg:h-[540px]"
        : "h-[220px] md:h-[230px] lg:h-[240px]";

  return (
    <div
      className="
        flex w-full flex-col overflow-hidden rounded-[22px] border border-[#E4E9F2]
        bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(15,23,42,0.14)]
      "
    >
      <div className={`w-full ${calculatedImageHeight}`}>
        <img src={image} alt={title} className="block h-full w-full object-cover" loading="lazy" />
      </div>

      <div className="flex h-full flex-col gap-6 px-7 py-6">
        <div className="space-y-3">
          <h3 className="font-mono text-[20px] font-bold leading-snug text-[#1F2937] md:text-[22px]">{title}</h3>
          <p className="font-sans text-[15px] leading-relaxed text-[#6B7280]">{description}</p>
        </div>

        {href && (
          <Link
            to={href}
            className="
              inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1FC47B]
              px-6 py-3 font-sans text-[15px] font-semibold text-white transition-colors
              duration-200 hover:bg-[#18A667] focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#1FC47B]/40 focus-visible:ring-offset-2
            "
          >
            <span>Uzzināt vairāk</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
