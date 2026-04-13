'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

import KPIBox from './KPIBox'
import BarComparison from './BarComparison'
import FunnelVisualization from './FunnelVisualization'
import TimelineChart from './TimelineChart'

export default function DashboardPanel({ isOpen, data }) {
  const panelRef = useRef(null)
  const contentRef = useRef(null)
  const [activeTab, setActiveTab] = useState('Overview')

  useEffect(() => {
    if (isOpen) {
      // Expand
      gsap.to(panelRef.current, {
        height: 'auto',
        duration: 0.6,
        ease: 'power3.inOut',
        onComplete: () => {
          ScrollTrigger.refresh()
          // Optionally auto scroll slightly if needed
          /*
          const rect = panelRef.current.getBoundingClientRect()
          if (rect.bottom > window.innerHeight) {
             window.scrollBy({ top: 150, behavior: 'smooth' })
          }
          */
        }
      })
      
      gsap.fromTo(contentRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: 'power2.out' }
      )
    } else {
      // Collapse
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.in'
      })
      
      gsap.to(panelRef.current, {
        height: 0,
        duration: 0.5,
        delay: 0.2,
        ease: 'power3.inOut',
        onComplete: () => ScrollTrigger.refresh()
      })
    }
  }, [isOpen])

  return (
    <div 
      ref={panelRef} 
      className="h-0 overflow-hidden bg-white border-x border-b border-gray-200 rounded-b-2xl mx-1"
    >
      <div ref={contentRef} className="p-6 md:p-10 border-t border-gray-200 opacity-0">
        
        {/* Dashboard Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-gray-200 gap-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1 tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
              Growth Dashboard: {data.restaurant}
            </h3>
            <p className="text-gray-500 text-sm">Campaign Duration: 6 Months</p>
          </div>
          
          <div className="flex bg-gray-100 p-1 rounded-lg border border-gray-200 self-start">
            {['Overview', 'Ads', 'Aggregators'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs px-4 py-2 rounded-md font-medium transition-all ${
                  activeTab === tab 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Analytics Content */}
        <div className="space-y-6">
          {/* 1. KPI Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.kpis.map((kpi, i) => (
              <KPIBox key={i} {...kpi} accent={data.accent} />
            ))}
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* 2. Funnel */}
            <div className="lg:col-span-1">
              <FunnelVisualization data={data.funnel} accent={data.accent} />
            </div>
            
            {/* 3. Bar Comparison */}
            <div className="lg:col-span-1">
              <BarComparison data={data.bars} accent={data.accent} />
            </div>
            
            {/* 4. Timeline */}
            <div className="lg:col-span-1">
              <TimelineChart months={data.timeline} accent={data.accent} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
