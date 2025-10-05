import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

const PrivatumaPolitikaEN = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Privacy Policy | DEMCO</title>
        <meta
          name="description"
          content="SIA DEMCO privacy policy - information on personal data processing and protection in accordance with GDPR requirements."
        />
      </Helmet>

      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px] py-16 md:py-24">
          <div className="max-w-4xl mx-auto border border-border rounded-lg p-8 md:p-12 bg-card">
            <h1 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-8">
              Privacy Policy
            </h1>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  1. General Information
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground">
                  This Privacy Policy ("Policy") defines how SIA "DEMCO", registration number 40103898126, legal address: Malienas Street 78–5, Riga, LV-1064 (hereinafter – Company, we, us, our) processes and protects personal data of individuals – data subjects (you, your).
                </p>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mt-4">
                  We are committed to protecting your privacy and processing personal data in accordance with the European Parliament and Council Regulation (EU) 2016/679 (GDPR), the Law on the Processing of Personal Data and other applicable regulations.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  2. Data Controller and Contact Information
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Data Controller:
                </p>
                <div className="font-sans text-base leading-relaxed text-muted-foreground pl-4">
                  <p>SIA "DEMCO"</p>
                  <p>Reg. No.: 40103898126</p>
                  <p>Address: Malienas Street 78–5, Riga, LV-1064</p>
                  <p>Email: info@demco.lv</p>
                  <p>Phone: +371 28663429</p>
                </div>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mt-4">
                  If you have questions about personal data processing or wish to exercise your rights, please contact us using the contact information provided above.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  3. What Information We Process
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  We process only personal data necessary for a specific purpose, including:
                </p>
                <ul className="font-sans text-base leading-relaxed text-muted-foreground list-disc pl-8 space-y-2">
                  <li>Identification data: name, surname, personal code (if necessary for contract conclusion);</li>
                  <li>Contact information: phone number, email address, postal address;</li>
                  <li>Contract data and invoice information;</li>
                  <li>Communication content (emails, messages, requests, feedback);</li>
                  <li>Website usage data (IP address, browser type, access time, site navigation – in the form of cookies).</li>
                </ul>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  4. Purpose of Personal Data Processing
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  We process personal data for the following purposes:
                </p>
                <ul className="font-sans text-base leading-relaxed text-muted-foreground list-disc pl-8 space-y-2">
                  <li>Contract conclusion and performance;</li>
                  <li>Customer service and communication;</li>
                  <li>Invoice administration;</li>
                  <li>Ensuring website functionality and improving user experience;</li>
                  <li>Direct marketing (with your consent).</li>
                </ul>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  5. Legal Basis for Processing
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  We process personal data on the following legal bases:
                </p>
                <ul className="font-sans text-base leading-relaxed text-muted-foreground list-disc pl-8 space-y-2">
                  <li>Your consent;</li>
                  <li>Contract conclusion and performance;</li>
                  <li>Our legitimate interests (e.g., ensuring business operations, improving services);</li>
                  <li>Compliance with legal obligations.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  6. Data Recipients
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  We may disclose your personal data to the following categories of recipients:
                </p>
                <ul className="font-sans text-base leading-relaxed text-muted-foreground list-disc pl-8 space-y-2">
                  <li>Our employees and authorized representatives;</li>
                  <li>Service providers who provide services to us (e.g., IT service providers, auditors, legal advisors);</li>
                  <li>Governmental authorities, if required by law.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  7. Data Transfer to Third Countries
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  We do not transfer your personal data to third countries (countries outside the European Union and the European Economic Area) without appropriate safeguards. If such transfer becomes necessary, we will ensure that appropriate safeguards are in place, such as standard contractual clauses approved by the European Commission.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  8. Data Storage Period
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  We store your personal data only as long as necessary to achieve the purposes for which the data were collected, unless a longer storage period is required by law.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  9. Data Security
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  We take appropriate technical and organizational measures to protect your personal data from unauthorized access, unlawful processing, and accidental loss, destruction, or damage.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  10. Your Rights
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="font-sans text-base leading-relaxed text-muted-foreground list-disc pl-8 space-y-2">
                  <li>Right to access your personal data;</li>
                  <li>Right to rectify inaccurate personal data;</li>
                  <li>Right to erase your personal data ("right to be forgotten");</li>
                  <li>Right to restrict the processing of your personal data;</li>
                  <li>Right to data portability;</li>
                  <li>Right to object to the processing of your personal data;</li>
                  <li>Right to withdraw your consent at any time (if the processing is based on consent).</li>
                </ul>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mt-4">
                  To exercise your rights, please contact us using the contact information provided above.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  11. Right to Lodge a Complaint
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  If you believe that we have violated your rights regarding personal data processing, you have the right to lodge a complaint with the Data State Inspectorate of Latvia (Datu valsts inspekcija).
                </p>
              </section>
              
              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  12. Contact
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  If you have questions or requests regarding this Privacy Policy, please contact us:
                </p>
                <div className="font-sans text-base leading-relaxed text-muted-foreground pl-4">
                  <p>SIA "DEMCO"</p>
                  <p>Reg. No. 40103898126</p>
                  <p>Malienas Street 78–5, Riga, LV-1064</p>
                  <p>Phone: +371 28663429</p>
                  <p>Email: info@demco.lv</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default PrivatumaPolitikaEN;
