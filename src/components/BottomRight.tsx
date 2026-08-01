import { Download } from 'lucide-react'
import { content } from '../content'

export default function BottomRight() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 justify-end">
      <a
        href={content.resumeSrc}
        download
        className="flex items-center gap-3 border border-white/30 px-6 py-3 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors self-start"
      >
        <Download size={14} />
        <span className="text-sm tracking-wider">DOWNLOAD RESUME</span>
      </a>

      <div className="flex flex-wrap items-stretch gap-2 sm:gap-3 text-sm text-white/80 self-start lg:self-end">
        {content.credentials.map((item) => (
          <div key={item.label} className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2">
            <span className={item.className}>{item.label}</span>
            <span className="text-white/50 text-xs">{item.sublabel}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
