"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 pt-24 pb-12 overflow-hidden"
    >
      {/* Background image - oceanic/stellar atmosphere */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%202%20abr%202026%2C%2007_36_37%20p.m.-4sBswQUMT5rnEy0fdqslLOH9jm5Wz6.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Subtle overlay for better text readability */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(8, 17, 31, 0.3) 0%, rgba(13, 27, 42, 0.2) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Typography ── */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <p
              className="opacity-0 animate-fade-in mb-5 text-[14px] font-semibold uppercase tracking-[0.1em]"
              style={{ color: "#7FC8FF" }}
            >
              Ingeniería Naval · Software · Automatización
            </p>

            {/* Name */}
            <h1
              className="opacity-0 animate-fade-in animation-delay-100 mb-6 font-extrabold leading-[1.0] tracking-[-0.03em]"
              style={{
                fontSize: "clamp(48px, 6.5vw, 72px)",
                color: "#F5F7FA",
              }}
            >
              Nataly Martínez{" "}
              <span style={{ color: "#4DA3FF" }}>Gallardo</span>
            </h1>

            {/* Subtitle */}
            <p
              className="opacity-0 animate-fade-in animation-delay-200 mb-8 font-[500]"
              style={{
                fontSize: "clamp(18px, 1.8vw, 24px)",
                color: "#DCE7F3",
              }}
            >
              Ingeniera Naval | Project Manager | Python &amp; Django Developer
            </p>

            {/* Main phrase */}
            <p
              className="opacity-0 animate-fade-in animation-delay-300 mb-5 font-[500] leading-snug"
              style={{
                fontSize: "clamp(18px, 2.1vw, 28px)",
                color: "#DCE7F3",
              }}
            >
              <span style={{ color: "#7FC8FF", fontWeight: 700 }}>
                Digitalizo procesos navales
              </span>{" "}
              mediante software, automatización y soluciones técnicas aplicadas.
            </p>

            {/* Support text */}
            <p
              className="opacity-0 animate-fade-in animation-delay-300 mb-10 font-normal leading-relaxed"
              style={{
                fontSize: "clamp(14px, 1.1vw, 17px)",
                color: "#B8C4D3",
                lineHeight: "1.6",
              }}
            >
              Ingeniera Naval con más de 10 años de experiencia, desarrollando
              herramientas digitales para resolver necesidades reales del sector
              marítimo.
            </p>

            {/* ── Buttons ── */}
            <div className="opacity-0 animate-fade-in animation-delay-400 flex flex-wrap items-center gap-4 mb-12">
              {/* Primary */}
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center font-semibold text-white smooth-transition"
                style={{
                  backgroundColor: "#4DA3FF",
                  borderRadius: "12px",
                  padding: "14px 26px",
                  fontSize: "15px",
                  lineHeight: 1,
                  transition: "background-color 0.25s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#6AB6FF")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#4DA3FF")
                }
              >
                Ver proyectos
              </a>

              {/* Secondary */}
              <a
                href="#cv"
                className="inline-flex items-center justify-center font-medium smooth-transition"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: "12px",
                  padding: "14px 26px",
                  fontSize: "15px",
                  lineHeight: 1,
                  color: "#DCE7F3",
                  transition: "border-color 0.25s ease, color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.32)"
                  ;(e.currentTarget as HTMLAnchorElement).style.color = "#F5F7FA"
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.18)"
                  ;(e.currentTarget as HTMLAnchorElement).style.color = "#DCE7F3"
                }}
              >
                Descargar CV
              </a>

              {/* Ghost */}
              <a
                href="#contacto"
                className="inline-flex items-center justify-center font-medium smooth-transition"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: "12px",
                  padding: "14px 26px",
                  fontSize: "15px",
                  lineHeight: 1,
                  color: "#DCE7F3",
                  transition: "border-color 0.25s ease, color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.32)"
                  ;(e.currentTarget as HTMLAnchorElement).style.color = "#F5F7FA"
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.18)"
                  ;(e.currentTarget as HTMLAnchorElement).style.color = "#DCE7F3"
                }}
              >
                Contacto
              </a>
            </div>

            {/* Social icons */}
            <div className="opacity-0 animate-fade-in animation-delay-400 flex items-center gap-6">
              <a
                href="https://github.com/NatalyMartinezG"
                target="_blank"
                rel="noopener noreferrer"
                className="smooth-transition"
                style={{ color: "#B8C4D3", transition: "color 0.25s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#7FC8FF")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#B8C4D3")}
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/natalymartinezgallardo/"
                target="_blank"
                rel="noopener noreferrer"
                className="smooth-transition"
                style={{ color: "#B8C4D3", transition: "color 0.25s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#7FC8FF")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#B8C4D3")}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:nataly.martinez.gdo@gmail.com"
                className="smooth-transition"
                style={{ color: "#B8C4D3", transition: "color 0.25s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#7FC8FF")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#B8C4D3")}
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* ── Right: Professional photo ── */}
          <div className="opacity-0 animate-fade-in animation-delay-200 relative flex items-center justify-center min-h-[480px] lg:min-h-[580px]">
            <div className="relative w-full max-w-md">
              {/* Very soft background depth wash behind image */}
              <div
                className="absolute inset-0 rounded-2xl -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(22, 48, 76, 0.4) 0%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />

              {/* Image frame */}
              <div className="relative rounded-2xl overflow-hidden frame-border">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nataly-yfcrEFPs5lIlWqYRu9wUCz9r70GFdp.png"
                  alt="Nataly Martínez Gallardo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Accent corner lines – very faint */}
              <div
                className="absolute -top-3 -right-3 w-20 h-20 rounded-lg -z-10"
                style={{ border: "1px solid rgba(127, 200, 255, 0.12)" }}
              />
              <div
                className="absolute -bottom-3 -left-3 w-28 h-28 rounded-2xl -z-10"
                style={{ border: "1px solid rgba(127, 200, 255, 0.08)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre-mi"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce smooth-transition"
        style={{ color: "#B8C4D3", transition: "color 0.25s ease" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#7FC8FF")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#B8C4D3")}
        aria-label="Scroll to next section"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}

