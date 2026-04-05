import { Anchor, Code2, Briefcase, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: Anchor,
    title: "Ingeniera Naval",
    description:
      "Formación técnica sólida en ingeniería naval con experiencia en diseño, inspección y gestión de proyectos marítimos.",
  },
  {
    icon: Briefcase,
    title: "Fundadora de Grupo Océanos",
    description:
      "Empresa de servicios navales, liderando proyectos de diseño naval y digitalización de procesos.",
  },
  {
    icon: Code2,
    title: "Desarrolladora Python/Django",
    description:
      "Creando aplicaciones web y sistemas internos que optimizan la gestión de proyectos navales.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Marítima",
    description:
      "Combinando conocimiento técnico naval con tecnología para transformar la industria.",
  },
]

export function About() {
  return (
    <section id="sobre-mi" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Sobre mí</h2>
          <p className="text-muted-foreground text-lg">
            Una Ingeniera Naval dedicada a transformar la industria marítima a través de la tecnología.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left: Image */}
          <div className="relative h-full min-h-[500px] flex items-center justify-center">
            <div className="relative w-full">
              {/* Glow effect background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl -z-10" />
              
              {/* Image container with border */}
              <div className="relative rounded-2xl overflow-hidden border border-primary/30 glow-accent">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/naty-MdnkXL6csBZaqO2nuYDkJQixcC7XKm.png"
              
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tech accent lines */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-lg -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-accent/20 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy Ingeniera Naval con una pasión por la tecnología y la
                automatización. A lo largo de mi carrera, he trabajado en diseño
                naval, inspección de embarcaciones y gestión de proyectos
                marítimos con experiencia práctica en el sector.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Actualmente, combino mi experiencia en ingeniería con el
                desarrollo de software, creando herramientas digitales que
                optimizan procesos en la industria naval. Mi enfoque está en
                construir soluciones prácticas que resuelvan problemas reales del
                sector, desde automatización de procesos hasta sistemas de gestión complejos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Como fundadora de{" "}
                <a
                  href="https://www.grupo-oceanos.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold smooth-transition"
                >
                  Grupo Océanos
                </a>
                , lidero iniciativas que integran tecnología con servicios navales
                tradicionales, buscando siempre formas innovadoras de mejorar la
                eficiencia operativa y rentabilidad de las operaciones marítimas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <Card
                  key={item.title}
                  className="bg-card/50 border-border/50 hover:bg-card hover:border-primary/50 smooth-transition card-lift"
                >
                  <CardContent className="p-6">
                    <item.icon className="h-8 w-8 text-primary mb-4 smooth-transition group-hover:scale-110" />
                    <h3 className="font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
