import { X } from 'lucide-react'
import Logo from './Logo'
import { content } from '../content'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-6">
        <Logo />
        <button
          type="button"
          onClick={onClose}
          className="p-2 hover:opacity-70 transition-opacity"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="flex flex-col items-center justify-center flex-1 gap-8">
        {content.navLinks.map((link, i) => (
          <a
            key={link}
            href="#"
            onClick={onClose}
            className="text-2xl tracking-widest transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(1rem)',
              transitionDelay: open ? `${100 + i * 60}ms` : '0ms',
            }}
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  )
}
