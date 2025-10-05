import { useState } from "react";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import demcoLogo from "@/assets/demco-logo.webp";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  
  // Detect current language from URL
  const currentLang = window.location.pathname.startsWith('/en/') ? 'en' 
    : window.location.pathname.startsWith('/ru/') ? 'ru' 
    : 'lv';
  
  const langLabels = { lv: 'LV', en: 'EN', ru: 'RU' };
  
  // Generate language-aware URLs
  const getLocalizedPath = (path: string) => {
    const basePath = path.startsWith('/') ? path : `/${path}`;
    return `/${currentLang}${basePath}`;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-card border-b border-border backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px] py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href={`/${currentLang}/`} className="flex items-center">
            <img
              className="w-[140px] md:w-[184px] h-10 md:h-14 object-contain"
              src={demcoLogo}
              alt="Demco Logo"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a
              href={getLocalizedPath('/pakalpojumi')}
              className="font-sans text-sm text-foreground hover:text-primary transition-colors"
            >
              {currentLang === 'en' ? 'SERVICES' : currentLang === 'ru' ? 'УСЛУГИ' : 'PAKALPOJUMI'}
            </a>
            <a
              href={getLocalizedPath('/sadarbiba-un-kontakti')}
              className="font-sans text-sm text-foreground hover:text-primary transition-colors"
            >
              {currentLang === 'en' ? 'COOPERATION AND CONTACTS' : currentLang === 'ru' ? 'СОТРУДНИЧЕСТВО И КОНТАКТЫ' : 'SADARBĪBA UN KONTAKTI'}
            </a>
            <a
              href={`/${currentLang}/#par-mums`}
              className="font-sans text-sm text-foreground hover:text-primary transition-colors"
            >
              {currentLang === 'en' ? 'ABOUT US' : currentLang === 'ru' ? 'О НАС' : 'PAR MUMS'}
            </a>
            <a
              href={`/${currentLang}/#galerija`}
              className="font-sans text-sm text-foreground hover:text-primary transition-colors"
            >
              {currentLang === 'en' ? 'GALLERY' : currentLang === 'ru' ? 'ГАЛЕРЕЯ' : 'GALERIJA'}
            </a>
            <a
              href={`/${currentLang}/#partneri`}
              className="font-sans text-sm text-foreground hover:text-primary transition-colors"
            >
              {currentLang === 'en' ? 'PARTNERS' : currentLang === 'ru' ? 'ПАРТНЕРЫ' : 'PARTNERI'}
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="inline-flex h-14 justify-center gap-2.5 px-3 py-4 items-center hover:bg-muted transition-colors"
              >
                <span className="font-sans text-base text-foreground">{langLabels[currentLang]}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-card border border-border shadow-lg min-w-[80px] animate-slide-down z-50">
                  {(['lv', 'en', 'ru'] as const).filter(lang => lang !== currentLang).map(lang => (
                    <a
                      key={lang}
                      href={`/${lang}/`}
                      className="block w-full px-4 py-2 text-left font-sans text-sm hover:bg-muted transition-colors"
                    >
                      {langLabels[lang]}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href={getLocalizedPath('/pakalpojumi')}
              className="
                group relative inline-flex items-center justify-center gap-2.5
                h-11 px-6 md:px-8 rounded-lg
                bg-gradient-hero text-white font-sans font-bold
                shadow-sm hover:shadow-md transition ease-out duration-200
                hover:scale-[1.02] active:scale-[0.97]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40
                overflow-hidden
                before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r
                before:from-transparent before:via-white/20 before:to-transparent
                group-hover:before:translate-x-full before:transition-transform before:duration-700
                whitespace-nowrap
              "
            >
              <span className="text-sm md:text-base">
                {currentLang === 'en' ? 'View services' : currentLang === 'ru' ? 'Смотреть услуги' : 'Skatīt pakalpojumus'}
              </span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-4 animate-slide-down">
            <nav className="flex flex-col gap-4">
              <a
                href={getLocalizedPath('/pakalpojumi')}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-base text-foreground hover:text-primary transition-colors py-2"
              >
                {currentLang === 'en' ? 'SERVICES' : currentLang === 'ru' ? 'УСЛУГИ' : 'PAKALPOJUMI'}
              </a>
              <a
                href={getLocalizedPath('/sadarbiba-un-kontakti#forma')}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-base text-foreground hover:text-primary transition-colors py-2"
              >
                {currentLang === 'en' ? 'COOPERATION AND CONTACTS' : currentLang === 'ru' ? 'СОТРУДНИЧЕСТВО И КОНТАКТЫ' : 'SADARBĪBA UN KONTAKTI'}
              </a>
              <a
                href={`/${currentLang}/#par-mums`}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-base text-foreground hover:text-primary transition-colors py-2"
              >
                {currentLang === 'en' ? 'ABOUT US' : currentLang === 'ru' ? 'О НАС' : 'PAR MUMS'}
              </a>
              <a
                href={`/${currentLang}/#galerija`}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-base text-foreground hover:text-primary transition-colors py-2"
              >
                {currentLang === 'en' ? 'GALLERY' : currentLang === 'ru' ? 'ГАЛЕРЕЯ' : 'GALERIJA'}
              </a>
              <a
                href={`/${currentLang}/#partneri`}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-base text-foreground hover:text-primary transition-colors py-2"
              >
                {currentLang === 'en' ? 'PARTNERS' : currentLang === 'ru' ? 'ПАРТНЕРЫ' : 'PARTNERI'}
              </a>

              <div className="flex gap-2 pt-2 border-t border-border">
                {(['lv', 'en', 'ru'] as const).map(lang => (
                  <a
                    key={lang}
                    href={`/${lang}/`}
                    className={`px-4 py-2 font-sans text-sm hover:bg-muted transition-colors ${
                      lang === currentLang ? 'bg-muted font-bold' : ''
                    }`}
                  >
                    {langLabels[lang]}
                  </a>
                ))}
              </div>

              <a
                href={getLocalizedPath('/pakalpojumi')}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex justify-center gap-2.5 px-6 py-3 bg-gradient-hero items-center hover:opacity-90 transition-opacity mt-2"
              >
                <span className="font-sans font-bold text-white text-base">
                  {currentLang === 'en' ? 'View services' : currentLang === 'ru' ? 'Смотреть услуги' : 'Skatīt pakalpojumus'}
                </span>
                <ArrowUpRight className="w-5 h-5 text-white" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
