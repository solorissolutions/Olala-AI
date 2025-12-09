import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import GradientButton from '../components/GradientButton'

const projects = [
  {
    title: 'Founder Dashboard',
    category: 'Web & Mobile',
    description: 'Full-stack dashboard with AI insights, clean UI, and hardened security for founders and operators.',
  },
  {
    title: 'Enterprise Intelligence',
    category: 'AI & Automation',
    description: 'Internal tooling that blends data retrieval, assistants, and workflow automation for enterprise teams.',
  },
  {
    title: 'Academic Studio',
    category: 'Academic Work',
    description: 'Secure, accessible academic project with neon visuals, responsible data handling, and guided UX.',
  },
]

export default function FeaturedWork() {
  return (
    <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_40%_80%,rgba(139,92,246,0.16),transparent_30%)]" />
      <div className="relative max-w-7xl mx-auto space-y-10">
        <SectionHeader
          eyebrow="Featured Work"
          title="Built like a premium product line"
          description="Full-width glowing cards with neon gradient edges. Hover to feel the glassmorphism depth."
          action={<GradientButton to="/portfolio">Explore Portfolio</GradientButton>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-card neon-border"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
              <div className="relative flex flex-col gap-3">
                <p className="text-sm text-neutral-400">{project.category}</p>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-neutral-300 leading-relaxed">{project.description}</p>
                <div className="pt-2 text-sm text-neutral-300">Hover to feel the glow -&gt;</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
