import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-[600px] lg:h-[700px] bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          alt="Construction site"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl py-20">
          <h1 className="font-bold text-white text-4xl lg:text-6xl leading-tight mb-6">
            {t('hero.title')}
          </h1>
          
          <p className="font-sans text-white text-lg lg:text-xl leading-relaxed mb-8 opacity-90">
            {t('hero.subtitle')}
          </p>

          <Link
            to="/pakalpojumi"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            <span>{t('hero.cta')}</span>
            <ArrowUpRight className="w-6 h-6" />
          </Link>

          {/* Stats */}
          <div className="flex gap-12 mt-16 pt-8 border-t border-white/30">
            <div>
              <div className="font-bold text-white text-5xl mb-2">
                {t('hero.stat1')}
              </div>
              <div className="text-white/80 text-sm">
                {t('hero.stat1.text')}
              </div>
            </div>
            <div>
              <div className="font-bold text-white text-5xl mb-2">
                {t('hero.stat2')}
              </div>
              <div className="text-white/80 text-sm">
                {t('hero.stat2.text')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
