"use client" // Error components must be Client Components

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] px-4 py-12 text-center bg-background">
      <h1 className="text-6xl font-extrabold text-destructive mb-4">Error</h1>
      <h2 className="text-3xl font-bold text-foreground mb-6">Something went wrong!</h2>
      <p className="text-lg text-muted-foreground mb-8">We apologize for the inconvenience. Please try again later.</p>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        size="lg"
        className="px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
      >
        Try again
      </Button>
    </div>
  )
}
