import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BlogPostCardProps {
  title: string
  description: string
  date: string
  link: string
}

export function BlogPostCard({ title, description, date, link }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border border-secondary/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl font-bold text-foreground">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{date}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-base text-foreground/80 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-end pt-0">
        <Button asChild variant="link" className="px-0 text-secondary hover:text-secondary/80">
          <Link href={link}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
