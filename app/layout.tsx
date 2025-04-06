import './globals.css'
import { Heebo } from 'next/font/google'

const heebo = Heebo({ subsets: ['hebrew'] })

export const metadata = {
  title: 'שפת האהבה - קורס מקוון מאת מיכל סלונים',
  description: 'שנו את מערכת היחסים שלכם עם כלים מעשיים לתקשורת ותובנות.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className}>{children}</body>
    </html>
  )
}

