

import logo from './logo.svg'

interface LogoProps {
  size?: number
  wordmark?: boolean
  className?: string
}

export default function Logo({ size = 56, wordmark = false, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="relative rounded-2xl overflow-hidden bg-black/60 border border-white/5 glow"
        style={{ width: size, height: size }}
      >
        <img src={logo} alt="Olala AI logo" className="w-full h-full object-cover" />
      </div>
      {wordmark && (
        <span className="font-display text-xl md:text-2xl font-semibold bg-brand-gradient bg-clip-text text-transparent leading-none">
          OLALA AI
        </span>
      )}
    </div>
  )
}
