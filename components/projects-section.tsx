import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  const projects = [
    {
      title: "Bounty42 - Decoupled Drupal Platform",
      description:
        "Developed a decoupled web application using Next.js and Drupal, integrating GraphQL for dynamic content retrieval and improved performance.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoLink: "#",
      githubLink: "#",
      tags: ["Next.js", "GraphQL", "Drupal", "Tailwind CSS", "Decoupled Architecture"],
    },
    {
      title: "Nicotinell Websites",
      description:
        "Built and maintained six responsive Drupal websites for Nicotinell, offering comprehensive resources for smoking cessation and NRT product details.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoLink: "#",
      githubLink: "#",
      tags: ["Drupal", "Twig", "Tailwind CSS", "Accessibility", "Responsive Design"],
    },
    {
      title: "NASDAQ Local Navigation",
      description:
        "Enhanced NASDAQ's digital experience by implementing a flexible Bento menu navigation to support various business requirements.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoLink: "#",
      githubLink: "#",
      tags: ["Drupal", "JavaScript", "Atomic Design", "Accessibility", "Site Studio"],
    },
    {
      title: "Apex Tools E-commerce Platform",
      description:
        "Built a scalable multi-brand e-commerce system for tools like Weller, Cleco, and Gearwrench with customized product categories and role-based controls.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoLink: "#",
      githubLink: "#",
      tags: ["Drupal", "Twig", "SCSS", "Commerce", "Role-Based Access"],
    },
    {
      title: "ICTSI Digital Platform",
      description:
        "Developed a responsive digital platform for ICTSI to manage and showcase global terminal operations, optimized for performance and usability.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoLink: "#",
      githubLink: "#",
      tags: ["Drupal", "Performance Optimization", "JavaScript", "Responsive UI"],
    },
    {
      title: "CARIN Business Media Site",
      description:
        "Contributed to the frontend development of a digital and print media platform delivering up-to-date business news.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoLink: "#",
      githubLink: "#",
      tags: ["Drupal", "Twig", "Theming", "Responsive Design"],
    },
    {
      title: "Devanga Kula Matrimony",
      description:
        "Built a culturally tailored matchmaking platform with multilingual support and modern user interface for Kannada Devangar communities.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoLink: "#",
      githubLink: "#",
      tags: ["Drupal", "Custom Theme", "Multilingual", "Responsive UI"],
    },
    {
      title: "Sinter Machines",
      description:
        "Developed a responsive corporate site for Sinter Machines to highlight its full-cycle production line in India’s manufacturing industry.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoLink: "#",
      githubLink: "#",
      tags: ["Drupal", "Theming", "Responsive Design", "SEO"],
    },
    {
      title: "Drupal Theme Library",
      description:
        "Created a reusable set of professional Drupal themes like Charity Pro, Elastic Lite, and Spot Lite for use across business and personal sites.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoLink: "#",
      githubLink: "#",
      tags: ["Drupal", "Pattern Lab", "Component Design", "Atomic Design"],
    }
  ]
  // Add more projects as needed

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
