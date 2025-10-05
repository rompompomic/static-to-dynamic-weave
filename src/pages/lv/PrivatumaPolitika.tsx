import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

const PrivatumaPolitika = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Privātuma politika | DEMCO</title>
        <meta
          name="description"
          content="SIA DEMCO privātuma politika - informācija par personas datu apstrādi un aizsardzību saskaņā ar GDPR prasībām."
        />
      </Helmet>

      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px] py-16 md:py-24">
          <div className="max-w-4xl mx-auto border border-border rounded-lg p-8 md:p-12 bg-card">
            <h1 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-8">
              Privātuma politika
            </h1>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  1. Vispārīga informācija
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground">
                  Šī privātuma politika ("Politika") nosaka, kā SIA "DEMCO", reģistrācijas numurs 40103898126, juridiskā adrese: Malienas iela 78–5, Rīga, LV-1064 (turpmāk – Uzņēmums, mēs, mūs, mūsu) apstrādā un aizsargā fizisko personu – datu subjektu (Jūs, Jūsu) personas datus.
                </p>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mt-4">
                  Mēs apņemamies aizsargāt Jūsu privātumu un apstrādāt personas datus atbilstoši Eiropas Parlamenta un Padomes Regulas (ES) 2016/679 (GDPR), Fizisko personu datu apstrādes likuma un citu spēkā esošo normatīvo aktu prasībām.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  2. Datu pārzinis un kontaktinformācija
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Datu pārzinis:
                </p>
                <div className="font-sans text-base leading-relaxed text-muted-foreground pl-4">
                  <p>SIA "DEMCO"</p>
                  <p>Reģ. Nr.: 40103898126</p>
                  <p>Adrese: Malienas iela 78–5, Rīga, LV-1064</p>
                  <p>E-pasts: info@demco.lv</p>
                  <p>Tālrunis: +371 28663429</p>
                </div>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mt-4">
                  Ja Jums rodas jautājumi par personas datu apstrādi vai vēlaties īstenot savas tiesības, lūdzu, sazinieties ar mums, izmantojot augstāk norādīto kontaktinformāciju.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  3. Kādu informāciju mēs apstrādājam
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Mēs apstrādājam tikai tos personas datus, kas ir nepieciešami konkrētam nolūkam, tostarp:
                </p>
                <ul className="font-sans text-base leading-relaxed text-muted-foreground list-disc pl-8 space-y-2">
                  <li>Identifikācijas dati: vārds, uzvārds, personas kods (ja nepieciešams līguma noslēgšanai);</li>
                  <li>Kontaktinformācija: tālruņa numurs, e-pasta adrese, pasta adrese;</li>
                  <li>Līguma dati un rēķinu informācija;</li>
                  <li>Komunikācijas saturs (e-pasti, ziņas, pieprasījumi, atsauksmes);</li>
                  <li>Mājaslapas lietošanas dati (IP adrese, pārlūkprogrammas tips, piekļuves laiks, vietnes navigācija – sīkdatņu veidā).</li>
                </ul>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  4. Personas datu apstrādes mērķi
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Mēs apstrādājam Jūsu personas datus šādiem mērķiem:
                </p>
                <ul className="font-sans text-base leading-relaxed text-muted-foreground list-disc pl-8 space-y-2">
                  <li>Līguma sagatavošanai, noslēgšanai un izpildei;</li>
                  <li>Klientu apkalpošanai un saziņai;</li>
                  <li>Grāmatvedības un finanšu uzskaites nodrošināšanai;</li>
                  <li>Juridisko pienākumu izpildei (piemēram, nodokļu vai arhivēšanas jomā);</li>
                  <li>Mārketinga komunikācijai – ar Jūsu piekrišanu;</li>
                  <li>Uzņēmuma mājaslapas uzturēšanai, uzlabošanai un drošībai.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  5. Tiesiskais pamats datu apstrādei
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Personas dati tiek apstrādāti, pamatojoties uz:
                </p>
                <ul className="font-sans text-base leading-relaxed text-muted-foreground list-disc pl-8 space-y-2">
                  <li>Līguma izpildi vai darbībām pirms līguma noslēgšanas (GDPR 6. panta 1. punkta b) apakšpunkts);</li>
                  <li>Juridisku pienākumu izpildi (GDPR 6. panta 1. punkta c) apakšpunkts);</li>
                  <li>Likumpamatotām interesēm (piemēram, lai aizsargātu mūsu tiesības vai nodrošinātu pakalpojumu kvalitāti);</li>
                  <li>Jūsu piekrišanu, ja datu apstrāde nav saistīta ar līgumu vai juridisku pienākumu.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  6. Personas datu glabāšanas termiņš
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground">
                  Mēs glabājam personas datus tikai tik ilgi, cik nepieciešams konkrētā mērķa sasniegšanai vai normatīvajos aktos noteiktajā termiņā.
                  Kad dati vairs nav nepieciešami, tie tiek droši dzēsti vai anonimizēti.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  7. Datu nodošana trešajām personām
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Personas dati var tikt nodoti tikai uzticamiem datu apstrādātājiem, ar kuriem ir noslēgti līgumi un kas nodrošina atbilstošu datu aizsardzības līmeni. Piemēram:
                </p>
                <ul className="font-sans text-base leading-relaxed text-muted-foreground list-disc pl-8 space-y-2">
                  <li>IT un hostinga pakalpojumu sniedzējiem;</li>
                  <li>Grāmatvedības un juridiskajiem partneriem;</li>
                  <li>Mārketinga un komunikācijas aģentūrām (tikai ar Jūsu piekrišanu);</li>
                  <li>Valsts un pašvaldību institūcijām, ja to prasa likums.</li>
                </ul>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mt-4">
                  Personas dati netiek pārsūtīti ārpus Eiropas Savienības vai EEZ, ja vien netiek nodrošināts atbilstošs aizsardzības līmenis saskaņā ar GDPR prasībām.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  8. Sīkdatņu (cookies) izmantošana
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground">
                  Mūsu mājaslapa izmanto sīkdatnes, lai uzlabotu lietotāja pieredzi un nodrošinātu vietnes funkcionalitāti.
                  Sīkdatnes tiek izmantotas, piemēram, lai atcerētos Jūsu valodas izvēli vai analizētu vietnes apmeklējumu statistiku.
                </p>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mt-4">
                  Jūs varat jebkurā brīdī mainīt sīkdatņu iestatījumus savā pārlūkprogrammā vai atteikties no tām, tomēr tas var ietekmēt vietnes darbību.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  9. Jūsu tiesības
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Saskaņā ar GDPR Jums ir šādas tiesības:
                </p>
                <ul className="font-sans text-base leading-relaxed text-muted-foreground list-disc pl-8 space-y-2">
                  <li>Pieprasīt piekļuvi saviem personas datiem;</li>
                  <li>Pieprasīt datu labošanu vai dzēšanu;</li>
                  <li>Ierobežot datu apstrādi;</li>
                  <li>Pārsūtīt savus datus citam pārzinim;</li>
                  <li>Iebilst pret datu apstrādi (piemēram, mārketinga nolūkos);</li>
                  <li>Atsaukt savu piekrišanu jebkurā laikā (ja apstrāde notiek uz piekrišanas pamata);</li>
                  <li>Iesniegt sūdzību Datu valsts inspekcijā, ja uzskatāt, ka Jūsu tiesības ir pārkāptas.</li>
                </ul>
                <div className="font-sans text-base leading-relaxed text-muted-foreground mt-4 pl-4">
                  <p className="font-semibold">Datu valsts inspekcija</p>
                  <p>Elijas iela 17, Rīga, LV-1050</p>
                  <p>Tālrunis: +371 67223131</p>
                  <p>E-pasts: info@dvi.gov.lv</p>
                </div>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  10. Datu drošība
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground">
                  Mēs ieviešam atbilstošus tehniskos un organizatoriskos pasākumus, lai aizsargātu personas datus pret nejaušu vai nelikumīgu iznīcināšanu, zaudēšanu, izpaušanu, neatļautu piekļuvi vai jebkādu citu nelikumīgu apstrādi.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  11. Izmaiņas politikā
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground">
                  Mēs varam periodiski atjaunināt šo Privātuma politiku, lai atspoguļotu izmaiņas tiesību aktos, mūsu praksē vai tehnoloģijās.
                  Ja notiks būtiskas izmaiņas, par tām informēsim mūsu mājaslapā.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  12. Kontakti
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Ja Jums ir jautājumi vai pieprasījumi saistībā ar šo Privātuma politiku, lūdzu, sazinieties ar mums:
                </p>
                <div className="font-sans text-base leading-relaxed text-muted-foreground pl-4">
                  <p>SIA "DEMCO"</p>
                  <p>Reģ. Nr. 40103898126</p>
                  <p>Malienas iela 78–5, Rīga, LV-1064</p>
                  <p>Tālrunis: +371 28663429</p>
                  <p>E-pasts: info@demco.lv</p>
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

export default PrivatumaPolitika;
