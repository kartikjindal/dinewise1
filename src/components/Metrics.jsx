'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { animateCounter } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

const metrics = [
  {
    value: 100,
    suffix: '+',
    label: 'Restaurants Served',
    sublabel: 'Across India',
    icon: '🏪',
  },
  {
    value: 50000,
    suffix: '+',
    label: 'Orders Generated',
    sublabel: 'Every Month',
    icon: '📦',
  },
  {
    value: 3,
    suffix: '×',
    label: 'Average Growth',
    sublabel: 'In 6 Months',
    icon: '📈',
  },
  {
    value: 4.8,
    suffix: '★',
    label: 'Client Rating',
    sublabel: 'Avg. Across All Partners',
    icon: '⭐',
  },
]

export default function Metrics() {
  const sectionRef = useRef(null)
  const counterRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      counterRefs.current.forEach((el, i) => {
        if (!el) return
        const metric = metrics[i]
        animateCounter(el, metric.value, metric.suffix)
      })

      // Card entrance
      const cards = sectionRef.current?.querySelectorAll('.metric-card')
      if (cards) {
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="metrics"
      ref={sectionRef}
      className="py-32 px-6 relative"
    >
      {/* BG accent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">
            05 — By the Numbers
          </span>
          <div className="flex-1 hr-gradient" />
        </div>

        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Growth You Can
            <br />
            <span className="gradient-text">Measure. Always.</span>
          </h2>
        </div>

        {/* Metrics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="metric-card glass rounded-2xl p-8 text-center glow-orange"
            >
              <div className="text-4xl mb-4">{metric.icon}</div>
              <div
                ref={(el) => (counterRefs.current[i] = el)}
                className="text-5xl font-black text-orange-500 mb-2"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                0
              </div>
              <div className="text-gray-900 font-bold mb-1">{metric.label}</div>
              <div className="text-gray-500 text-sm">{metric.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="mt-16 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm text-orange-600"
            style={{
              background: 'rgba(249,115,22,0.08)',
              border: '1px solid rgba(249,115,22,0.2)',
            }}
          >
            <span className="font-semibold">
              94% of our clients renew after the first quarter.
            </span>
            <span className="text-orange-500">→</span>
            <span className="text-gray-500 font-medium tracking-wide">That&apos;s not a coincidence.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
