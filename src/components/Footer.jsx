'use client'

import Link from 'next/link'

const footerLinks = {
  Services: [
    { label: 'Ads Management', href: '#services' },
    { label: 'Social Media', href: '#services' },
    { label: 'Influencer Marketing', href: '#services' },
    { label: 'CRM & WhatsApp', href: '#services' },
    { label: 'Platform Optimisation', href: '#services' },
    { label: 'Menu Design', href: '#services' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Our Work', href: '#portfolio' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Contact', href: '#contact' },
  ],
}

const socials = [
  { name: 'Instagram', href: 'https://instagram.com/dinevibestudio', icon: '📸' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/dinevibestudio', icon: '💼' },
  { name: 'Twitter', href: 'https://twitter.com/dinevibestudio', icon: '🐦' },
  { name: 'WhatsApp', href: 'https://wa.me/919258494901', icon: '💬' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-black text-sm">
                D
              </div>
              <span
                className="text-gray-900 font-bold text-lg tracking-tight"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Dine<span className="text-orange-500">Vibe</span>
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mb-6">
              The restaurant marketing agency that turns digital channels into
              dining rooms. Premium strategy, measurable results.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-sm hover:border-orange-500/30 transition-all duration-200"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-5">
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-sm text-gray-500 hover:text-orange-600 transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {currentYear} DineVibe Studio. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Designed with ❤️ for restaurants that deserve to grow.
          </p>
        </div>
      </div>
    </footer>
  )
}
