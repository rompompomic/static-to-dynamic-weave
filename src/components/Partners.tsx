import partner1 from "@/assets/partner1.webp";
import partner2 from "@/assets/partner2.webp";
import partner3 from "@/assets/partner3.webp";
import partner4 from "@/assets/partner4.webp";
import partner5 from "@/assets/partner5.webp";
import partner6 from "@/assets/partner6.webp";

const Partners = () => {
  const partners = [
    { id: 1, logo: partner1 },
    { id: 2, logo: partner2 },
    { id: 3, logo: partner3 },
    { id: 4, logo: partner4 },
    { id: 5, logo: partner5 },
    { id: 6, logo: partner6 },
  ];

  return (
    <section
      id="partneri"
      className="w-full py-12 md:py-16 lg:py-20 bg-[#a4a4a4]/[0.08]"
      aria-labelledby="partners-heading"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2
          id="partners-heading"
          className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-6 md:mb-8 animate-fade-in"
        >
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
              className="flex items-center justify-center p-8 bg-card border border-border hover:border-primary/50 transition-colors rounded-xl"
            >
              <img
                src={partner.logo}
                alt=""
                loading="lazy"
                width={200}
                height={80}
                className="max-w-[180px] w-full h-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
