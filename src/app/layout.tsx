import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '너BTI',
  description: '내가 아닌 내 친구의 MBTI를 알아보자',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={(inter.className, 'container')}>
        <Header />
        <main
          className="container min-h-screen flex flex-col items-center justify-between px-3 py-12"
          style={{ border: '1px solid red' }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
