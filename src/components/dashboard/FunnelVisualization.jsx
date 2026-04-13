export default function FunnelVisualization({ data, accent = '#f97316' }) {
  // data format: { stages: [{name, before, after, beforeValue, afterValue}], totalGrowth }
  
  return (
    <div className="glass rounded-xl p-6 h-full flex flex-col">
      <h4 className="text-sm font-semibold text-gray-700 mb-6">Conversion Funnel</h4>
      
      <div className="flex-1 flex flex-col justify-between relative space-y-4">
        {/* Connecting line */}
        <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-gray-300 to-transparent" />
        
        {data.stages.map((stage, i) => (
          <div key={i} className="relative z-10 pl-16">
            {/* Step node */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-gray-50 flex items-center justify-center" style={{ background: accent }}>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            
            <div className="text-xs text-gray-500 font-semibold mb-1">{stage.name}</div>
            
            <div className="flex items-end gap-3 flex-wrap">
              <div className="text-xl font-bold tracking-tight text-gray-900">{stage.after}</div>
              <div className="text-xs text-gray-400 line-through mb-1">{stage.before}</div>
              
              <div className="text-[10px] ml-auto px-2 py-0.5 rounded-full bg-green-50 border border-green-200 text-green-600 font-bold tracking-wide">
                {stage.growth}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
