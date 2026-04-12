'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FORMSPREE_ID = 'your-formspree-id' // Replace with actual Formspree form ID

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurant: '',
    message: '',
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', restaurant: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 relative">
      {/* bg gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(249,115,22,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">
            07 — Get in Touch
          </span>
          <div className="flex-1 hr-gradient" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA copy */}
          <div>
            <h2
              className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Let&apos;s Grow
              <br />
              Your{' '}
              <span className="gradient-text">Restaurant.</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              Whether you&apos;re a neighbourhood café or a multi-outlet chain,
              we&apos;ll build a strategy that fits where you are — and takes
              you where you want to be.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                { icon: '📧', label: 'Email', value: 'hello@dinewise.in' },
                { icon: '📱', label: 'WhatsApp', value: '+91 98XXX XXXXX' },
                { icon: '📍', label: 'Based in', value: 'Mumbai, India (serving nationwide)' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: 'rgba(249,115,22,0.1)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">{item.label}</div>
                    <div className="text-sm text-white/80">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-10">
              {[
                { name: 'Instagram', icon: '📸', href: 'https://instagram.com/dinewise' },
                { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/company/dinewise' },
                { name: 'Twitter', icon: '🐦', href: 'https://twitter.com/dinewise' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass px-4 py-2.5 rounded-xl text-sm text-white/60 hover:text-white hover:border-orange-500/30 transition-all duration-200 flex items-center gap-2"
                >
                  <span>{s.icon}</span>
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div ref={formRef}>
            {status === 'success' ? (
              <div className="glass rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  We&apos;ll be in touch soon!
                </h3>
                <p className="text-white/55">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-secondary mt-6 text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-8 space-y-5"
              >
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-2 uppercase tracking-wide">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Rahul Gupta"
                      className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/25 outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-2 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="rahul@restaurant.com"
                      className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/25 outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                    />
                  </div>
                </div>

                {/* Restaurant name */}
                <div>
                  <label className="block text-xs text-white/40 mb-2 uppercase tracking-wide">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    name="restaurant"
                    value={formData.restaurant}
                    onChange={handleChange}
                    placeholder="Your Restaurant Name"
                    className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/25 outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-white/40 mb-2 uppercase tracking-wide">
                    What&apos;s your biggest challenge? *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us where your restaurant is and what you want to achieve..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/25 outline-none focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Start Growing Today
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please email us directly at hello@dinewise.in
                  </p>
                )}

                <p className="text-white/25 text-xs text-center">
                  We respond within 24 hours · No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
