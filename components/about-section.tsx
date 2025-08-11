export function AboutSection() {
  return (
    // <section id="about" className="w-full py-16 md:py-28 lg:py-36 bg-background">
    //   <div className="container px-4 md:px-6">
    //     <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
    //       <div className="space-y-6">
    //         <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">About Me</h2>
    //         <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
    //           With over <span className="font-semibold text-primary">6 years of dedicated experience</span> in frontend
    //           development, I have a proven track record of delivering high-quality, performant, and accessible web
    //           solutions. My expertise spans across modern JavaScript frameworks like{" "}
    //           <span className="font-medium text-foreground">React</span> and{" "}
    //           <span className="font-medium text-foreground">Next.js</span>, state management libraries, and building
    //           responsive user interfaces with technologies like{" "}
    //           <span className="font-medium text-foreground">Tailwind CSS</span>. I am passionate about creating
    //           intuitive user experiences and writing clean, maintainable code.
    //         </p>
    //         <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
    //           I thrive in collaborative environments and am always eager to learn new technologies and best practices to
    //           push the boundaries of web development. My goal is to build web applications that are not only functional
    //           but also delightful to use.
    //         </p>
    //       </div>
    //       <div className="flex justify-center lg:justify-end">
    //         <img
    //           src="/placeholder.svg?height=450&width=450"
    //           width={450}
    //           height={450}
    //           alt="John Doe"
    //           className="rounded-full object-cover aspect-square border-4 border-primary shadow-2xl transform hover:scale-105 transition-transform duration-300"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="about" className="w-full py-16 md:py-28 lg:py-36 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary text-center lg:text-left">About Me</h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              With over <span className="font-semibold text-primary">6 years of experience</span> building responsive, accessible, and user-centric web applications. My journey spans across custom web development, <span className="font-medium text-foreground">Drupal site building and theming, and decoupled architectures using Next.js</span>.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Skilled in <span className="font-medium text-foreground">HTML, CSS, JavaScript, SCSS, jQuery, Tailwind CSS</span> and modern frontend tools like <span className="font-medium text-foreground">Gulp, Webpack, Git</span>, and <span className="font-medium text-foreground">Figma</span>, I’ve worked on enterprise-level projects including Nasdaq, Apex Tools, and Nicotinell across companies like <span className="font-medium text-foreground">QED42</span> and <span className="font-medium text-foreground">Srijan</span>. I’m passionate about performance optimization, accessibility, and clean code practices.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              I enjoy solving complex UI challenges, collaborating with cross-functional teams, and mentoring peers. I believe in continuous learning, and I'm always keen to explore evolving frontend ecosystems and AI-assisted development workflows.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <img
              src="/VasanthaDeepika.jpg?height=550&width=550"
              width={550}
              height={550}
              alt="Vasantha Deepika"
              className="rounded-full object-cover aspect-square border-4 border-primary shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>

  )
}
