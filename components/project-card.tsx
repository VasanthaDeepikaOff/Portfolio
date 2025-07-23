import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  demoLink?: string
  githubLink?: string
  tags: string[]
}

export function ProjectCard({ title, description, imageUrl, demoLink, githubLink, tags }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border border-primary/20">
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg?height=300&width=500&query=abstract project screenshot"}
          alt={`Screenshot of ${title} project`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-3 text-left">
        <CardTitle className="text-2xl font-bold text-foreground">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-primary/15 text-primary rounded-full border border-primary/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-3 pt-0">
        {demoLink && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href={demoLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </Link>
          </Button>
        )}
        {githubLink && (
          <Button asChild size="sm" className="bg-secondary hover:bg-secondary/90">
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
