import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"

export default function Projects() {
  return (
    <section id="projects" className="py-16 container">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="mb-2">
              <Smartphone className="h-10 w-10 text-primary" />
            </div>
            <CardTitle>Delivery App</CardTitle>
            <CardDescription>Mobile app built with Flutter and Dart</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A basic mobile delivery app built using Flutter and Dart. This project was my first step into app
              development. I kept things simple and focused on clean syntax and functional UI.
            </p>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2">
            <Badge>Flutter</Badge>
            <Badge>Dart</Badge>
            <Badge>Mobile</Badge>
          </CardFooter>
        </Card>

        {/* Placeholder for future projects */}
        <Card className="border border-dashed">
          <CardHeader>
            <CardTitle className="text-muted-foreground">Future Project</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">More exciting projects coming soon! Stay tuned for updates.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" disabled>
              Coming Soon
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
