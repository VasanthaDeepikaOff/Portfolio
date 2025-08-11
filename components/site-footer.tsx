import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full py-10 bg-foreground text-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Vasantha Deepika. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="https://github.com/vasanthdeepika" className="text-gray-400 hover:text-primary transition-colors" aria-label="GitHub">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/vasanth-deepika/" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
