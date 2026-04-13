'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: '📈',
    title: 'Ads Management',
    description:
      'Google & Meta campaigns engineered for maximum ROAS. We run hyper-local targeting, competitor ambush strategies, and continuous A/B testing to drive table reservations and delivery orders.',
    pricing: 'From ₹15,000/mo',
    tag: 'Most Popular',
    color: 'from-orange-500/20 to-red-600/10',
  },
  {
    icon: '📱',
    title: 'Social Media',
    description:
      'Content that stops the scroll and builds brand loyalty. We manage your Instagram, Facebook, and Reels strategy — from creation to community management.',
    pricing: 'From ₹12,000/mo',
    tag: null,
    color: 'from-purple-500/20 to-pink-600/10',
  },
  {
    icon: '🌟',
    title: 'Influencer Marketing',
    description:
      'Curated food influencer campaigns that generate authentic buzz. We identify, brief, and manage creators whose audiences match your ideal diner profile.',
    pricing: 'From ₹20,000/campaign',
    tag: null,
    color: 'from-yellow-500/20 to-orange-600/10',
  },
  {
    icon: '💬',
    title: 'CRM & WhatsApp',
    description:
      'Turn one-time visitors into regulars. Automated WhatsApp sequences, loyalty programmes, and re-engagement flows powered by HubSpot and Klaviyo.',
    pricing: 'From ₹10,000/mo',
    tag: 'High ROI',
    color: 'from-green-500/20 to-teal-600/10',
  },
  {
    icon: '🚀',
    title: 'Zomato & Swiggy Optimisation',
    description:
      'Rank higher, convert better. We optimise your menu photos, descriptions, tags, and ad placements on both platforms to maximise organic and paid order volume.',
    pricing: 'From ₹8,000/mo',
    tag: 'Quick Win',
    color: 'from-red-500/20 to-orange-600/10',
  },
  {
    icon: '🎨',
    title: 'Menu Design & Branding',
    description:
      'Premium visual identity that commands premium pricing. Menu redesign, digital assets, brand guidelines, and photography direction for a restaurant that looks as good as it tastes.',
    pricing: 'From ₹25,000 project',
    tag: null,
    color: 'from-blue-500/20 to-cyan-600/10',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.service-card')

      if (cards && window.innerWidth >= 640) {
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 px-6">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(249,115,22,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">
            02 — What We Provide
          </span>
          <div className="flex-1 hr-gradient" />
        </div>

        {/* Heading */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <h2
            className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Every Tool Your
            <br />
            Restaurant Needs.{' '}
            <span className="gradient-text">One Team.</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed self-end">
            Stop juggling five agencies. DineWise is your single growth partner
            — covering every digital channel that brings diners through your
            door.
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group relative glass rounded-2xl p-7 cursor-default overflow-hidden card-hover glow-orange"
            >
              {/* Gradient glow background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`}
              />

              {/* Tag */}
              {service.tag && (
                <span className="absolute top-5 right-5 text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              )}

              {/* Content */}
              <div className="relative z-10">
                <div className="text-3xl mb-5">{service.icon}</div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Pricing hint */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-orange-600/80 font-semibold tracking-wide">
                    {service.pricing}
                  </span>
                  <span className="text-gray-300 group-hover:text-orange-500 transition-colors duration-300">
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
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below cards */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Not sure which services your restaurant needs?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-secondary cursor-pointer"
          >
            Get a Free Strategy Session
          </a>
        </div>
      </div>
    </section>
  )
}
