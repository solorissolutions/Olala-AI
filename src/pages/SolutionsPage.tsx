import { motion } from 'framer-motion'
import GlassCard from '../components/GlassCard'
import SectionHeader from '../components/SectionHeader'
import GradientButton from '../components/GradientButton'

const solutions = [
  {
    title: 'Freelance & Founder Solutions',
    description:
      'Launch-ready web and mobile experiences with AI features, premium UI, and security built-in. Designed for speed without sacrificing craft.',
    forWhom: 'Founders, indie hackers, early teams needing a fast, premium build.',
    deliverables: 'Product strategy, UX/UI, AI integrations, secure auth, responsive frontends, deploy-ready hosting.',
    stack: 'React, TypeScript, Vite, Tailwind, Framer Motion, Node/Edge APIs, Postgres, OpenAI, secure hosting.',
  },
  {
    title: 'Enterprise-Style Web Applications',
    description:
      'Internal tools and dashboards with data visualization, AI copilots, and audit-ready security. Built to feel like a flagship product.',
    forWhom: 'Enterprise teams and leaders requiring clarity, reliability, and polish.',
    deliverables: 'Design systems, modular architecture, RBAC, observability hooks, performance budgets, hardened auth.',
    stack: 'React Router 7, React Query, Zustand/Jotai, Prisma, Postgres, CI/CD pipelines, monitoring.',
  },
  {
    title: 'School & Academic Projects',
    description:
      'Guided, responsible builds for students and researchers. Accessible, secure, and visually striking without overkill.',
    forWhom: 'Students, labs, faculty needing credible, modern academic experiences.',
    deliverables: 'Accessible UI, clear content strategy, privacy-first data handling, interactive visualizations.',
    stack: 'React, Vite, Tailwind, lightweight backends or serverless endpoints, academic-friendly auth.',
  },
  {
    title: 'AI & Automation',
    description:
      'Assistants, retrieval, automation, and insight layers that enhance real workflows. Always purposeful, never gimmicky.',
    forWhom: 'Teams who want AI that truly helps: support, ops, product, research.',
    deliverables: 'Chat interfaces, embeddings, RAG pipelines, workflow triggers, evaluation harnesses, safety checks.',
    stack: 'OpenAI/Anthropic APIs, vector stores, queue/workers, observability, secure key handling.',
  },
  {
    title: 'Security & Hosting',
    description:
      'Security-first deployment with sensible defaults. Hosting, monitoring, and guardrails that keep your product trustworthy.',
    forWhom: 'Any build that needs to stay online, resilient, and responsible.',
    deliverables: 'Hardened auth, rate limiting, headers, logging, backups, incident playbooks, deploy automation.',
    stack: 'Edge/CDN, managed Postgres, object storage, CI/CD, TLS, WAF, monitoring.',
  },
]

export default function SolutionsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-12">
      <SectionHeader
        eyebrow="Solutions"
        title="Precision-built services for every stage"
        description="Freelance & Founder Solutions - Enterprise-Style Web Applications - School & Academic Projects - AI & Automation - Security & Hosting"
        align="left"
        action={<GradientButton to="/contact">Start a Project</GradientButton>}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {solutions.map((solution, index) => (
          <GlassCard key={solution.title} delay={0.05 * index} className="p-6 bg-white/5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">{solution.title}</h3>
              <motion.span
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 3, delay: index * 0.1 }}
                className="h-3 w-3 rounded-full bg-brand-gradient"
              />
            </div>
            <p className="text-neutral-300 leading-relaxed">{solution.description}</p>
            <div className="grid gap-2 text-sm text-neutral-200">
              <p className="font-semibold text-white">Who It's For</p>
              <p>{solution.forWhom}</p>
              <p className="font-semibold text-white pt-2">What You Get</p>
              <p>{solution.deliverables}</p>
              <p className="font-semibold text-white pt-2">Tech Stack</p>
              <p>{solution.stack}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </main>
  )
}
