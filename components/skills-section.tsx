import { Code, Layout, Palette, GitBranch, Database, Cloud, Zap, TestTube, Smartphone, Eye, Gauge, Split, Component } from "lucide-react"

export function SkillsSection() {
  const skills = [
    { name: "HTML5 & CSS3", icon: <Palette className="h-8 w-8 text-primary" /> },
    { name: "JavaScript (ES6+)", icon: <Code className="h-8 w-8 text-primary" /> },
    { name: "SCSS / Sass", icon: <Palette className="h-8 w-8 text-primary" /> },
    { name: "jQuery", icon: <Code className="h-8 w-8 text-primary" /> },
    { name: "React", icon: <Code className="h-8 w-8 text-primary" /> },
    { name: "Next.js", icon: <Layout className="h-8 w-8 text-primary" /> },
    { name: "Tailwind CSS", icon: <Palette className="h-8 w-8 text-primary" /> },
    { name: "Bootstrap", icon: <Palette className="h-8 w-8 text-primary" /> },
    { name: "Drupal (Theming & Site Building)", icon: <Layout className="h-8 w-8 text-primary" /> },
    { name: "GraphQL", icon: <Zap className="h-8 w-8 text-primary" /> },
    { name: "Unit Testing", icon: <TestTube className="h-8 w-8 text-primary" /> },
    { name: "Git & GitHub/GitLab", icon: <GitBranch className="h-8 w-8 text-primary" /> },
    { name: "Gulp & Webpack", icon: <Zap className="h-8 w-8 text-primary" /> },
    { name: "Figma", icon: <Layout className="h-8 w-8 text-primary" /> },
    { name: "DDEV / Docker / Lando", icon: <Cloud className="h-8 w-8 text-primary" /> },
    { name: "Web Accessibility (WCAG)", icon: <Eye className="h-8 w-8 text-primary" /> },
    { name: "Site Performance Optimization", icon: <Gauge className="h-8 w-8 text-primary" /> },
    { name: "Responsive Design", icon: <Smartphone className="h-8 w-8 text-primary" /> },
    { name: "Drupal Decoupled (Next.js)", icon: <Split className="h-8 w-8 text-primary" /> },
    { name: "Atomic Design Methodology", icon: <Component className="h-8 w-8 text-primary" /> },

  ]

  return (
    <section id="skills" className="w-full py-16 md:py-28 lg:py-36 bg-secondary/10">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-12 text-foreground">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary/20"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-semibold text-foreground">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
