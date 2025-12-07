import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { SearchBar } from '@/components/SearchBar';
import BookCard from '@/components/BookCard'
import { ViewToggle } from '@/components/ViewToggle';
import { books, categories, sortOptions } from '@/data/books';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

const Library = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('title-asc');
  const [selectedFormat, setSelectedFormat] = useState('all');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSearchParams({ search: query, category: selectedCategory });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchParams({ search: searchQuery, category });
  };

  const filteredAndSortedBooks = useMemo(() => {
    let result = [...books];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(q) ||
          book.author.toLowerCase().includes(q) ||
          book.description?.toLowerCase().includes(q)
      );
    }

    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter((book) => book.category === selectedCategory);
    }

    if (selectedFormat && selectedFormat !== 'all') {
      result = result.filter((book) => book.format === selectedFormat);
    }

    const [field, order] = sortBy.split('-');
    result.sort((a, b) => {
      let valA, valB;
      if (field === 'title') { valA = a.title; valB = b.title; }
      else if (field === 'author') { valA = a.author; valB = b.author; }
      else if (field === 'year') { valA = a.year; valB = b.year; }
      else { valA = a.title; valB = b.title; }

      const comparison = valA > valB ? 1 : valA < valB ? -1 : 0;
      return order === 'desc' ? -comparison : comparison;
    });

    return result;
  }, [searchQuery, selectedCategory, selectedFormat, sortBy]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-screen-2xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Cosmic Library
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            {books.length.toLocaleString()}+ eternal books • fully open access
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col gap-6 mb-10">
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search titles, authors, keywords..."
            className="max-w-2xl mx-auto"
          />

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-48 bg-white/5 backdrop-blur border-white/10">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.icon} {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedFormat} onValueChange={setSelectedFormat}>
              <SelectTrigger className="w-40 bg-white/5 backdrop-blur border-white/10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Formats</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="epub">EPUB</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-44 bg-white/5 backdrop-blur border-white/10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <ViewToggle view={view} onViewChange={setView} className="ml-auto" />
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-center text-gray-400 mb-8">
          Showing <span className="text-purple-300 font-bold">{filteredAndSortedBooks.length}</span> results
        </div>

        {/* BOOKS GRID – THIS IS THE KEY FIX */}
        {filteredAndSortedBooks.length > 0 ? (
          <div
            className={cn(
              "grid gap-6 auto-rows-min",
              view === 'grid'
                ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
                : "grid-cols-1"
            )}
          >
            {filteredAndSortedBooks.map((book) => (
              <BookCard key={book.id} book={book} view={view} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32">
            <p className="text-2xl text-gray-500">No books found</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedFormat('all');
              }}
              className="mt-4 text-purple-400 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Library;