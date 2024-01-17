import './globals.css'
import './../app/style.scss'
import { Inter } from 'next/font/google'
import Headers from "../src/component/header/Header";
import TopHeader from "../src/component/header/TopHeader";
import Footer from "../src/component/footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AstroDev: Expert Astrology Consultation | Kundli, Rashifal & Numerology',
  description: 'Discover a universe of profound astrological insights with AstroDev. Consult with top astrologers online for Kundli analysis, numerology readings, daily Rashifal, Panchang, and more. Experience personalized astrological guidance tailored to your life`s journey. Start your cosmic journey with us today.',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body className={inter.className}>
      <TopHeader />
        <Headers />
        {children}
        <Footer />
      </body>
    </html>
  )
}
