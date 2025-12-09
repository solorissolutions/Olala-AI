import GradientButton from '../components/GradientButton'
import SectionHeader from '../components/SectionHeader'

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-10">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something premium"
        description="You don't need technical language - just your idea."
        align="left"
      />

      <form className="glass-panel neon-border p-8 md:p-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-neutral-300" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-brand-pink/60 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-neutral-300" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-brand-pink/60 focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-neutral-300" htmlFor="projectType">
              Project Type
            </label>
            <input
              id="projectType"
              type="text"
              placeholder="Web, mobile, AI..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-brand-pink/60 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-neutral-300" htmlFor="budget">
              Budget Range
            </label>
            <input
              id="budget"
              type="text"
              placeholder="$5k - $30k+"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-brand-pink/60 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-neutral-300" htmlFor="deadline">
              Deadline
            </label>
            <input
              id="deadline"
              type="text"
              placeholder="Timeline or target date"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-brand-pink/60 focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-neutral-300" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Share your idea, goals, or problems to solve."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-brand-pink/60 focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <GradientButton>Send Message</GradientButton>
          <GradientButton to="/portfolio" variant="outline">
            View Portfolio
          </GradientButton>
        </div>
      </form>
    </main>
  )
}
