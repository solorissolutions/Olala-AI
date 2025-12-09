import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface GradientButtonProps {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'solid' | 'outline'
  className?: string
  icon?: ReactNode
}

export default function GradientButton({
  children,
  to,
  href,
  variant = 'solid',
  className = '',
  icon,
}: GradientButtonProps) {
  const sharedClasses =
    'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold transition-colors duration-200'

  const solidClasses =
    'bg-brand-gradient text-white shadow-glow hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500'

  const outlineClasses =
    'border border-white/20 text-white hover:border-white/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500'

  const content = (
    <motion.span
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${sharedClasses} ${variant === 'solid' ? solidClasses : outlineClasses} ${className}`}
    >
      {children}
      {icon}
    </motion.span>
  )

  if (to) {
    return (
      <Link to={to} aria-label={typeof children === 'string' ? children : undefined}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" aria-label={typeof children === 'string' ? children : undefined}>
        {content}
      </a>
    )
  }

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${sharedClasses} ${variant === 'solid' ? solidClasses : outlineClasses} ${className}`}
    >
      {children}
      {icon}
    </motion.button>
  )
}
