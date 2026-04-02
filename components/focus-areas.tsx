import { Monitor, FileCode, Database, Settings, Cpu } from "lucide-react"

const focusAreas = [
  {
    icon: Monitor,
    title: "Digitalización de procesos navales",
    description:
      "Transformar flujos de trabajo tradicionales en sistemas digitales eficientes y trazables.",
  },
  {
    icon: FileCode,
    title: "Desarrollo de sistemas internos",
    description:
      "Crear aplicaciones web personalizadas para la gestión de proyectos y operaciones navales.",
  },
  {
    icon: Settings,
    title: "Automatización de documentación",
    description:
      "Generar automáticamente informes, planos y documentación técnica con Python.",
  },
  {
    icon: Database,
    title: "Estructuración de datos técnicos",
    description:
      "Organizar y centralizar información técnica para facilitar el acceso y análisis.",
  },
  {
    icon: Cpu,
    title: "Aplicación de tecnología en ingeniería",
    description:
      "Integrar herramientas modernas de software con conocimiento técnico naval.",
  },
]

export function FocusAreas() {
  return (
    <section id="enfoque" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Áreas de enfoque
          </h2>
          <p className="text-muted-foreground text-lg">
            Especializaciones y servicios donde concentro mis esfuerzos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="group p-8 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 smooth-transition card-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 smooth-transition">
                <area.icon className="h-7 w-7 text-primary group-hover:scale-110 smooth-transition" />
              </div>
              <h3 className="font-semibold text-foreground mb-3 text-balance text-lg">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
