import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">Osanoma SL</Link>
          <ul className="hidden md:flex space-x-4">
            <li><Link href="/" className="text-gray-600 hover:text-blue-600">Inicio</Link></li>
            <li><Link href="/servicios" className="text-gray-600 hover:text-blue-600">Servicios</Link></li>
            <li><Link href="/proyectos" className="text-gray-600 hover:text-blue-600">Proyectos</Link></li>
            <li><Link href="/sobre-nosotros" className="text-gray-600 hover:text-blue-600">Sobre Nosotros</Link></li>
          </ul>
          <Button asChild>
            <Link href="/contacto">Contacto</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

