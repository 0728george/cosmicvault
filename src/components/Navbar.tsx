import { NavLink } from './NavLink'
import { SearchBar } from './SearchBar'
import { ModeToggle } from './ModeToggle'
import { VaultIcon } from 'lucide-react'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-cosmic-void/50 backdrop-blur-xl bg-cosmic-black/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <VaultIcon className="h-8 w-8 text-cosmic-purple group-hover:text-cosmic-indigo transition" />
              <div className="absolute inset-0 blur-xl bg-cosmic-purple opacity-50 group-hover:opacity-80 transition" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-indigo bg-clip-text text-transparent">
              CosmicVault
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/library">Library</NavLink>
            <NavLink href="/vault">My Vault</NavLink>
            <NavLink href="/about">About</NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <SearchBar />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Navbar