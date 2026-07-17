import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollTopButton from '@/components/scroll-top-button'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — Shopifly',
  description: 'Политика конфиденциальности интернет-магазина Shopifly.',
}

const sections = [
  {
    title: '1. Общие положения',
    content: `Настоящая Политика конфиденциальности действует в отношении всей информации, которую Оператор может получить о Пользователе во время использования сайта, сервисов и продуктов Оператора.`,
  },
  {
    title: '2. Состав персональных данных',
    content: `— ФИО
— Контактный номер телефона
— Адрес электронной почты
— Адрес доставки (при оформлении заказа)`,
  },
  {
    title: '3. Цели обработки персональных данных',
    content: `— оформление и исполнение заказов;
— обратная связь;
— улучшение качества обслуживания;
— выполнение требований законодательства.`,
  },
  {
    title: '4. Согласие на обработку данных',
    content: `Передача своих данных через формы на сайте считается согласием Пользователя на обработку персональных данных.`,
  },
  {
    title: '5. Рассылка и уведомления',
    content: `Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты aselyafox@mail.ru с пометкой «Отказ от уведомлений о новых продуктах и услугах и специальных предложениях».`,
  },
  {
    title: '6. Передача данных третьим лицам',
    content: `Персональные данные не передаются третьим лицам, кроме случаев, предусмотренных законодательством или необходимых для исполнения заказа (например, службе доставки).`,
  },
  {
    title: '7. Хранение и защита',
    content: `Оператор применяет необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.`,
  },
  {
    title: '8. Изменения в политике',
    content: `Оператор оставляет за собой право вносить изменения в настоящую Политику. Актуальная редакция размещается на этой странице.

Дата последнего обновления: 23 июня 2026 г.`,
  },
  {
    title: '9. Контактная информация',
    content: `По всем вопросам, связанным с настоящей Политикой конфиденциальности и обработкой персональных данных, вы можете обратиться к нам:

— Алматинская область, Талгарский район, Гульдалинский,Жана Куат,улица 76 2 кВ, 22
— Режим работы: Пн–Вс, 10:00–22:00
— Email: aselyafox@mail.ru`,
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
              Настоящий документ описывает, как Shopifly-kz.com собирает, использует и защищает ваши
              персональные данные. Пожалуйста, ознакомьтесь с ним внимательно.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 md:py-16">
          {/* Company info */}
          <div className="mb-10 sm:mb-12 p-5 sm:p-8 bg-secondary/30 border border-border rounded-lg">
            <h2
              className="font-serif text-base font-medium text-foreground mb-3"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Компания
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              ИП &quot;SHOPIFLY&quot; (далее — «Оператор») уважает право Пользователя на
              конфиденциальность и стремится защищать персональные данные, которые обрабатываются
              в рамках предоставления своих услуг.
            </p>
          </div>

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
