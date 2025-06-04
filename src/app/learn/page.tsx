'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Home, 
  BookOpen, 
  Clock, 
  ChevronRight,
  ChevronDown,
  CheckCircle,
  Circle
} from 'lucide-react'
import Link from 'next/link'

interface LessonTopic {
  id: number
  title: string
  duration: string
  content: string[]
  isCompleted: boolean
}

const lessons: LessonTopic[] = [
  {
    id: 1,
    title: "Pengertian Tenis Meja",
    duration: "5 menit",
    isCompleted: false,
    content: [
      "Tenis meja atau ping pong adalah olahraga raket yang dimainkan oleh dua atau empat pemain di atas meja yang dibagi oleh net.",
      "Permainan ini menggunakan bola kecil yang ringan dan raket yang dilapisi karet di kedua sisinya.",
      "Tujuan permainan adalah memukul bola melewati net agar lawan tidak dapat mengembalikannya dengan baik.",
      "Tenis meja merupakan salah satu olahraga paling populer di dunia dan menjadi cabang olahraga Olimpiade sejak 1988.",
      "Permainan ini dapat dimainkan untuk rekreasi maupun kompetisi profesional."
    ]
  },
  {
    id: 2,
    title: "Sejarah Singkat Tenis Meja",
    duration: "7 menit",
    isCompleted: false,
    content: [
      "Tenis meja pertama kali dimainkan di Inggris pada akhir abad ke-19 sebagai versi mini dari tenis lapangan.",
      "Awalnya dimainkan di meja makan dengan buku sebagai net dan tutup kotak cerutu sebagai raket.",
      "Nama 'Ping Pong' berasal dari suara yang dihasilkan bola saat memantul di meja dan raket.",
      "International Table Tennis Federation (ITTF) didirikan pada tahun 1926 untuk mengatur standar permainan.",
      "Tenis meja masuk ke Olimpiade pada tahun 1988 di Seoul, Korea Selatan.",
      "China mendominasi tenis meja dunia sejak tahun 1990-an hingga sekarang."
    ]
  },
  {
    id: 3,
    title: "Peralatan dalam Tenis Meja",
    duration: "8 menit",
    isCompleted: false,
    content: [
      "**Raket (Bat):** Terbuat dari kayu dengan lapisan karet di kedua sisi. Satu sisi merah, satu sisi hitam.",
      "**Bola:** Diameter 40mm, berat 2.7 gram, terbuat dari plastik atau seluloid, berwarna putih atau oranye.",
      "**Meja:** Panjang 2.74m, lebar 1.525m, tinggi 76cm dari lantai, permukaan berwarna gelap dengan garis putih.",
      "**Net:** Tinggi 15.25cm, lebar sesuai lebar meja, membagi meja menjadi dua bagian sama besar.",
      "**Sepatu:** Sepatu olahraga dengan sol karet untuk grip yang baik di lantai.",
      "**Pakaian:** Kaos dan celana olahraga yang nyaman, hindari warna putih agar bola terlihat jelas."
    ]
  },
  {
    id: 4,
    title: "Ukuran dan Spesifikasi Lapangan",
    duration: "6 menit",
    isCompleted: false,
    content: [
      "**Meja:** 2.74m x 1.525m x 0.76m (panjang x lebar x tinggi)",
      "**Area bermain:** Minimal 14m x 7m untuk turnamen internasional",
      "**Tinggi langit-langit:** Minimal 5m untuk kompetisi resmi",
      "**Pencahayaan:** 1000 lux merata di seluruh area permainan",
      "**Lantai:** Permukaan yang tidak licin, biasanya menggunakan vinyl atau kayu",
      "**Warna dinding:** Gelap untuk kontras yang baik dengan bola",
      "**Garis meja:** Lebar 2cm, warna putih, mengelilingi tepi meja"
    ]
  },
  {
    id: 5,
    title: "Teknik Dasar Tenis Meja",
    duration: "15 menit",
    isCompleted: false,
    content: [
      "**Pegangan Raket (Grip):**",
      "- Shakehand grip: Seperti berjabat tangan, paling umum digunakan",
      "- Penhold grip: Seperti memegang pulpen, populer di Asia",
      "",
      "**Stance (Posisi Berdiri):**",
      "- Kaki selebar bahu, sedikit ditekuk",
      "- Berat badan di ujung kaki untuk mobilitas",
      "- Badan sedikit condong ke depan",
      "",
      "**Pukulan Dasar:**",
      "- Forehand drive: Pukulan menyerang dari sisi kanan",
      "- Backhand drive: Pukulan menyerang dari sisi kiri", 
      "- Push: Pukulan defensive dengan backspin",
      "- Block: Pukulan defensive untuk menahan serangan"
    ]
  },
  {
    id: 6,
    title: "Peraturan Permainan",
    duration: "12 menit",
    isCompleted: false,
    content: [
      "**Servis:**",
      "- Bola harus dilempar minimal 16cm ke atas dari telapak tangan",
      "- Harus memantul di area servis sendiri dulu, lalu ke area lawan",
      "- Pergantian servis setiap 2 poin",
      "",
      "**Poin:**",
      "- Lawan tidak bisa mengembalikan bola",
      "- Bola memantul dua kali di sisi lawan",
      "- Bola keluar dari meja tanpa menyentuh sisi lawan",
      "- Bola menyentuh net saat rally (bukan servis)",
      "",
      "**Let (Mengulang):**",
      "- Bola menyentuh net saat servis tapi masuk ke area yang benar",
      "- Gangguan dari luar yang mempengaruhi permainan"
    ]
  },
  {
    id: 7,
    title: "Sistem Penilaian (Scoring System)",
    duration: "8 menit",
    isCompleted: false,
    content: [
      "**Format Set:**",
      "- Setiap set dimainkan hingga 11 poin",
      "- Harus menang dengan selisih minimal 2 poin",
      "- Jika 10-10, permainan dilanjutkan hingga ada selisih 2 poin",
      "",
      "**Format Pertandingan:**",
      "- Best of 5 sets (menang 3 set) untuk kompetisi standar",
      "- Best of 7 sets (menang 4 set) untuk Olimpiade/World Championship",
      "- Best of 3 sets (menang 2 set) untuk turnamen lokal",
      "",
      "**Pergantian Sisi:**",
      "- Setiap akhir set ganjil (set 1, 3, 5)",
      "- Saat salah satu pemain mencapai 5 poin di set penentu"
    ]
  },
  {
    id: 8,
    title: "Nomor Pertandingan",
    duration: "6 menit",
    isCompleted: false,
    content: [
      "**Tunggal Putra (Men's Singles):**",
      "- Pertandingan satu lawan satu antara pemain putra",
      "",
      "**Tunggal Putri (Women's Singles):**",
      "- Pertandingan satu lawan satu antara pemain putri",
      "",
      "**Ganda Putra (Men's Doubles):**",
      "- Pertandingan dua lawan dua antara pemain putra",
      "- Servis berselang-seling antar pemain",
      "",
      "**Ganda Putri (Women's Doubles):**",
      "- Pertandingan dua lawan dua antara pemain putri",
      "",
      "**Ganda Campuran (Mixed Doubles):**",
      "- Satu pemain putra dan satu pemain putri per tim"
    ]
  },
  {
    id: 9,
    title: "Strategi dan Taktik Dasar",
    duration: "10 menit",
    isCompleted: false,
    content: [
      "**Strategi Ofensif:**",
      "- Loop: Pukulan topspin yang kuat untuk menyerang",
      "- Smash: Pukulan keras untuk mengakhiri rally",
      "- Counter attack: Menyerang balik serangan lawan",
      "",
      "**Strategi Defensif:**",
      "- Chop: Pukulan backspin dari jauh meja",
      "- Block: Menahan serangan dengan kontrol",
      "- Lob: Bola tinggi untuk mengembalikan smash",
      "",
      "**Taktik Umum:**",
      "- Variasi servis untuk mengacaukan lawan",
      "- Mengontrol tempo permainan",
      "- Memanfaatkan kelemahan lawan",
      "- Penempatan bola yang akurat"
    ]
  },
  {
    id: 10,
    title: "Latihan dan Pengembangan",
    duration: "12 menit",
    isCompleted: false,
    content: [
      "**Latihan Teknik:**",
      "- Multi-ball training: Latihan dengan banyak bola",
      "- Shadow play: Latihan gerakan tanpa bola",
      "- Footwork drills: Latihan gerakan kaki",
      "",
      "**Latihan Fisik:**",
      "- Kelincahan dan koordinasi mata-tangan",
      "- Kekuatan kaki untuk mobilitas",
      "- Refleks dan reaksi cepat",
      "- Stamina untuk pertandingan panjang",
      "",
      "**Program Latihan:**",
      "- Pemanasan: 10-15 menit",
      "- Teknik dasar: 30-45 menit",
      "- Latihan permainan: 30-45 menit",
      "- Pendinginan: 10-15 menit"
    ]
  },
  {
    id: 11,
    title: "Keselamatan dan Etika Bermain",
    duration: "8 menit",
    isCompleted: false,
    content: [
      "**Keselamatan:**",
      "- Pastikan area bermain bebas dari benda berbahaya",
      "- Gunakan sepatu yang tepat untuk mencegah terpeleset",
      "- Pemanasan yang cukup sebelum bermain",
      "- Jaga hidrasi selama bermain",
      "",
      "**Etika Bermain:**",
      "- Sportivitas: Hormati lawan dan wasit",
      "- Fair play: Jujur dalam mengakui poin lawan",
      "- Konsentrasi: Jangan mengganggu lawan saat bermain",
      "- Respect: Salaman sebelum dan sesudah pertandingan",
      "",
      "**Aturan Perilaku:**",
      "- Tidak berteriak atau membuat keributan",
      "- Tidak memprotes keputusan wasit secara berlebihan"
    ]
  }
]

export default function LessonsPage() {
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null)
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set())

  const toggleLesson = (lessonId: number) => {
    setExpandedLesson(expandedLesson === lessonId ? null : lessonId)
  }

  const markAsCompleted = (lessonId: number) => {
    const newCompleted = new Set(completedLessons)
    if (newCompleted.has(lessonId)) {
      newCompleted.delete(lessonId)
    } else {
      newCompleted.add(lessonId)
    }
    setCompletedLessons(newCompleted)
  }

  const completionPercentage = Math.round((completedLessons.size / lessons.length) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-ping-pong-50 to-table-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
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
            <h1 className="text-2xl font-bold text-gray-800">Materi Tenis Meja</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Progress Pembelajaran</h2>
            <span className="text-2xl font-bold text-ping-pong-600">{completionPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div 
              className="bg-gradient-to-r from-ping-pong-500 to-table-green-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <p className="text-sm text-gray-600">
            {completedLessons.size} dari {lessons.length} materi telah selesai
          </p>
        </motion.div>

        {/* Lessons List */}
        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Lesson Header */}
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleLesson(lesson.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        markAsCompleted(lesson.id)
                      }}
                      className="flex-shrink-0"
                    >
                      {completedLessons.has(lesson.id) ? (
                        <CheckCircle className="w-6 h-6 text-table-green-500" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-400 hover:text-ping-pong-500 transition-colors" />
                      )}
                    </button>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {lesson.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {lesson.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          Materi Bacaan
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedLesson === lesson.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>
              </div>

              {/* Lesson Content */}
              {expandedLesson === lesson.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-100"
                >
                  <div className="p-6 bg-gray-50">
                    <div className="prose prose-sm max-w-none">
                      {lesson.content.map((paragraph, idx) => (
                        <div key={idx} className="mb-3">
                          {paragraph.startsWith('**') && paragraph.endsWith('**') && !paragraph.includes(':') ? (
                            <h4 className="font-semibold text-gray-800 mb-2">
                              {paragraph.slice(2, -2)}
                            </h4>
                          ) : paragraph.includes('**') && paragraph.includes(':') ? (
                            <div className="text-gray-700 leading-relaxed">
                              {paragraph.split(/(\*\*.*?\*\*)/).map((part, partIdx) => (
                                part.startsWith('**') && part.endsWith('**') ? (
                                  <span key={partIdx} className="font-semibold text-gray-800">
                                    {part.slice(2, -2)}
                                  </span>
                                ) : (
                                  <span key={partIdx}>{part}</span>
                                )
                              ))}
                            </div>
                          ) : paragraph.startsWith('- ') ? (
                            <li className="text-gray-700 ml-4 list-disc">
                              {paragraph.slice(2)}
                            </li>
                          ) : paragraph === '' ? (
                            <div className="h-2" />
                          ) : (
                            <p className="text-gray-700 leading-relaxed">
                              {paragraph}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {!completedLessons.has(lesson.id) && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => markAsCompleted(lesson.id)}
                        className="mt-4 bg-ping-pong-600 text-white px-4 py-2 rounded-lg hover:bg-ping-pong-700 transition-colors flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Tandai Selesai
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-ping-pong-500 to-table-green-500 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Siap untuk Praktik?</h3>
          <p className="text-lg mb-6 opacity-90">
            Setelah mempelajari teori, saatnya uji kemampuan dengan quiz dan tutorial video
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/quiz">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-ping-pong-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                Mulai Quiz <ChevronRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link href="/tutorials">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-ping-pong-600 transition-colors flex items-center gap-2"
              >
                Lihat Tutorial <ChevronRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}