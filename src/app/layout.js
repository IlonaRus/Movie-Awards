import { Lexend_Mega } from 'next/font/google'
import './globals.css'

const inter = Lexend_Mega({ subsets: ['latin'], weight: ["700"] })

export const metadata = {
  title: 'Film Awards',
  description: 'Geef de films van 2023 een award',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
