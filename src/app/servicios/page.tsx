import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Servicios() {
  const services = [
    {
      title: "Autopistas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
      image: "/placeholder.svg?height=400&width=600&text=Autopistas"
    },
    {
      title: "Carreteras",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
      image: "/placeholder.svg?height=400&width=600&text=Carreteras"
    },
    {
      title: "Campos de Aterrizaje",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
      image: "/placeholder.svg?height=400&width=600&text=Campos+de+Aterrizaje"
    },
    {
      title: "Vías Férreas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
      image: "/placeholder.svg?height=400&width=600&text=Vías+Férreas"
    },
    {
      title: "Centros Deportivos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
      image: "/placeholder.svg?height=400&width=600&text=Centros+Deportivos"
    },
    {
      title: "Mantenimiento",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
      image: "/placeholder.svg?height=400&width=600&text=Mantenimiento"
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
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

