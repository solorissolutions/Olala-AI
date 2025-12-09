import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import GradientButton from '../components/GradientButton'

const categories = [
  {
    title: 'Featured Work',
    items: [
      'Flagship founder dashboard with AI copilots and secure data layers.',
      'Enterprise automation suite with neon visual system and RBAC.',
    ],
  },
  {
    title: 'Web & Mobile',
    items: [
      'Cross-platform UI kits and responsive product marketing sites.',
      'Mobile-friendly dashboards with glassmorphism overlays.',
    ],
  },
  {
    title: 'AI & Automation',
    items: [
      'Assistants, embeddings, retrieval, and workflow triggers that ship.',
      'Observability-first automation with safety rails.',
    ],
  },
  {
    title: 'Academic Work',
    items: [
      'Secure, accessible academic portals with neon visuals.',
      'Data visualizations for research programs.',
    ],
  },
  {
    title: 'Video & Motion',
    items: [
      'Micro-interactions, cinematic scroll reveals, and motion guidelines.',
      'Story-driven explainer clips aligned to the neon gradient brand.',
    ],
  },
]

export default function PortfolioPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-12">
      <SectionHeader
        eyebrow="Portfolio"
        title="Glowing, glassy, high-trust work"
        description="Featured Work - Web & Mobile - AI & Automation - Academic Work - Video & Motion"
        align="left"
        action={<GradientButton to="/contact">Start a Project</GradientButton>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 neon-border shadow-card"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
            <div className="relative flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              <ul className="space-y-2 text-neutral-300">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-brand-amber to-brand-violet" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
