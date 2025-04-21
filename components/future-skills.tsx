import { Card, CardContent } from "@/components/ui/card"

export default function FutureSkills() {
  const skills = [
    {
      name: "React.js",
      icon: "/placeholder.svg?height=80&width=80",
      description: "JavaScript library for building user interfaces",
    },
    {
      name: "Tailwind CSS",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Utility-first CSS framework",
    },
    {
      name: "Bootstrap",
      icon: "/placeholder.svg?height=80&width=80",
      description: "CSS framework for responsive websites",
    },
    {
      name: "Angular",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Platform for building mobile & desktop web applications",
    },
    {
      name: "Vue.js",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Progressive JavaScript framework",
    },
    {
      name: "Node.js",
      icon: "/placeholder.svg?height=80&width=80",
      description: "JavaScript runtime built on Chrome's V8 engine",
    },
    {
      name: "Java",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Object-oriented programming language",
    },
    {
      name: "PHP",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Server-side scripting language",
    },
    {
      name: "Django",
      icon: "/placeholder.svg?height=80&width=80",
      description: "High-level Python web framework",
    },
    {
      name: "Flask",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Micro web framework for Python",
    },
    {
      name: "MongoDB",
      icon: "/placeholder.svg?height=80&width=80",
      description: "NoSQL database program",
    },
    {
      name: "PostgreSQL",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Open source object-relational database system",
    },
    {
      name: "Sketch",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Vector graphics editor",
    },
    {
      name: "Figma",
      icon: "/placeholder.svg?height=80&width=80",
      description: "Collaborative interface design tool",
    },
  ]

  return (
    <section id="future-skills" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Future Skills</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Technologies I'm planning to learn and master in the near future
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <Card key={index} className="overflow-hidden border-none bg-card/60 hover:bg-card/80 transition-colors">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="max-w-full max-h-full" />
                </div>
                <h3 className="font-medium text-sm">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
