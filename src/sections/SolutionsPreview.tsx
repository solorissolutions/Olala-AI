import GlassCard from '../components/GlassCard'
import SectionHeader from '../components/SectionHeader'

const solutions = [
  'Freelance & Founder Projects',
  'Enterprise & Internal Tools',
  'School & College Projects',
  'AI-Enhanced Products',
  'Security & Hosting Support',
]

export default function SolutionsPreview() {
  return (
    <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <SectionHeader
          eyebrow="Solutions Preview"
          title="Built for founders, teams, students, and enterprises"
          description="Freelance & Founder Projects - Enterprise & Internal Tools - School & College Projects - AI-Enhanced Products - Security & Hosting Support"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, index) => (
            <GlassCard key={item} delay={0.05 * index} className="p-5 bg-white/5">
              <p className="text-sm text-neutral-400 mb-2">Solution {index + 1}</p>
              <h3 className="text-xl font-semibold text-white">{item}</h3>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
