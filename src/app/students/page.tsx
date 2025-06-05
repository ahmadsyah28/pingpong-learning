"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Home, Users } from "lucide-react";

export default function StudentsPage() {
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const students = [
    {
      name: "Reihan Fiqolbi Nuron Saragih",
      role: "Mahasiswa Pendidikan Jasmani Kesehatan & Rekreasi",
      avatar: "👨‍🎓",
      color: "from-blue-500 to-blue-600",
      nim: "6222311001",
      photo: "/images/foto-reihan.jpg"
    },
    {
      name: "Fifi Ivana Greace Sembiring",
      role: "Mahasiswa Pendidikan Jasmani Kesehatan & Rekreasi",
      avatar: "👩‍🎓",
      color: "from-pink-500 to-purple-600",
      nim: "6223311030",
      photo: "/images/foto-fifi.jpg"
    },
    {
      name: "Vina PRD",
      role: "Mahasiswa Pendidikan Jasmani Kesehatan & Rekreasi",
      avatar: "👩‍🎓",
      color: "from-green-500 to-teal-600",
      nim: "6223311010",
      photo: "/images/foto-vina.jpg"
    }
  ];

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
                className="text-gray-600 hover:text-orange-600 transition-colors px-3 py-2 rounded-lg flex items-center space-x-1"
              >
                <Home className="w-4 h-4" />
                <span>Beranda</span>
              </Link>
              <Link
                href="/students"
                className="text-orange-600 font-medium px-3 py-2 rounded-lg bg-orange-100 flex items-center space-x-1"
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
                  className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors rounded-lg mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Home className="w-5 h-5" />
                  <span className="font-medium">Beranda</span>
                </Link>
                <Link
                  href="/students"
                  className="flex items-center space-x-3 px-4 py-3 text-orange-600 bg-orange-100 font-medium rounded-lg mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Users className="w-5 h-5" />
                  <span>Profil Mahasiswa</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-5xl mb-6">🎓</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Profil Mahasiswa</h1>
          <p className="text-xl max-w-3xl mx-auto mb-6">
            Kelompok mahasiswa Pendidikan Jasmani Kesehatan & Rekreasi yang mengembangkan platform pembelajaran tenis meja
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 max-w-lg mx-auto">
            <p className="text-lg font-semibold">Universitas Negeri Medan</p>
            <p className="text-sm">Program Studi: Pendidikan Jasmani Kesehatan & Rekreasi</p>
            <p className="text-sm">Mata Kuliah: Permainan Tenis Meja</p>
          </div>
        </div>
      </section>

      {/* Students Profiles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {students.map((student, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
                {/* Foto Mahasiswa */}
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg relative">
                  {!imageErrors[index] ? (
                    <Image
                      src={student.photo}
                      alt={student.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      onError={() => {
                        setImageErrors(prev => ({ ...prev, [index]: true }));
                      }}
                      priority={index < 3}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-r ${student.color} flex items-center justify-center text-5xl text-white`}>
                      {student.avatar}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                  {student.name}
                </h3>
                
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-600 mb-2">NIM: {student.nim}</p>
                  <p className={`text-sm font-medium bg-gradient-to-r ${student.color} bg-clip-text text-transparent`}>
                    {student.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Information */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Informasi Kelompok</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-yellow-300 mb-2">3</div>
              <p className="text-gray-300">Anggota Tim</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-yellow-300 mb-2">11</div>
              <p className="text-gray-300">Materi Disusun</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-yellow-300 mb-2">20</div>
              <p className="text-gray-300">Soal Evaluasi</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-yellow-300 mb-2">2025</div>
              <p className="text-gray-300">Tahun Pembuatan</p>
            </div>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Tentang Proyek</h3>
            <p className="text-gray-300 leading-relaxed text-center">
              Platform pembelajaran tenis meja ini merupakan tugas kelompok mata kuliah Permainan Tenis Meja 
              Program Studi Pendidikan Jasmani Kesehatan & Rekreasi, Universitas Negeri Medan. 
              Kami berusaha menyusun materi yang komprehensif dan mudah dipahami untuk membantu pembelajaran 
              tenis meja bagi siswa dan mahasiswa di Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="text-4xl mb-6">📚</div>
          <h2 className="text-3xl font-bold mb-6">Informasi Akademik</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Detail Mata Kuliah</h3>
              <div className="text-left space-y-2">
                <p><strong>Mata Kuliah:</strong> Permainan Tenis Meja</p>
                <p><strong>Program Studi:</strong> Pendidikan Jasmani Kesehatan & Rekreasi</p>
                <p><strong>Fakultas:</strong> Fakultas Ilmu Keolahragaan</p>
                <p><strong>Universitas:</strong> Universitas Negeri Medan</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Tujuan Pembelajaran</h3>
              <div className="text-left space-y-2 text-sm">
                <p>• Memahami teknik dasar tenis meja</p>
                <p>• Menguasai aturan dan peraturan permainan</p>
                <p>• Mengembangkan strategi bermain yang efektif</p>
                <p>• Meningkatkan kemampuan analisis permainan</p>
                <p>• Membangun platform pembelajaran digital</p>
              </div>
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
            Platform pembelajaran tenis meja untuk mata kuliah Permainan Tenis Meja
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
              Kontak
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