import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Factory, Shovel, TreePine, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('services.service1'),
      description: t('services.service1.desc'),
    },
    {
      icon: Factory,
      title: t('services.service2'),
      description: t('services.service2.desc'),
    },
    {
      icon: Shovel,
      title: t('services.service3'),
      description: t('services.service3.desc'),
    },
    {
      icon: TreePine,
      title: t('services.service4'),
      description: t('services.service4.desc'),
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-4xl lg:text-5xl text-foreground mb-12 text-center">
          {t('services.title')}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg group"
            >
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              <Link
                to="/pakalpojumi"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                {t('services.learnmore')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/pakalpojumi"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            {t('services.cta')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
