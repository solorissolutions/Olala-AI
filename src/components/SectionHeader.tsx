import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  action?: ReactNode
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  action,
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
      className={`flex flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-neutral-200">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand-amber via-brand-pink to-brand-violet" />
          {eyebrow}
        </span>
      )}
      <div className="flex flex-col gap-4 max-w-4xl">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-white">{title}</h2>
        {description && <p className="text-lg text-neutral-300 max-w-3xl">{description}</p>}
      </div>
      {action && <div className="pt-2">{action}</div>}
    </motion.div>
  )
}
