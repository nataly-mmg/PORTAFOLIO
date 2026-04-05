import { Github, Linkedin, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:nmartinez@grupo-oceanos.cl",
    value: "nmartinez@grupo-oceanos.cl",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/natalymartinezgallardo/",
    value: "linkedin.com/in/natalymartinezgallardo",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/nataly-mmg",
    value: "github.com/nataly-mmg",
  },
  {
    icon: Globe,
    label: "Web",
    href: "https://grupo-oceanos.cl",
    value: "grupo-oceanos.cl",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contacto</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente, necesitas colaboración o quieres conocer más sobre mis servicios? Me encantaría saber de ti.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="flex flex-col items-center text-center p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 smooth-transition card-lift group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 smooth-transition">
                <link.icon className="h-6 w-6 text-primary group-hover:scale-110 smooth-transition" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{link.label}</p>
              <p className="text-foreground font-medium break-all text-sm group-hover:text-primary smooth-transition">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="smooth-transition">
            <a href="mailto:nmartinez@grupo-oceanos.cl">
              <Mail className="h-5 w-5 mr-2" />
              Enviar mensaje directo
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
