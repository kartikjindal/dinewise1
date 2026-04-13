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
      { label: 'Social', value: '+210%' },
      { label: 'Rating', value: '4.8★' },
      { label: 'Sales', value: '2.4x' }
    ],
    // Dashboard Panel Data
    kpis: [
      { title: 'Total Orders', beforeValue: '4,200', afterValue: '9,850', growth: '+134%' },
      { title: 'Monthly Revenue', beforeValue: '₹6.5L', afterValue: '₹15.8L', growth: '+143%' },
      { title: 'Customer Rating', beforeValue: '4.2', afterValue: '4.8', growth: '+14%' },
      { title: 'Ad Conversion Rate', beforeValue: '1.2%', afterValue: '4.1%', growth: '+241%' }
    ],
    bars: [
      { metric: 'Online Orders', beforePercent: 30, afterPercent: 85, beforeVal: '1,200', afterVal: '5,800' },
      { metric: 'Revenue (₹ Lakhs)', beforePercent: 40, afterPercent: 95, beforeVal: '6.5', afterVal: '15.8' },
      { metric: 'Monthly Impressions', beforePercent: 20, afterPercent: 90, beforeVal: '45K', afterVal: '280K' }
    ],
    funnel: {
      totalGrowth: '3.4x',
      stages: [
        { name: 'Ad Impressions', before: '45K', after: '280K', growth: '+520%' },
        { name: 'Menu Views', before: '8.5K', after: '42K', growth: '+394%' },
        { name: 'Completed Orders', before: '4.2K', after: '9.85K', growth: '+134%' }
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
      { label: 'Revenue', value: '3.8x' },
      { label: 'Sell Out', value: '48hr' },
      { label: 'Reach', value: '+340%' }
    ],
    // Dashboard Panel Data
    kpis: [
      { title: 'Store Footfall', beforeValue: '850/wk', afterValue: '2,900/wk', growth: '+241%' },
      { title: 'Pre-Orders', beforeValue: '120', afterValue: '890', growth: '+641%' },
      { title: 'Average Order Value', beforeValue: '₹650', afterValue: '₹1,250', growth: '+92%' },
      { title: 'Instagram Reach', beforeValue: '12K', afterValue: '85K', growth: '+608%' }
    ],
    bars: [
      { metric: 'Weekly Pre-Orders', beforePercent: 15, afterPercent: 80, beforeVal: '120', afterVal: '890' },
      { metric: 'AOV (Avg Order Value)', beforePercent: 40, afterPercent: 90, beforeVal: '₹650', afterVal: '₹1,250' },
      { metric: 'Influencer ROI', beforePercent: 10, afterPercent: 95, beforeVal: '1.2x', afterVal: '8.5x' }
    ],
    funnel: {
      totalGrowth: '4.2x',
      stages: [
        { name: 'Campaign Reach', before: '12K', after: '85K', growth: '+608%' },
        { name: 'Site Visitors', before: '1.2K', after: '14.5K', growth: '+1,108%' },
        { name: 'Checkouts', before: '120', after: '890', growth: '+641%' }
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
      { label: 'Delivery', value: '+120%' },
      { label: 'Repeat.', value: '62%' },
      { label: 'ROI', value: '₹8L' }
    ],
    // Dashboard Panel Data
    kpis: [
      { title: 'Zomato/Swiggy Orders', beforeValue: '1,800', afterValue: '4,100', growth: '+127%' },
      { title: 'Repeat Customers', beforeValue: '24%', afterValue: '62%', growth: '+158%' },
      { title: 'Menu Conversion', beforeValue: '8.4%', afterValue: '22.1%', growth: '+163%' },
      { title: 'Net Platform ROI', beforeValue: '₹2.1L', afterValue: '₹8L', growth: '+280%' }
    ],
    bars: [
      { metric: 'Delivery Orders', beforePercent: 35, afterPercent: 95, beforeVal: '1,800', afterVal: '4,100' },
      { metric: 'Menu Conversion %', beforePercent: 20, afterPercent: 85, beforeVal: '8.4%', afterVal: '22.1%' },
      { metric: 'Repeat Order Rate', beforePercent: 25, afterPercent: 75, beforeVal: '24%', afterVal: '62%' }
    ],
    funnel: {
      totalGrowth: '2.5x',
      stages: [
        { name: 'Platform Impressions', before: '21K', after: '52K', growth: '+147%' },
        { name: 'Menu Clicks', before: '2.4K', after: '18K', growth: '+650%' },
        { name: 'Net Orders', before: '1.8K', after: '4.1K', growth: '+127%' }
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
      { label: 'Outlets', value: '4+' },
      { label: 'Rating', value: '4.7★' },
      { label: 'ROAS', value: '2.9x' }
    ],
    // Dashboard Panel Data
    kpis: [
      { title: 'Google Local Visits', beforeValue: '2.1K', afterValue: '8.4K', growth: '+300%' },
      { title: 'Zomato CTR', beforeValue: '4.2%', afterValue: '12.8%', growth: '+204%' },
      { title: 'Customer Return Rate', beforeValue: '15%', afterValue: '38%', growth: '+153%' },
      { title: 'Blended ROAS', beforeValue: '1.2x', afterValue: '2.9x', growth: '+141%' }
    ],
    bars: [
      { metric: 'Local Searches', beforePercent: 20, afterPercent: 85, beforeVal: '2.1K', afterVal: '8.4K' },
      { metric: 'Zomato CTR %', beforePercent: 15, afterPercent: 95, beforeVal: '4.2%', afterVal: '12.8%' },
      { metric: 'Return Customers', beforePercent: 25, afterPercent: 90, beforeVal: '15%', afterVal: '38%' }
    ],
    funnel: {
      totalGrowth: '3.1x',
      stages: [
        { name: 'Ad Impressions', before: '18K', after: '65K', growth: '+261%' },
        { name: 'Store Directions', before: '1.2K', after: '5.8K', growth: '+383%' },
        { name: 'Zomato Orders', before: '850', after: '2.4K', growth: '+182%' }
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
      { label: 'Returns', value: '45%' },
      { label: 'Views', value: '10k+' },
      { label: 'Visits', value: 'Top' }
    ],
    // Dashboard Panel Data
    kpis: [
      { title: 'WhatsApp Opt-ins', beforeValue: '120', afterValue: '1,850', growth: '+1440%' },
      { title: 'Organic Reach', beforeValue: '2.4k', afterValue: '18.5k', growth: '+670%' },
      { title: 'Return Visitors', beforeValue: '12%', afterValue: '45%', growth: '+275%' },
      { title: 'Weekend Turnout', beforeValue: '250', afterValue: '850', growth: '+240%' }
    ],
    bars: [
      { metric: 'CRM Subscribers', beforePercent: 10, afterPercent: 95, beforeVal: '120', afterVal: '1,850' },
      { metric: 'Re-engagement %', beforePercent: 15, afterPercent: 85, beforeVal: '12%', afterVal: '45%' },
      { metric: 'Weekend Footfall', beforePercent: 30, afterPercent: 90, beforeVal: '250', afterVal: '850' }
    ],
    funnel: {
      totalGrowth: '2.9x',
      stages: [
        { name: 'Instagram Reach', before: '2.4K', after: '18.5K', growth: '+670%' },
        { name: 'Profile Visits', before: '350', after: '2.1K', growth: '+500%' },
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
