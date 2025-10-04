const Partners = () => {
  // Placeholder partner logos - replace with actual logos when available
  const partners = [
    { id: 1, name: "Partner 1", logo: "https://placehold.co/200x80/e5e5e5/666?text=Partner+1" },
    { id: 2, name: "Partner 2", logo: "https://placehold.co/200x80/e5e5e5/666?text=Partner+2" },
    { id: 3, name: "Partner 3", logo: "https://placehold.co/200x80/e5e5e5/666?text=Partner+3" },
    { id: 4, name: "Partner 4", logo: "https://placehold.co/200x80/e5e5e5/666?text=Partner+4" },
    { id: 5, name: "Partner 5", logo: "https://placehold.co/200x80/e5e5e5/666?text=Partner+5" },
    { id: 6, name: "Partner 6", logo: "https://placehold.co/200x80/e5e5e5/666?text=Partner+6" },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-6 md:mb-8 animate-fade-in">
          Mūsu sadarbības partneri
        </h2>

        <p className="font-sans text-foreground text-base md:text-lg leading-relaxed mb-12 max-w-4xl animate-fade-in">
          Mēs sadarbojamies ar vadošajiem būvniecības un industriālajiem uzņēmumiem Latvijā. 
          Partneru uzticība apliecina mūsu profesionālismu un darba kvalitāti.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center p-8 bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
