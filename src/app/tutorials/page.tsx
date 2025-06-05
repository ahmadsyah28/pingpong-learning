"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Home, Clock, Users, Star, ChevronRight, AlertCircle, RefreshCw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Tutorial {
  id: number;
  title: string;
  description: string;
  videoId: string;
  duration: string;
  level: "Pemula" | "Menengah" | "Lanjutan";
  views: string;
  rating: number;
  category: string;
}

const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "Teknik Dasar Tenis Meja untuk Pemula",
    description:
      "Pelajari teknik dasar tenis meja meliputi pegangan raket, stance, dan pukulan dasar yang harus dikuasai setiap pemula.",
    videoId: "GxAqmTLZLh0", // https://youtu.be/GxAqmTLZLh0
    duration: "15:30",
    level: "Pemula",
    views: "125K",
    rating: 4.8,
    category: "Teknik Dasar",
  },
  {
    id: 2,
    title: "Fundamental Teknik Dasar Tenis Meja",
    description:
      "Tutorial lengkap teknik dasar tenis meja yang wajib dikuasai pemula, mulai dari posisi badan hingga gerakan dasar.",
    videoId: "hqN_GcOnRDM", // https://youtu.be/hqN_GcOnRDM
    duration: "12:45",
    level: "Pemula",
    views: "89K",
    rating: 4.7,
    category: "Teknik Dasar",
  },
  {
    id: 3,
    title: "Pukulan Ofensif - Teknik Menyerang",
    description:
      "Pelajari berbagai teknik pukulan ofensif untuk mendominasi permainan dan mencetak poin dengan efektif.",
    videoId: "ljCICtg99ho", // https://youtu.be/ljCICtg99ho
    duration: "18:20",
    level: "Menengah",
    views: "67K",
    rating: 4.9,
    category: "Pukulan Ofensif",
  },
  {
    id: 4,
    title: "Teknik Servis - Variasi dan Strategi",
    description:
      "Master berbagai jenis servis tenis meja dengan teknik yang benar dan strategi penggunaannya dalam pertandingan.",
    videoId: "5ixXfDU6tlQ", // https://youtu.be/5ixXfDU6tlQ
    duration: "14:15",
    level: "Menengah",
    views: "102K",
    rating: 4.6,
    category: "Servis",
  },
  {
    id: 5,
    title: "Teknik Defensive - Bertahan dengan Efektif",
    description:
      "Pelajari teknik defensive yang solid untuk bertahan dari serangan lawan dan mengubah momentum permainan.",
    videoId: "ECp531IhLBA", // https://youtu.be/ECp531IhLBA
    duration: "16:45",
    level: "Lanjutan",
    views: "54K",
    rating: 4.8,
    category: "Defensive",
  },
];

// Komponen Video Player dengan Error Handling
const VideoPlayer = ({ tutorial }: { tutorial: Tutorial }) => {
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [useIframe, setUseIframe] = useState(true);

  // Reset state ketika tutorial berubah
  useEffect(() => {
    setVideoError(false);
    setIsLoading(true);
    setUseIframe(true);
  }, [tutorial.videoId]);

  // Function untuk generate embed URL dengan parameter lengkap
  const getEmbedUrl = (videoId: string) => {
    const baseUrl = "https://www.youtube.com/embed/";
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      autoplay: "0",
      controls: "1",
      enablejsapi: "1",
      playsinline: "1",
      fs: "1",
      hl: "id"
    });
    
    return `${baseUrl}${videoId}?${params.toString()}`;
  };

  // Function untuk handle iframe load error
  const handleIframeError = () => {
    console.log("Iframe failed to load, switching to thumbnail");
    setVideoError(true);
    setIsLoading(false);
    setUseIframe(false);
  };

  // Function untuk handle iframe load success
  const handleIframeLoad = () => {
    console.log("Iframe loaded successfully");
    setIsLoading(false);
    setVideoError(false);
  };

  // Function untuk retry loading
  const retryLoading = () => {
    setVideoError(false);
    setIsLoading(true);
    setUseIframe(true);
  };

  // Komponen Error State
  const ErrorState = () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-300">
      <AlertCircle className="w-12 h-12 text-gray-400 mb-4" />
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Video Tidak Dapat Dimuat</h3>
      <p className="text-sm text-gray-500 text-center mb-4 px-4">
        Video mungkin memiliki pembatasan embed atau tidak tersedia
      </p>
      <div className="flex gap-3">
        <button
          onClick={retryLoading}
          className="flex items-center gap-2 px-4 py-2 bg-ping-pong-500 text-white rounded-lg hover:bg-ping-pong-600 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Coba Lagi
        </button>
        <button
          onClick={() => window.open(`https://www.youtube.com/watch?v=${tutorial.videoId}`, '_blank')}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Buka di YouTube
        </button>
      </div>
    </div>
  );

  // Komponen Loading State
  const LoadingState = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="text-center text-gray-500">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ping-pong-500 mx-auto mb-3"></div>
        <p className="text-sm">Memuat video...</p>
      </div>
    </div>
  );

  // Komponen Thumbnail Fallback
  const ThumbnailFallback = () => {
    const [imageError, setImageError] = useState(false);

    const openYouTube = () => {
      window.open(`https://www.youtube.com/watch?v=${tutorial.videoId}`, '_blank');
    };

    if (imageError) {
      return (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-ping-pong-100 to-table-green-100 rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center"
          onClick={openYouTube}
        >
          <div className="text-center text-gray-600">
            <div className="text-4xl mb-3">🎥</div>
            <p className="font-semibold text-lg mb-1">Tonton di YouTube</p>
            <p className="text-sm opacity-75">Klik untuk membuka video</p>
          </div>
        </div>
      );
    }

    return (
      <div 
        className="absolute inset-0 cursor-pointer group rounded-lg overflow-hidden"
        onClick={openYouTube}
      >
        <Image
          src={`https://img.youtube.com/vi/${tutorial.videoId}/maxresdefault.jpg`}
          alt={tutorial.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
          onError={() => setImageError(true)}
          onLoad={() => setIsLoading(false)}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
            <Play className="w-6 h-6 text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
          {tutorial.duration}
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      {isLoading && <LoadingState />}
      
      {videoError ? (
        <ErrorState />
      ) : useIframe ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={getEmbedUrl(tutorial.videoId)}
          title={tutorial.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <ThumbnailFallback />
      )}
    </div>
  );
};

export default function TutorialsPage() {
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial>(tutorials[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const categories = [
    "Semua",
    "Teknik Dasar",
    "Pukulan Ofensif",
    "Servis",
    "Defensive",
  ];

  const filteredTutorials =
    selectedCategory === "Semua"
      ? tutorials
      : tutorials.filter((tutorial) => tutorial.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Pemula":
        return "bg-green-100 text-green-700";
      case "Menengah":
        return "bg-yellow-100 text-yellow-700";
      case "Lanjutan":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
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
                <span className="hidden sm:inline">Kembali ke Beranda</span>
              </motion.button>
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center flex-1">
              Tutorial Teknik Tenis Meja
            </h1>
            <div className="w-[120px] hidden sm:block"></div>
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
              <VideoPlayer tutorial={selectedTutorial} />

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(
                      selectedTutorial.level
                    )}`}
                  >
                    {selectedTutorial.level}
                  </span>
                  <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {selectedTutorial.category}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 leading-tight">
                  {selectedTutorial.title}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {selectedTutorial.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedTutorial.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{selectedTutorial.views} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{selectedTutorial.rating}</span>
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
                        ? "bg-orange-100 text-orange-700 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
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
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Video Lainnya
              </h3>
              <div className="space-y-4">
                {filteredTutorials.map((tutorial) => (
                  <motion.div
                    key={tutorial.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedTutorial(tutorial)}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedTutorial.id === tutorial.id
                        ? "bg-orange-50 border-2 border-orange-200"
                        : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative w-16 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={`https://img.youtube.com/vi/${tutorial.videoId}/mqdefault.jpg`}
                          alt={tutorial.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center hidden fallback-icon">
                          <Play className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-800 text-sm leading-tight mb-1 line-clamp-2">
                          {tutorial.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
                          <span>{tutorial.duration}</span>
                          <span>•</span>
                          <span
                            className={`px-2 py-0.5 rounded-full ${getLevelColor(
                              tutorial.level
                            )}`}
                          >
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
          className="mt-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ingin Latihan Lebih Lanjut?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Uji pemahaman Anda dengan quiz interaktif tentang teknik tenis meja
          </p>
          <Link href="/quiz">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Mulai Quiz <ChevronRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}