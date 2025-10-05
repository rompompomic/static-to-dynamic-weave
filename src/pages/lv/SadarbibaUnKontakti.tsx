import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { Phone, Mail, MessageSquare } from "lucide-react";

const SadarbibaUnKontakti = () => {
  return (
    <>
      <Helmet>
        <title>Sadarbība un kontakti | DEMCO</title>
        <meta name="description" content="Sazinieties ar DEMCO – jūsu uzticamo partneri būvniecībā. Piedāvājam risinājumus jūsu objektam." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* How to Apply Section */}
          <section className="w-full py-12 md:py-16 lg:py-20 bg-white/0">
            <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
              <h1 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-8 text-center animate-fade-in">
                Kā pieteikties pakalpojumam
              </h1>
              
              <p className="font-sans text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12 animate-fade-in">
                Sazinieties ar mums, un mēs piedāvāsim risinājumu jūsu objektam.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 animate-fade-in">
                <div className="flex flex-col items-center text-center gap-4 p-6 bg-background border border-border">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary/10 border-2 border-primary">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-foreground text-lg mb-2">Zvans</h3>
                    <p className="font-sans text-muted-foreground text-sm">Zvaniet mums jebkurā laikā</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 p-6 bg-background border border-border">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary/10 border-2 border-primary">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-foreground text-lg mb-2">E-pasts</h3>
                    <p className="font-sans text-muted-foreground text-sm">Rakstiet mums e-pastu</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 p-6 bg-background border border-border">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary/10 border-2 border-primary">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-foreground text-lg mb-2">Forma</h3>
                    <p className="font-sans text-muted-foreground text-sm">Aizpildiet tiešsaistes formu</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
              <h2 className="font-mono font-bold text-foreground text-3xl md:text-4xl lg:text-[50px] leading-tight mb-12 text-center animate-fade-in">
                Tiešsaistes forma
              </h2>
              <ContactForm />
            </div>
          </section>

          {/* Contact Info Section */}
          <ContactInfo />
        </main>
        <Footer />
        <MobileCallButton />
      </div>
    </>
  );
};

export default SadarbibaUnKontakti;
