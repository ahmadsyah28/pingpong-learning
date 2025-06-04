import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Belajar Tenis Meja - Platform Pembelajaran Terlengkap',
  description: 'Materi lengkap dan terstruktur untuk meningkatkan kemampuan tenis meja Anda, dari teknik dasar hingga strategi permainan tingkat lanjut.',
  keywords: 'tenis meja, ping pong, belajar tenis meja, tutorial tenis meja, teknik tenis meja',
  authors: [{ name: 'Tenis Meja Learning Team' }],
  openGraph: {
    title: 'Belajar Tenis Meja - Platform Pembelajaran Terlengkap',
    description: 'Materi lengkap dan terstruktur untuk meningkatkan kemampuan tenis meja Anda',
    type: 'website',
    locale: 'id_ID',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏓</text></svg>" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}