import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px] py-12">
        {/* 3 колонки начиная с md */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
          {/* Company Info — слева всегда */}
          <div className="space-y-4 justify-self-start">
            <img
              className="w-[150px] h-auto object-contain"
              src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/demco-logo-1.svg"
              alt="Demco Logo"
            />
            <p className="font-sans text-muted-foreground text-sm">
              Jūsu uzticams partneris būvniecībā ar vairāk nekā 10 gadu pieredzi.
            </p>
          </div>

          {/* Navigācija — центр на md+, слева на мобилке */}
          <div className="space-y-4 justify-self-start md:justify-self-center">
            <h3 className="font-sans font-bold text-foreground text-base">
              Navigācija
            </h3>
            <nav>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="/"
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                  >
                    Galvenā
                  </a>
                </li>
                <li>
                  <a
                    href="/lv/pakalpojumi"
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                  >
                    Pakalpojumi
                  </a>
                </li>
                <li>
                  <a
                    href="/lv/sadarbiba-un-kontakti"
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                  >
                    Sadarbība un kontakti
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Kontaktinformācija — справа на md+, слева на мобилке */}
          <div className="space-y-4 justify-self-start md:justify-self-end">
            <h3 className="font-sans font-bold text-foreground text-base">
              Kontaktinformācija
            </h3>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <a
                href="tel:+37120000000"
                className="flex items-center gap-2 hover:text-primary transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span className="font-sans text-sm">+371 2000 0000</span>
              </a>
              <a
                href="mailto:info@demco.lv"
                className="flex items-center gap-2 hover:text-primary transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4" />
                <span className="font-sans text-sm">info@demco.lv</span>
              </a>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="font-sans text-sm">Rīga, Latvija</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-muted-foreground text-sm text-center md:text-left whitespace-nowrap">
              © 2025 SIA DEMCO ·{" "}
              <a
                href="/lv/privatuma-politika"
                className="hover:text-primary transition-colors underline underline-offset-2"
              >
                Privātuma politika
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
