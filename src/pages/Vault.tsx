import { Sparkles } from 'lucide-react'

export default function Vault() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Sparkles className="h-24 w-24 mx-auto text-purple-400 mb-8 animate-pulse" />
        <h1 className="text-6xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          My Vault
        </h1>
        <p className="text-xl text-gray-400 mt-6">Your personal cosmic collection – coming in the next drop</p>
      </div>
    </div>
  )
}