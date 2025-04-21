import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, School, Building } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "FRCRCE",
      degree: "B.Tech in Computer Engineering",
      period: "Currently Pursuing",
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
    },
    {
      institution: "Nirmala Junior College",
      degree: "12th Grade",
      period: "Completed with 83%",
      icon: <Building className="h-10 w-10 text-primary" />,
    },
    {
      institution: "St. Anne's High School",
      degree: "10th Grade",
      period: "Completed with 83%",
      icon: <School className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="education" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {education.map((item, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                {item.icon}
                <div>
                  <CardTitle className="text-lg">{item.institution}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{item.degree}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
