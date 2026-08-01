import { content } from '../content'

export default function MetaGrid() {
  return (
    <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      <div>
        <h2 className="text-lg md:text-xl tracking-wide leading-tight">
          <span className="block font-normal">{content.name.first}</span>
          <span className="block font-pixel text-2xl md:text-3xl">{content.name.last}</span>
        </h2>
        <div className="text-[10px] text-white/50 mt-3">*</div>
        <p className="font-pixel mt-1 text-xs text-white/60 leading-relaxed">
          {content.blurb.map((line, i) => (
            <span key={line}>
              {line}
              {i < content.blurb.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>

      <div className="text-right lg:text-left">
        <h2 className="text-lg md:text-xl tracking-wide leading-tight">
          <span className="block font-normal">{content.role.line1}</span>
          <span className="block font-pixel text-2xl md:text-3xl">{content.role.line2}</span>
        </h2>
      </div>

      <div>
        <div className="text-base tracking-widest text-white/50 uppercase mb-3 font-pixel">What I Do</div>
        <p className="text-sm text-white/90 leading-relaxed max-w-[220px]">{content.whatIDo}</p>
      </div>

      <div className="text-right lg:text-left">
        <div className="text-base tracking-widest text-white/50 uppercase mb-3 font-pixel">Skills</div>
        <ul className="text-sm text-white/90 leading-relaxed space-y-0.5">
          {content.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
