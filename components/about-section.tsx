export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-28 lg:py-36 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">About Me</h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              With over <span className="font-semibold text-primary">6 years of dedicated experience</span> in frontend
              development, I have a proven track record of delivering high-quality, performant, and accessible web
              solutions. My expertise spans across modern JavaScript frameworks like{" "}
              <span className="font-medium text-foreground">React</span> and{" "}
              <span className="font-medium text-foreground">Next.js</span>, state management libraries, and building
              responsive user interfaces with technologies like{" "}
              <span className="font-medium text-foreground">Tailwind CSS</span>. I am passionate about creating
              intuitive user experiences and writing clean, maintainable code.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              I thrive in collaborative environments and am always eager to learn new technologies and best practices to
              push the boundaries of web development. My goal is to build web applications that are not only functional
              but also delightful to use.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/placeholder.svg?height=450&width=450"
              width={450}
              height={450}
              alt="John Doe"
              className="rounded-full object-cover aspect-square border-4 border-primary shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
