import { Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Osanoma SL</h3>
            <p className="mb-2">CIF: B57875510</p>
            <p>Construyendo el futuro desde 2014</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <p className="mb-2">Email: info@osanoma.com</p>
            <p className="mb-2">Teléfono: +34 XXX XXX XXX</p>
            <p>Dirección: Calle Example, 123, 07001 Palma, Islas Baleares</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          © {new Date().getFullYear()} Osanoma SL. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

