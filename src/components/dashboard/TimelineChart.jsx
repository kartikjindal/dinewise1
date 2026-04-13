'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TimelineChart({ months, accent = '#f97316' }) {
  // months = [{label: 'M1', value: 20}, {label: 'M3', value: 60}, {label: 'M6', value: 100}]
  const svgRef = useRef(null)
  
  useEffect(() => {
    const path = svgRef.current?.querySelector('.animated-path')
    if (path) {
      const length = path.getTotalLength()
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
      
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 85%'
        }
      })
      
      const dots = svgRef.current?.querySelectorAll('.chart-dot')
      if (dots) {
        gsap.from(dots, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: svgRef.current,
            start: 'top 85%'
          }
        })
      }
    }
  }, [])

  return (
    <div className="glass rounded-xl p-6 h-full flex flex-col">
      <h4 className="text-sm font-semibold text-gray-700 mb-4">Growth Timeline</h4>
      
      <div className="flex-1 relative flex items-end min-h-[140px] pt-4 pb-6">
        {/* SVG Chart */}
        <svg ref={svgRef} className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path 
            className="animated-path"
            d="M 10,80 Q 40,80 50,40 T 90,10" 
            fill="none" 
            stroke={accent} 
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Dots */}
          <circle className="chart-dot" cx="10" cy="80" r="4" fill="white" stroke={accent} strokeWidth="2" />
          <circle className="chart-dot" cx="50" cy="40" r="4" fill="white" stroke={accent} strokeWidth="2" />
          <circle className="chart-dot" cx="90" cy="10" r="4" fill="white" stroke={accent} strokeWidth="2" />
          
          {/* subtle gradient under path could go here but skipping for performance/simplicity */}
        </svg>
        
        {/* X axis labels */}
        <div className="absolute bottom-0 w-full flex justify-between px-2">
          {months.map((m, i) => (
            <span key={i} className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{m.label}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
