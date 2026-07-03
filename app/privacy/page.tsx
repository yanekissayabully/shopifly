import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollTopButton from '@/components/scroll-top-button'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — Shopifly',
  description: 'Политика конфиденциальности интернет-магазина женской одежды Shopifly.',
}

const sections = [
  {
    title: '1. Общие положения',
    content: `Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных физических лиц (далее — «Пользователи»), которые используют сайт Shopifly (далее — «Сайт»).

Политика разработана в соответствии с требованиями Закона Республики Казахстан «О персональных данных и их защите» № 94-V от 21 мая 2013 года.

Используя Сайт, Пользователь выражает своё согласие с условиями настоящей Политики. В случае несогласия Пользователь обязан прекратить использование Сайта.`,
  },
  {
    title: '2. Состав персональных данных',
    content: `Shopifly может собирать следующие персональные данные Пользователей:

— Фамилия, имя, отчество;
— Контактный номер телефона;
— Адрес электронной почты (e-mail);
— Почтовый адрес для доставки заказа;
— Иные данные, добровольно предоставленные Пользователем при оформлении заказа или обращении в службу поддержки.

Shopifly не собирает специальные категории персональных данных (расовое или этническое происхождение, политические взгляды, религиозные убеждения, состояние здоровья, биометрические данные).`,
  },
  {
    title: '3. Цели обработки персональных данных',
    content: `Персональные данные Пользователей обрабатываются в следующих целях:

— Обработка и выполнение заказов, оформленных на Сайте;
— Связь с Пользователем по вопросам выполнения заказа, доставки и возврата товара;
— Информирование Пользователя об акциях, скидках и новинках (при наличии согласия);
— Улучшение качества работы Сайта и сервисов;
— Исполнение требований законодательства Республики Казахстан.

Shopifly обрабатывает персональные данные исключительно в указанных целях и не осуществляет их обработку в иных целях без получения дополнительного согласия Пользователя.`,
  },
  {
    title: '4. Правовые основания обработки',
    content: `Обработка персональных данных осуществляется на основании:

— Согласия субъекта персональных данных;
— Необходимости исполнения договора купли-продажи, стороной которого является Пользователь;
— Исполнения требований законодательства Республики Казахстан, обязательных для Shopifly.

Пользователь вправе в любой момент отозвать своё согласие на обработку персональных данных, направив соответствующий запрос по контактным данным, указанным в разделе 9 настоящей Политики.`,
  },
  {
    title: '5. Передача персональных данных третьим лицам',
    content: `Shopifly не передаёт персональные данные Пользователей третьим лицам, за исключением следующих случаев:

— Передача данных службам доставки и логистическим партнёрам в целях исполнения заказа;
— Передача данных платёжным системам для обработки оплаты;
— Передача данных на основании требования уполномоченных государственных органов в соответствии с законодательством Республики Казахстан;
— Передача данных иным лицам с предварительного согласия Пользователя.

Все третьи лица, которым передаются персональные данные, обязаны соблюдать конфиденциальность полученных данных и не использовать их в иных целях.`,
  },
  {
    title: '6. Сроки хранения персональных данных',
    content: `Персональные данные Пользователей хранятся в течение срока, необходимого для достижения целей их обработки, а именно:

— Данные, связанные с выполнением заказа, — в течение 5 лет с момента исполнения договора;
— Данные, обрабатываемые на основании согласия, — до момента отзыва согласия или до достижения целей обработки;
— Данные, хранение которых предусмотрено законодательством Республики Казахстан, — в течение сроков, установленных соответствующими нормативными правовыми актами.

По истечении срока хранения персональные данные уничтожаются или обезличиваются.`,
  },
  {
    title: '7. Защита персональных данных',
    content: `Shopifly принимает необходимые организационные и технические меры для защиты персональных данных Пользователей от несанкционированного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.

К применяемым мерам защиты от��осятся:

— Ограничение доступа к персональным данным — доступ имеют только уполномоченные сотрудники, которым это необходимо для выполнения служебных обязанностей;
— Использование защищённых каналов передачи данных (SSL/TLS);
— Регулярный аудит информационных систем;
— Хранение данных на серверах с ограниченным физическим доступом.`,
  },
  {
    title: '8. Использование файлов Cookie',
    content: `Сайт использует файлы Cookie — небольшие текстовые файлы, сохраняемые на устройстве Пользователя. Cookie используются для:

— Обеспечения корректной работы Сайта;
— Сохранения настроек и предпочтений Пользователя;
— Сбора аналитических данных о посещаемости Сайта;
— Персонализации контента и рекламных предложений.

Пользователь вправе настроить параметры браузера таким образом, чтобы отключить сохранение файлов Cookie. Однако в этом случае некоторые функции Сайта могут быть недоступны.`,
  },
  {
    title: '9. Права Пользователей',
    content: `Пользователь имеет право:

— Получить информацию об обработке своих персональных данных;
— Потребовать уточнения, блокирования или уничтожения своих персональных данных в случае, если данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки;
— Отозвать согласие на обработку персональных данных;
— Обжаловать действия или бездействие Shopifly в уполномоченный орган по защите прав субъектов персональных данных.

Для реализации своих прав Пользователь может направить письменное обращение по контактным данным, указанным ниже.`,
  },
  {
    title: '10. Контактная информация',
    content: `По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:

Наименование: Shopifly
Адрес: Республика Казахстан, г. Алматы, ул. Абая 150
Электронная почта: privacy@shopifly.kz
Телефон: +7 (727) 123-45-67
Режим работы: понедельник – пятница, 10:00 – 19:00 (по времени Алматы)`,
  },
  {
    title: '11. Изменения в Политике конфиденциальности',
    content: `Shopifly оставляет за собой право вносить изменения в настоящую Политику. При внесении существенных изменений Пользователь будет уведомлён посредством размещения новой версии Политики на Сайте.

Продолжение использования Сайта после внесения изменений означает согласие Пользователя с новой редакцией Политики.

Дата последнего обновления: 3 июля 2025 г.`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      {/* Header bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="text-xl sm:text-2xl tracking-[0.18em] uppercase font-serif font-semibold text-foreground group-hover:text-primary transition-colors"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Shopifly
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.35em] uppercase text-muted-foreground mt-0.5">
              Women&apos;s Fashion
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="group-hover:-translate-x-0.5 transition-transform"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            На главную
          </Link>
        </div>
      </header>

      <main className="pt-16 sm:pt-20 bg-background min-h-screen">
        {/* Page hero */}
        <div className="bg-secondary/40 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 md:py-20">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="w-7 sm:w-8 h-px bg-primary" />
              <span className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-muted-foreground">
                Юридическая информация
              </span>
            </div>
            <h1
              className="font-serif text-foreground mb-4"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(1.9rem, 6vw, 3.5rem)',
                lineHeight: 1.15,
              }}
            >
              Политика
              <br />
              <span className="italic text-primary">конфиденциальности</span>
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
              Настоящий документ объясняет, как Shopifly собирает, хранит и использует
              персональные данные пользователей. Пожалуйста, внимательно ознакомьтесь
              с его содержанием.
            </p>
            <p className="text-xs text-muted-foreground mt-3 sm:mt-4">
              Дата последнего обновления: <strong>3 июля 2025 г.</strong>
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 md:py-16">
          {/* Table of contents */}
          <nav className="mb-10 sm:mb-14 p-5 sm:p-8 bg-secondary/30 border border-border" aria-label="Содержание">
            <h2
              className="font-serif text-base font-medium text-foreground mb-4 sm:mb-5"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Содержание
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {sections.map((section, i) => (
                <li key={i}>
                  <a
                    href={`#section-${i}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="flex flex-col gap-10 sm:gap-12">
            {sections.map((section, i) => (
              <article key={i} id={`section-${i}`} className="scroll-mt-20 sm:scroll-mt-28">
                <div className="flex items-start gap-3 sm:gap-5 mb-3 sm:mb-4">
                  <span
                    className="font-serif font-light text-foreground/15 shrink-0 leading-none mt-1"
                    aria-hidden="true"
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2
                    className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-foreground"
                    style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                  >
                    {section.title}
                  </h2>
                </div>
                <div className="pl-0 sm:pl-10 md:pl-14">
                  {section.content.split('\n\n').map((para, j) => (
                    <p
                      key={j}
                      className="text-muted-foreground text-sm leading-relaxed mb-4 last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
                {i < sections.length - 1 && (
                  <div className="mt-10 sm:mt-12 h-px bg-border" />
                )}
              </article>
            ))}
          </div>

          {/* Back to top / home */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <Link
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-3 text-sm tracking-[0.12em] uppercase px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Вернуться на главную
            </Link>
            <ScrollTopButton />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-primary-foreground/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Shopifly. Все права защищены.
          </p>
          <Link
            href="/"
            className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
          >
            shopifly.kz
          </Link>
        </div>
      </footer>
    </>
  )
}
