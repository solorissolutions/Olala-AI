import SectionHeader from '../components/SectionHeader'
import GlassCard from '../components/GlassCard'
import GradientButton from '../components/GradientButton'

const services = [
  {
    title: 'Product Direction',
    detail: 'Strategy, UX architecture, and interface systems that feel intentional and premium.',
  },
  {
    title: 'Design & UI Engineering',
    detail: 'Figma-style floating UI, glassmorphism, neon gradients, and responsive layouts across web and mobile.',
  },
  {
    title: 'AI & Data',
    detail: 'Assistants, retrieval, embeddings, automation, and observability to keep AI trustworthy.',
  },
  {
    title: 'Security & Hosting',
    detail: 'Authentication, authorization, safe data handling, hosting best practices, and monitoring baked in.',
  },
  {
    title: 'Education & Enablement',
    detail: 'Workshops, documentation, and video walkthroughs so teams and students can move independently.',
  },
]

export default function StudioPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-12">
      <SectionHeader
        eyebrow="Studio & Services"
        title="Premium, honest, one-person studio"
        description="A one-person studio with range. Micro-lab engineering mindset. Clarity, security, teaching, design."
        align="left"
        action={<GradientButton to="/contact">Book a Call</GradientButton>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <GlassCard key={service.title} delay={0.05 * index} className="p-6 bg-white/5">
            <p className="text-sm text-neutral-400 mb-2">Service {index + 1}</p>
            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-neutral-300 leading-relaxed">{service.detail}</p>
          </GlassCard>
        ))}
      </div>

      <div className="glass-panel neon-border p-8 md:p-10 space-y-4">
        <h3 className="text-2xl font-semibold text-white">Mission & Values</h3>
        <p className="text-neutral-300 leading-relaxed">
          Build experiences that feel like they came from a global tech consortium while staying honest about being a
          one-person studio. Ship fast, stay secure, design beautifully, and teach along the way.
        </p>
        <p className="text-neutral-300 leading-relaxed">
          Security-first. AI with intention. Clarity over jargon. Everything aligned to the neon amber to magenta to
          violet gradient that represents Olala AI.
        </p>
      </div>
    </main>
  )
}
