import GradientButton from '../components/GradientButton'
import SectionHeader from '../components/SectionHeader'

export default function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,37,133,0.12),transparent_40%)] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto glass-panel neon-border p-8 md:p-12 text-center space-y-10">
        <SectionHeader
          align="center"
          title="Ready to Build Something Real?"
          description="AI-powered web development - secure web applications - freelance web developer - enterprise web tools - academic web projects - AI integration for apps - web security specialist"
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <GradientButton to="/contact">Start a Project</GradientButton>
          <GradientButton to="/contact" variant="outline">
            Book a Call
          </GradientButton>
        </div>
      </div>
    </section>
  )
}
