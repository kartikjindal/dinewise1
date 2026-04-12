'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { splitTextReveal } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const badgeRef = useRef(null)
  const bgRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.6 })

      // Background subtle pulse
      gsap.to(bgRef.current, {
        scale: 1.05,
        duration: 8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      // Badge entrance
      tl.from(badgeRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })

      // Headline split text reveal
      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('.hero-line')
        tl.from(
          lines,
          {
            y: '110%',
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.12,
          },
          '-=0.3'
        )
      }

      // Subheading
      tl.from(
        subRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      )

      // CTAs
      tl.from(
        ctaRef.current?.children,
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
        },
        '-=0.5'
      )

      // Parallax on scroll — only desktop
      if (window.innerWidth >= 640) {
        gsap.to(bgRef.current, {
          y: 120,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })

        gsap.to(headlineRef.current, {
          y: 60,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% -10%, rgba(249,115,22,0.18) 0%, rgba(10,10,15,0) 70%), radial-gradient(ellipse 60% 60% at 80% 60%, rgba(234,88,12,0.08) 0%, transparent 60%), #0a0a0f',
        }}
      />

      {/* Grid overlay */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #f97316, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-8 blur-3xl"
        style={{ background: 'radial-gradient(circle, #ea580c, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium text-orange-400"
          style={{
            background: 'rgba(249,115,22,0.1)',
            border: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          Trusted by 100+ Restaurants Across India
        </div>

        {/* Headline */}
        <div ref={headlineRef} className="mb-6">
          <div className="overflow-hidden">
            <h1
              className="hero-line text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Your Restaurant
            </h1>
          </div>
          <div className="overflow-hidden">
            <div
              className="hero-line text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              <span className="gradient-text">Deserves to</span>
            </div>
          </div>
          <div className="overflow-hidden">
            <h1
              className="hero-line text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Be Fully Booked.
            </h1>
          </div>
        </div>

        {/* Subheading */}
        <p
          ref={subRef}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          DineWise turns hungry browsers into loyal diners — through
          precision-targeted ads, platform dominance, and growth systems built
          exclusively for restaurants.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary text-base cursor-pointer"
          >
            Start Growing Today
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-secondary text-base cursor-pointer"
          >
            See Our Work
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            { value: '100+', label: 'Restaurants' },
            { value: '50k+', label: 'Orders Monthly' },
            { value: '3×', label: 'Avg. Growth' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-black text-orange-500"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-white/50 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-orange-500/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
