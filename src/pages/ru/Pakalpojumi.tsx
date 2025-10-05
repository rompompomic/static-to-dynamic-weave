import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import heroImage from "@/assets/hero-image.webp";
import buvjuUnEkuDemontaza from "@/assets/services-buvju-un-eku-demontaza.webp";
import razosanasEkuDemontaza from "@/assets/services-razosanas-eku-demontaza.webp";
import zemesDarbi from "@/assets/services-zemes-darbi.webp";
import labiekartosana from "@/assets/services-labiekartosana.webp";
import excavator from "@/assets/excavator.webp";
import { ArrowRight, ShieldCheck, Clock, Wallet, Recycle, Truck, HardHat, Handshake, Sparkles, Phone, Mail } from "lucide-react";

const PakalpojumiRU = () => {
  return <main className="bg-background overflow-x-hidden w-full min-h-screen">
      <Helmet>
        <title>Услуги – DEMCO</title>
        <meta name="description" content="Профессиональные услуги демонтажа, земляных и благоустроительных работ. DEMCO – надежный партнер в строительстве." />
      </Helmet>

      <Header />

      {/* HERO */}
      <section className="relative w-full overflow-hidden min-h-[500px] md:min-h-[635px] bg-gradient-hero">
        <div className="hidden md:flex absolute inset-y-0 right-0 z-0 justify-end md:w-[50%] lg:w-[52%] pointer-events-none select-none">
          <img src={heroImage} alt="Construction site" className="h-full w-auto object-cover object-center" />
        </div>
      
        <div className="md:hidden relative z-0 -mx-4">
          <img src={heroImage} alt="Construction site" className="max-w-none w-[130vw] -translate-x-[15vw] h-[300px] object-cover object-center" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex items-center justify-center z-10" style={{
            paddingLeft: "max(env(safe-area-inset-left), 1rem)",
            paddingRight: "max(env(safe-area-inset-right), 1rem)"
          }}>
            <h1 className="font-mono font-bold text-white text-[28px] leading-tight px-[5px] text-center">
              Профессиональные услуги демонтажа и земляных работ
            </h1>
          </div>
        </div>
      
        <div className="relative z-10">
          <div className="md:hidden bg-gradient-hero" style={{
            clipPath: "polygon(0 56px, 18% 56px, 25% 36px, 75% 36px, 82% 56px, 100% 56px, 100% 100%, 0 100%)"
          }}>
            <div className="container mx-auto px-4 pb-8 pt-20 -mt-[56px]">
              <p className="font-sans text-white text-base leading-relaxed my-[30px]">
                От демонтажа до благоустройства предлагаем полный спектр решений, адаптированных как для частных, так и для промышленных проектов.
              </p>
            </div>
          </div>
      
          <div className="hidden md:block">
            <div className="
                container mx-auto px-8 lg:px-[75px]
                md:min-h-[635px] md:flex md:items-center
                md:pr-[calc(50%+24px)] lg:pr-[calc(52%+131px)]
                xl:pr-[calc(48%+131px)] 2xl:pr-[calc(45%+131px)]
              ">
              <div className="w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1200px]">
                <h1 className="font-mono font-bold text-white text-4xl md:text-[40px] lg:text-[50px] leading-tight xl:whitespace-nowrap">
                  Сотрудничество и контакты
                </h1>
                <p className="mt-6 font-sans text-white text-lg leading-relaxed max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1000px]">
                  Мы всегда открыты для нового сотрудничества. Пишите, звоните или заполните форму – вместе найдем лучшее решение для вашего объекта.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services sections - full translation */}
      <section id="eku-demontaza" className="w-full py-12 md:py-16 bg-white/0">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
            <div className="overflow-hidden">
              <img
                src={buvjuUnEkuDemontaza}
                alt="Демонтаж зданий и сооружений"
                className="w-full h-auto object-cover"
              />
            </div>
      
            <div>
              <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
                Демонтаж зданий и сооружений
              </h2>
              <p className="font-sans text-foreground text-base leading-relaxed mb-6">
                Выполняем демонтаж жилых, хозяйственных и небольших коммерческих объектов с полным оформлением разрешений,
                ограждением территории и соблюдением мер безопасности. Включает вывоз строительного мусора,
                отключение инженерных коммуникаций и полную ликвидацию объекта.
              </p>
      
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Жилые и хозяйственные здания
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Снос до фундамента, вывоз мусора, выравнивание площадки для дальнейших работ.
                  </p>
                </div>
      
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Безопасность и документация
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Согласования с самоуправлением, план работ и оценка рисков, организация движения.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="razosanas-demontaza" className="w-full py-12 md:py-16 bg-[#a4a4a4]/[0.08]">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
            <div className="order-2 md:order-1">
              <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
                Демонтаж производственных зданий
              </h2>
              <p className="font-sans text-foreground text-base leading-relaxed mb-6">
                Специализируемся на демонтаже промышленных объектов с использованием тяжелой техники, соблюдая высокие стандарты
                безопасности и экологические требования.
              </p>
      
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Промышленные объекты
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Склады, ангары, цеха — ограждение рабочих зон и координация с оперативными службами.
                  </p>
                </div>
      
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Утилизация и сортировка
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Реализация металлолома, сдача опасных отходов, полная отчетность.
                  </p>
                </div>
              </div>
            </div>
      
            <div className="overflow-hidden order-1 md:order-2">
              <img
                src={razosanasEkuDemontaza}
                alt="Демонтаж производственных зданий"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section id="zemes-darbi" className="w-full py-12 md:py-16 bg-white/0">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
            <div className="overflow-hidden">
              <img
                src={zemesDarbi}
                alt="Земляные работы"
                className="w-full h-auto object-cover"
              />
            </div>
      
            <div>
              <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
                Земляные работы
              </h2>
              <p className="font-sans text-foreground text-base leading-relaxed mb-6">
                Полный спектр: копка фундаментов, замена грунта, планировка, копка траншей
                для инженерных коммуникаций, дренажные решения.
              </p>
      
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Фундаменты и планировка
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Котлованы под фундаменты, подготовка площадок, точное нивелирование с лазерным контролем.
                  </p>
                </div>
      
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Дренаж и коммуникации
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Дренажные системы, водоотвод, траншеи для электричества, воды и канализации.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="labiekartosana" className="w-full py-12 md:py-16 bg-[#a4a4a4]/[0.08]">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
            <div className="order-2 md:order-1">
              <h2 className="font-mono font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mb-4">
                Благоустройство территории
              </h2>
              <p className="font-sans text-foreground text-base leading-relaxed mb-6">
                Дороги и площадки, укладка покрытий, озеленение и функциональный
                дизайн территории для частных и коммерческих нужд.
              </p>
      
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Дорожки и покрытия
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Брусчатка, щебень, асфальтобетон; бордюры, уровни и водостоки.
                  </p>
                </div>
      
                <div className="rounded-2xl border border-border bg-card shadow p-6 min-w-[260px]">
                  <h3 className="font-mono font-bold text-lg mb-2 break-words hyphens-auto">
                    Озеленение и дизайн
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words hyphens-auto">
                    Газоны, насаждения, освещение, интеграция малых архитектурных форм.
                  </p>
                </div>
              </div>
            </div>
      
            <div className="overflow-hidden order-1 md:order-2">
              <img
                src={labiekartosana}
                alt="Благоустройство территории"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="w-full py-16 md:py-20 bg-white/0">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="text-center mb-10">
            <h2 className="font-mono font-bold text-2xl md:text-3xl lg:text-4xl">
              Почему DEMCO?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Работаем быстро, безопасно и прозрачно – от первого звонка до
              сдачи в эксплуатацию.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                kind: "icon" as const,
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Сертифицированная безопасность",
                text: "Планы работ, оценка рисков и контроль ответственного мастера на месте.",
              },
              {
                kind: "icon" as const,
                icon: <Clock className="w-6 h-6" />,
                title: "Сроки без сюрпризов",
                text: "Детальный график и регулярные отчеты – вы всегда знаете статус.",
              },
              {
                kind: "icon" as const,
                icon: <Wallet className="w-6 h-6" />,
                title: "Честные сметы",
                text: "Фиксированные договоренности, четкая структура затрат без скрытых пунктов.",
              },
              {
                kind: "icon" as const,
                icon: <Recycle className="w-6 h-6" />,
                title: "Сортировка отходов",
                text: "Строительный мусор сдается на сертифицированные полигоны с сопроводительными документами.",
              },
              {
                kind: "mask" as const,
                title: "Собственная техника",
                text: "Экскаваторы, гидравлические молоты, грузовики – меньше зависимости от аренды.",
                maskSrc: excavator,
              },
              {
                kind: "icon" as const,
                icon: <HardHat className="w-6 h-6" />,
                title: "Опытные бригады",
                text: "Команда с реальными промышленными проектами в портфолио.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card p-6 shadow hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 text-foreground">
                  {card.kind === "mask" ? (
                    <div
                      className="w-8 h-8 md:w-9 md:h-9 bg-current"
                      style={{
                        WebkitMaskImage: `url(${card.maskSrc})`,
                        maskImage: `url(${card.maskSrc})`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  ) : (
                    card.icon
                  )}
                </div>

                <h3 className="font-mono font-bold text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1">
              <Sparkles className="w-4 h-4" /> 100% уборка рабочей площадки
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1">
              <Handshake className="w-4 h-4" /> Фиксированные сроки в договоре
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1">
              <ShieldCheck className="w-4 h-4" /> Страхование включено
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full overflow-hidden py-16 md:py-20 bg-[#a4a4a4]/[0.08]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px]">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-4">
                <Sparkles className="w-4 h-4" />
                Бесплатная первичная консультация
              </div>
              <h2 className="font-mono font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
                Нужна смета или консультация эксперта?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Отправьте краткое описание и фото — подготовим ориентировочную смету и
                план работ в течение 24 часов (в рабочие дни).
              </p>

              <ul className="mt-6 space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 mt-0.5" />
                  <span>Соблюдение требований безопасности и экологии</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5" />
                  <span>Точные сроки и четкая логистика</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wallet className="w-5 h-5 mt-0.5" />
                  <span>Фиксированная стоимость после осмотра</span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="tel:+37128663429" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border hover:bg-muted transition">
                  <Phone className="w-5 h-5" />
                  +371 2866 3429
                </a>
                <a href="mailto:info@demco.lv" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border hover:bg-muted transition">
                  <Mail className="w-5 h-5" />
                  info@demco.lv
                </a>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                * Первичная консультация бесплатна и не создает обязательств.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card/80 backdrop-blur p-6 md:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6" />
                <h3 className="font-mono font-bold text-xl">
                  Что вы получите после заявки
                </h3>
              </div>
              <ol className="space-y-4 text-sm text-foreground list-decimal pl-5">
                <li>Короткий звонок или email для уточнения объема и сроков.</li>
                <li>
                  Ориентировочная смета и краткий план работ с этапами и ответственностью.
                </li>
                <li>
                  Предложение для осмотра на месте и подготовки финальной сметы.
                </li>
              </ol>

              <div className="mt-6 grid sm:grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border p-3">
                  <div className="text-2xl font-mono font-bold">24ч</div>
                  <div className="text-xs text-muted-foreground">первичный ответ</div>
                </div>
                <div className="rounded-xl border p-3">
                  <div className="text-2xl font-mono font-bold">0€</div>
                  <div className="text-xs text-muted-foreground">консультация</div>
                </div>
                <div className="rounded-xl border p-3">
                  <div className="text-2xl font-mono font-bold">100%</div>
                  <div className="text-xs text-muted-foreground">прозрачность</div>
                </div>
              </div>

              <a href="/ru/sadarbiba-un-kontakti" className="
                  mt-8 w-full group relative inline-flex items-center justify-center gap-2
                  h-11 px-6 md:px-8 rounded-xl
                  bg-foreground text-background font-sans font-bold
                  shadow-sm hover:shadow-md transition ease-out duration-200
                  hover:scale-[1.02] active:scale-[0.97]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40
                  overflow-hidden
                  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r
                  before:from-transparent before:via-white/20 before:to-transparent
                  group-hover:before:translate-x-full before:transition-transform before:duration-700
                ">
                <span className="text-sm md:text-base">Заполнить заявку</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <MobileCallButton />
    </main>;
};

export default PakalpojumiRU;
