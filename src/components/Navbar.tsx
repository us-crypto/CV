import { Menu } from 'lucide-react'
import Logo from './Logo'
import { content } from '../content'

interface NavbarProps {
  onOpenMenu: () => void
}

export default function Navbar({ onOpenMenu }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between py-6">
      <Logo />

      <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
        {content.navLinks.map((link) => (
          <a key={link} href="#" className="hover:opacity-70 transition-opacity">
            {link}
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={onOpenMenu}
        className="p-2 hover:opacity-70 transition-opacity md:hidden"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>
    </nav>
  )
}
