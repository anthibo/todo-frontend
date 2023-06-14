import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/providers/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Over Engineered Todo app',
  description: 'Todo app built with microservices, graphql & distributed transactions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
