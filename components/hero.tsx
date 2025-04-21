import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="py-24 md:py-32 container">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Hi, I'm <span className="text-primary">Stephen Edwin Nadar</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">Creative Web Developer</p>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Passionate about gaming, anime, photography, and building amazing web experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="#projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
