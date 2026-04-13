'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BarComparison({ data, accent = '#f97316' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const bars = containerRef.current?.querySelectorAll('.bar-fill')
    if (bars) {
      gsap.fromTo(bars, 
        { width: '0%' },
        {
          width: (i, el) => el.getAttribute('data-width'),
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%'
          }
        }
      )
    }
  }, [])

  return (
    <div ref={containerRef} className="glass rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-sm font-semibold text-gray-700">Before & After Impact</h4>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-gray-500">
            <span className="w-2 h-2 rounded-full bg-gray-300"></span> Before
          </div>
          <div className="flex items-center gap-1.5 text-gray-800">
            <span className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)]" style={{ background: accent }}></span> After
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {data.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-gray-600 font-medium">{item.metric}</span>
            </div>
            
            {/* Before Bar */}
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div 
                className="bar-fill h-full bg-gray-300 rounded-full"
                data-width={`${item.beforePercent}%`}
                style={{ width: '0%' }}
              />
            </div>
            {/* After Bar */}
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-2">
              <div 
                className="bar-fill h-full rounded-full"
                data-width={`${item.afterPercent}%`}
                style={{ width: '0%', background: accent }}
              />
            </div>
            
            <div className="flex justify-between text-[10px] text-gray-500 font-medium px-1">
              <span>{item.beforeVal}</span>
              <span>{item.afterVal}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
