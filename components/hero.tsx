'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

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
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/1.jpg?height=1080&width=1920"
          alt="Женская мода Shopifly"
          fill
          className="object-cover"
          priority
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-foreground/35" />
        <div className="absolute inset-0 bg-background/15" />
      </div>

      {/* Decorative vertical line — desktop only */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10">
        <div className="w-px h-24 bg-primary-foreground/40" />
        <span
          className="text-primary-foreground/60 text-[10px] tracking-[0.4em] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Shopifly 2025
        </span>
        <div className="w-px h-24 bg-primary-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full pt-20 pb-36 sm:pb-32">
        <div className="max-w-2xl">
          {/* Tag line */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-8 sm:w-10 h-px bg-primary-foreground/70" />
            <span className="text-primary-foreground/80 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase">
              Новая коллекция 2025
            </span>
          </div>

          {/* Main heading */}
          <h1
            ref={titleRef}
            className="font-serif text-primary-foreground leading-[1.1] mb-5 sm:mb-6"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(2.4rem, 8vw, 6rem)',
            }}
          >
            Мода, которая
            <br />
            <span className="italic">говорит за тебя</span>
          </h1>

          {/* Subtitle */}
          <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md">
            Элегантные образы для современной женщины. Каждая вещь — это история стиля,
            качества и самовыражения.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
            <button
              onClick={handleShopClick}
              className="w-full xs:w-auto px-6 sm:px-8 py-3.5 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300 cursor-pointer text-center"
            >
              Смотреть коллекцию
            </button>
            <button
              onClick={handleContactClick}
              className="w-full xs:w-auto px-6 sm:px-8 py-3.5 rounded-lg border border-primary-foreground/70 text-primary-foreground text-xs sm:text-sm tracking-[0.15em] uppercase hover:bg-primary-foreground/10 transition-all duration-300 cursor-pointer text-center"
            >
              Связаться
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator — hidden on very small screens */}
      <div className="absolute bottom-24 sm:bottom-14 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
        <span className="text-primary-foreground/60 text-[10px] tracking-[0.3em] uppercase">
          Листать
        </span>
        <div className="w-px h-10 bg-primary-foreground/40 animate-pulse" />
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
