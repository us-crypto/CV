import { content } from '../content'

export default function Footer() {
  return (
    <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 pt-4">
      <div className="text-xs text-white/60">
        Open to freelance, contract or full-time.{' '}
        <a href={content.scheduleCallHref} className="text-red-500 hover:text-red-400 transition-colors">
          Message me on WhatsApp
        </a>
      </div>
      <div className="text-xs text-white/60 sm:text-right">{content.footerStats}</div>
    </div>
  )
}
