import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] px-4 py-12 text-center bg-background">
      <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-bold text-foreground mb-6">Page Not Found</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Button
        asChild
        size="lg"
        className="px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Link href="/">Go to Homepage</Link>
      </Button>
    </div>
  )
}
