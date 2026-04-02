import { ExternalLink, Github, Folder } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  inDevelopment?: boolean
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  inDevelopment,
}: ProjectCardProps) {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Folder className="h-5 w-5 text-primary" />
          </div>
          <div className="flex items-center gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Ver en GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Ver sitio"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            {inDevelopment && (
              <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                En desarrollo
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs text-muted-foreground font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
