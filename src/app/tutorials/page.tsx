'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Home, Clock, Users, Star, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface Tutorial {
  id: number
  title: string
  description: string
  videoId: string
  duration: string
  level: 'Pemula' | 'Menengah' | 'Lanjutan'
  views: string
  rating: number
  category: string
}

const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "Teknik Dasar Tenis Meja untuk Pemula",
    description: "Pelajari teknik dasar tenis meja meliputi pegangan raket, stance, dan pukulan dasar yang harus dikuasai setiap pemula.",
    videoId: "GxAqmTLZLh0",
    duration: "15:30",
    level: "Pemula",
    views: "125K",
    rating: 4.8,
    category: "Teknik Dasar"
  },
  {
    id: 2,
    title: "Fundamental Teknik Dasar Tenis Meja",
    description: "Tutorial lengkap teknik dasar tenis meja yang wajib dikuasai pemula, mulai dari posisi badan hingga gerakan dasar.",
    videoId: "hqN_GcOnRDM",
    duration: "12:45",
    level: "Pemula",
    views: "89K",
    rating: 4.7,
    category: "Teknik Dasar"
  },
  {
    id: 3,
    title: "Pukulan Ofensif - Teknik Menyerang",
    description: "Pelajari berbagai teknik pukulan ofensif untuk mendominasi permainan dan mencetak poin dengan efektif.",
    videoId: "ljCICtg99ho",
    duration: "18:20",
    level: "Menengah",
    views: "67K",
    rating: 4.9,
    category: "Pukulan Ofensif"
  },
  {
    id: 4,
    title: "Teknik Servis - Variasi dan Strategi",
    description: "Master berbagai jenis servis tenis meja dengan teknik yang benar dan strategi penggunaannya dalam pertandingan.",
    videoId: "5ixXfDU6tlQ",
    duration: "14:15",
    level: "Menengah",
    views: "102K",
    rating: 4.6,
    category: "Servis"
  },
  {
    id: 5,
    title: "Teknik Defensive - Bertahan dengan Efektif",
    description: "Pelajari teknik defensive yang solid untuk bertahan dari serangan lawan dan mengubah momentum permainan.",
    videoId: "ECp531IhLBA",
    duration: "16:45",
    level: "Lanjutan",
    views: "54K",
    rating: 4.8,
    category: "Defensive"
  }
]

export default function TutorialsPage() {
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial>(tutorials[0])
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua')

  const categories = ['Semua', 'Teknik Dasar', 'Pukulan Ofensif', 'Servis', 'Defensive']

  const filteredTutorials = selectedCategory === 'Semua' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory)

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Pemula': return 'bg-table-green-100 text-table-green-700'
      case 'Menengah': return 'bg-ping-pong-100 text-ping-pong-700'
      case 'Lanjutan': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ping-pong-50 to-table-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-ping-pong-600 hover:text-ping-pong-700 font-medium"
              >
                <Home className="w-5 h-5" />
                Kembali ke Beranda
              </motion.button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Tutorial Teknik Tenis Meja</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Video Container */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedTutorial.videoId}?rel=0&modestbranding=1`}
                  title={selectedTutorial.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(selectedTutorial.level)}`}>
                    {selectedTutorial.level}
                  </span>
                  <span className="text-gray-500 text-sm">{selectedTutorial.category}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {selectedTutorial.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {selectedTutorial.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedTutorial.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {selectedTutorial.views} views
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    {selectedTutorial.rating}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-6"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4">Kategori</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-ping-pong-100 text-ping-pong-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Tutorial List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4">Video Lainnya</h3>
              <div className="space-y-4">
                {filteredTutorials.map((tutorial) => (
                  <motion.div
                    key={tutorial.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedTutorial(tutorial)}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedTutorial.id === tutorial.id
                        ? 'bg-ping-pong-50 border-2 border-ping-pong-200'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative w-16 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-800 text-sm leading-tight mb-1 line-clamp-2">
                          {tutorial.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>{tutorial.duration}</span>
                          <span>•</span>
                          <span className={`px-2 py-0.5 rounded-full ${getLevelColor(tutorial.level)}`}>
                            {tutorial.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-ping-pong-500 to-table-green-500 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ingin Latihan Lebih Lanjut?</h3>
          <p className="text-lg mb-6 opacity-90">
            Uji pemahaman Anda dengan quiz interaktif tentang teknik tenis meja
          </p>
          <Link href="/quiz">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-ping-pong-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Mulai Quiz <ChevronRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}