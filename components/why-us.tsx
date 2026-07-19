import Image from 'next/image'

const features = [
  {
    number: '01',
    title: 'Уникальный стиль',
    description:
      'Каждая коллекция создаётся с вниманием к актуальным трендам и вечной классике. Мы тестируем лекала на разных типах фигур, чтобы вещь сидела на вас безупречно, подчеркивая достоинства.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 3L20.5 11.5L30 13L23 19.5L24.5 29L16 24.5L7.5 29L9 19.5L2 13L11.5 11.5L16 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Качественные ткани',
    description:
      'Мы тщательно отбираем поставщиков и материалы. Используем дышащие, приятные к телу ткани, которые не теряют форму и цвет после десятка стирок.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 16L14 20L22 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Быстрая доставка',
    description:
      'Доставляем по всему Казахстану и странам СНГ. Вы можете выбрать удобный способ получения заказа: СДЭК, JYLDAM, самовывоз или доставку через inDrive.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="10" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M22 14H26L30 18V24H22V14Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="27" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="27" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  }
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-7 sm:w-8 h-px bg-primary" />
              <span className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-muted-foreground">
                Наши преимущества
              </span>
            </div>
            <h2
              className="font-serif text-foreground leading-tight"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(1.9rem, 5vw, 3.5rem)',
              }}
            >
              Почему выбирают
              <br />
              <span className="italic text-primary">Shopifly</span>
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-sm text-sm md:text-base">
            Мы создаём не просто одежду — мы создаём ощущение.
            Каждая покупка в Shopifly — это опыт, который хочется повторить.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="bg-background p-6 sm:p-8 md:p-10 group hover:bg-secondary/40 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-5 sm:mb-6">
                <span
                  className="font-serif font-light text-foreground/15"
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    lineHeight: 1,
                  }}
                >
                  {feature.number}
                </span>
                <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.icon}
                </span>
              </div>
              <h3
                className="font-serif text-lg sm:text-xl font-medium text-foreground mb-2 sm:mb-3"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image banner */}
        <div className="mt-px bg-border">
          <div className="bg-background relative overflow-hidden h-52 sm:h-72 md:h-96">
            <Image
              src="/2.jpg"
              alt="Коллекция Shopifly"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1400px"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="text-center">
                <p
                  className="font-serif italic text-foreground leading-snug"
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: 'clamp(1.2rem, 4vw, 3rem)',
                  }}
                >
                  &quot;Стиль — это способ сказать, кто ты есть,
                  <br className="hidden sm:block" />
                  {' '}не произнося ни слова&quot;
                </p>
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-3 block">
                  — Rachel Zoe
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
