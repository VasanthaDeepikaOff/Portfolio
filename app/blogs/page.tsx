import { BlogPostCard } from "@/components/blog-post-card"

// Dummy data for all blog posts
  const allBlogPosts = [
    {
      title: "Mastering CSS Container Queries: A New Era of Responsive Design",
      description:
        "Explore how container queries empower component-level responsiveness, eliminating the reliance on global breakpoints.",
      date: "July 30, 2025",
      link: "https://dev.to/vasanthadeepikaoff/mastering-css-container-queries-a-new-era-of-responsive-design-17o2",
    },
    {
      title: "Seamless Headless Drupal Integration with Next.js 15 (App Router)",
      description:
        "Learn how to integrate Drupal as a headless CMS with Next.js 15 using App Router and GraphQL for a decoupled architecture.",
      date: "March 24, 2025",
      link: "https://dev.to/vasanthadeepikaoff/seamless-headless-drupal-integration-with-nextjs-15-boost-performance-40f3",
    },
    {
      title: "Core Web Vitals: What They Are & How to Improve Your Site’s Performance",
      description:
        "Understand Google's Core Web Vitals and implement strategies to enhance performance and user experience.",
      date: "February 18, 2025",
      link: "https://dev.to/vasanthadeepikaoff/core-web-vitals-what-they-are-how-to-improve-your-sites-performance-3j42",
    },
  ]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 py-16 md:py-28 lg:py-36 bg-primary/10">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl mb-12 text-foreground">
            MY Blogs
          </h1>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {allBlogPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
