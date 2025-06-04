# 🏓 Tenis Meja Learning Platform

Platform pembelajaran tenis meja interaktif yang dirancang untuk membantu pemula hingga menengah menguasai teknik dan strategi tenis meja dengan pendekatan yang terstruktur dan menyenangkan.

## ✨ Fitur Utama

### 📚 **Materi Terstruktur**
- 11 materi pembelajaran lengkap dari dasar hingga advanced
- Penjelasan detail tentang aturan, teknik, dan strategi
- Format yang mudah dipahami dengan progress tracking
- Referensi standar ITTF dan PTMSI

### 🎥 **Tutorial Video**
- 5 video tutorial HD dari YouTube
- Teknik dasar, servis, pukulan ofensif, dan defensif
- Video player terintegrasi dengan kategori filter
- Deskripsi lengkap dan durasi untuk setiap video

### 🧠 **Quiz Interaktif**
- 20 soal pilihan ganda komprehensif
- Feedback real-time dengan penjelasan jawaban
- Progress tracking dan scoring system
- Animasi smooth untuk better user experience

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.3 dengan App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 dengan custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel Ready

## 🎨 Design System

### Color Palette
```css
/* Ping Pong Theme */
--color-ping-pong-50: #f0f9ff;
--color-ping-pong-500: #0ea5e9;
--color-ping-pong-600: #0284c7;

/* Table Green Theme */
--color-table-green-50: #f0fdf4;
--color-table-green-500: #22c55e;
--color-table-green-600: #16a34a;
```

### Typography
- **Primary Font**: Arial, Helvetica, sans-serif
- **Responsive Design**: Mobile-first approach
- **Consistent Spacing**: Tailwind spacing scale

## 📁 Struktur Project

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                 # Homepage
│   ├── quiz/
│   │   └── page.tsx            # Quiz interaktif
│   ├── tutorials/
│   │   └── page.tsx            # Video tutorials
│   ├── lessons/
│   │   └── page.tsx            # Materi pembelajaran
│   ├── learn/
│   │   └── page.tsx            # Learning dashboard
│   └── progress/
│       └── page.tsx            # Sistem progress
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18.0.0 atau lebih baru
- npm atau yarn

### Local Development

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd tenis-meja-learning
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Setup Tailwind CSS v4**
   ```bash
   npm install @tailwindcss/postcss@next
   ```

4. **Run development server**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

5. **Buka browser**
   ```
   http://localhost:3000
   ```

## 📋 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎯 Learning Path

Platform ini dirancang dengan 3 langkah pembelajaran:

1. **📚 Pelajari Teori** (`/lessons`)
   - 11 materi dari pengertian hingga strategi
   - Progress tracking untuk setiap materi
   - Format yang mudah dipahami

2. **🎥 Tonton Tutorial** (`/tutorials`)
   - 5 video tutorial teknik tenis meja
   - Video player dengan kategori filter
   - Deskripsi dan durasi setiap video

3. **🧠 Uji Kemampuan** (`/quiz`)
   - 20 soal pilihan ganda
   - Feedback real-time dengan penjelasan
   - Scoring system dan progress tracking

## 📖 Konten Pembelajaran

### Materi Bacaan
1. Pengertian Tenis Meja
2. Sejarah Singkat Tenis Meja
3. Peralatan dalam Tenis Meja
4. Ukuran dan Spesifikasi Lapangan
5. Teknik Dasar Tenis Meja
6. Peraturan Permainan
7. Sistem Penilaian (Scoring System)
8. Nomor Pertandingan
9. Strategi dan Taktik Dasar
10. Latihan dan Pengembangan
11. Keselamatan dan Etika Bermain

### Video Tutorial
- Teknik Dasar Tenis Meja untuk Pemula
- Fundamental Teknik Dasar
- Pukulan Ofensif - Teknik Menyerang
- Teknik Servis - Variasi dan Strategi
- Teknik Defensive - Bertahan dengan Efektif

## 🔧 Kustomisasi

### Menambah Video Tutorial Baru
1. Edit `src/app/tutorials/page.tsx`
2. Tambahkan object baru ke array `tutorials`:
   ```typescript
   {
     id: 6,
     title: "Judul Video Baru",
     description: "Deskripsi video...",
     videoId: "YOUTUBE_VIDEO_ID",
     duration: "XX:XX",
     level: "Pemula" | "Menengah" | "Lanjutan",
     views: "XXK",
     rating: 4.5,
     category: "Kategori"
   }
   ```

### Menambah Soal Quiz Baru
1. Edit `src/app/quiz/page.tsx`
2. Tambahkan object baru ke array `questions`:
   ```typescript
   {
     id: 21,
     question: "Pertanyaan baru?",
     options: ["Opsi A", "Opsi B", "Opsi C", "Opsi D"],
     correct: 0, // index jawaban benar
     explanation: "Penjelasan jawaban..."
   }
   ```

## 📱 Responsive Design

Platform ini fully responsive dan dioptimalkan untuk:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🌟 Features

- ✅ Server-side rendering dengan Next.js
- ✅ Progressive Web App ready
- ✅ SEO optimized
- ✅ Accessibility compliant
- ✅ Dark mode support via CSS variables
- ✅ Smooth animations dengan Framer Motion
- ✅ TypeScript untuk type safety
- ✅ Tailwind CSS untuk rapid development

## 📚 Referensi & Sumber

Platform ini menggunakan materi yang dikurasi dari:
- **ITTF (International Table Tennis Federation)** - Aturan resmi dan standar internasional
- **PTMSI (Persatuan Tenis Meja Seluruh Indonesia)** - Standar nasional dan peraturan lokal
- **YouTube Expert Channels** - Video tutorial dari pelatih profesional
- **Literatur Olahraga** - Buku dan jurnal ilmiah tentang tenis meja

## 🤝 Contributing

Kontribusi sangat diterima! Silakan:
1. Fork repository ini
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Project ini menggunakan MIT License. Lihat file `LICENSE` untuk detail lengkap.

## 👤 Author

**Raihan**
- Platform pembelajaran tenis meja untuk tugas semester 6

## 🙏 Acknowledgments

- ITTF untuk standar internasional tenis meja
- PTMSI untuk referensi standar nasional
- YouTube creators untuk video tutorial berkualitas
- Next.js team untuk framework yang luar biasa
- Tailwind CSS untuk utility-first CSS framework

---

<div align="center">
  <strong>🏓 Dibuat dengan ❤️ untuk para pecinta tenis meja</strong>
</div>