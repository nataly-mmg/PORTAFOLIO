import { Github, ExternalLink, Zap } from "lucide-react"
import { FeaturedProject } from "./featured-project"



export function CasoEstudio() {
  const studyCards = [

    {
      title: "Desafío principal",
      content:
        "La gestión de proyectos se realizaba de forma manual y dispersa, generando baja trazabilidad, duplicidad de información y dificultades en el control de avances.",
    },
    {
      title: "Solución propuesta",
      content:
        "Se diseñó una intranet personalizada para registrar naves y proyectos, asignar trabajos, visualizar estados y concentrar la información técnica en una sola interfaz.",
    },
    {
      title: "Herramientas utilizadas",
      content:
        "Python, Django, PostgreSQL, HTML, CSS y estructura modular para backend, formularios, gestión de datos y visualización de información.",
    },
    {
      title: "Aprendizajes",
      content:
        "Fortalecí el desarrollo en Django, modelado de datos y diseño de soluciones digitales aplicadas a procesos reales.",
    },
    {
      title: "Impacto",
      content:
        "Se logró centralizar la información de proyectos, mejorando la organización, trazabilidad y control operativo.",
    },
    {
      title: "Habilidades y justificación",
      content:
        "Elegí este proyecto porque representa la unión entre mi experiencia en ingeniería naval y el desarrollo de software aplicado a problemas reales del sector.",
    },
  ]

  return (
    <section id="caso-estudio" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Caso de Estudio</h2>
          <div className="flex items-center gap-3 mb-8">
          </div>
        </div>

        {/* Featured Project */}
        <div className="mb-24">
          <FeaturedProject
            title="Intranet de Gestión de Proyectos Navales"
            description="Plataforma web desarrollada en Django para la gestión integral de proyectos navales, permitiendo centralizar información de naves, clientes, trabajos y seguimiento operativo."
            technologies={[
              "Python",
              "Django",
              "PostgreSQL",
              "HTML/CSS",
            ]}
            youtubeId="g9hOQoTOV70"
            githubUrl="https://github.com/nataly-mmg/Desarrollo_web_con_Django.git"
          />
        </div>

         <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-2xl font-bold text-foreground">Características del Caso de Estudio</h3>
          </div>
        
        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-6 shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:border-primary/30 smooth-transition"
            >
              <h4 className="text-xl font-semibold text-primary mb-3">
                {card.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {card.content}
              </p>
            </div>
          ))}
        </div>




      </div>
    </section>
  )
}
