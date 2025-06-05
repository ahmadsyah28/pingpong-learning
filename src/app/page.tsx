"use client";

import { useState, useEffect } from "react";
import { Play, BookOpen, Brain, ChevronRight, Menu, X, Home, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 to-green-500 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-spin">
            🏓
          </div>
          <p className="text-white text-xl font-medium">Memuat halaman...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏓</span>
              <span className="font-bold text-sm sm:text-lg text-gray-800">
                <span className="hidden sm:inline">Tenis Meja Learning</span>
                <span className="sm:hidden">TM Learning</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="text-orange-600 font-medium px-3 py-2 rounded-lg bg-orange-100 flex items-center space-x-1"
              >
                <Home className="w-4 h-4" />
                <span>Beranda</span>
              </Link>
              <Link
                href="/students"
                className="text-gray-600 hover:text-orange-600 transition-colors px-3 py-2 rounded-lg flex items-center space-x-1"
              >
                <Users className="w-4 h-4" />
                <span>Profil Mahasiswa</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-orange-600 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
              <div className="space-y-2">
                <Link
                  href="/"
                  className="flex items-center space-x-3 px-4 py-3 text-orange-600 bg-orange-100 font-medium rounded-lg mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Home className="w-5 h-5" />
                  <span>Beranda</span>
                </Link>
                <Link
                  href="/students"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors rounded-lg mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Profil Mahasiswa</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <div className="text-6xl sm:text-8xl mb-6 animate-bounce">
            🏓
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Belajar Tenis Meja
            <br />
            <span className="text-yellow-300">Lebih Mudah & Terarah</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Materi lengkap dan terstruktur untuk meningkatkan kemampuan tenis
            meja Anda, dari teknik dasar{" "}
            <span className="text-yellow-300">🏓</span> hingga strategi
            permainan tingkat lanjut <span className="text-yellow-300">🎯</span>
          </p>
          <Link href="/learn">
            <button className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Mulai Belajar Sekarang
            </button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-gray-800"
          >
            Fitur Pembelajaran Utama
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Brain className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Latihan Soal Pilihan Ganda",
                description:
                  "Uji pemahaman Anda dengan 20 soal interaktif yang dirancang khusus untuk semua level pembelajaran",
                color: "from-orange-500 to-orange-600",
                link: "/quiz",
              },
              {
                icon: <Play className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Tutorial Teknik Tenis Meja",
                description:
                  "Video tutorial HD dengan penjelasan detail teknik dasar, servis, dan strategi permainan",
                color: "from-red-500 to-red-600",
                link: "/tutorials",
              },
              {
                icon: <BookOpen className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Materi Terstruktur",
                description:
                  "11 materi pembelajaran lengkap dari dasar hingga advanced dengan penjelasan yang mudah dipahami",
                color: "from-green-500 to-green-600",
                link: "/learn",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <Link href={feature.link} className="block h-full">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:rotate-12 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                    Mulai Sekarang <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources & References Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            Sumber & Referensi Terpercaya
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "ITTF Official",
                description:
                  "International Table Tennis Federation - Aturan resmi dan standar internasional",
                icon: "🏆",
              },
              {
                title: "PTMSI",
                description:
                  "Persatuan Tenis Meja Seluruh Indonesia - Standar nasional dan peraturan lokal",
                icon: "🇮🇩",
              },
              {
                title: "YouTube Experts",
                description:
                  "Channel resmi pelatih tenis meja profesional dan atlet berpengalaman",
                icon: "🎥",
              },
              {
                title: "Literatur Olahraga",
                description:
                  "Buku dan jurnal ilmiah tentang teknik dan strategi tenis meja",
                icon: "📚",
              },
            ].map((source, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{source.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center text-yellow-300">
                  {source.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed text-center">
                  {source.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Semua materi dalam platform ini telah dikurasi berdasarkan standar
              internasional ITTF dan disesuaikan dengan kurikulum olahraga
              Indonesia untuk memastikan akurasi dan relevansi.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-green-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Jalur Pembelajaran Terstruktur
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pelajari Teori</h3>
              <p>Mulai dengan 11 materi dasar tenis meja</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tonton Tutorial</h3>
              <p>Praktik dengan video teknik dan strategi</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Uji Kemampuan</h3>
              <p>Evaluasi dengan 20 soal pilihan ganda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl">
          <div className="text-3xl sm:text-4xl mb-4">🏓</div>
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Tenis Meja Learning
          </h3>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Platform pembelajaran tenis meja terlengkap di Indonesia
          </p>
          <div className="flex justify-center space-x-4 sm:space-x-6 text-sm sm:text-base">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="/students"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Profil Mahasiswa
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-gray-500 text-xs sm:text-sm">
            <p className="mb-2">© 2025 Pembelajaran Tenis Meja. Dibuat dengan ❤️ untuk para pecinta tenis meja.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}