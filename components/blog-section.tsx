import { BlogPostCard } from "@/components/blog-post-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Optimizing React Performance with Memoization",
      description: "A deep dive into `React.memo`, `useMemo`, and `useCallback` for improving application speed.",
      date: "July 15, 2024",
      link: "#",
    },
    {
      title: "Getting Started with Next.js Server Components",
      description: "An introduction to the new paradigm of Server Components in Next.js 13+ and their benefits.",
      date: "June 28, 2024",
      link: "#",
    },
    {
      title: "Building Accessible Forms in Web Applications",
      description: "Best practices and techniques for creating inclusive and accessible forms for all users.",
      date: "May 10, 2024",
      link: "#",
    },
  ]

  return (
    <section id="blog" className="w-full py-16 md:py-28 lg:py-36 bg-primary/10">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-12 text-foreground">
          Latest Blog Posts
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
        <div className="mt-16">
          <Button
            asChild
            size="lg"
            className="px-8 py-3 text-lg font-semibold bg-secondary hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="#">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
