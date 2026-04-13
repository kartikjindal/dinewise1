export default function KPIBox({ title, beforeValue, afterValue, growth, accent = '#f97316' }) {
  return (
    <div className="glass rounded-xl p-5 relative overflow-hidden group">
      {/* Background glow hint */}
      <div 
        className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
        style={{ background: accent }}
      />
      
      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
        {title}
      </h4>
      
      <div className="flex items-end justify-between items-center mb-1">
        <div className="text-3xl font-bold text-gray-900 tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
          {afterValue}
        </div>
        <div className="text-xs font-bold px-2 py-1 rounded border border-green-200 bg-green-50 text-green-600">
          {growth}
        </div>
      </div>
      
      <div className="text-xs text-gray-400 flex items-center gap-2 mt-2">
        <span className="line-through decoration-gray-300">Before: {beforeValue}</span>
        <span>→</span>
        <span className="text-gray-600 font-medium">Now</span>
      </div>
    </div>
  )
}
