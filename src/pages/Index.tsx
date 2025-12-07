import { Button } from '@/components/ui/button'
import { Search, Sparkles, Orbit, Shield } from 'lucide-react'
import BookCard from '@/components/BookCard'
import { books } from '@/data/books'

export default function Index() {
  const featured = books.slice(0, 6)

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        <div className="container px-6 text-center relative z-10">
          <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            COSMIC VAULT
          </h1>
          <p className="text-2xl md:text-4xl text-gray-300 mb-8">The Eternal Archive of Human Knowledge</p>
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-6 top-5 h-6 w-6 text-purple-400" />
              <input
                type="text"
                placeholder="Search millions of books, papers, ancient texts..."
                className="w-full h-16 pl-16 pr-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-lg focus:outline-none focus:border-purple-400 transition"
              />
            </div>
          </div>
          <div className="flex gap-8 justify-center text-sm text-gray-400">
            <div className="flex items-center gap-2"><Shield className="h-5 w-5 text-emerald-400" /> Immutable</div>
            <div className="flex items-center gap-2"><Orbit className="h-5 w-5 text-purple-400" /> Decentralized</div>
            <div className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-yellow-400" /> AI Powered</div>
          </div>
        </div>
      </section>

      {/* FEATURED BOOKS */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured in the Vault
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featured.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-lg px-12 py-7">
              Explore Full Library →
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}