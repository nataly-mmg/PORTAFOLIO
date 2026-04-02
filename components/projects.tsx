import { Github, ExternalLink, Zap } from "lucide-react"
import { FeaturedProject } from "./featured-project"
import { ProjectCard } from "./project-card"
import { Button } from "@/components/ui/button"

const repositories = [
  {
    title: "Gestor Inteligente de Clientes",
    description:
      "Sistema de gestión de clientes con inteligencia artificial integrada para análisis y predicciones. Automatiza procesos de CRM y proporciona insights valiosos sobre el comportamiento de clientes.",
    technologies: ["Python", "Django", "PostgreSQL", "Machine Learning"],
    githubUrl: "https://github.com/nataly-mmg/Gestor_Inteligente_de_Clientes",
  },
  {
    title: "Sistema de Gestión de Datos",
    description:
      "Plataforma robusta para la gestión centralizada de datos operacionales. Facilita la organización, análisis y exportación de datos en múltiples formatos para toma de decisiones informadas.",
    technologies: ["Python", "Django", "PostgreSQL", "API REST"],
    githubUrl: "https://github.com/nataly-mmg/sistema_de_gestion_de_datos",
  },
  {
    title: "Alke Wallet",
    description:
      "Aplicación de billetera digital diseñada para transacciones seguras y manejo de fondos. Incluye validación de usuarios, control de saldos y registro de movimientos.",
    technologies: ["Python", "API REST", "JavaScript", "Seguridad"],
    githubUrl: "https://github.com/nataly-mmg/alke-wallet",
  },
]

const additionalProjects = [
  {
    title: "Generación de Planos en Rhino",
    description:
      "Automatización de generación de planos navales utilizando Rhino3D y Python para optimizar el proceso de diseño.",
    technologies: ["Python", "Rhino3D", "RhinoCommon"],
    inDevelopment: true,
  },
  {
    title: "Grupo Océanos Website",
    description:
      "Sitio web corporativo para empresa de servicios navales, mostrando servicios y portfolio de proyectos.",
    technologies: ["Web", "HTML/CSS"],
    liveUrl: "https://www.grupo-oceanos.cl",
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Proyectos</h2>
          <p className="text-muted-foreground text-lg">
            Proyectos y soluciones que demuestran mi experiencia en desarrollo web, automatización y gestión de datos.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-24">
          <FeaturedProject
            title="Intranet de Gestión de Proyectos Navales"
            description="Plataforma web desarrollada en Django para la gestión integral de proyectos navales. Incluye módulos para seguimiento de tareas, gestión documental, control de horas y generación de reportes automatizados. Diseñada para optimizar la coordinación entre equipos y centralizar la información de proyectos."
            technologies={[
              "Python",
              "Django",
              "PostgreSQL",
              "HTML/CSS",
              "JavaScript",
            ]}
            youtubeId="g9hOQoTOV70"
            githubUrl="https://github.com/nataly-mmg"
          />
        </div>

        {/* Repositories Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-2xl font-bold text-foreground">Repositorios Destacados</h3>
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <p className="text-muted-foreground mb-8">
            Proyectos principales con código disponible en GitHub.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {repositories.map((repo) => (
            <div
              key={repo.title}
              className="border border-border/50 rounded-lg p-6 bg-card hover:bg-card/80 smooth-transition card-lift"
            >
              <h4 className="text-lg font-semibold text-foreground mb-3">
                {repo.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {repo.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {repo.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/15 text-primary text-xs rounded-full border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full smooth-transition"
              >
                <a
                  href={repo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  Ver en GitHub
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-2xl font-bold text-foreground">Otros Proyectos</h3>
            <ExternalLink className="h-6 w-6 text-accent" />
          </div>
          <p className="text-muted-foreground mb-8">
            Proyectos adicionales en desarrollo y externos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {additionalProjects.map((project) => (
            <div
              key={project.title}
              className="border border-border/50 rounded-lg p-6 bg-card/50 hover:bg-card smooth-transition card-lift"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-semibold text-foreground flex-1">
                  {project.title}
                </h4>
                {project.inDevelopment && (
                  <span className="ml-2 px-2 py-1 bg-accent/20 text-accent text-xs rounded-full font-medium">
                    En desarrollo
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.liveUrl && (
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="mt-4 w-full smooth-transition"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visitar sitio
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
