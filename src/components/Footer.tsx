import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  // Detect current language from URL
  const currentLang = typeof window !== 'undefined' 
    ? window.location.pathname.startsWith('/en/') ? 'en' 
      : window.location.pathname.startsWith('/ru/') ? 'ru' 
      : 'lv'
    : 'lv';
  
  const getLocalizedPath = (path: string) => {
    return `/${currentLang}${path}`;
  };

  const t = {
    lv: {
      companyDesc: "Jūsu uzticams partneris būvniecībā ar vairāk nekā 10 gadu pieredzi.",
      navigation: "Navigācija",
      home: "Galvenā",
      services: "Pakalpojumi",
      contacts: "Sadarbība un kontakti",
      contactInfo: "Kontaktinformācija",
      rights: "© 2025 SIA \"DEMCO\"",
      privacy: "Privātuma politika"
    },
    en: {
      companyDesc: "Your trusted construction partner with over 10 years of experience.",
      navigation: "Navigation",
      home: "Home",
      services: "Services",
      contacts: "Cooperation and Contacts",
      contactInfo: "Contact Information",
      rights: "© 2025 SIA \"DEMCO\"",
      privacy: "Privacy Policy"
    },
    ru: {
      companyDesc: "Ваш надежный партнер в строительстве с опытом более 10 лет.",
      navigation: "Навигация",
      home: "Главная",
      services: "Услуги",
      contacts: "Сотрудничество и контакты",
      contactInfo: "Контактная информация",
      rights: "© 2025 SIA \"DEMCO\"",
      privacy: "Политика конфиденциальности"
    }
  };

  const trans = t[currentLang];

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
              {trans.companyDesc}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4 justify-self-start md:justify-self-center">
            <h3 className="font-sans font-bold text-foreground text-base">
              {trans.navigation}
            </h3>
            <nav>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={`/${currentLang}/`}
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                  >
                    {trans.home}
                  </a>
                </li>
                <li>
                  <a
                    href={getLocalizedPath('/pakalpojumi')}
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                  >
                    {trans.services}
                  </a>
                </li>
                <li>
                  <a
                    href={getLocalizedPath('/sadarbiba-un-kontakti')}
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                  >
                    {trans.contacts}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 justify-self-start md:justify-self-end">
            <h3 className="font-sans font-bold text-foreground text-base">
              {trans.contactInfo}
            </h3>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <a
                href="tel:+37128663429"
                className="flex items-center gap-2 hover:text-primary transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span className="font-sans text-sm">+371 2866 3429</span>
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
                <span className="font-sans text-sm">
                  Malienas iela 78 - 5, Rīga, LV-1064
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left part */}
            <p className="font-sans text-muted-foreground text-sm text-center md:text-left whitespace-nowrap">
              {trans.rights}
            </p>

            {/* Right part – privacy policy link */}
            <a
              href={getLocalizedPath('/privatuma-politika')}
              className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-2 whitespace-nowrap"
            >
              {trans.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
