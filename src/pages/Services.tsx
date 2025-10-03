import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.demolition.title'),
      description: t('services.demolition.desc'),
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      imagePosition: "right" as const,
    },
    {
      title: t('services.industrial.title'),
      description: t('services.industrial.desc'),
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      imagePosition: "left" as const,
    },
    {
      title: t('services.earthworks.title'),
      description: t('services.earthworks.desc'),
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
      imagePosition: "right" as const,
    },
    {
      title: t('services.landscaping.title'),
      description: t('services.landscaping.desc'),
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      imagePosition: "left" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="relative py-20 px-6 lg:px-8 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-bold text-4xl lg:text-6xl mb-6">
            {t('services.page.title')}
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto opacity-90">
            {t('services.page.intro')}
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={service.imagePosition === "right" ? "" : "lg:col-start-2"}>
                <h2 className="font-bold text-3xl lg:text-4xl text-foreground mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className={service.imagePosition === "right" ? "lg:col-start-2" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
