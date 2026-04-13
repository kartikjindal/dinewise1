'use client'

import React from 'react'

export default function RestaurantCard({ data, isActive, onToggle }) {
  return (
    <div className={`group relative transition-all duration-300 z-10 ${isActive ? 'scale-[1.02] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]' : 'hover:scale-[1.01] hover:shadow-xl'}`}>
      <div 
        className={`glass cursor-pointer border flex flex-col lg:flex-row ${isActive ? 'border-gray-200 rounded-t-2xl shadow-md' : 'border-gray-100 rounded-2xl hover:border-gray-300'} overflow-hidden transition-all`}
        onClick={onToggle}
      >
        {/* Subtle accent glow when active */}
        {isActive && (
          <div 
            className="absolute top-0 left-0 w-full h-1 z-20"
            style={{ background: `linear-gradient(90deg, ${data.accent}, transparent)` }}
          />
        )}
        
        {/* Extra Large Image Block (Left side) */}
        <div className="w-full lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
          {/* Overlay to darken edge slightly or just general tint on non-active */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
          <img 
            src={data.image} 
            alt={data.restaurant} 
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        {/* Content Block (Right side) */}
        <div className="w-full lg:w-3/5 p-6 md:p-10 flex flex-col justify-center">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="flex-1">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>
                {data.restaurant}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{data.category}</p>
              
              {/* Service tags */}
              <div className="flex flex-wrap gap-2">
                {data.services.map((s) => (
                  <span key={s} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full text-gray-600 bg-gray-50 border border-gray-200 shadow-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            
            {/* CTA Arrow Button */}
            <button 
              className={`flex items-center justify-center shrink-0 w-full md:w-auto gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all ${
                isActive 
                  ? 'bg-gray-100 text-gray-900 border border-gray-200' 
                  : 'bg-orange-50 text-orange-600 border border-orange-200 group-hover:bg-orange-500 group-hover:text-white'
              }`}
            >
              <span>{isActive ? 'Close Dashboard' : 'View Analytics'}</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-gray-200 to-transparent mb-6"></div>

          {/* Large Quick Metrics Row */}
          <div className="grid grid-cols-3 gap-4">
            {data.quickMetrics.map((qm, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-[11px] uppercase font-bold tracking-widest text-gray-500 mb-1">{qm.label}</div>
                <div className="text-3xl font-black text-gray-900 flex items-end gap-1.5" style={{ fontFamily: 'var(--font-outfit)' }}>
                  <span style={{ color: data.accent }}>{qm.value}</span>
                  <span className="text-sm font-bold mb-1" style={{ color: '#16a34a' }}>↑</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
