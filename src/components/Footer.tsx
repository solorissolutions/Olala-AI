import { Link } from 'react-router-dom'
import Logo from './Logo'

const footerLinks = [
  {
    title: 'Studio',
    items: [
      { label: 'Home', to: '/' },
      { label: 'Solutions', to: '/solutions' },
      { label: 'Studio', to: '/studio' },
    ],
  },
  {
    title: 'Work',
    items: [
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Learn', to: '/learn' },
      { label: 'About', to: '/about' },
    ],
  },
  {
    title: 'Connect',
    items: [
      { label: 'Contact', to: '/contact' },
      { label: 'Start a Project', to: '/contact' },
      { label: 'Book a Call', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 pt-12 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <Logo wordmark />
            <p className="text-neutral-300 leading-relaxed max-w-xl">
              A one-person studio with the polish and rigor of a global consortium. AI-powered web
              development, clean design, and security-first builds delivered with honesty and care.
            </p>
            <div className="flex gap-3 text-sm text-neutral-400">
              <span>AI-powered web development</span>
              <span className="text-neutral-600">|</span>
              <span>Secure web applications</span>
              <span className="text-neutral-600">|</span>
              <span>Freelance web developer</span>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-white font-semibold">{column.title}</h3>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-neutral-300 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start gap-4 text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            <span>(c) {new Date().getFullYear()} Olala AI. One-person studio.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/legal/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/legal/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-300">Secure. Premium. Intentional.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
