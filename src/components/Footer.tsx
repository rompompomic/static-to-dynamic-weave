import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px] py-12">
        {/* 3 колонки на lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info — слева */}
          <div className="space-y-4 lg:justify-self-start">
            <img
              className="w-[150px] h-auto object-contain"
              src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/demco-logo-1.svg"
              alt="Demco Logo"
            />
            <p className="font-sans text-muted-foreground text-sm">
              Jūsu uzticams partneris būvniecībā ar vairāk nekā 10 gadu pieredzi.
            </p>
          </div>

          {/* Navigācija — центр на десктопе, слева на мобилке */}
          <div className="space-y-4 lg:justify-self-center">
            <h3 className="font-sans font-bold text-foreground text-base lg:text-center">
              Navigācija
            </h3>
            <nav className="w-fit">
              <ul className="flex flex-col gap-2 items-start">
                <li>
                  <a
                    href="#"
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Galvenā
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Pakalpojumi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Sadarbība un kontakti
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Kontaktinformācija — справа на десктопе, слева на мобилке */}
          <div className="space-y-4 lg:justify-self-end">
            <h3 className="font-sans font-bold text-foreground text-base lg:text-right">
              Kontaktinformācija
            </h3>
            <div className="w-fit">
              <div className="flex flex-col gap-3 items-start">
                <a
                  href="tel:+37120000000"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-sans text-sm">+371 2000 0000</span>
                </a>
                <a
                  href="mailto:info@demco.lv"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-sans text-sm">info@demco.lv</span>
                </a>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="font-sans text-sm">Rīga, Latvija</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-muted-foreground text-sm text-center md:text-left">
              © 2025 SIA DEMCO · Privātuma politika
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
