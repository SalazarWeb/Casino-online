import { Header } from '@/components/layout/Header'
import { Navigation } from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata = {
  title: 'Pictasino',
  icons: {
    icon: '/caracol-de-mar.png',
  },
  description: 'Juega y gana en Pictasino, tu casino en línea de confianza',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#00246B]">
        <Header />
        <Navigation />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 bg-[#00246B] text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
