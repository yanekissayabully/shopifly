'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const carouselImages = [
  { src: '/1.png', alt: 'Shopifly коллекция 1' },
  { src: '/2.png', alt: 'Shopifly коллекция 2' },
  { src: '/3.png', alt: 'Shopifly коллекция 3' },
]

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    const timer = setTimeout(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleShopClick = () => {
    const el = document.querySelector('#why-us')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactClick = () => {
    const el = document.querySelector('#contacts')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Desktop background — hidden on mobile */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/1.jpg"
          alt="Женская мода Shopifly"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile carousel — hidden on desktop */}
      <div className="absolute inset-0 z-0 md:hidden">
        {carouselImages.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            sizes="100vw"
            className="object-cover transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentSlide === i ? 1 : 0 }}
            priority={i === 0}
          />
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-foreground/35" />
      <div className="absolute inset-0 z-[1] bg-background/15" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full pt-20 pb-36 sm:pb-32">
        <div className="max-w-2xl">
          <h1
            ref={titleRef}
            className="font-serif text-primary-foreground leading-[1.1] mb-4 sm:mb-5"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            }}
          >
            SHOPIFLY
            <br />
          </h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md">
            Сияй вместе с
          </p>

          <div className="flex flex-col xs:flex-row gap-3">
            <button
              onClick={handleShopClick}
              className="w-auto px-3 sm:px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300 cursor-pointer"
            >
              Смотреть коллекцию
            </button>
            <button
              onClick={handleContactClick}
              className="w-auto px-3 sm:px-4 py-2 rounded-lg border border-primary-foreground/70 text-primary-foreground text-xs tracking-[0.15em] uppercase hover:bg-primary-foreground/10 transition-all duration-300 cursor-pointer"
            >
              Связаться
            </button>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-background/85 backdrop-blur-sm border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-5 grid grid-cols-3 divide-x divide-border/50">
          {[
            { value: '500+', label: 'Моделей' },
            { value: '5 лет', label: 'На рынке' },
            { value: '10K+', label: 'Клиентов' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-0.5 sm:gap-1 px-2 sm:px-4">
              <span
                className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-foreground"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                {item.value}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-muted-foreground text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
