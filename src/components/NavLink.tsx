// src/components/NavLink.tsx
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function NavLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      to={href}
      className={cn(
        "text-lg font-medium text-gray-300 hover:text-white transition",
        className
      )}
    >
      {children}
    </Link>
  )
}