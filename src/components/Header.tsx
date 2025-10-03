import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'lv' as const, label: 'LV' },
    { code: 'en' as const, label: 'EN' },
    { code: 'ru' as const, label: 'RU' },
  ];

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/pakalpojumi', label: t('nav.services') },
    { path: '/sadarbiba-kontakti', label: t('nav.contacts') },
  ];

  return (
    <header 
      className={`w-full bg-card border-b border-border transition-all duration-300 z-50 ${
        isSticky ? 'fixed top-0 left-0 right-0 shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            className="h-12 w-auto object-contain"
            src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/demco-logo-1.svg"
            alt="Demco Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-sans font-normal text-sm transition-colors ${
                location.pathname === link.path
                  ? 'text-primary font-semibold'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side - Language & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-muted transition-colors rounded">
              <span className="font-sans font-normal text-foreground text-sm">
                {languages.find(l => l.code === language)?.label}
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 mt-2 w-24 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg ${
                    language === lang.code ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to="/pakalpojumi"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            <span className="text-sm">{t('header.cta')}</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-muted transition-colors rounded"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-sans text-sm py-2 ${
                  location.pathname === link.path
                    ? 'text-primary font-semibold'
                    : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4 border-t border-border">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-sm rounded ${
                    language === lang.code
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
