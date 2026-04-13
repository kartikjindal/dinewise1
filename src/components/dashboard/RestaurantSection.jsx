'use client'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import RestaurantCard from './RestaurantCard'
import DashboardPanel from './DashboardPanel'

gsap.registerPlugin(ScrollTrigger)

const dashboardData = [
  {
    id: 'paperandpie',
    restaurant: 'Paper & Pie',
    category: 'Minimalist Cafe & Roastery',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    emoji: '☕',
    accent: '#f97316',
    services: ['Social Media', 'Google Ads', 'Branding'],
    quickMetrics: [
      { label: 'Social', value: '+85%' },
      { label: 'Rating', value: '4.7★' },
      { label: 'Sales', value: '1.9x' }
    ],
    // Dashboard Panel Data
    kpis: [
      { title: 'Total Orders', beforeValue: '1,250', afterValue: '2,850', growth: '+128%' },
      { title: 'Monthly Revenue', beforeValue: '₹1.5L', afterValue: '₹4.2L', growth: '+180%' },
      { title: 'Customer Rating', beforeValue: '4.2', afterValue: '4.7', growth: '+12%' },
      { title: 'Ad Conversion Rate', beforeValue: '1.2%', afterValue: '3.1%', growth: '+158%' }
    ],
    bars: [
      { metric: 'Online Orders', beforePercent: 30, afterPercent: 85, beforeVal: '450', afterVal: '2,100' },
      { metric: 'Revenue (₹ Lakhs)', beforePercent: 40, afterPercent: 95, beforeVal: '1.5', afterVal: '4.2' },
      { metric: 'Monthly Impressions', beforePercent: 20, afterPercent: 90, beforeVal: '15K', afterVal: '85K' }
    ],
    funnel: {
      totalGrowth: '2.2x',
      stages: [
        { name: 'Ad Impressions', before: '15K', after: '85K', growth: '+466%' },
        { name: 'Menu Views', before: '2.5K', after: '12K', growth: '+380%' },
        { name: 'Completed Orders', before: '1.25K', after: '2.85K', growth: '+128%' }
      ]
    },
    timeline: [
      { label: 'Mo 1', value: 20 },
      { label: 'Mo 3', value: 65 },
      { label: 'Mo 6', value: 100 }
    ]
  },
  {
    id: 'tart',
    restaurant: 'TART Bengaluru',
    category: 'Boulangerie & Patisserie',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80',
    emoji: '🥐',
    accent: '#a855f7',
    services: ['Influencer Marketing', 'Meta Ads'],
    quickMetrics: [
      { label: 'Revenue', value: '2.4x' },
      { label: 'Sell Out', value: '24hr' },
      { label: 'Reach', value: '+180%' }
    ],
    // Dashboard Panel Data
    kpis: [
      { title: 'Store Footfall', beforeValue: '320/wk', afterValue: '950/wk', growth: '+196%' },
      { title: 'Pre-Orders', beforeValue: '45', afterValue: '280', growth: '+522%' },
      { title: 'Average Order Value', beforeValue: '₹550', afterValue: '₹950', growth: '+72%' },
      { title: 'Instagram Reach', beforeValue: '4K', afterValue: '25K', growth: '+525%' }
    ],
    bars: [
      { metric: 'Weekly Pre-Orders', beforePercent: 15, afterPercent: 80, beforeVal: '45', afterVal: '280' },
      { metric: 'AOV (Avg Order Value)', beforePercent: 40, afterPercent: 90, beforeVal: '₹550', afterVal: '950' },
      { metric: 'Influencer ROI', beforePercent: 10, afterPercent: 95, beforeVal: '1.2x', afterVal: '4.5x' }
    ],
    funnel: {
      totalGrowth: '2.8x',
      stages: [
        { name: 'Campaign Reach', before: '4K', after: '25K', growth: '+525%' },
        { name: 'Site Visitors', before: '600', after: '4.5K', growth: '+650%' },
        { name: 'Checkouts', before: '45', after: '280', growth: '+522%' }
      ]
    },
    timeline: [
      { label: 'Launch', value: 10 },
      { label: 'Week 2', value: 85 },
      { label: 'Week 4', value: 100 }
    ]
  },
  {
    id: 'vanamo',
    restaurant: 'Vanamo',
    category: 'Global Eats & Caffeinary',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80',
    emoji: '🌿',
    accent: '#06b6d4',
    services: ['Platform Optimisation', 'Menu Design'],
    quickMetrics: [
      { label: 'Delivery', value: '+85%' },
      { label: 'Repeat.', value: '48%' },
      { label: 'ROI', value: '₹2.4L' }
    ],
    // Dashboard Panel Data
    kpis: [
      { title: 'Zomato/Swiggy Orders', beforeValue: '450', afterValue: '1,150', growth: '+155%' },
      { title: 'Repeat Customers', beforeValue: '24%', afterValue: '48%', growth: '+100%' },
      { title: 'Menu Conversion', beforeValue: '6.2%', afterValue: '12.4%', growth: '+100%' },
      { title: 'Net Platform ROI', beforeValue: '₹65K', afterValue: '₹2.4L', growth: '+269%' }
    ],
    bars: [
      { metric: 'Delivery Orders', beforePercent: 35, afterPercent: 95, beforeVal: '450', afterVal: '1,150' },
      { metric: 'Menu Conversion %', beforePercent: 20, afterPercent: 85, beforeVal: '6.2%', afterVal: '12.4%' },
      { metric: 'Repeat Order Rate', beforePercent: 25, afterPercent: 75, beforeVal: '24%', afterVal: '48%' }
    ],
    funnel: {
      totalGrowth: '1.9x',
      stages: [
        { name: 'Platform Impressions', before: '12K', after: '35K', growth: '+191%' },
        { name: 'Menu Clicks', before: '1.4K', after: '5.2K', growth: '+271%' },
        { name: 'Net Orders', before: '450', after: '1,150', growth: '+155%' }
      ]
    },
    timeline: [
      { label: 'Day 1', value: 10 },
      { label: 'Day 30', value: 50 },
      { label: 'Day 60', value: 100 }
    ]
  },
  {
    id: 'bigbean',
    restaurant: 'Big Bean Cafe',
    category: 'Premium Coffee Shop',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    emoji: '☕',
    accent: '#10b981',
    services: ['Google Ads', 'Zomato Optimisation', 'CRM'],
    quickMetrics: [
      { label: 'Outlets', value: '2' },
      { label: 'Rating', value: '4.4★' },
      { label: 'ROAS', value: '2.4x' }
    ],
    // Dashboard Panel Data
    kpis: [
      { title: 'Google Local Visits', beforeValue: '850', afterValue: '2,400', growth: '+182%' },
      { title: 'Zomato CTR', beforeValue: '4.2%', afterValue: '8.6%', growth: '+104%' },
      { title: 'Customer Return Rate', beforeValue: '15%', afterValue: '28%', growth: '+86%' },
      { title: 'Blended ROAS', beforeValue: '1.2x', afterValue: '2.4x', growth: '+100%' }
    ],
    bars: [
      { metric: 'Local Searches', beforePercent: 20, afterPercent: 85, beforeVal: '850', afterVal: '2,400' },
      { metric: 'Zomato CTR %', beforePercent: 15, afterPercent: 95, beforeVal: '4.2%', afterVal: '8.6%' },
      { metric: 'Return Customers', beforePercent: 25, afterPercent: 90, beforeVal: '15%', afterVal: '28%' }
    ],
    funnel: {
      totalGrowth: '1.8x',
      stages: [
        { name: 'Ad Impressions', before: '12K', after: '45K', growth: '+275%' },
        { name: 'Store Directions', before: '450', after: '1,850', growth: '+311%' },
        { name: 'Zomato Orders', before: '320', after: '940', growth: '+193%' }
      ]
    },
    timeline: [
      { label: 'Month 1', value: 30 },
      { label: 'Month 3', value: 70 },
      { label: 'Month 6', value: 100 }
    ]
  },
  {
    id: 'illusion',
    restaurant: 'The Illusion Cafe',
    category: 'Boutique Cafe · Rajajinagar',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',
    emoji: '✨',
    accent: '#ec4899',
    services: ['Social Media', 'WhatsApp CRM'],
    quickMetrics: [
      { label: 'Returns', value: '35%' },
      { label: 'Views', value: '4k+' },
      { label: 'Visits', value: 'Top' }
    ],
    // Dashboard Panel Data
    kpis: [
      { title: 'WhatsApp Opt-ins', beforeValue: '45', afterValue: '320', growth: '+611%' },
      { title: 'Organic Reach', beforeValue: '1.2k', afterValue: '8.5k', growth: '+608%' },
      { title: 'Return Visitors', beforeValue: '12%', afterValue: '35%', growth: '+191%' },
      { title: 'Weekend Turnout', beforeValue: '120', afterValue: '450', growth: '+275%' }
    ],
    bars: [
      { metric: 'CRM Subscribers', beforePercent: 10, afterPercent: 95, beforeVal: '45', afterVal: '320' },
      { metric: 'Re-engagement %', beforePercent: 15, afterPercent: 85, beforeVal: '12%', afterVal: '35%' },
      { metric: 'Weekend Footfall', beforePercent: 30, afterPercent: 90, beforeVal: '120', afterVal: '450' }
    ],
    funnel: {
      totalGrowth: '2.1x',
      stages: [
        { name: 'Instagram Reach', before: '1.2K', after: '8.5K', growth: '+608%' },
        { name: 'Profile Views', before: '250', after: '1.4K', growth: '+460%' },
        { name: 'CRM Opt-ins', before: '45', after: '320', growth: '+611%' }
      ]
    },
    timeline: [
      { label: 'Wk 1', value: 15 },
      { label: 'Wk 4', value: 45 },
      { label: 'Wk 8', value: 100 }
    ]
  }
]

export default function RestaurantSection() {
  const [activeId, setActiveId] = useState(null)
  const sectionRef = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    // Stagger entrance animation
    const ctx = gsap.context(() => {
      const wrappers = listRef.current?.querySelectorAll('.card-wrapper')
      if (wrappers) {
        gsap.from(wrappers, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 85%'
          }
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleToggle = (id) => {
    setActiveId(prev => (prev === id ? null : id))
  }

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">
            03 — Analytics & Impact
          </span>
          <div className="flex-1 hr-gradient" />
        </div>

        <div className="mb-16">
          <h2
            className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Restaurant Growth
            <br />
            <span className="gradient-text">Dashboards.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            We don&apos;t just run ads; we engineer predictable growth. Expand the interactive dashboards below to see the exact funnels and metrics behind our most successful campaigns.
          </p>
        </div>

        <div ref={listRef} className="space-y-4 relative z-10">
          {dashboardData.map((data) => (
            <div key={data.id} className="card-wrapper flex flex-col">
              <RestaurantCard 
                data={data} 
                isActive={activeId === data.id} 
                onToggle={() => handleToggle(data.id)} 
              />
              <DashboardPanel 
                isOpen={activeId === data.id} 
                data={data} 
              />
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Want to see these kinds of numbers for your restaurant?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary cursor-pointer inline-flex"
          >
            Request an Audit
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
