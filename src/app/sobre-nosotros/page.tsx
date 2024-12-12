import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SobreNosotros() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Sobre Nosotros</h1>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Nuestra+Historia"
                alt="Nuestra Historia"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-center">Nuestro Equipo</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Juan Pérez", role: "Director General" },
                { name: "María Rodríguez", role: "Directora de Operaciones" },
                { name: "Carlos Sánchez", role: "Director de Proyectos" },
              ].map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-32 h-32 mx-auto mb-4 relative">
                      <Image
                        src={`/placeholder.svg?height=128&width=128&text=${member.name}`}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{member.role}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Nuestros Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Excelencia", description: "Buscamos la excelencia en cada proyecto que emprendemos." },
                { title: "Innovación", description: "Adoptamos las últimas tecnologías y métodos en construcción." },
                { title: "Sostenibilidad", description: "Nos comprometemos con prácticas de construcción sostenibles." },
              ].map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

