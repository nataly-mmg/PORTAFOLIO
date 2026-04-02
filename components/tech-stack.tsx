const technologies = [
  {
    name: "Python",
    category: "Lenguaje",
  },
  {
    name: "Django",
    category: "Framework",
  },
  {
    name: "SQL",
    category: "Base de datos",
  },
  {
    name: "PostgreSQL",
    category: "Base de datos",
  },
  {
    name: "HTML/CSS",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    category: "Lenguaje",
  },
  {
    name: "Git",
    category: "Control de versiones",
  },
  {
    name: "GitHub",
    category: "Plataforma",
  },
  {
    name: "n8n",
    category: "Automatización",
  },
  {
    name: "Rhino3D",
    category: "Diseño",
  },
  {
    name: "AutoCAD",
    category: "Diseño",
  },
]

export function TechStack() {
  // Group technologies by category
  const groupedTechs = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = []
    }
    acc[tech.category].push(tech.name)
    return acc
  }, {} as Record<string, string[]>)

  return (
    <section
      id="tecnologias"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-muted-foreground text-lg">
            Herramientas y tecnologías que utilizo en mis proyectos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedTechs).map(([category, techs]) => (
            <div
              key={category}
              className="border border-border/50 rounded-lg p-6 bg-card/50 hover:bg-card smooth-transition"
            >
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-lg border border-primary/30 hover:border-primary/60 smooth-transition hover:bg-primary/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
