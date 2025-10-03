import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'lv' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  lv: {
    // Header
    'nav.home': 'Galvenā',
    'nav.services': 'Pakalpojumi',
    'nav.cooperation': 'Sadarbība',
    'nav.contacts': 'Kontakti',
    'header.cta': 'Skatīt pakalpojumus',
    
    // Hero
    'hero.title': 'Jūsu uzticams partneris būvniecībā un demontāžā',
    'hero.subtitle': 'Vairāk nekā 10 gadu pieredze būvju demontāžā, zemes darbos un labiekārtošanā. Profesionāla komanda, moderna tehnika, drošība un kvalitāte.',
    'hero.cta': 'Uzzināt vairāk',
    'hero.stat1': '120+',
    'hero.stat1.text': 'Pabeigti projekti',
    'hero.stat2': '10+',
    'hero.stat2.text': 'Gadu pieredze',
    
    // About
    'about.title': 'Par mums',
    'about.description': 'SIA DEMCO ir uzticams partneris ar vairāk nekā 10 gadu pieredzi būvniecības un demontāžas nozarē. Mēs specializējamies būvju demontāžā, zemes darbos un labiekārtošanā, nodrošinot augstu kvalitāti un drošību katrā projektā.',
    'about.experience': 'Gadu pieredze',
    'about.certificates': 'Sertifikāti un atļaujas',
    'about.safety': 'Drošības standarti',
    'about.team': 'Profesionāla komanda',
    'about.advantage1': 'Ātra un efektīva darbu izpilde',
    'about.advantage2': 'Augstākie drošības standarti',
    'about.advantage3': 'Profesionāla un pieredzējusi komanda',
    'about.advantage4': 'Moderna tehnika un aprīkojums',
    
    // Services Preview
    'services.title': 'Mūsu pakalpojumi',
    'services.service1': 'Būvju un ēku demontāža',
    'services.service1.desc': 'Profesionāla dzīvojamo un komerciālo ēku demontāža',
    'services.service2': 'Ražošanas ēku demontāža',
    'services.service2.desc': 'Industriālo objektu un rūpnīcu demontāža',
    'services.service3': 'Zemes darbi',
    'services.service3.desc': 'Izrakšana, līmeņošana un pamatu ierīkošana',
    'services.service4': 'Labiekārtošana',
    'services.service4.desc': 'Teritoriju tīrīšana, ceļu ierīkošana, labiekārtošana',
    'services.cta': 'Skatīt visus pakalpojumus',
    'services.learnmore': 'Uzzināt vairāk',
    
    // Services Page
    'services.page.title': 'Pakalpojumi',
    'services.page.intro': 'SIA DEMCO piedāvā plašu pakalpojumu klāstu būvniecības un demontāžas jomā. Mūsu komanda nodrošina profesionālu un drošu visu veidu būvdarbu izpildi.',
    'services.demolition.title': 'Būvju un ēku demontāža',
    'services.demolition.desc': 'Veicam dzīvojamo un komerciālo ēku demontāžu, ievērojot visus drošības standartus. Process ietver detalizētu plānošanu, būvniecības atkritumu šķirošanu un utilizāciju, kā arī teritorijas sagatavošanu turpmākai izmantošanai.',
    'services.industrial.title': 'Ražošanas ēku demontāža',
    'services.industrial.desc': 'Specializējamies industriālo objektu, rūpnīcu un ražošanas ēku demontāžā. Izmantojam speciālu tehniku un aprīkojumu, lai demontētu sarežģītas konstrukcijas, tostarp metāla konstrukcijas, ražošanas iekārtas un inženierkomunikācijas.',
    'services.earthworks.title': 'Zemes darbi',
    'services.earthworks.desc': 'Nodrošinām pilnu zemes darbu kompleksu - izrakšanu, līmeņošanu, pamatu ierīkošanu, drenāžas sistēmu izbūvi. Mūsu rīcībā ir moderna tehnika efektīvai un precīzai darbu izpildei.',
    'services.landscaping.title': 'Labiekārtošana',
    'services.landscaping.desc': 'Veicam teritoriju tīrīšanu pēc demontāžas vai būvdarbiem, ceļu un pievedceļu ierīkošanu, apzaļumošanu un citus labiekārtošanas darbus, sagatavot teritoriju ekspluatācijai.',
    
    // Contact
    'contact.title': 'Sadarbība un kontakti',
    'contact.how': 'Kā pieteikt pakalpojumus',
    'contact.step1': 'Sazinies pa tālruni vai e-pastu',
    'contact.step2': 'Apraksti projekta detaļas',
    'contact.step3': 'Saņem piedāvājumu un uzsāc sadarbību',
    'contact.form.title': 'Sazinies ar mums',
    'contact.form.name': 'Vārds',
    'contact.form.email': 'E-pasts',
    'contact.form.phone': 'Tālrunis',
    'contact.form.message': 'Ziņojums',
    'contact.form.file': 'Pievienot failu',
    'contact.form.submit': 'Nosūtīt',
    'contact.info.title': 'Kontaktinformācija',
    'contact.address': 'Adrese: Rīga, Latvija',
    'contact.phone': 'Tālrunis: +371 2XXXXXXX',
    'contact.email': 'E-pasts: info@demco.lv',
    
    // Footer
    'footer.quicklinks': 'Ātras saites',
    'footer.contact': 'Kontakti',
    'footer.rights': 'Visas tiesības aizsargātas',
    'footer.privacy': 'Privātuma politika',
    'footer.terms': 'Lietošanas noteikumi',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.cooperation': 'Cooperation',
    'nav.contacts': 'Contacts',
    'header.cta': 'View services',
    
    // Hero
    'hero.title': 'Your trusted partner in construction and demolition',
    'hero.subtitle': 'More than 10 years of experience in building demolition, earthworks and landscaping. Professional team, modern equipment, safety and quality.',
    'hero.cta': 'Learn more',
    'hero.stat1': '120+',
    'hero.stat1.text': 'Completed projects',
    'hero.stat2': '10+',
    'hero.stat2.text': 'Years of experience',
    
    // About
    'about.title': 'About us',
    'about.description': 'SIA DEMCO is a trusted partner with more than 10 years of experience in the construction and demolition industry. We specialize in building demolition, earthworks and landscaping, ensuring high quality and safety in every project.',
    'about.experience': 'Years of experience',
    'about.certificates': 'Certificates and permits',
    'about.safety': 'Safety standards',
    'about.team': 'Professional team',
    'about.advantage1': 'Fast and efficient work execution',
    'about.advantage2': 'Highest safety standards',
    'about.advantage3': 'Professional and experienced team',
    'about.advantage4': 'Modern equipment and machinery',
    
    // Services Preview
    'services.title': 'Our services',
    'services.service1': 'Building and structure demolition',
    'services.service1.desc': 'Professional demolition of residential and commercial buildings',
    'services.service2': 'Industrial building demolition',
    'services.service2.desc': 'Demolition of industrial facilities and factories',
    'services.service3': 'Earthworks',
    'services.service3.desc': 'Excavation, leveling and foundation installation',
    'services.service4': 'Landscaping',
    'services.service4.desc': 'Site cleaning, road construction, landscaping',
    'services.cta': 'View all services',
    'services.learnmore': 'Learn more',
    
    // Services Page
    'services.page.title': 'Services',
    'services.page.intro': 'SIA DEMCO offers a wide range of services in construction and demolition. Our team ensures professional and safe execution of all types of construction work.',
    'services.demolition.title': 'Building and structure demolition',
    'services.demolition.desc': 'We perform demolition of residential and commercial buildings, observing all safety standards. The process includes detailed planning, sorting and disposal of construction waste, as well as preparing the site for further use.',
    'services.industrial.title': 'Industrial building demolition',
    'services.industrial.desc': 'We specialize in demolition of industrial facilities, factories and production buildings. We use special equipment to dismantle complex structures, including metal structures, production equipment and engineering communications.',
    'services.earthworks.title': 'Earthworks',
    'services.earthworks.desc': 'We provide a full range of earthworks - excavation, leveling, foundation installation, drainage systems. We have modern equipment for efficient and precise work execution.',
    'services.landscaping.title': 'Landscaping',
    'services.landscaping.desc': 'We perform site cleaning after demolition or construction works, road and access road construction, landscaping and other improvement works to prepare the territory for operation.',
    
    // Contact
    'contact.title': 'Cooperation and contacts',
    'contact.how': 'How to request services',
    'contact.step1': 'Contact us by phone or email',
    'contact.step2': 'Describe project details',
    'contact.step3': 'Receive an offer and start cooperation',
    'contact.form.title': 'Contact us',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.file': 'Attach file',
    'contact.form.submit': 'Send',
    'contact.info.title': 'Contact information',
    'contact.address': 'Address: Riga, Latvia',
    'contact.phone': 'Phone: +371 2XXXXXXX',
    'contact.email': 'Email: info@demco.lv',
    
    // Footer
    'footer.quicklinks': 'Quick links',
    'footer.contact': 'Contacts',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  ru: {
    // Header
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.cooperation': 'Сотрудничество',
    'nav.contacts': 'Контакты',
    'header.cta': 'Посмотреть услуги',
    
    // Hero
    'hero.title': 'Ваш надежный партнер в строительстве и демонтаже',
    'hero.subtitle': 'Более 10 лет опыта в демонтаже зданий, земляных работах и благоустройстве. Профессиональная команда, современная техника, безопасность и качество.',
    'hero.cta': 'Узнать больше',
    'hero.stat1': '120+',
    'hero.stat1.text': 'Завершенных проектов',
    'hero.stat2': '10+',
    'hero.stat2.text': 'Лет опыта',
    
    // About
    'about.title': 'О нас',
    'about.description': 'SIA DEMCO - надежный партнер с более чем 10-летним опытом в строительной и демонтажной отрасли. Мы специализируемся на демонтаже зданий, земляных работах и благоустройстве, обеспечивая высокое качество и безопасность в каждом проекте.',
    'about.experience': 'Лет опыта',
    'about.certificates': 'Сертификаты и разрешения',
    'about.safety': 'Стандарты безопасности',
    'about.team': 'Профессиональная команда',
    'about.advantage1': 'Быстрое и эффективное выполнение работ',
    'about.advantage2': 'Высочайшие стандарты безопасности',
    'about.advantage3': 'Профессиональная и опытная команда',
    'about.advantage4': 'Современная техника и оборудование',
    
    // Services Preview
    'services.title': 'Наши услуги',
    'services.service1': 'Демонтаж зданий и сооружений',
    'services.service1.desc': 'Профессиональный демонтаж жилых и коммерческих зданий',
    'services.service2': 'Демонтаж производственных зданий',
    'services.service2.desc': 'Демонтаж промышленных объектов и заводов',
    'services.service3': 'Земляные работы',
    'services.service3.desc': 'Выемка грунта, выравнивание и устройство фундаментов',
    'services.service4': 'Благоустройство',
    'services.service4.desc': 'Очистка территории, строительство дорог, благоустройство',
    'services.cta': 'Посмотреть все услуги',
    'services.learnmore': 'Узнать больше',
    
    // Services Page
    'services.page.title': 'Услуги',
    'services.page.intro': 'SIA DEMCO предлагает широкий спектр услуг в области строительства и демонтажа. Наша команда обеспечивает профессиональное и безопасное выполнение всех видов строительных работ.',
    'services.demolition.title': 'Демонтаж зданий и сооружений',
    'services.demolition.desc': 'Выполняем демонтаж жилых и коммерческих зданий с соблюдением всех стандартов безопасности. Процесс включает детальное планирование, сортировку и утилизацию строительных отходов, а также подготовку территории для дальнейшего использования.',
    'services.industrial.title': 'Демонтаж производственных зданий',
    'services.industrial.desc': 'Специализируемся на демонтаже промышленных объектов, заводов и производственных зданий. Используем специальную технику для демонтажа сложных конструкций, включая металлоконструкции, производственное оборудование и инженерные коммуникации.',
    'services.earthworks.title': 'Земляные работы',
    'services.earthworks.desc': 'Обеспечиваем полный комплекс земляных работ - выемка грунта, выравнивание, устройство фундаментов, дренажные системы. В нашем распоряжении современная техника для эффективного и точного выполнения работ.',
    'services.landscaping.title': 'Благоустройство',
    'services.landscaping.desc': 'Выполняем очистку территории после демонтажа или строительных работ, строительство дорог и подъездных путей, озеленение и другие работы по благоустройству для подготовки территории к эксплуатации.',
    
    // Contact
    'contact.title': 'Сотрудничество и контакты',
    'contact.how': 'Как заказать услуги',
    'contact.step1': 'Свяжитесь по телефону или электронной почте',
    'contact.step2': 'Опишите детали проекта',
    'contact.step3': 'Получите предложение и начните сотрудничество',
    'contact.form.title': 'Свяжитесь с нами',
    'contact.form.name': 'Имя',
    'contact.form.email': 'Электронная почта',
    'contact.form.phone': 'Телефон',
    'contact.form.message': 'Сообщение',
    'contact.form.file': 'Прикрепить файл',
    'contact.form.submit': 'Отправить',
    'contact.info.title': 'Контактная информация',
    'contact.address': 'Адрес: Рига, Латвия',
    'contact.phone': 'Телефон: +371 2XXXXXXX',
    'contact.email': 'Email: info@demco.lv',
    
    // Footer
    'footer.quicklinks': 'Быстрые ссылки',
    'footer.contact': 'Контакты',
    'footer.rights': 'Все права защищены',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('lv');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
