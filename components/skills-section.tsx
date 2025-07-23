import { Code, Layout, Palette, GitBranch, Database, Cloud, Zap, TestTube } from "lucide-react"

export function SkillsSection() {
  const skills = [
    { name: "React", icon: <Code className="h-8 w-8 text-primary" /> },
    { name: "Next.js", icon: <Layout className="h-8 w-8 text-primary" /> },
    { name: "TypeScript", icon: <Code className="h-8 w-8 text-primary" /> },
    { name: "JavaScript (ES6+)", icon: <Code className="h-8 w-8 text-primary" /> },
    { name: "Tailwind CSS", icon: <Palette className="h-8 w-8 text-primary" /> },
    { name: "HTML5 & CSS3", icon: <Palette className="h-8 w-8 text-primary" /> },
    { name: "Git & GitHub", icon: <GitBranch className="h-8 w-8 text-primary" /> },
    { name: "RESTful APIs", icon: <Zap className="h-8 w-8 text-primary" /> },
    { name: "GraphQL", icon: <Zap className="h-8 w-8 text-primary" /> },
    { name: "SQL/NoSQL", icon: <Database className="h-8 w-8 text-primary" /> },
    { name: "AWS/Vercel", icon: <Cloud className="h-8 w-8 text-primary" /> },
    { name: "Unit Testing", icon: <TestTube className="h-8 w-8 text-primary" /> },
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
