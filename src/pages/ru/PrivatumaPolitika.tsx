import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

const PrivatumaPolitikaRU = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Политика конфиденциальности | DEMCO</title>
        <meta
          name="description"
          content="Политика конфиденциальности SIA DEMCO - информация об обработке и защите персональных данных в соответствии с требованиями GDPR."
        />
      </Helmet>

      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-8 lg:px-[75px] py-16 md:py-24">
          <div className="max-w-4xl mx-auto border border-border rounded-lg p-8 md:p-12 bg-card">
            <h1 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-8">
              Политика конфиденциальности
            </h1>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  1. Общая информация
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground">
                  Настоящая Политика конфиденциальности ("Политика") определяет, как SIA "DEMCO", регистрационный номер 40103898126, юридический адрес: ул. Малиенас 78–5, Рига, LV-1064 (далее – Компания, мы, нас, наша) обрабатывает и защищает персональные данные физических лиц – субъектов данных (вы, ваши).
                </p>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mt-4">
                  Мы обязуемся защищать вашу конфиденциальность и обрабатывать персональные данные в соответствии с Регламентом Европейского Парламента и Совета (ЕС) 2016/679 (GDPR), Законом об обработке персональных данных и другими действующими нормативными актами.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  2. Контроллер данных и контактная информация
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Контроллер данных:
                </p>
                <div className="font-sans text-base leading-relaxed text-muted-foreground pl-4">
                  <p>SIA "DEMCO"</p>
                  <p>Рег. №: 40103898126</p>
                  <p>Адрес: ул. Малиенас 78–5, Рига, LV-1064</p>
                  <p>Email: info@demco.lv</p>
                  <p>Телефон: +371 28663429</p>
                </div>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mt-4">
                  Если у вас возникнут вопросы об обработке персональных данных или вы хотите реализовать свои права, пожалуйста, свяжитесь с нами, используя указанную выше контактную информацию.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  3. Что мы обрабатываем
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Мы обрабатываем только те персональные данные, которые необходимы для конкретной цели, в том числе:
                </p>
                <ul className="font-sans text-base leading-relaxed text-muted-foreground list-disc pl-8 space-y-2">
                  <li>Идентификационные данные: имя, фамилия, персональный код (если необходимо для заключения договора);</li>
                  <li>Контактная информация: номер телефона, адрес электронной почты, почтовый адрес;</li>
                  <li>Данные договора и информация о счетах;</li>
                  <li>Содержание коммуникации (электронные письма, сообщения, запросы, отзывы);</li>
                  <li>Данные об использовании веб-сайта (IP-адрес, тип браузера, время доступа, навигация по сайту – в виде файлов cookie).</li>
                </ul>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  4. Цели обработки данных
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Мы обрабатываем ваши персональные данные для следующих целей:
                </p>
                <ul className="font-sans text-base leading-relaxed text-muted-foreground list-disc pl-8 space-y-2">
                  <li>Предоставление услуг и выполнение договорных обязательств;</li>
                  <li>Коммуникация с вами, ответы на ваши запросы и предоставление поддержки;</li>
                  <li>Улучшение качества наших услуг и веб-сайта;</li>
                  <li>Обеспечение безопасности и предотвращение мошенничества;</li>
                  <li>Выполнение требований законодательства.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  5. Правовые основания для обработки данных
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Мы обрабатываем ваши персональные данные на следующих правовых основаниях:
                </p>
                <ul className="font-sans text-base leading-relaxed text-muted-foreground list-disc pl-8 space-y-2">
                  <li>Ваше согласие (если вы дали согласие на обработку данных);</li>
                  <li>Необходимость для заключения или исполнения договора;</li>
                  <li>Необходимость для выполнения наших юридических обязательств;</li>
                  <li>Наши законные интересы (например, улучшение качества услуг).</li>
                </ul>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  6. Передача данных третьим лицам
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  В определенных случаях мы можем передавать ваши персональные данные третьим лицам, в том числе:
                </p>
                <ul className="font-sans text-base leading-relaxed text-muted-foreground list-disc pl-8 space-y-2">
                  <li>Нашим партнерам и поставщикам услуг (например, поставщикам ИТ-услуг);</li>
                  <li>Государственным органам (если это требуется по закону);</li>
                  <li>Другим третьим лицам с вашего согласия.</li>
                </ul>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mt-4">
                  Мы требуем от третьих лиц соблюдения конфиденциальности и обеспечения защиты ваших персональных данных.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  7. Срок хранения данных
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Мы храним ваши персональные данные до тех пор, пока это необходимо для достижения целей, указанных в настоящей Политике, или в течение срока, установленного законодательством.
                </p>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mt-4">
                  После истечения срока хранения мы удалим или анонимизируем ваши персональные данные.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  8. Ваши права
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  У вас есть следующие права в отношении ваших персональных данных:
                </p>
                <ul className="font-sans text-base leading-relaxed text-muted-foreground list-disc pl-8 space-y-2">
                  <li>Право на доступ к вашим персональным данным;</li>
                  <li>Право на исправление неточных или неполных данных;</li>
                  <li>Право на удаление ваших персональных данных;</li>
                  <li>Право на ограничение обработки ваших персональных данных;</li>
                  <li>Право на переносимость данных;</li>
                  <li>Право на возражение против обработки ваших персональных данных;</li>
                  <li>Право на отзыв согласия (если обработка данных основана на вашем согласии).</li>
                </ul>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mt-4">
                  Чтобы воспользоваться своими правами, пожалуйста, свяжитесь с нами, используя контактную информацию, указанную выше.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  9. Файлы cookie
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Наш веб-сайт использует файлы cookie для улучшения функциональности и анализа использования веб-сайта.
                </p>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mt-4">
                  Вы можете управлять файлами cookie в настройках своего браузера.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  10. Безопасность данных
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Мы принимаем необходимые технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, использования, изменения или уничтожения.
                </p>
              </section>

              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  11. Изменения в Политике конфиденциальности
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Мы можем время от времени вносить изменения в настоящую Политику конфиденциальности. Актуальная версия Политики всегда доступна на нашем веб-сайте.
                </p>
              </section>
              
              <section>
                <h2 className="font-sans font-bold text-xl md:text-2xl mb-4">
                  12. Контакты
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                  Если у вас есть вопросы или запросы относительно настоящей Политики конфиденциальности, пожалуйста, свяжитесь с нами:
                </p>
                <div className="font-sans text-base leading-relaxed text-muted-foreground pl-4">
                  <p>SIA "DEMCO"</p>
                  <p>Рег. № 40103898126</p>
                  <p>ул. Малиенас 78–5, Рига, LV-1064</p>
                  <p>Телефон: +371 28663429</p>
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

export default PrivatumaPolitikaRU;
