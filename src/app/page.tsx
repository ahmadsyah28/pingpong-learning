"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, BookOpen, Brain, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-ping-pong-400 to-table-green-500 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-6xl mb-4"
          >
            🏓
          </motion.div>
          <p className="text-white text-xl font-medium">Memuat halaman...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-ping-pong-600 to-table-green-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl sm:text-8xl mb-6"
          >
            🏓
          </motion.div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display mb-6 leading-tight">
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors shadow-lg"
            >
              Mulai Belajar Sekarang
            </motion.button>
          </Link>
        </motion.div>
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
                color: "from-ping-pong-500 to-ping-pong-600",
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
                color: "from-table-green-500 to-table-green-600",
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
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
          >
            Sumber & Referensi Terpercaya
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "ITTF Official",
                description:
                  "International Table Tennis Federation - Aturan resmi dan standar internasional",
                icon: "🏆",
                link: "https://www.ittf.com",
              },
              {
                title: "PTMSI",
                description:
                  "Persatuan Tenis Meja Seluruh Indonesia - Standar nasional dan peraturan lokal",
                icon: "🇮🇩",
                link: "#",
              },
              {
                title: "YouTube Experts",
                description:
                  "Channel resmi pelatih tenis meja profesional dan atlet berpengalaman",
                icon: "🎥",
                link: "#",
              },
              {
                title: "Literatur Olahraga",
                description:
                  "Buku dan jurnal ilmiah tentang teknik dan strategi tenis meja",
                icon: "📚",
                link: "#",
              },
            ].map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{source.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center text-yellow-300">
                  {source.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed text-center">
                  {source.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Semua materi dalam platform ini telah dikurasi berdasarkan standar
              internasional ITTF dan disesuaikan dengan kurikulum olahraga
              Indonesia untuk memastikan akurasi dan relevansi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-ping-pong-500 to-table-green-500 text-white">
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
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Tentang
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Kontak
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-gray-500 text-xs sm:text-sm">
            © 2025 Pembelajaran Tenis Meja . Dibuat dengan ❤️ untuk para pecinta
            tenis meja.
          </div>
        </div>
      </footer>
    </div>
  );
}
