import React, { useMemo, useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import pirmsImg from "@/assets/pirms.webp";
import pecImg from "@/assets/pec.webp";
import zemesDarbiImg from "@/assets/zemes-darbi.webp";
import industrialieObjektiImg from "@/assets/industrialie-objekti.webp";

const Gallery = () => {
  const images = useMemo(
    () => [
      { id: 1, url: pirmsImg, alt: "Demontāžas darbi pirms", label: "Pirms" },
      { id: 2, url: pecImg, alt: "Demontāžas darbi pēc", label: "Pēc" },
      { id: 3, url: zemesDarbiImg, alt: "Zemes darbi", label: "Zemes darbi" },
      { id: 4, url: industrialieObjektiImg, alt: "Industriālie objekti", label: "Industriālie objekti" },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const total = images.length;

  // swipe support
  const touchX = useRef<number | null>(null);
  const onTouchStart: React.TouchEventHandler = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd: React.TouchEventHandler = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    const threshold = 40;
    if (dx > threshold) prev();
    if (dx < -threshold) next();
    touchX.current = null;
  };

  const next = () => setActive((i) => (i + 1) % total);
  const prev = () => setActive((i) => (i - 1 + total) % total);

  // === Thumbnail auto-scroll ===
  const thumbsRef = useRef<HTMLDivElement | null>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const el = thumbRefs.current[active];
    if (el && thumbsRef.current) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

  return (
    <section id="galerija" className="w-full py-12 md:py-16 lg:py-20 bg-white/0">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-6 md:mb-8 animate-fade-in">
          Galerija
        </h2>

        <p className="font-sans text-foreground text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-4xl animate-fade-in">
          Apskatiet mūsu iepriekš pabeigtus projektus un darbu rezultātus.
        </p>

        {/* Main viewer */}
        <div
          className="relative animate-fade-in select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="
              w-full overflow-hidden border border-border rounded-2xl bg-muted
              aspect-[4/3] md:aspect-video
            "
            role="region"
            aria-label="Foto galerija"
          >
            <img
              key={images[active].id}
              src={images[active].url}
              alt={images[active].alt}
              className="w-full h-full object-cover transition-opacity duration-300 opacity-100"
              draggable={false}
            />
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={prev}
              className="p-2 rounded-lg border border-border hover:bg-muted transition"
              aria-label="Iepriekšējais"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-sm text-muted-foreground">
              {active + 1} / {total}
            </div>
            <button
              type="button"
              onClick={next}
              className="p-2 rounded-lg border border-border hover:bg-muted transition"
              aria-label="Nākamais"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-6 md:mt-8 animate-fade-in">
          <div
            className="
              flex gap-3 md:gap-4 overflow-x-auto pb-1
              [scrollbar-width:none] [-ms-overflow-style:none]
            "
            ref={thumbsRef}
            style={{ scrollbarWidth: "none" } as React.CSSProperties}
          >
            {images.map((img, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`
                    shrink-0 relative overflow-hidden rounded-xl border
                    ${isActive ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/40"}
                    transition
                    w-[30%] sm:w-[23%] md:w-[22%] lg:w-[180px]
                    aspect-[4/3]
                  `}
                  aria-label={img.label}
                  ref={(el) => (thumbRefs.current[idx] = el)}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white px-2 py-1">
                    <span className="block text-xs font-sans font-semibold truncate">
                      {img.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
