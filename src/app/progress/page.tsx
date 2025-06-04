'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Home, 
  Trophy, 
  Star, 
  Target, 
  Calendar,
  BookOpen,
  Play,
  Brain,
  TrendingUp,
  CheckCircle,
  Medal,
  Zap,
  Flame
} from 'lucide-react'
import Link from 'next/link'

interface Achievement {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  isUnlocked: boolean
  unlockedAt?: string
  category: 'learning' | 'quiz' | 'streak' | 'milestone'
  points: number
}

interface ProgressStats {
  totalLessons: number
  completedLessons: number
  totalQuizzes: number
  completedQuizzes: number
  totalVideos: number
  watchedVideos: number
  currentStreak: number
  longestStreak: number
  totalPoints: number
  studyTimeHours: number
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Pemula Sejati",
    description: "Menyelesaikan materi dasar-dasar tenis meja",
    icon: <BookOpen className="w-6 h-6" />,
    isUnlocked: true,
    unlockedAt: "2024-01-15",
    category: 'learning',
    points: 100
  },
  {
    id: 2,
    title: "Quiz Master",
    description: "Menyelesaikan 5 quiz dengan skor 80% atau lebih",
    icon: <Brain className="w-6 h-6" />,
    isUnlocked: true,
    unlockedAt: "2024-01-18",
    category: 'quiz',
    points: 200
  },
  {
    id: 3,
    title: "Streak Fighter",
    description: "Belajar selama 7 hari berturut-turut",
    icon: <Flame className="w-6 h-6" />,
    isUnlocked: true,
    unlockedAt: "2024-01-20",
    category: 'streak',
    points: 150
  },
  {
    id: 4,
    title: "Video Enthusiast",
    description: "Menonton 10 video tutorial lengkap",
    icon: <Play className="w-6 h-6" />,
    isUnlocked: false,
    category: 'learning',
    points: 120
  },
  {
    id: 5,
    title: "Teknik Master",
    description: "Menyelesaikan semua materi teknik pukulan",
    icon: <Target className="w-6 h-6" />,
    isUnlocked: false,
    category: 'learning',
    points: 300
  },
  {
    id: 6,
    title: "Perfect Score",
    description: "Mendapat skor 100% pada quiz",
    icon: <Medal className="w-6 h-6" />,
    isUnlocked: false,
    category: 'quiz',
    points: 250
  },
  {
    id: 7,
    title: "Dedication Master",
    description: "Belajar selama 30 hari berturut-turut",
    icon: <Zap className="w-6 h-6" />,
    isUnlocked: false,
    category: 'streak',
    points: 500
  },
  {
    id: 8,
    title: "Champion",
    description: "Menyelesaikan semua jalur pembelajaran",
    icon: <Trophy className="w-6 h-6" />,
    isUnlocked: false,
    category: 'milestone',
    points: 1000
  }
]

const progressStats: ProgressStats = {
  totalLessons: 11,
  completedLessons: 6,
  totalQuizzes: 20,
  completedQuizzes: 12,
  totalVideos: 5,
  watchedVideos: 3,
  currentStreak: 5,
  longestStreak: 12,
  totalPoints: 850,
  studyTimeHours: 8.5
}

const recentActivities = [
  {
    id: 1,
    type: 'lesson',
    title: 'Menyelesaikan "Teknik Dasar Tenis Meja"',
    timestamp: '2 jam yang lalu',
    points: 50
  },
  {
    id: 2,
    type: 'quiz',
    title: 'Quiz Peraturan Permainan - Skor 85%',
    timestamp: '1 hari yang lalu',
    points: 85
  },
  {
    id: 3,
    type: 'video',
    title: 'Menonton "Teknik Servis"',
    timestamp: '2 hari yang lalu',
    points: 30
  },
  {
    id: 4,
    type: 'achievement',
    title: 'Membuka achievement "Streak Fighter"',
    timestamp: '3 hari yang lalu',
    points: 150
  }
]

export default function ProgressPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'Semua', count: achievements.length },
    { id: 'learning', label: 'Pembelajaran', count: achievements.filter(a => a.category === 'learning').length },
    { id: 'quiz', label: 'Quiz', count: achievements.filter(a => a.category === 'quiz').length },
    { id: 'streak', label: 'Streak', count: achievements.filter(a => a.category === 'streak').length },
    { id: 'milestone', label: 'Milestone', count: achievements.filter(a => a.category === 'milestone').length }
  ]

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory)

  const unlockedAchievements = achievements.filter(a => a.isUnlocked).length
  const totalAchievements = achievements.length

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'lesson': return <BookOpen className="w-4 h-4" />
      case 'quiz': return <Brain className="w-4 h-4" />
      case 'video': return <Play className="w-4 h-4" />
      case 'achievement': return <Trophy className="w-4 h-4" />
      default: return <Star className="w-4 h-4" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'lesson': return 'bg-table-green-100 text-table-green-700'
      case 'quiz': return 'bg-ping-pong-100 text-ping-pong-700'
      case 'video': return 'bg-red-100 text-red-700'
      case 'achievement': return 'bg-yellow-100 text-yellow-700'
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
            <h1 className="text-2xl font-bold text-gray-800">Sistem Progress</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Overview Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-ping-pong-600 mb-2">{progressStats.totalPoints}</div>
            <div className="text-sm text-gray-600">Total Poin</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-table-green-600 mb-2">{progressStats.currentStreak}</div>
            <div className="text-sm text-gray-600">Streak Hari</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">{unlockedAchievements}</div>
            <div className="text-sm text-gray-600">Achievement</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{progressStats.studyTimeHours}h</div>
            <div className="text-sm text-gray-600">Waktu Belajar</div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Learning Progress */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-ping-pong-600" />
                Progress Pembelajaran
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Materi Bacaan</span>
                    <span className="font-semibold text-gray-800">
                      {progressStats.completedLessons}/{progressStats.totalLessons}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-table-green-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(progressStats.completedLessons / progressStats.totalLessons) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Quiz Selesai</span>
                    <span className="font-semibold text-gray-800">
                      {progressStats.completedQuizzes}/{progressStats.totalQuizzes}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-ping-pong-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(progressStats.completedQuizzes / progressStats.totalQuizzes) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Video Ditonton</span>
                    <span className="font-semibold text-gray-800">
                      {progressStats.watchedVideos}/{progressStats.totalVideos}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-red-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(progressStats.watchedVideos / progressStats.totalVideos) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  Achievement ({unlockedAchievements}/{totalAchievements})
                </h3>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-ping-pong-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredAchievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      achievement.isUnlocked
                        ? 'bg-yellow-50 border-yellow-200'
                        : 'bg-gray-50 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        achievement.isUnlocked ? 'bg-yellow-200 text-yellow-700' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {achievement.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            +{achievement.points} poin
                          </span>
                          {achievement.isUnlocked && (
                            <CheckCircle className="w-4 h-4 text-table-green-500" />
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Streak Counter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Flame className="w-6 h-6" />
                <h3 className="text-lg font-bold">Streak Belajar</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{progressStats.currentStreak}</div>
                <div className="text-sm opacity-90 mb-3">Hari berturut-turut</div>
                <div className="text-xs opacity-75">
                  Rekor terbaik: {progressStats.longestStreak} hari
                </div>
              </div>
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-ping-pong-600" />
                Aktivitas Terbaru
              </h3>
              <div className="space-y-3">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`p-1 rounded-full ${getActivityColor(activity.type)}`}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 leading-tight">
                        {activity.title}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">{activity.timestamp}</span>
                        <span className="text-xs font-semibold text-ping-pong-600">
                          +{activity.points}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Next Goals */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-ping-pong-500 to-table-green-500 rounded-2xl shadow-lg p-6 text-white"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Target Selanjutnya
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Selesaikan 5 materi lagi</span>
                  <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                    +200 poin
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Streak 10 hari</span>
                  <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                    +300 poin
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Skor quiz 100%</span>
                  <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                    +250 poin
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}