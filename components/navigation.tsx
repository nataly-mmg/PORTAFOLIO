"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#caso-estudio", label: "Caso de Estudio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#tecnologias", label: "Tech" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
        scrolled
          ? "bg-background/60 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with avatar */}
          <a
            href="#inicio"
            className="flex items-center gap-3 hover:opacity-80 smooth-transition"
          >
            <div className="w-10 h-10 rounded-full border-2 border-primary/50 overflow-hidden glow-accent flex-shrink-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/naty-MdnkXL6csBZaqO2nuYDkJQixcC7XKm.png"
                alt="NMG"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-semibold text-foreground hidden sm:inline">
              Nataly Martínez
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground smooth-transition border-b-2 border-transparent hover:border-primary/50"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="ml-6 smooth-transition">
              <a href="#cv">Ver CV</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/40 backdrop-blur">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground smooth-transition rounded-lg hover:bg-muted/50"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild size="sm" className="mt-4 w-full">
                <a href="#cv" onClick={() => setIsOpen(false)}>
                  Ver CV
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
