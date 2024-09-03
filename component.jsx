/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RK4XgX6AlyS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <div className={`flex flex-col min-h-[100dvh] ${theme === "dark" ? "dark" : ""}`}>
      <header className="bg-background px-4 lg:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CodeIcon className="w-6 h-6" />
            <span className="text-xl font-bold">John Doe</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Projects
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Skills
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Experience
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Testimonials
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="lg:hidden" onClick={toggleTheme}>
            {theme === "light" ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
            <span className="text-muted-foreground text-sm font-bold">{new Date().toLocaleTimeString()}</span>
          </div>
          <Button variant="outline" size="sm" className="lg:hidden">
            <MenuIcon className="w-5 h-5" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="hero"
          className={`bg-muted py-12 md:py-24 lg:py-32 ${
            theme === "dark" ? "bg-background text-primary-foreground" : ""
          }`}
        >
          <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Welcome to my Portfolio</h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I'm a web developer with a passion for creating beautiful and functional websites. Check out my work and
              let's connect!
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get in Touch
            </Link>
          </div>
        </section>
        <section
          id="about"
          className={`py-12 md:py-24 lg:py-32 ${theme === "dark" ? "bg-background text-primary-foreground" : ""}`}
        >
          <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <img
                src="/placeholder.svg"
                width="400"
                height="400"
                alt="John Doe"
                className="mx-auto rounded-full"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
              <p className="text-muted-foreground md:text-xl">
                Hi, I'm John Doe, a passionate web developer with over 5 years of experience. I specialize in creating
                beautiful and functional websites using the latest technologies and best practices.
              </p>
              <p className="text-muted-foreground md:text-xl">
                I have a strong background in front-end development, with expertise in HTML, CSS, JavaScript, and
                popular frameworks like React. I'm also skilled in back-end development, having worked with various
                server-side technologies.
              </p>
              <p className="text-muted-foreground md:text-xl">
                In my free time, I enjoy exploring new technologies, contributing to open-source projects, and staying
                up-to-date with the latest industry trends. I'm always eager to learn and take on new challenges.
              </p>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className={`py-12 md:py-24 lg:py-32 ${theme === "dark" ? "bg-background text-primary-foreground" : ""}`}
        >
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of the projects I've worked on. From web applications to e-commerce sites, I've got you
                covered.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                />
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="text-muted-foreground">
                    A web application that helps users manage their tasks and projects.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 2"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                />
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Project 2</h3>
                  <p className="text-muted-foreground">An e-commerce website that sells handmade products.</p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 3"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                />
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Project 3</h3>
                  <p className="text-muted-foreground">A blog website that showcases my writing and thoughts.</p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="skills"
          className={`bg-muted py-12 md:py-24 lg:py-32 ${
            theme === "dark" ? "bg-background text-primary-foreground" : ""
          }`}
        >
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm proficient in a variety of technologies and frameworks, including HTML, CSS, JavaScript, React, and
                more.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-2">
                <HashIcon className="w-12 h-12" />
                <h3 className="text-xl font-bold">HTML</h3>
                <p className="text-muted-foreground">Proficient in writing semantic and accessible HTML.</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <CodepenIcon className="w-12 h-12" />
                <h3 className="text-xl font-bold">CSS</h3>
                <p className="text-muted-foreground">
                  Skilled in creating responsive and visually appealing designs using CSS.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <CodepenIcon className="w-12 h-12" />
                <h3 className="text-xl font-bold">JavaScript</h3>
                <p className="text-muted-foreground">Proficient in writing clean and efficient JavaScript code.</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <CodepenIcon className="w-12 h-12" />
                <h3 className="text-xl font-bold">React</h3>
                <p className="text-muted-foreground">
                  Experienced in building dynamic and scalable web applications using React.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className={`py-12 md:py-24 lg:py-32 ${theme === "dark" ? "bg-background text-primary-foreground" : ""}`}
        >
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Experience</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I've had the opportunity to work with a variety of clients and projects, gaining valuable experience
                along the way.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Web Developer</h3>
                  <p className="text-muted-foreground">Acme Inc. | Jan 2020 - Present</p>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                    <li>Developed and maintained responsive and user-friendly websites for clients.</li>
                    <li>Collaborated with designers and project managers to ensure project requirements were met.</li>
                    <li>Implemented and optimized front-end performance using best practices.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Freelance Web Developer</h3>
                  <p className="text-muted-foreground">Jan 2018 - Dec 2019</p>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                    <li>Worked with a variety of clients to build custom websites and web applications.</li>
                    <li>Provided ongoing maintenance and support for existing websites.</li>
                    <li>Gained experience in project management and client communication.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-muted-foreground">Bachelor of Science in Computer Science</p>
                  <p className="text-muted-foreground">University of California, Berkeley | 2014 - 2018</p>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                    <li>Graduated with a 3.8 GPA.</li>
                    <li>Participated in various hackathons and coding competitions.</li>
                    <li>Completed several internships in the tech industry.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function HashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}