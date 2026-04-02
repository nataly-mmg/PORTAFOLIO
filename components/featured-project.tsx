import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface FeaturedProjectProps {
  title: string
  description: string
  technologies: string[]
  youtubeId?: string
  liveUrl?: string
  githubUrl?: string
}

export function FeaturedProject({
  title,
  description,
  technologies,
  youtubeId,
  liveUrl,
  githubUrl,
}: FeaturedProjectProps) {
  return (
    <div className="border border-border/50 rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/50 glow-accent">
      {youtubeId && (
        <div className="relative aspect-video w-full overflow-hidden bg-secondary group">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-transparent to-primary/10 pointer-events-none" />
        </div>
      )}

      <div className="p-8 lg:p-10">
        <div className="mb-6">
          <div className="inline-block mb-3">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/15 px-3 py-1 rounded-full border border-primary/30">
              Proyecto Principal
            </span>
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {title}
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mb-8">
          <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
            Stack tecnológico
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-primary/20 text-primary border-primary/40 hover:bg-primary/30 smooth-transition"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {githubUrl && (
            <Button asChild size="lg" className="smooth-transition">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                Ver código
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button asChild variant="outline" size="lg" className="smooth-transition">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 mr-2" />
                Ver demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
