'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const caseStudies = [
  {
    restaurant: 'Paper & Pie',
    category: 'Minimalist Cafe & Roastery',
    description: 'A stylish, minimalist cafe that needed a digital presence matching its offline aesthetic. We elevated their social media and launched targeted local ads, positioning them as the go-to spot for creatives.',
    results: [
      { metric: '+210%', label: 'Social Engagement' },
      { metric: '4.8★', label: 'Platform Rating' },
      { metric: 'Top 5', label: 'Cafe ranking locally' },
    ],
    services: ['Social Media', 'Google Ads', 'Branding'],
    accent: '#f97316',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    link: 'https://www.paperandpie.in'
  },
  {
    restaurant: 'TART Bengaluru',
    category: 'Boulangerie, Patisserie & Wine Bar',
    description: 'An artisanal patisserie introducing a new Summer Collection. Our influencer campaigns and high-quality visual ad strategy resulted in their seasonal drops selling out in record time.',
    results: [
      { metric: '48hr', label: 'To Sell Out Drops' },
      { metric: '+340%', label: 'Instagram Reach' },
      { metric: '3.8×', label: 'Revenue Growth' },
    ],
    services: ['Influencer Marketing', 'Meta Ads'],
    accent: '#a855f7',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80',
    link: 'https://tart.co.in'
  },
  {
    restaurant: 'Vanamo',
    category: 'Global Eats & Caffeinary',
    description: 'Combining global cuisine with an artisanal coffee experience. We consolidated their dual identity through a cohesive menu redesign and heavy platform optimization on Zomato and Swiggy.',
    results: [
      { metric: '+120%', label: 'Delivery Orders' },
      { metric: '₹8L', label: 'Monthly ROI' },
      { metric: '62%', label: 'Repeat Customers' },
    ],
    services: ['Platform Optimisation', 'Menu Design'],
    accent: '#06b6d4',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80',
    link: 'https://vanamo.in'
  },
  {
    restaurant: 'Big Bean Cafe',
    category: 'Premium Coffee Shop',
    description: 'With multiple locations across Bangalore, Big Bean needed consistent platform visibility. We ran hyperlocal ads for each outlet and built a retention strategy for frequent coffee drinkers.',
    results: [
      { metric: '4+', label: 'Outlets Scaled' },
      { metric: '4.7★', label: 'Google Rating' },
      { metric: '2.9×', label: 'ROAS on Ads' },
    ],
    services: ['Google Ads', 'Zomato Optimisation', 'CRM'],
    accent: '#10b981',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    link: 'https://bigbeancafe.in'
  },
  {
    restaurant: 'The Illusion Cafe',
    category: 'Boutique Cafe · Rajajinagar',
    description: 'A vibrant cafe needing to capture the local neighborhood. We built their official web presence and implemented a WhatsApp re-engagement loop that turned first-time visitors into regulars.',
    results: [
      { metric: '45%', label: 'Return Visitors' },
      { metric: '10k+', label: 'Organic Views' },
      { metric: 'Top', label: 'Local search visibility' },
    ],
    services: ['Social Media', 'WhatsApp CRM'],
    accent: '#ec4899',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',
    link: 'https://theillusioncafe-gu313rt.gamma.site'
  }
]

export default function Portfolio() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return

        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.05,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">
            03 — Case Studies
          </span>
          <div className="flex-1 hr-gradient" />
        </div>

        <div className="mb-16">
          <h2
            className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Results That
            <br />
            <span className="gradient-text">Speak for Themselves.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl">
            Real restaurants, real numbers. Explore how we transformed digital
            presence into footfall for these premium brands.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.restaurant}
              ref={(el) => (cardsRef.current[i] = el)}
              className="glass rounded-3xl overflow-hidden group hover:border-white/15 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-5 min-h-[300px]">
                {/* Image panel */}
                <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  {/* Real cafe photography via Unsplash representation */}
                  <img
                    src={cs.image}
                    alt={cs.restaurant}
                    className="absolute w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <a
                      href={cs.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-xs font-semibold text-white/80 hover:text-white hover:bg-black/80 transition-all"
                    >
                      Visit Website ↗
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-3 lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3
                          className="text-2xl font-bold text-white relative inline-block"
                          style={{ fontFamily: 'var(--font-outfit)' }}
                        >
                          {cs.restaurant}
                          <span
                            className="absolute -bottom-1 left-0 w-1/3 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ background: cs.accent }}
                          />
                        </h3>
                        <span className="text-xs text-white/40 border border-white/10 px-2 py-0.5 rounded-md">
                          {cs.category}
                        </span>
                      </div>
                      <p className="text-white/60 leading-relaxed mb-6">
                        {cs.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cs.services.map((s) => (
                          <span
                            key={s}
                            className="text-xs px-3 py-1 rounded-full text-white/50 border border-white/8 transition-colors group-hover:border-white/20"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-1 flex flex-col justify-center gap-6 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8">
                      {cs.results.map((r) => (
                        <div key={r.label} className="text-left">
                          <div
                            className="text-3xl font-black mb-1 drop-shadow-lg"
                            style={{ color: cs.accent, fontFamily: 'var(--font-outfit)' }}
                          >
                            {r.metric}
                          </div>
                          <div className="text-xs text-white/40">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm mb-4">
            Your restaurant could be the next success story.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary cursor-pointer"
          >
            Let&apos;s Write Your Story
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
