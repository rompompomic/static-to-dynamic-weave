const Partners = () => {
  // Placeholder partner logos - replace with actual logos when available
  const partners = [{
    id: 1,
    name: "Partner 1",
    logo: "/images/partner-logo-construction-company-1.png"
  }, {
    id: 2,
    name: "Partner 2",
    logo: "/images/partner-logo-construction-company-2.png"
  }, {
    id: 3,
    name: "Partner 3",
    logo: "/images/partner-logo-industrial-company-1.png"
  }, {
    id: 4,
    name: "Partner 4",
    logo: "/images/partner-logo-industrial-company-2.png"
  }, {
    id: 5,
    name: "Partner 5",
    logo: "/images/partner-logo-engineering-company.png"
  }, {
    id: 6,
    name: "Partner 6",
    logo: "/images/partner-logo-equipment-supplier.png"
  }];
  return <section id="partneri" className="w-full py-12 md:py-16 lg:py-20 bg-[#a4a4a4]/[0.08]">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-6 md:mb-8 animate-fade-in">
          Mūsu sadarbības partneri
        </h2>

        <p className="font-sans text-foreground text-base md:text-lg leading-relaxed mb-12 max-w-4xl animate-fade-in">
          Mēs sadarbojamies ar vadošajiem būvniecības un industriālajiem uzņēmumiem Latvijā. 
          Partneru uzticība apliecina mūsu profesionālismu un darba kvalitāti.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {partners.map(partner => <div key={partner.id} className="flex items-center justify-center p-8 bg-card border border-border hover:border-primary/50 transition-colors">
              <img src={partner.logo} alt={partner.name} className="max-w-full h-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
            </div>)}
        </div>
      </div>
    </section>;
};
export default Partners;