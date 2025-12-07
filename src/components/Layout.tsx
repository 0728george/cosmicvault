import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Toaster } from '@/components/ui/sonner'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster position="bottom-right" richColors closeButton />
    </div>
  )
}

export default Layout