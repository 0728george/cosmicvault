// src/components/BookCard.tsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

interface BookCardProps {
  book: any
  view?: 'grid' | 'list'
}

export default function BookCard({ book, view = 'grid' }: BookCardProps) {
  // Grid view = compact card (default)
  if (view === 'list') {
    return (
      <Link to={`/book/${book.id}`}>
        <div className="flex gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-purple-500/50 transition">
          <img
            src={book.cover || '/placeholder.svg'}
            alt={book.title}
            className="w-24 h-36 object-cover rounded-lg flex-shrink-0"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white hover:text-purple-300 transition">
              {book.title}
            </h3>
            <p className="text-gray-400 mt-1">{book.author}</p>
            <p className="text-sm text-gray-500 mt-3 line-clamp-2">{book.description}</p>
            <div className="flex items-center gap-2 mt-4 text-xs text-purple-300">
              <BookOpen className="h-4 w-4" />
              <span>{book.pages || '—'} pages • {book.format || 'PDF'}</span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  // GRID VIEW — perfect size, never too big
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="group"
    >
      <Link to={`/book/${book.id}`}>
        <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          {/* Fixed max size — this is the magic line */}
          <div className="aspect-[3/4] w-full max-w-[220px] mx-auto">
            <img
              src={book.cover || '/placeholder.svg'}
              alt={book.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
          </div>

          <div className="p-5">
            <h3 className="font-bold text-white line-clamp-2 leading-tight group-hover:text-purple-300 transition">
              {book.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{book.author}</p>
            <div className="flex items-center gap-2 mt-4 text-xs text-purple-300">
              <BookOpen className="h-3.5 w-3.5" />
              <span>{book.pages || '—'} pages</span>
            </div>
          </div>

          {/* Glow on hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700 -z-10" />
        </div>
      </Link>
    </motion.div>
  )
}