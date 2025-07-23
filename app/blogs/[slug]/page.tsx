import { notFound } from "next/navigation"
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog-data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

// This function tells Next.js which slugs to pre-render at build time
export async function generateStaticParams() {
  return getAllBlogSlugs()
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound() // If no post is found for the slug, show a 404 page
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-16 md:py-28 lg:py-36 bg-primary/10">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-8 text-lg font-medium">
            <ChevronLeft className="h-5 w-5 mr-2" /> Back to all posts
          </Link>
          <article className="bg-card p-8 rounded-xl shadow-lg border border-primary/20">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-foreground text-balance">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">{post.date}</p>
            <div
              className="prose prose-lg dark:prose-invert max-w-none text-foreground/90"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
