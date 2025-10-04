import { Play } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      id: 1,
      url: "@/assets/pirms.webp",
      alt: "Demontāžas darbi pirms",
      label: "Pirms",
    },
    {
      id: 2,
      url: "@/assets/pec.webp",
      alt: "Demontāžas darbi pēc",
      label: "Pēc",
    },
    {
      id: 3,
      url: "@/assets/zemes-darbi.webp",
      alt: "Zemes darbi",
      label: "Zemes darbi",
    },
    {
      id: 4,
      url: "@/assets/industrialie-objekti.webp",
      alt: "Ražošanas ēku demontāža",
      label: "Industriālie objekti",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-6 md:mb-8 animate-fade-in">
          Galerija
        </h2>

        <p className="font-sans text-foreground text-base md:text-lg leading-relaxed mb-12 max-w-4xl animate-fade-in">
          Apskatiet mūsu iepriekš pabeigtus projektus un darbu rezultātus.
        </p>

        {/* Video Section */}
        <div className="mb-12 animate-fade-in">
          <div className="relative w-full aspect-video bg-muted border border-border overflow-hidden group">
            <img
              src="@/assets/demontazas-procesa-video.webp"
              alt="Video preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
              <button className="w-20 h-20 flex items-center justify-center bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform">
                <Play className="w-10 h-10 ml-1" fill="currentColor" />
              </button>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-sans font-bold text-lg mb-1">Demontāžas procesa video</p>
              <p className="font-sans text-sm opacity-90">Skatiet, kā mēs strādājam</p>
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] overflow-hidden bg-muted border border-border hover:border-primary/50 transition-colors"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="font-sans font-bold text-white text-sm">
                  {image.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
