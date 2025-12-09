import GlassCard from '../components/GlassCard'
import SectionHeader from '../components/SectionHeader'
import GradientButton from '../components/GradientButton'

const courses = [
  'Modern Web Development Basics',
  'Web Security for Builders',
  'Data & Privacy in Plain Language',
]

const resources = [
  { title: 'Free Courses', detail: 'Bite-sized lessons with examples and motion to keep learning sharp.' },
  { title: 'Articles / Guides', detail: 'Concise breakdowns of AI integration, UX, and security-first thinking.' },
  { title: 'Recommended Tools', detail: 'A vetted set of tools for AI, hosting, design, and monitoring.' },
  { title: 'Downloadable PDFs', detail: 'Checklists, templates, and founder-friendly briefs you can keep offline.' },
]

export default function LearnPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-12">
      <SectionHeader
        eyebrow="Learn"
        title="Courses & Resources"
        description="Free Courses - Articles / Guides - Recommended Tools - Downloadable PDFs"
        align="left"
        action={<GradientButton to="/contact">Book a Session</GradientButton>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <GlassCard key={resource.title} delay={0.05 * index} className="p-6 bg-white/5">
            <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
            <p className="text-neutral-300 leading-relaxed">{resource.detail}</p>
          </GlassCard>
        ))}
      </div>

      <div className="glass-panel neon-border p-8 md:p-10 space-y-4">
        <h3 className="text-2xl font-semibold text-white">Courses Included</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-neutral-200">
          {courses.map((course) => (
            <li key={course} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              {course}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
