import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/header';

const products = [
  {
    name: 'Pan de Campo',
    price: '$5.00',
    description: 'Hogaza rústica de masa madre, corteza crujiente e interior suave y aireado.',
    image: 'https://placehold.co/400x300.png',
    aiHint: 'sourdough bread',
  },
  {
    name: 'Croissant de Almendras',
    price: '$4.50',
    description: 'Croissant mantecoso relleno de crema de almendras y cubierto con almendras laminadas.',
    image: 'https://placehold.co/400x300.png',
    aiHint: 'almond croissant',
  },
  {
    name: 'Galletas de Chocolate',
    price: '$2.50',
    description: 'Galleta clásica con trozos de chocolate derretido y un toque de sal marina.',
    image: 'https://placehold.co/400x300.png',
    aiHint: 'chocolate cookie',
  },
  {
    name: 'Pastel de Zanahoria',
    price: '$6.00',
    description: 'Bizcocho húmedo de zanahoria y especias con un glaseado de queso crema.',
    image: 'https://placehold.co/400x300.png',
    aiHint: 'carrot cake',
  },
  {
    name: 'Baguette Tradicional',
    price: '$3.50',
    description: 'Corteza dorada y crujiente con una miga suave y elástica, perfecta para cualquier ocasión.',
    image: 'https://placehold.co/400x300.png',
    aiHint: 'baguette bread',
  },
  {
    name: 'Concha de Vainilla',
    price: '$2.00',
    description: 'Pan dulce mexicano, suave y esponjoso con una deliciosa cobertura de azúcar sabor vainilla.',
    image: 'https://placehold.co/400x300.png',
    aiHint: 'concha bread',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section id="home" className="relative h-[calc(100vh-3.5rem)] w-full">
          <Image
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1920&h=1080&auto=format&fit=crop"
            alt="Panes artesanales en una panadería"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
            data-ai-hint="artisan bread"
          />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
            <div className="animate-fade-in-down space-y-4">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl font-headline" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
                Bienvenidos a Pan Calidez
              </h1>
              <p className="max-w-2xl text-lg text-white/90 md:text-xl" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
                El sabor de la tradición horneado con amor cada día.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#products">Ver Productos</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 animate-fade-in">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">Nuestra Historia</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  En Pan Calidez, cada pan cuenta una historia. Nacimos de la pasión por la panadería tradicional y el amor por los ingredientes frescos y locales. Somos una familia dedicada a llevar a tu mesa productos horneados con cuidado, paciencia y un toque de hogar. Creemos que el pan es más que un alimento; es un punto de encuentro, una excusa para compartir y un símbolo de calidez. Gracias por ser parte de nuestra historia.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Equipo de Pan Calidez"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                  data-ai-hint="bakery team"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6 animate-fade-in">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">Nuestros Productos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Desde panes de masa madre hasta dulces caprichos, todo está hecho desde cero con los mejores ingredientes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Card key={product.name} className="overflow-hidden transition-shadow hover:shadow-lg">
                  <CardHeader className="p-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-48"
                      data-ai-hint={product.aiHint}
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                    <CardDescription className="pt-2">{product.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <p className="font-semibold text-accent">{product.price}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4 lg:text-left animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-accent">Ponte en Contacto</h2>
              <p className="text-muted-foreground">
                ¿Tienes alguna pregunta o un pedido especial? Envíanos un mensaje y te responderemos pronto.
              </p>
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-accent" />
                  <span>Calle Ficticia 123, 45678 Ciudad, País</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-accent" />
                  <span>+1 (234) 567-890</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-accent" />
                  <span>hola@pancalidez.com</span>
                </div>
              </div>
              <Separator className="my-4"/>
              <div className="flex justify-center lg:justify-start space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-accent"><Instagram className="h-6 w-6" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-accent"><Facebook className="h-6 w-6" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-accent"><Twitter className="h-6 w-6" /></Link>
              </div>
            </div>
            <div className="w-full max-w-md animate-fade-in lg:order-first">
              <ContactForm />
            </div>
          </div>
          <div className="container px-4 md:px-6 mt-16 animate-fade-in">
             <div className="overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.399238384915!2d-122.084!3d37.422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3661c9e831%3A0x6b865c3e7b1c1d6!2sGoogleplex!5e0!3m2!1sen!2sus!4v1613816641793!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Ubicación de Pan Calidez"
                ></iframe>
              </div>
          </div>
        </section>
      </main>

      <footer className="py-6 md:px-8 bg-accent text-accent-foreground">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose md:text-left">
            &copy; {new Date().getFullYear()} Pan Calidez. Todos los derechos reservados.
          </p>
          <div className="text-center md:text-right">
            <p>Calle Ficticia 123, Ciudad</p>
            <p>Horario: Lunes a Sábado, 7am - 8pm</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
