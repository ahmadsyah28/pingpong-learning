'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, RotateCcw, Trophy, Home } from 'lucide-react'
import Link from 'next/link'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "Berapa ukuran standar meja tenis meja menurut ITTF?",
    options: [
      "2.74m x 1.525m x 0.76m",
      "2.5m x 1.5m x 0.8m", 
      "3m x 1.6m x 0.75m",
      "2.8m x 1.4m x 0.78m"
    ],
    correct: 0,
    explanation: "Ukuran standar meja tenis meja adalah 2.74m (panjang) x 1.525m (lebar) x 0.76m (tinggi) sesuai standar ITTF."
  },
  {
    id: 2,
    question: "Apa yang dimaksud dengan 'serve' dalam tenis meja?",
    options: [
      "Memukul bola dengan keras",
      "Mengawali permainan dengan melempar bola",
      "Mengembalikan bola lawan",
      "Memblok serangan lawan"
    ],
    correct: 1,
    explanation: "Serve adalah cara mengawali permainan dengan melempar bola minimal 16cm ke atas dan memukulnya sehingga memantul di meja sendiri dulu, lalu ke meja lawan."
  },
  {
    id: 3,
    question: "Berapa poin maksimal dalam satu set tenis meja?",
    options: [
      "15 poin",
      "21 poin",
      "11 poin",
      "25 poin"
    ],
    correct: 2,
    explanation: "Dalam aturan modern, satu set tenis meja dimenangkan dengan 11 poin dengan selisih minimal 2 poin."
  },
  {
    id: 4,
    question: "Apa teknik dasar pegangan raket yang paling umum?",
    options: [
      "Penhold grip",
      "Shakehand grip",
      "Backhand grip",
      "Power grip"
    ],
    correct: 1,
    explanation: "Shakehand grip adalah teknik pegangan yang paling umum, dimana raket dipegang seperti berjabat tangan."
  },
  {
    id: 5,
    question: "Kapan terjadi 'let' dalam permainan tenis meja?",
    options: [
      "Ketika bola keluar meja",
      "Ketika bola menyentuh net saat serve tapi masuk",
      "Ketika pemain melakukan kesalahan",
      "Ketika permainan berakhir"
    ],
    correct: 1,
    explanation: "Let terjadi ketika bola menyentuh net saat serve tetapi tetap masuk ke area yang benar, maka serve diulang."
  },
  {
    id: 6,
    question: "Berapa tinggi net dalam permainan tenis meja?",
    options: [
      "15.25 cm",
      "16.5 cm",
      "14 cm",
      "17 cm"
    ],
    correct: 0,
    explanation: "Tinggi net standar dalam tenis meja adalah 15.25 cm dari permukaan meja."
  },
  {
    id: 7,
    question: "Apa yang dimaksud dengan 'forehand drive' dalam tenis meja?",
    options: [
      "Pukulan defensive dari sisi kiri",
      "Pukulan offensive dari sisi kanan",
      "Servis dari depan",
      "Pukulan blok"
    ],
    correct: 1,
    explanation: "Forehand drive adalah pukulan offensive yang dilakukan dari sisi kanan tubuh (untuk pemain kidal sisi kiri) dengan gerakan ke depan."
  },
  {
    id: 8,
    question: "Berapa berat maksimal raket tenis meja menurut aturan ITTF?",
    options: [
      "Ada batas maksimal 200 gram",
      "Tidak ada batas maksimal",
      "Maksimal 150 gram",
      "Maksimal 250 gram"
    ],
    correct: 1,
    explanation: "ITTF tidak menetapkan batas berat maksimal untuk raket tenis meja, hanya ada aturan tentang ketebalan dan komposisi material."
  },
  {
    id: 9,
    question: "Apa fungsi dari 'spin' dalam tenis meja?",
    options: [
      "Membuat bola bergerak lebih cepat",
      "Mengubah arah dan kecepatan pantulan bola",
      "Mengurangi kecepatan bola",
      "Membuat raket lebih ringan"
    ],
    correct: 1,
    explanation: "Spin atau putaran bola berfungsi untuk mengubah arah dan kecepatan pantulan bola saat mengenai meja atau raket lawan."
  },
  {
    id: 10,
    question: "Berapa kali maksimal pergantian serve dalam satu game?",
    options: [
      "Setiap 3 poin",
      "Setiap 2 poin",
      "Setiap 5 poin",
      "Setiap 1 poin saat deuce"
    ],
    correct: 1,
    explanation: "Dalam tenis meja modern, pergantian serve terjadi setiap 2 poin, kecuali saat deuce (10-10) dimana pergantian terjadi setiap 1 poin."
  },
  {
    id: 11,
    question: "Apa yang dimaksud dengan 'backhand' dalam tenis meja?",
    options: [
      "Pukulan dari sisi kiri tubuh (untuk pemain kanan)",
      "Pukulan dari belakang meja",
      "Pukulan defensive",
      "Teknik servis khusus"
    ],
    correct: 0,
    explanation: "Backhand adalah pukulan yang dilakukan dari sisi kiri tubuh untuk pemain right-handed (atau sisi kanan untuk pemain left-handed)."
  },
  {
    id: 12,
    question: "Berapa diameter bola tenis meja standar?",
    options: [
      "38 mm",
      "40 mm",
      "42 mm",
      "36 mm"
    ],
    correct: 1,
    explanation: "Diameter bola tenis meja standar adalah 40 mm dengan berat 2.7 gram."
  },
  {
    id: 13,
    question: "Apa yang dimaksud dengan 'loop' dalam tenis meja?",
    options: [
      "Pukulan defensive",
      "Pukulan topspin yang kuat",
      "Teknik servis",
      "Gerakan kaki"
    ],
    correct: 1,
    explanation: "Loop adalah pukulan topspin yang kuat dan agresif, biasanya digunakan untuk menyerang bola yang memiliki backspin."
  },
  {
    id: 14,
    question: "Warna apa saja yang diperbolehkan untuk permukaan raket?",
    options: [
      "Hitam dan putih",
      "Merah dan hitam",
      "Biru dan merah",
      "Bebas asal kontras"
    ],
    correct: 1,
    explanation: "Menurut aturan ITTF, kedua sisi raket harus berwarna merah dan hitam untuk memudahkan wasit dan lawan melihat perbedaan karakteristik pukulan."
  },
  {
    id: 15,
    question: "Apa yang dimaksud dengan 'smash' dalam tenis meja?",
    options: [
      "Pukulan servis yang keras",
      "Pukulan mematikan dari atas dengan kecepatan tinggi",
      "Pukulan defensive",
      "Teknik blocking"
    ],
    correct: 1,
    explanation: "Smash adalah pukulan menyerang yang dilakukan dari atas dengan kecepatan dan kekuatan penuh, biasanya untuk mengakhiri rally."
  },
  {
    id: 16,
    question: "Berapa set minimal yang harus dimenangkan untuk memenangkan pertandingan standar?",
    options: [
      "2 dari 3 set",
      "3 dari 5 set",
      "4 dari 7 set",
      "Tergantung turnamen"
    ],
    correct: 3,
    explanation: "Format pertandingan bervariasi: 3 dari 5 set (kompetisi standar), 4 dari 7 set (Olimpiade/World Championship), atau 2 dari 3 set (kompetisi lokal)."
  },
  {
    id: 17,
    question: "Apa yang dimaksud dengan 'push' dalam tenis meja?",
    options: [
      "Pukulan menyerang",
      "Pukulan backspin pendek",
      "Teknik servis",
      "Gerakan blocking"
    ],
    correct: 1,
    explanation: "Push adalah pukulan backspin yang pendek dan rendah, biasanya digunakan untuk mengembalikan bola pendek atau sebagai pukulan defensive."
  },
  {
    id: 18,
    question: "Apa fungsi dari 'footwork' dalam tenis meja?",
    options: [
      "Hiasan gerakan",
      "Memposisikan tubuh untuk pukulan optimal",
      "Mengganggu lawan",
      "Mengurangi kelelahan"
    ],
    correct: 1,
    explanation: "Footwork atau gerakan kaki sangat penting untuk memposisikan tubuh dengan benar sehingga dapat melakukan pukulan yang optimal dan menjaga keseimbangan."
  },
  {
    id: 19,
    question: "Apa yang dimaksud dengan 'edge ball' dalam tenis meja?",
    options: [
      "Bola yang menyentuh pinggir meja dan dianggap masuk",
      "Bola yang keluar meja",
      "Bola yang menyentuh net",
      "Bola servis yang salah"
    ],
    correct: 0,
    explanation: "Edge ball adalah bola yang menyentuh pinggir atau tepi meja dan tetap dianggap sah/masuk dalam permainan."
  },
  {
    id: 20,
    question: "Apa yang harus dilakukan pemain saat bola menyentuh net kemudian masuk ke area yang benar saat rally (bukan servis)?",
    options: [
      "Ulangi pukulan",
      "Poin untuk lawan",
      "Lanjutkan permainan",
      "Tanyakan wasit"
    ],
    correct: 2,
    explanation: "Jika bola menyentuh net saat rally (bukan servis) kemudian masuk ke area yang benar, permainan tetap dilanjutkan. Aturan 'let' hanya berlaku untuk servis."
  }
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    setShowResult(true)
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        setQuizCompleted(true)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
    setQuizCompleted(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return { text: "Luar Biasa! 🏆", color: "text-yellow-500" }
    if (percentage >= 60) return { text: "Bagus Sekali! 🎯", color: "text-table-green-500" }
    if (percentage >= 40) return { text: "Cukup Baik! 👍", color: "text-ping-pong-500" }
    return { text: "Perlu Belajar Lagi! 📚", color: "text-red-500" }
  }

  if (quizCompleted) {
    const scoreMessage = getScoreMessage()
    return (
      <div className="min-h-screen bg-gradient-to-br from-ping-pong-50 to-table-green-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full text-center"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl mb-6"
          >
            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-yellow-500" />
          </motion.div>
          
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Quiz Selesai!</h1>
          <div className={`text-xl sm:text-2xl font-bold mb-2 ${scoreMessage.color}`}>
            {scoreMessage.text}
          </div>
          <div className="text-lg sm:text-xl mb-6 text-gray-700">
            Skor Anda: <span className="font-bold text-ping-pong-600">{score}/{questions.length}</span>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetQuiz}
              className="w-full bg-ping-pong-600 text-white py-3 rounded-lg font-semibold hover:bg-ping-pong-700 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
              Coba Lagi
            </motion.button>
            
            <Link href="/" className="block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                Kembali ke Beranda
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ping-pong-50 to-table-green-50 p-4 sm:p-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
        <div className="flex items-center justify-between mb-4">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-ping-pong-600 hover:text-ping-pong-700 font-medium text-sm sm:text-base"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5 text-ping-pong-600" />
              Kembali
            </motion.button>
          </Link>
          <div className="text-xs sm:text-sm text-gray-600">
            Pertanyaan {currentQuestion + 1} dari {questions.length}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mb-4 sm:mb-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-ping-pong-500 to-table-green-500 h-2 sm:h-3 rounded-full"
          />
        </div>
      </div>

      {/* Quiz Content */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8"
        >
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-3 sm:space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-3 sm:p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswer === index
                      ? showResult
                        ? index === questions[currentQuestion].correct
                          ? 'border-table-green-500 bg-table-green-50 text-table-green-700'
                          : 'border-red-500 bg-red-50 text-red-700'
                        : 'border-ping-pong-500 bg-ping-pong-50 text-ping-pong-700'
                      : showResult && index === questions[currentQuestion].correct
                        ? 'border-table-green-500 bg-table-green-50 text-table-green-700'
                        : 'border-ping-pong-200 hover:border-ping-pong-400 hover:bg-ping-pong-50 text-gray-700'
                  } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm sm:text-base pr-4">{option}</span>
                    {showResult && (
                      <div className="flex-shrink-0">
                        {index === questions[currentQuestion].correct && (
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-table-green-500" />
                        )}
                        {selectedAnswer === index && index !== questions[currentQuestion].correct && (
                          <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                        )}
                      </div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 sm:mb-6 p-3 sm:p-4 bg-ping-pong-50 rounded-lg border border-ping-pong-200"
            >
              <h3 className="font-semibold text-ping-pong-800 mb-2 text-sm sm:text-base">Penjelasan:</h3>
              <p className="text-ping-pong-700 text-sm sm:text-base leading-relaxed">{questions[currentQuestion].explanation}</p>
            </motion.div>
          )}

          <div className="flex justify-between items-center">
            <div className="text-xs sm:text-sm text-gray-600">
              Skor saat ini: {score}/{currentQuestion + (showResult ? 1 : 0)}
            </div>
            
            {!showResult && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${
                  selectedAnswer !== null
                    ? 'bg-ping-pong-600 text-white hover:bg-ping-pong-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {currentQuestion === questions.length - 1 ? 'Selesai' : 'Lanjut'}
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}