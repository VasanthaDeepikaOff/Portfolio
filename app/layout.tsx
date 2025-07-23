import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header" // Import SiteHeader
import { SiteFooter } from "@/components/site-footer" // Import SiteFooter

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vasantha Deepika - Frontend Developer",
  description:
    "A seasoned Frontend Developer with 6+ years of experience building robust, scalable, and user-friendly web applications.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <SiteHeader /> {/* Global Header */}
            <main className="flex-1">
              {children}
            </main>
            <SiteFooter /> {/* Global Footer */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
