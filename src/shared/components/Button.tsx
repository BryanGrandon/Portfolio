import type { LucideIcon } from 'lucide-preact'
import { cn } from '../lib/cn'

type Props = {
  title: string
  onClick: () => void
  className?: string
  icon?: LucideIcon
}

const Button = ({ title, onClick, className = '', icon: Icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 border border-divider py-2 px-4 rounded-full cursor-pointer',
        'shadow hover:scale-98 active:scale-102',
        className,
      )}
    >
      {title} {Icon && <Icon size={20} />}
    </button>
  )
}

export default Button
