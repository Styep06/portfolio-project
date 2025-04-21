import { Card, CardContent } from "@/components/ui/card"
import { Code2, FileCode, Smartphone, Terminal, Film } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      category: "Web Development",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      items: ["HTML", "CSS", "JavaScript"],
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      items: ["Flutter", "Dart"],
    },
    {
      category: "Programming Languages",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      items: ["Python", "C", "C++"],
    },
    {
      category: "Creative",
      icon: <Film className="h-6 w-6 text-primary" />,
      items: ["Video Editing", "Photography"],
    },
    {
      category: "Tools",
      icon: <FileCode className="h-6 w-6 text-primary" />,
      items: ["CapCut", "Filmora", "DaVinci Resolve", "VS Code", "Visual Studio", "Android Studio", "GitHub"],
    },
  ]

  return (
    <section id="skills" className="py-16 container">
      <h2 className="text-3xl font-bold text-center mb-12">Skills & Tools</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-medium ml-2">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
