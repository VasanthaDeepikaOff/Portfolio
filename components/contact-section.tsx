import Link from "next/link" // Import Link for navigation
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Dribbble } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-28 lg:py-36 bg-background">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-12 text-primary">Get in Touch</h2>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 mx-auto items-center">
          <div className="space-y-8 text-left">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just connecting with fellow
              developers. Feel free to reach out through my social profiles or directly via email.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-7 w-7 text-primary flex-shrink-0" />
                <a href="mailto:vasantha.deepika@gmail.com" className="text-lg text-foreground hover:underline font-medium">
                  vasantha.deepika@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-7 w-7 text-primary flex-shrink-0" />
                <a href="tel:+916381344213" className="text-lg text-foreground hover:underline font-medium">
                  +91 63813 44213
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-7 w-7 text-primary flex-shrink-0" />
                <span className="text-lg text-foreground font-medium">Coimbatore, Tamilnadu, India</span>
              </div>
            </div>
          </div>
          <div className="space-y-6 bg-card p-8 rounded-xl shadow-lg border border-primary/20 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">Find Me Online</h3>
            <div className="flex flex-col gap-6 w-full max-w-xs">
              <Button asChild size="lg" className="h-14 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-md">
                <Link href="https://github.com/VasanthaDeepikaOff/" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 mr-3" /> GitHub
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-14 text-lg font-semibold bg-secondary hover:bg-secondary/90 shadow-md"
              >
                <Link href="https://www.linkedin.com/in/vasanth-deepika/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 mr-3" /> LinkedIn
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 text-lg font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent"
              >
                <Link href="https://www.drupal.org/u/vasantha-deepika" target="_blank" rel="noopener noreferrer">
                  Drupal
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
