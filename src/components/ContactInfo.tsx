import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white/0">
      <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
        <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-12 text-center animate-fade-in">
          Kontaktinformācija
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-background border border-border p-8">
              <h3 className="font-sans font-bold text-foreground text-xl mb-6">Sazināties ar mums</h3>
              <div className="space-y-6">
                <a
                  href="tel:+37120000000"
                  className="flex items-center gap-4 group hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border-2 border-primary group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-muted-foreground">Telefons</p>
                    <p className="font-sans font-bold text-foreground">+371 2000 0000</p>
                  </div>
                </a>

                <a
                  href="mailto:info@demco.lv"
                  className="flex items-center gap-4 group hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border-2 border-primary group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-muted-foreground">E-pasts</p>
                    <p className="font-sans font-bold text-foreground">info@demco.lv</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border-2 border-primary">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-muted-foreground">Adrese</p>
                    <p className="font-sans font-bold text-foreground">Rīga, Latvija</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border p-8">
              <h3 className="font-sans font-bold text-foreground text-xl mb-4">Darba laiks</h3>
              <div className="space-y-2 font-sans text-muted-foreground">
                <p>Pirmdien - Piektdien: 8:00 - 18:00</p>
                <p>Sestdien: 9:00 - 15:00</p>
                <p>Svētdien: Slēgts</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-background border border-border rounded overflow-hidden h-[460px] md:h-[500px] lg:h-[540px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139895.74485817535!2d23.885837287109373!3d56.94929939999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga%2C%20Latvia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DEMCO Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
