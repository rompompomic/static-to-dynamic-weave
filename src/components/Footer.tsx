import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              className="w-[150px] h-auto object-contain"
              src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/demco-logo-1.svg"
              alt="Demco Logo"
            />
            <p className="font-sans text-muted-foreground text-sm">
              Jūsu uzticams partneris būvniecībā ar vairāk nekā 10 gadu pieredzi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-sans font-bold text-foreground text-base">
              Navigācija
            </h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="font-sans text-muted-foreground text-sm hover:text-primary transition-colors">
                SNIEDZĒJIEM
              </a>
              <a href="#" className="font-sans text-muted-foreground text-sm hover:text-primary transition-colors">
                SADARBĪBA UN KONTAKTI
              </a>
              <a href="#" className="font-sans text-muted-foreground text-sm hover:text-primary transition-colors">
                Pakalpojumi
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-sans font-bold text-foreground text-base">
              Kontakti
            </h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+37120000000" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-sans text-sm">+371 2000 0000</span>
              </a>
              <a href="mailto:info@demco.lv" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="font-sans text-sm">info@demco.lv</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm">Rīga, Latvija</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="font-sans font-bold text-foreground text-base">
              Darba laiks
            </h3>
            <div className="flex flex-col gap-2">
              <p className="font-sans text-muted-foreground text-sm">
                Pirmd. - Piektd.: 8:00 - 17:00
              </p>
              <p className="font-sans text-muted-foreground text-sm">
                Sestd. - Svētd.: Slēgts
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} SIA DEMCO. Visas tiesības aizsargātas.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-sans text-muted-foreground text-sm hover:text-primary transition-colors">
                Privātuma politika
              </a>
              <a href="#" className="font-sans text-muted-foreground text-sm hover:text-primary transition-colors">
                Lietošanas noteikumi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
