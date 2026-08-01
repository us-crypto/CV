import { useState } from 'react'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import MetaGrid from './components/MetaGrid'
import Hero from './components/Hero'
import BottomRight from './components/BottomRight'
import Footer from './components/Footer'
import { content } from './content'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      <img
        src={content.heroImageSrc}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top grayscale lg:scale-[1.2]"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex h-full flex-col px-5 sm:px-6 md:px-10 lg:px-14">
        <Navbar onOpenMenu={() => setMenuOpen(true)} />
        <MetaGrid />

        <div className="flex-1" />

        <div className="pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-end">
            <Hero />
            <BottomRight />
          </div>
          <Footer />
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  )
}
