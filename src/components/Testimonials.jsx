'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: "DineWise completely transformed our digital presence. Within 3 months, our Zomato orders doubled and footfall across all our Bangalore outlets skyrocketed. They truly understand cafe aesthetics.",
    name: "Paper & Pie",
    role: "Google Review",
    date: "2 months ago",
    rating: 5,
    logo: "☕"
  },
  {
    quote: "The team is exceptional. They launched our Summer Patisserie campaign which resulted in pre-orders selling out in less than 24 hours. Best ROI we've ever seen.",
    name: "TART Bengaluru",
    role: "Google Review",
    date: "3 weeks ago",
    rating: 5,
    logo: "🥐"
  },
  {
    quote: "We brought them on to handle social media and ROAS increased by 2.5x within the first quarter. Their strategies for combining global cuisine imagery with local ad targeting brought incredible results.",
    name: "Vanamo",
    role: "Google Review",
    date: "4 months ago",
    rating: 5,
    logo: "🌿"
  },
  {
    quote: "Highly recommended for any roastery. They optimized our Swiggy/Zomato profiles to perfection and helped open our newest outlet with a line out the door.",
    name: "Big Bean Cafe",
    role: "Google Review",
    date: "1 month ago",
    rating: 5,
    logo: "🫘"
  },
  {
    quote: "DineWise is the real deal. They built incredible hype on Instagram for our official launch and manage our WhatsApp CRM seamlessly. Diners keep returning.",
    name: "The Illusion Cafe",
    role: "Google Review",
    date: "5 months ago",
    rating: 5,
    logo: "✨"
  }
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.testimonial-card')
      if (cards) {
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 82%',
          },
        })
      }
    }, sectionRef)

    // Auto-rotate
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => {
      ctx.revert()
      clearInterval(interval)
    }
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">
            06 — Real Google Reviews
          </span>
          <div className="flex-1 hr-gradient" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <h2
            className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Don&apos;t Take{' '}
            <span className="gradient-text">Our Word</span>
            <br />
            for It.
          </h2>
          <div className="flex items-end">
            <p className="text-gray-500 leading-relaxed max-w-sm">
              The restaurants below trusted us with their growth. Here&apos;s
              what they experienced firsthand on Google.
            </p>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card glass rounded-2xl p-7 cursor-pointer transition-all duration-300 relative ${
                active === i
                  ? 'border-orange-500/30 bg-white shadow-[0_0_40px_rgba(249,115,22,0.1)]'
                  : 'hover:border-gray-300'
              }`}
              onClick={() => setActive(i)}
            >
              {/* Google icon simple svg */}
              <div className="absolute top-5 right-5">
                <svg viewBox="0 0 48 48" className="w-6 h-6">
                  <path fill="#4285F4" d="M24 9.5c3.1 0 5.6 1.1 7.4 2.9l5.6-5.6C33.4 3.7 29.2 2 24 2 14.8 2 6.9 7.6 3.1 15.3l6.7 5.2C11.5 13.5 17.2 9.5 24 9.5z"/>
                  <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.2-5.1c-2 1.3-4.5 2-8.3 2-6.8 0-12.6-4.6-14.7-10.8l-6.8 5.3C6.4 41.5 14.4 46 24 46z"/>
                  <path fill="#FBBC05" d="M9.3 30.2c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7l-6.7-5.2C1 18.7 0 21.3 0 24s1 5.3 2.6 8.3l6.7-5.3z"/>
                  <path fill="#EA4335" d="M46.1 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.5c-.5 2.9-2.1 5.4-4.5 7.1l6.2 5.1c3.6-3.3 5.9-8.2 5.9-14.5z"/>
                </svg>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-sm"
                  style={{ background: 'rgba(0,0,0,0.03)' }}>
                  {t.logo}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.date}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-orange-500 text-base">★</span>
                ))}
              </div>

              <blockquote className="text-gray-700 leading-relaxed text-sm">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

