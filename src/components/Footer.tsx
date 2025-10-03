import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">SIA DEMCO</h3>
            <p className="text-sm text-gray-300 mb-4">
              {t('about.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">{t('footer.quicklinks')}</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/pakalpojumi" className="text-sm text-gray-300 hover:text-white transition-colors">
                {t('nav.services')}
              </Link>
              <Link to="/sadarbiba-kontakti" className="text-sm text-gray-300 hover:text-white transition-colors">
                {t('nav.contacts')}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">{t('footer.contact')}</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm text-gray-300">Rīga, Latvija</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-gray-300">+371 2XXXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-gray-300">info@demco.lv</span>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">
            © {currentYear} SIA DEMCO. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
