import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Proyectos() {
  const projects = [
    {
      title: "Autopista del Sol",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
      image: "/placeholder.svg?height=400&width=600&text=Autopista+del+Sol"
    },
    {
      title: "Aeropuerto Internacional",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
      image: "/placeholder.svg?height=400&width=600&text=Aeropuerto+Internacional"
    },
    {
      title: "Estadio Olímpico",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
      image: "/placeholder.svg?height=400&width=600&text=Estadio+Olímpico"
    },
    {
      title: "Puente Marítimo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
      image: "/placeholder.svg?height=400&width=600&text=Puente+Marítimo"
    },
    {
      title: "Centro Comercial Metropolitano",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
      image: "/placeholder.svg?height=400&width=600&text=Centro+Comercial+Metropolitano"
    },
    {
      title: "Línea de Metro",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
      image: "/placeholder.svg?height=400&width=600&text=Línea+de+Metro"
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Proyectos</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

