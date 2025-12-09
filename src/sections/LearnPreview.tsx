import GlassCard from '../components/GlassCard'
import SectionHeader from '../components/SectionHeader'
import GradientButton from '../components/GradientButton'

const learnItems = [
  {
    title: 'Teaching & Knowledge Sharing',
    description:
      'Modern Web Development Basics - Web Security for Builders - Data & Privacy in Plain Language. Free courses, guides, and downloadable PDFs.',
  },
  {
    title: 'Recommended Tools',
    description: 'Curated stack for AI integration, secure hosting, and production-ready web builds.',
  },
  {
    title: 'Downloadable PDFs',
    description: 'Concise references and checklists for founders, teams, and students to move faster.',
  },
]

export default function LearnPreview() {
  return (
    <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto space-y-10">
        <SectionHeader
          eyebrow="Teaching & Knowledge Sharing"
          title="Learn, ship, and stay safe"
          description="Courses, articles, guides, recommended tools, and PDFs to help you build secure, AI-powered experiences."
          action={<GradientButton to="/learn">Explore Learn</GradientButton>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learnItems.map((item, index) => (
            <GlassCard key={item.title} delay={0.05 * index} className="p-6 bg-white/5">
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-neutral-300 leading-relaxed">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
