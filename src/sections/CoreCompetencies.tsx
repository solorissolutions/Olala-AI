import GlassCard from '../components/GlassCard'
import SectionHeader from '../components/SectionHeader'

const competencies = [
  {
    title: 'Artificial Intelligence, Used Intelligently',
    detail: 'Pragmatic AI integration that enhances the product. Assistants, automation, retrieval, and insights that solve real problems.',
  },
  {
    title: "Security You Don't Have to Beg For",
    detail: 'Authentication, authorization, safe storage, and privacy patterns included from day one - no bolt-ons or afterthoughts.',
  },
  {
    title: 'Clean, Focused Design',
    detail: 'Futuristic yet minimal UI, glassmorphism overlays, neon gradients, and premium typography that read clearly on every device.',
  },
]

export default function CoreCompetencies() {
  return (
    <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_10%,rgba(247,37,133,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto space-y-10">
        <SectionHeader eyebrow="Core Competencies" title="The essentials, delivered with intention" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {competencies.map((item, index) => (
            <GlassCard key={item.title} delay={0.05 * index} className="p-6 bg-white/5 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-neutral-300 leading-relaxed">{item.detail}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
