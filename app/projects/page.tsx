import { BlogPostCard } from "@/components/blog-post-card"

// Dummy data for all blog posts
const allBlogPosts = [
  {
    title: "Optimizing React Performance with Memoization",
    description:
      "A deep dive into `React.memo`, `useMemo`, and `useCallback` for improving application speed and efficiency.",
    date: "July 15, 2024",
    link: "/blog/optimizing-react-performance",
  },
  {
    title: "Getting Started with Next.js Server Components",
    description:
      "An introduction to the new paradigm of Server Components in Next.js 13+ and their benefits for modern web development.",
    date: "June 28, 2024",
    link: "/blog/nextjs-server-components",
  },
  {
    title: "Building Accessible Forms in Web Applications",
    description:
      "Best practices and techniques for creating inclusive and accessible forms for all users, enhancing user experience.",
    date: "May 10, 2024",
    link: "/blog/accessible-forms",
  },
  {
    title: "CSS-in-JS vs. Tailwind CSS: A Modern Comparison",
    description: "Exploring the pros and cons of two popular styling approaches in contemporary frontend development.",
    date: "April 22, 2024",
    link: "/blog/css-in-js-vs-tailwind",
  },
  {
    title: "Understanding JavaScript Closures",
    description: "A fundamental concept in JavaScript, closures allow functions to remember their lexical environment.",
    date: "March 5, 2024",
    link: "/blog/javascript-closures",
  },
  {
    title: "State Management in React: A Comprehensive Guide",
    description:
      "Comparing various state management patterns and libraries like Redux, Zustand, and React Context API.",
    date: "February 18, 2024",
    link: "/blog/react-state-management",
  },
  {
    title: "Implementing Dark Mode in Next.js with Tailwind CSS",
    description: "Step-by-step guide to adding a dark mode toggle to your Next.js application using Tailwind CSS.",
    date: "January 30, 2024",
    link: "/blog/dark-mode-nextjs",
  },
  {
    title: "Web Performance Optimization Techniques",
    description: "Strategies and tools to improve the loading speed and responsiveness of your web applications.",
    date: "December 12, 2023",
    link: "/blog/web-performance-optimization",
  },
]

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 py-16 md:py-28 lg:py-36 bg-primary/10">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl mb-12 text-foreground">
            All Projects
          </h1>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allBlogPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
