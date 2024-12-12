import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Osanoma SL - Construcción y Proyectos de Ingeniería Civil',
  description: 'Osanoma SL es una empresa líder en construcción de autopistas, carreteras, campos de aterrizaje, vías férreas y centros deportivos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

