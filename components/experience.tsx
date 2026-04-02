import { Building2 } from "lucide-react"

const experiences = [
  {
    company: "Grupo Océanos",
    role: "Fundadora & Ingeniera Naval",
    period: "2022 - Presente",
    description:
      "Liderazgo de empresa de servicios navales. Desarrollo de sistemas internos con Django para gestión de proyectos. Implementación de procesos de digitalización y automatización.",
    highlights: [
      "Desarrollo de intranet para gestión de proyectos navales",
      "Automatización de documentación técnica con Python",
      "Diseño y validación de embarcaciones",
    ],
  },
  {
    company: "Asesorías Navales",
    role: "Ingeniera Naval",
    period: "2020 - 2022",
    description:
      "Consultoría en diseño naval e inspección de embarcaciones. Elaboración de planos y documentación técnica para proyectos marítimos.",
    highlights: [
      "Inspección y certificación de embarcaciones",
      "Diseño de planos estructurales y de arreglo general",
      "Coordinación con astilleros y autoridad marítima",
    ],
  },
  {
    company: "Integrarmar",
    role: "Ingeniera de Proyectos",
    period: "2018 - 2020",
    description:
      "Participación en proyectos de ingeniería naval y gestión documental. Apoyo técnico en procesos de diseño y construcción naval.",
    highlights: [
      "Gestión de documentación técnica de proyectos",
      "Seguimiento de construcción naval",
      "Elaboración de especificaciones técnicas",
    ],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Experiencia
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 translate-y-2" />

                {/* Content */}
                <div className="md:w-1/2 pl-8 md:pl-0">
                  <div
                    className={`p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-primary">{exp.role}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
