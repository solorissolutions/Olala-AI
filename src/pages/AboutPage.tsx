import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import GlassCard from '../components/GlassCard'

const timeline = [
  { year: 'Now', detail: 'Olala AI - one-person studio shipping premium AI-powered products.' },
  { year: '2022-2024', detail: 'Enterprise tools, automation, and design systems for high-trust teams.' },
  { year: '2018-2021', detail: 'Full-stack builds for founders, academic collaborations, teaching.' },
]

const values = [
  'Security-first thinking with clear guardrails.',
  'AI that is intentional, explainable, and genuinely useful.',
  'Design that is crisp, legible, and futuristic without noise.',
  'Teaching built-in: docs, videos, handoff-ready specs.',
]

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-12">
      <SectionHeader
        eyebrow="About"
        title="A one-person studio with range"
        description="Micro-lab engineering mindset. Clarity, security, teaching, design."
        align="left"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="p-8 bg-white/5">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Mission</h3>
            <p className="text-neutral-300 leading-relaxed">
              Build experiences that feel like they came from a Google x Apple x Microsoft x NVIDIA x Palo Alto x Amazon
              consortium subsidiary, while staying truthful: one expert developer running a premium studio.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              High-end, intelligent, futuristic, secure, and extremely refined. The entire brand follows the orange to
              magenta to violet neon gradient from the Olala AI sphere.
            </p>
          </div>
        </GlassCard>

        <GlassCard className="p-8 bg-white/5">
          <h3 className="text-2xl font-semibold text-white mb-4">Values</h3>
          <ul className="space-y-3 text-neutral-200">
            {values.map((value) => (
              <li key={value} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-brand-amber to-brand-violet" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="p-8 bg-white/5">
          <h3 className="text-2xl font-semibold text-white mb-4">Timeline</h3>
          <div className="space-y-4">
            {timeline.map((item) => (
              <div key={item.year} className="flex items-start gap-3">
                <span className="text-sm text-neutral-400 w-20">{item.year}</span>
                <p className="text-neutral-200 flex-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-8 bg-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-amber/10 via-transparent to-brand-violet/10 pointer-events-none" />
          <div className="relative space-y-4">
            <h3 className="text-2xl font-semibold text-white">Visual</h3>
            <p className="text-neutral-300">
              A 3D neon "network sphere" sits behind the text, softly pulsing to remind visitors that the studio is
              engineered, connected, and thoughtful.
            </p>
            <motion.div
              className="mx-auto h-52 w-52"
              initial={{ opacity: 0.8, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
            >
              <svg viewBox="0 0 200 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="aboutOrb" cx="30%" cy="30%">
                    <stop offset="0%" stopColor="#ff7a1f" />
                    <stop offset="50%" stopColor="#f72585" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="70" fill="none" stroke="url(#aboutOrb)" strokeWidth="2" opacity="0.7" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="url(#aboutOrb)" strokeWidth="2" opacity="0.6" />
                <circle cx="100" cy="100" r="30" fill="none" stroke="url(#aboutOrb)" strokeWidth="2" opacity="0.6" />
                <line x1="100" y1="30" x2="100" y2="170" stroke="url(#aboutOrb)" strokeWidth="1.5" opacity="0.7" />
                <line x1="30" y1="100" x2="170" y2="100" stroke="url(#aboutOrb)" strokeWidth="1.5" opacity="0.7" />
                <line x1="50" y1="50" x2="150" y2="150" stroke="url(#aboutOrb)" strokeWidth="1.5" opacity="0.6" />
                <line x1="150" y1="50" x2="50" y2="150" stroke="url(#aboutOrb)" strokeWidth="1.5" opacity="0.6" />
                <circle cx="100" cy="100" r="5" fill="#ff7a1f" opacity="0.9" />
              </svg>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </main>
  )
}
