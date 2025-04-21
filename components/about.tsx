import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Camera, Code, Film } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8">
            Hey there! I'm Stephen Edwin Nadar — a passionate creator who loves gaming, watching anime, and capturing
            the world through my lens. Photography has become a big part of my creative journey, and I'm always hunting
            for that perfect candid moment or breathtaking landscape.
          </p>
          <p className="text-lg mb-10">
            I blend my love for tech and creativity through web development, app building, and video editing. Whether
            I'm editing a reel, writing code, or exploring new tech, I'm all about learning, improving, and having fun
            while doing it.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Gamepad2 className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-medium">Gaming</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Camera className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-medium">Photography</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Code className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-medium">Coding</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Film className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-medium">Video Editing</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
