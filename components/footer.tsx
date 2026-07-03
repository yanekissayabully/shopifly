import Link from 'next/link'

const footerLinks = {
  
  Компания: [
    { label: 'О нас', href: '#why-us' },
    { label: 'Контакты', href: '#contacts' },
    { label: 'Политика конфиденциальности', href: '/privacy' },
  ],
}

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/shopifly.ala?igsh=YmZ0ZW4xcjNyeTM3',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
  },
]

const requisites = [
  { label: 'Компания', value: 'ИП SHOPIFLY' },
  { label: 'БИН (ИИН)', value: '960305401983' },
  { label: 'Банк', value: 'АО "Kaspi Bank"' },
  { label: 'КБе', value: '19' },
  { label: 'БИК', value: 'CASPKZKA' },
  { label: 'Номер счёта', value: 'KZ94722S000015873461' },
  { label: 'Юридический адрес', value: 'Алматинская область, Талгарский район, Гульдалинский, Жана Куат, улица 76, 2 кВ, 22' },
]

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-10 sm:mb-14">

          {/* Brand block */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-4 sm:mb-5 group">
              <span
                className="text-2xl sm:text-3xl tracking-[0.18em] uppercase font-serif font-semibold text-primary-foreground"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                Shopifly
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-5 sm:mb-6 max-w-xs">
              Женская одежда, которая вдохновляет. Каждая коллекция создана для современной женщины,
              ценящей стиль и комфорт.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-primary-foreground/20 text-primary-foreground/50 hover:text-primary-foreground hover:border-primary-foreground/50 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[10px] tracking-[0.35em] uppercase text-primary-foreground/40 mb-4 sm:mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Requisites */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h4 className="text-[10px] tracking-[0.35em] uppercase text-primary-foreground/40 mb-4 sm:mb-5">
              Реквизиты
            </h4>
            <ul className="flex flex-col gap-2">
              {requisites.map((r) => (
                <li key={r.label} className="flex flex-col">
                  <span className="text-[10px] text-primary-foreground/35 tracking-wide">
                    {r.label}
                  </span>
                  <span className="text-xs sm:text-sm text-primary-foreground/70 tracking-wide break-all">
                    {r.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-primary-foreground/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Shopifly. Все права защищены.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6">
            <Link
              href="/privacy"
              className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <span className="text-xs text-primary-foreground/20 hidden sm:inline">|</span>
            <span className="text-xs text-primary-foreground/40">г. Алматы, Казахстан</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
