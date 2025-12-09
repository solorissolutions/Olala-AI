import { motion } from 'framer-motion'
import GradientButton from '../components/GradientButton'
import GlassCard from '../components/GlassCard'

const highlights = [
  { title: 'AI-powered web development', value: 'Enterprise polish' },
  { title: 'Secure web applications', value: 'Security-first builds' },
  { title: 'One-person studio', value: 'Full-stack + design' },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-amber/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-brand-pink/25 blur-3xl" />
        <div className="absolute -bottom-10 right-10 h-96 w-96 rounded-full bg-brand-violet/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200">
              Premium | Futuristic | Secure
            </div>
            <div className="space-y-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-white">
                Web &amp; Mobile Experiences,{' '}
                <span className="bg-brand-gradient bg-clip-text text-transparent">Upgraded With Intelligence.</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 max-w-3xl">
                Olala AI is a one-person studio building modern, secure, AI-powered web and mobile applications with
                clean design, strong security, and premium UI engineering.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <GradientButton to="/contact">Start a Project</GradientButton>
              <GradientButton to="/portfolio" variant="outline">
                View Portfolio
              </GradientButton>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, idx) => (
                <GlassCard key={item.title} delay={0.1 * idx} className="p-4 bg-white/5">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">{item.title}</p>
                  <p className="text-lg font-semibold text-white mt-2">{item.value}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-brand-amber/20 blur-2xl" />
            <div className="absolute -right-8 bottom-6 h-32 w-32 rounded-full bg-brand-violet/25 blur-3xl" />
            <div className="relative rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 neon-border shadow-glow">
              <div className="grid gap-4 md:gap-6">
                <div className="relative overflow-hidden rounded-2xl bg-black/50 border border-white/5 p-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                    className="mx-auto h-52 w-52 md:h-64 md:w-64"
                  >
                    <svg viewBox="0 0 200 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <radialGradient id="orb" cx="30%" cy="30%">
                          <stop offset="0%" stopColor="#ff7a1f" />
                          <stop offset="50%" stopColor="#f72585" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </radialGradient>
                        <filter id="orbGlow">
                          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <g filter="url(#orbGlow)">
                        <circle cx="100" cy="100" r="70" fill="none" stroke="url(#orb)" strokeWidth="2" opacity="0.5" />
                        <circle cx="100" cy="100" r="50" fill="none" stroke="url(#orb)" strokeWidth="2" opacity="0.5" />
                        <circle cx="100" cy="100" r="30" fill="none" stroke="url(#orb)" strokeWidth="2" opacity="0.6" />
                        <line x1="100" y1="30" x2="100" y2="170" stroke="url(#orb)" strokeWidth="1.5" opacity="0.7" />
                        <line x1="30" y1="100" x2="170" y2="100" stroke="url(#orb)" strokeWidth="1.5" opacity="0.7" />
                        <line x1="50" y1="50" x2="150" y2="150" stroke="url(#orb)" strokeWidth="1.5" opacity="0.6" />
                        <line x1="150" y1="50" x2="50" y2="150" stroke="url(#orb)" strokeWidth="1.5" opacity="0.6" />
                        <circle cx="100" cy="100" r="5" fill="#ff7a1f" opacity="0.9" />
                        <circle cx="100" cy="70" r="4" fill="#ff7a1f" opacity="0.8" />
                        <circle cx="100" cy="130" r="4" fill="#8b5cf6" opacity="0.8" />
                        <circle cx="70" cy="100" r="4" fill="#ff7a1f" opacity="0.8" />
                        <circle cx="130" cy="100" r="4" fill="#8b5cf6" opacity="0.8" />
                        <circle cx="85" cy="85" r="3" fill="#f72585" opacity="0.7" />
                        <circle cx="115" cy="85" r="3" fill="#f72585" opacity="0.7" />
                        <circle cx="85" cy="115" r="3" fill="#f72585" opacity="0.7" />
                        <circle cx="115" cy="115" r="3" fill="#f72585" opacity="0.7" />
                      </g>
                    </svg>
                  </motion.div>
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GlassCard className="p-4 bg-white/5">
                    <p className="text-sm text-neutral-300">Premium UI engineering</p>
                    <p className="text-xl font-semibold text-white">Figma-style floating panels</p>
                  </GlassCard>
                  <GlassCard className="p-4 bg-white/5">
                    <p className="text-sm text-neutral-300">Security-first delivery</p>
                    <p className="text-xl font-semibold text-white">Authentication, hosting, privacy</p>
                  </GlassCard>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

