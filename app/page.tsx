import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code2, Database, Github, Linkedin, Mail, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProjectCard from "@/components/project-card"
import SkillGrid from "@/components/skill-grid"
import Timeline from "@/components/timeline"
import ThemeToggle from "@/components/theme-toggle"
import { getImagePath } from "@/lib/utils"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 w-full border-b border-border/40 backdrop-blur-sm z-50">
        <div className="container flex items-center justify-between h-20">
          <div className="font-mono text-xl font-bold">ALLAN.DEV</div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-base font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-base font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-base font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#journey" className="text-base font-medium hover:text-primary transition-colors">
              Journey
            </Link>
            <Link href="#contact" className="text-base font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container pt-28">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center -mt-28 pt-28 px-4 md:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                <Badge variant="outline" className="px-4 py-2 text-sm font-mono hover-glow hero-animate inline-block">
                  SOFTWARE ENGINEER
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight hero-animate-delay-1 leading-tight">
                  Hi, I'm <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Allan</span> Cheboiwo
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl hero-animate-delay-2 leading-relaxed">
                  Software engineer with a BSc in Computer Science and hands-on experience in full-stack development, backend systems, and network engineering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-6 hero-animate-delay-3 justify-center lg:justify-start">
                  <Button size="lg" asChild className="hover-glow text-lg px-8 py-6">
                    <Link href="#projects">
                      View Work <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="hover-glow text-lg px-8 py-6">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
                <div className="pt-4">
                  <Button variant="outline" size="lg" asChild className="hover-glow text-lg px-8 py-6">
                    <Link href={getImagePath("SD-TR.pdf")} target="_blank">
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[480px] lg:w-[400px] lg:h-[500px] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative group hero-animate-delay-2">
                      <Image
                        src={getImagePath("allan-profile.jpg")}
                        alt="Allan Cheboiwo"
                        width={400}
                        height={500}
                        className="rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105 object-cover w-full h-full"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/20 rounded-3xl group-hover:from-primary/20 group-hover:to-accent/30 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About/Expertise Section */}
        <section id="about" className="py-20 border-t border-border">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">About & Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Software engineer with a BSc in Computer Science (June 2025) and hands-on experience in full-stack development, backend systems, and network engineering. Proficient in Python, Java, JavaScript, and modern frameworks like React and FastAPI. Passionate about building scalable, efficient software solutions and collaborating on innovative projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="hover-glow transition-all duration-300 hover:scale-105 card-gradient">
                <CardContent className="pt-6">
                  <Code2 className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Full-Stack Development</h3>
                  <p className="text-muted-foreground">
                    Building end-to-end applications with Python, Java, JavaScript, and modern web frameworks like React and FastAPI.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-glow transition-all duration-300 hover:scale-105 card-gradient">
                <CardContent className="pt-6">
                  <Server className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Network Engineering</h3>
                  <p className="text-muted-foreground">
                    Familiar with the TCP/IP protocol suite, and other Computer Networking concepts.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-glow transition-all duration-300 hover:scale-105 card-gradient">
                <CardContent className="pt-6">
                  <Database className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Machine Learning & AI</h3>
                  <p className="text-muted-foreground">
                    Building ML models for computer vision, real-time tracking, and AI-powered applications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="py-20 border-t border-border">
          <div className="space-y-4 max-w-3xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              My core expertise spans multiple languages, frameworks, and platforms. I primarily use Python, Java, and JavaScript, with experience across many other languages and cutting-edge frameworks for professional development.
            </p>
          </div>
          <SkillGrid />
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20 border-t border-border">
          <div className="space-y-4 max-w-3xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              A selection of projects that demonstrate my technical capabilities across full-stack development, machine learning, and AI applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
              title="AI-Powered Resume Builder"
              description="Developed a full-stack web app with React and FastAPI to tailor resumes using OpenAI API for dynamic content generation. Engineered RESTful APIs with PostgreSQL and implemented LaTeX-based PDF generation."
              tags={["Next.js","Typescript", "FastAPI", "OpenAI"]}
              image={getImagePath("images/ai-resume-icon.svg")}
              link="https://github.com/COSC-499-W2024/capstone-project-group-11-002"
            />      
            <ProjectCard
              title="Multi-Object Tracking"
              description="Built a machine learning model for real-time pedestrian tracking using YOLOv8 and Kalman filtering. Integrated MiDaS for depth estimation on 2D datasets and optimized performance with PyTorch and OpenCV."
              tags={["PyTorch", "OpenCV", "YOLOv8", "MiDaS","Python"]}
              image={getImagePath("images/tracking-icon.svg")}
              link="https://github.com/COSC444-GROUP10/depthmot"
            />
            <ProjectCard
              title="Insurance Policy Checker"
              description="Co-developed a full-stack NLP-based application to automate insurance policy data comparison, reducing processing time. Implemented scalable backend with FastAPI and PostgreSQL, deployed via Docker for seamless integration and portability."
              tags={["FastAPI", "React", "PostgreSQL", "Docker"]}
              image={getImagePath("images/insurance-icon.svg")}
              link="https://github.com/COSC-499-W2024/capstone-project-group-11-002"
            />
          </div>
        </section>

        {/* Professional Journey Section */}
        <section id="journey" className="py-20 border-t border-border">
          <div className="space-y-4 max-w-3xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Professional Journey</h2>
            <p className="text-lg text-muted-foreground">
              My career path and key milestones that have shaped my expertise and approach to software development.
            </p>
          </div>
          <Timeline />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Interested in working together? Reach out to discuss potential projects or opportunities.
              </p>
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>kiplongeiallan@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <Link href="https://www.linkedin.com/in/allan-cheboiwo-1840b7209" className="hover:text-primary transition-colors">
                    linkedin.com/in/allan-cheboiwo
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <Link href="http://github.com/AllanCheboiwo" className="hover:text-primary transition-colors">
                    github.com/AllanCheboiwo
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-5 w-5 text-muted-foreground">📞</span>
                  <span>250-575-4126</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-5 w-5 text-muted-foreground">📍</span>
                  <span>Kelowna, BC, Canada</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Let's Connect</h3>
                <p className="text-lg text-muted-foreground">
                  Ready to discuss your next project? I'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <Button size="lg" asChild className="hover-glow">
                    <Link href="mailto:kiplongeiallan@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send me an email
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Click the button above to open your email client, or reach out to me directly at{" "}
                    <Link 
                      href="mailto:kiplongeiallan@gmail.com" 
                      className="text-primary hover:underline font-medium"
                    >
                      kiplongeiallan@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="font-mono text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Allan Cheboiwo • Built with passion and code
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="http://github.com/AllanCheboiwo">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/allan-cheboiwo-1840b7209">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:kiplongeiallan@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
