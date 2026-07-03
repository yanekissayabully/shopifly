'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#hero', label: 'Главная' },
  { href: '#why-us', label: 'О нас' },
  { href: '#contacts', label: 'Контакты' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-[#faf7f4] shadow-sm border-b border-stone-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group z-10" onClick={() => setMenuOpen(false)}>
            <span
              className={`text-xl sm:text-2xl tracking-[0.18em] uppercase font-serif font-semibold transition-colors group-hover:text-primary ${
                scrolled || menuOpen ? 'text-stone-800' : 'text-white'
              }`}
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Shopifly
            </span>
            <span className={`text-[8px] sm:text-[9px] tracking-[0.35em] uppercase mt-0.5 ${
              scrolled || menuOpen ? 'text-stone-400' : 'text-white/60'
            }`}>
              Women&apos;s Fashion
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm tracking-[0.12em] uppercase transition-colors duration-200 relative group cursor-pointer ${
                  scrolled ? 'text-stone-600 hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA button desktop */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => handleNavClick('#contacts')}
              className={`text-sm tracking-[0.12em] uppercase px-6 py-2.5 rounded-lg border transition-all duration-300 cursor-pointer ${
                scrolled
                  ? 'border-primary text-primary hover:bg-primary hover:text-white'
                  : 'border-white/70 text-white hover:bg-white/10'
              }`}
            >
              Связаться
            </button>
          </div>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2 cursor-pointer z-10"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[6px] bg-stone-800' : scrolled ? 'bg-stone-800' : 'bg-white'
              }`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0 bg-stone-800' : scrolled ? 'bg-stone-800' : 'bg-white'
              }`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[6px] bg-stone-800' : scrolled ? 'bg-stone-800' : 'bg-white'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu — rendered outside header to avoid transparency inheritance */}
      <div
        aria-hidden={!menuOpen}
        className={`md:hidden fixed top-16 inset-x-0 bottom-0 z-40 transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-y-0 pointer-events-auto' : '-translate-y-[110%] pointer-events-none'
        }`}
        style={{ backgroundColor: '#faf7f4' }}
      >
        <nav className="flex flex-col h-full px-6 pt-8 pb-10 overflow-y-auto">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-left py-5 border-b border-stone-200 text-stone-700 hover:text-primary transition-colors cursor-pointer ${
                i === 0 ? 'border-t' : ''
              }`}
            >
              <span className="text-xs tracking-[0.3em] uppercase block text-stone-400 mb-1">
                0{i + 1}
              </span>
              <span
                className="font-serif text-3xl"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                {link.label}
              </span>
            </button>
          ))}

          <div className="mt-auto flex flex-col gap-4 pt-8">
            <button
              onClick={() => handleNavClick('#contacts')}
              className="text-sm tracking-[0.15em] uppercase px-6 py-4 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 w-full text-center cursor-pointer"
            >
              Связаться с нами
            </button>
            <div className="flex items-center justify-center gap-8">
              {['Instagram', 'WhatsApp', 'Telegram'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs tracking-[0.2em] uppercase text-stone-400 hover:text-primary transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
