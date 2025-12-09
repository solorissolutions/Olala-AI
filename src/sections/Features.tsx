import GlassCard from '../components/GlassCard'
import SectionHeader from '../components/SectionHeader'

const pillars = [
  {
    title: 'Intelligent by Default',
    description:
      'AI features where they make sense: automation, insights, assistants, smart UX. Each build is thoughtful, not gimmicky.',
  },
  {
    title: 'Secure From Day One',
    description: 'Authentication, safe data structures, responsible storage, hosting best practices baked in from the start.',
  },
  {
    title: 'Designed to Be Understood',
    description: 'Clean UI, 3D visuals, Figma-style layouts, glass surfaces, precision typography that read clearly.',
  },
]

export default function Features() {
  return (
    <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,122,31,0.08),transparent_25%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto space-y-10">
        <SectionHeader
          eyebrow="Why Olala AI"
          title="Built Like a Tech Lab. Operated by One Brain."
          description="Olala AI is structured like a compact R&D unit: strategy, design, engineering, AI, security, hosting, video and teaching in one place. This creates a faster, clearer, more efficient development pipeline than hiring multiple agencies."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <GlassCard key={pillar.title} delay={0.05 * index} className="p-6 bg-white/5">
              <p className="text-sm text-neutral-400 mb-2">0{index + 1}</p>
              <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
              <p className="text-neutral-300 leading-relaxed">{pillar.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
