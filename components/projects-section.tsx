import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product listings, shopping cart, and checkout functionality.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoLink: "#",
      githubLink: "#",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    },
    {
      title: "Task Management App",
      description:
        "An intuitive task management tool with drag-and-drop functionality, real-time updates, and user collaboration features.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoLink: "#",
      githubLink: "#",
      tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Socket.io"],
    },
    {
      title: "Personal Blog & CMS",
      description:
        "A custom blog platform with a headless CMS integration for easy content management and dynamic routing.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoLink: "#",
      githubLink: "#",
      tags: ["Next.js", "GraphQL", "Strapi", "Tailwind CSS", "Vercel"],
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application displaying current conditions and forecasts using a third-party API.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoLink: "#",
      githubLink: "#",
      tags: ["React", "API Integration", "CSS Modules", "Responsive Design"],
    },
  ]

  return (
    <section id="projects" className="w-full py-16 md:py-28 lg:py-36 bg-background">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-12 text-primary">My Projects</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
