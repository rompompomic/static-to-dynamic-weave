import { useLanguage } from "@/contexts/LanguageContext";
import { Award, CheckCircle2, Clock, Shield, Users } from "lucide-react";

const AboutUs = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Clock, text: t('about.advantage1') },
    { icon: Shield, text: t('about.advantage2') },
    { icon: Users, text: t('about.advantage3') },
    { icon: CheckCircle2, text: t('about.advantage4') },
  ];

  const certificates = [
    { icon: Clock, title: '10+', subtitle: t('about.experience') },
    { icon: Award, title: t('about.certificates'), subtitle: 'ISO, CE' },
    { icon: Shield, title: t('about.safety'), subtitle: 'Sertificēta' },
    { icon: Users, title: t('about.team'), subtitle: '20+ darbinieki' },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="font-bold text-4xl lg:text-5xl text-foreground mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Advantages */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-foreground flex-1">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Certificates */}
          <div className="grid grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <cert.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-xl text-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
