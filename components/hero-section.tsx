import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-primary/10 to-background"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Subtle geometric pattern */}
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
          <defs>
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="hsl(var(--primary))" />
            </pattern>
          </defs>
        </svg>
      </div>
      <div className="container px-4 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
            Hi, I'm <div className="text-primary drop-shadow-lg">Vasantha Deepika</div>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            A <span className="font-semibold text-primary">seasoned Frontend Developer</span> with 6+ years of
            experience building robust, scalable, and user-friendly web applications. I specialize in React, Next.js,
            and modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <Button
              asChild
              size="lg"
              className="px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="#projects">Explore My Work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
            >
              <Link href="#contact">Let's Connect</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
