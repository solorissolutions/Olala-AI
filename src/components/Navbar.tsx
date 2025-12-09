import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import GradientButton from './GradientButton'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Studio', to: '/studio' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Learn', to: '/learn' },
  { label: 'About', to: '/about' },
]

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path || location.pathname === `${path}/`

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-4 sm:px-6 py-3 sm:py-4 shadow-card">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" aria-label="Olala AI home">
              <Logo wordmark />
            </Link>

            <nav className="hidden lg:flex items-center gap-2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.to) ? 'text-white bg-white/10' : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isActive('/contact')
                    ? 'text-white bg-white/10'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <GradientButton to="/contact">Start a Project</GradientButton>
              <GradientButton to="/portfolio" variant="outline">
                View Portfolio
              </GradientButton>
            </div>

            <button
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <div className="flex flex-col gap-1.5">
                <span className="h-0.5 w-6 rounded-full bg-white" />
                <span className="h-0.5 w-6 rounded-full bg-white" />
                <span className="h-0.5 w-6 rounded-full bg-white" />
              </div>
            </button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 overflow-hidden"
              >
                <div className="grid gap-2">
                  {[...links, { label: 'Contact', to: '/contact' }].map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={`w-full rounded-xl px-4 py-3 text-base font-semibold ${
                        isActive(link.to)
                          ? 'bg-white/10 text-white'
                          : 'bg-white/5 text-neutral-200 hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <GradientButton to="/contact" className="w-full justify-center">
                    Start a Project
                  </GradientButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
