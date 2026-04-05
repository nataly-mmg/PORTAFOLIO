import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CVSection() {
  return (
    <section id="cv" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <FileText className="h-8 w-8 text-primary" />
        </div>

        <h2 className="text-3xl font-bold text-foreground mb-4">
          Curriculum Vitae
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Ingeniera Naval con experiencia en diseño, inspección y gestión de
          proyectos marítimos. Especializada en desarrollo de software con
          Python y Django para la automatización de procesos en la industria
          naval.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="/cv.pdf" download="cv.pdf">
              <Download className="h-4 w-4 mr-2" />
              Descargar CV (PDF)
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://www.linkedin.com/in/natalymartinezgallardo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver perfil en LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
