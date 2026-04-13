'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tools = [
  { name: 'Google Ads', emoji: '🔍', desc: 'Search & Display' },
  { name: 'Meta Ads', emoji: '📘', desc: 'Facebook & Instagram' },
  { name: 'Zomato', emoji: '🍽️', desc: 'Platform Growth' },
  { name: 'Swiggy', emoji: '🛵', desc: 'Delivery Orders' },
  { name: 'HubSpot', emoji: '🟠', desc: 'CRM & Automation' },
  { name: 'WhatsApp', emoji: '💬', desc: 'Customer Re-engagement' },
  { name: 'Klaviyo', emoji: '📧', desc: 'Email Campaigns' },
  { name: 'GA4', emoji: '📊', desc: 'Analytics & Insights' },
]

export default function TechStack() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll('.tool-card')
      if (!items) return

      gsap.from(items, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 82%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">
            04 — Our Toolkit
          </span>
          <div className="flex-1 hr-gradient" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Platforms We
              <br />
              <span className="gradient-text">Master Daily.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We work with the best tools in the industry, fully integrated into
              a cohesive strategy — no guesswork, no gaps.
            </p>
          </div>

          {/* Tool grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="tool-card glass rounded-2xl p-4 text-center group card-hover cursor-default"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {tool.emoji}
                </div>
                <div className="text-xs font-semibold text-gray-900 mb-1">
                  {tool.name}
                </div>
                <div className="text-xs text-gray-500">{tool.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
