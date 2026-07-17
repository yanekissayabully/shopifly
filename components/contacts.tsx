'use client'

const contactInfo = [
  {
    label: 'Адрес',
    value: 'г. Алматы, ул. Серкебаева 111',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 2C7.239 2 5 4.239 5 7C5 11 10 18 10 18C10 18 15 11 15 7C15 4.239 12.761 2 10 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Телефон',
    value: '+7 (747) 951-89-10',
    href: 'tel:+77479518910',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M3 4C3 3.448 3.448 3 4 3H7.279C7.657 3 7.989 3.25 8.087 3.615L9.087 7.215C9.175 7.544 9.042 7.892 8.757 8.074L7.22 9.029C8.183 11.056 9.944 12.817 11.971 13.78L12.926 12.243C13.108 11.958 13.456 11.825 13.785 11.913L17.385 12.913C17.75 13.011 18 13.343 18 13.721V17C18 17.552 17.552 18 17 18H16C8.82 18 3 12.18 3 5V4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'aselyafox@mail.ru',
    href: 'mailto:aselyafox@mail.ru',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 7L10 12L18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Режим работы',
    value: 'Пн–Вс: 10:00–20:00',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 6V10L13 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const socialLinks: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/shopifly.ala?igsh=YmZ0ZW4xcjNyeTM3',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/message/2ELPGG7NCVODB1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M21 12C21 16.971 16.971 21 12 21C10.29 21 8.69 20.52 7.33 19.69L3 21L4.31 16.67C3.48 15.31 3 13.71 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 10C9 10 9.5 12 12 14C14.5 16 16 15.5 16 15.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  }
]

export default function Contacts() {
  return (
    <section id="contacts" className="py-16 sm:py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-10 sm:mb-14 md:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="w-7 sm:w-8 h-px bg-primary" />
            <span className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-muted-foreground">
              Свяжитесь с нами
            </span>
          </div>
          <h2
            className="font-serif text-foreground leading-tight"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(1.9rem, 5vw, 3.5rem)',
            }}
          >
            Мы всегда рады
            <br />
            <span className="italic text-primary">помочь вам</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
          {/* Left: Contact info + Socials */}
          <div className="flex flex-col gap-8 sm:gap-10">
            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-0.5 text-primary shrink-0">{item.icon}</div>
                  <div className="min-w-0">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-foreground hover:text-primary transition-colors break-words"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground break-words">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links block */}
            <div className="bg-background rounded-xl border border-border p-5 sm:p-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Мы в социальных сетях
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border text-foreground/60 hover:text-primary hover:border-primary transition-all duration-200 text-sm"
                  >
                    {social.icon}
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full overflow-hidden rounded-xl bg-border" style={{ minHeight: '300px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.025867972462!2d76.89487955049658!3d43.22422407127139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388368de3641edc5%3A0xb5ad7035a71e5e8!2z0L_RgNC-0YHQv9C10LrRgiDQodC10YDQutC10LHQsNC10LLQsCAxMTEsINCQ0LvQvNCw0YLRiyAwNTAwNjA!5e0!3m2!1sru!2skz!4v1784290952725!5m2!1sru!2skz"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Расположение магазина Shopifly на карте"
                className="w-full lg:min-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
