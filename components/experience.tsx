import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Film } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-16 container">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Briefcase className="h-10 w-10 text-primary" />
            <div>
              <CardTitle>Sales-Based Tech Firm</CardTitle>
              <CardDescription>2 Months</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>Worked for 2 months at a sales-based tech firm — helped me sharpen my communication skills.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Film className="h-10 w-10 text-primary" />
            <div>
              <CardTitle>Freelance Video Editor</CardTitle>
              <CardDescription>Ongoing</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>Freelance video editing for content creators and friends.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
