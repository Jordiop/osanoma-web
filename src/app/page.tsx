import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[60vh] flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Construction site"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Osanoma SL</h1>
              <p className="text-xl mb-8">Construyendo el futuro, proyecto a proyecto</p>
              <Button size="lg" asChild>
                <Link href="/servicios">Nuestros Servicios</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Proyectos Destacados</h2>
          <Carousel>
            <CarouselContent>
              {[...Array(5)].map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={`/placeholder.svg?height=600&width=800&text=Proyecto+${index + 1}`}
                          alt={`Proyecto ${index + 1}`}
                          width={800}
                          height={600}
                          className="rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Autopistas", description: "Construcción y mantenimiento de autopistas" },
                { title: "Carreteras", description: "Diseño y construcción de carreteras" },
                { title: "Campos de Aterrizaje", description: "Construcción de pistas de aterrizaje" },
                { title: "Vías Férreas", description: "Instalación y mantenimiento de vías férreas" },
                { title: "Centros Deportivos", description: "Construcción de instalaciones deportivas" },
                { title: "Mantenimiento", description: "Servicios de mantenimiento y conservación" },
              ].map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild>
                <Link href="/servicios">Ver todos los servicios</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Información de la Empresa</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="grid md:grid-cols-2 gap-4">
                <li><strong>CIF:</strong> B57875510</li>
                <li><strong>Forma jurídica:</strong> Sociedad limitada</li>
                <li><strong>Fecha de constitución:</strong> 9-9-2014</li>
                <li><strong>Última actualización:</strong> 24-11-2024</li>
                <li><strong>Actividad CNAE:</strong> 4299 - Construcción de otros proyectos de ingeniería civil n.c.o.p.</li>
                <li><strong>Estado de la empresa:</strong> Activa</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  )
}

