import { Card, CardContent } from "@/components/ui/card"
import { Target } from "lucide-react"

export default function Vision() {
  return (
    <section id="vision" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">My Vision</h2>

        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <Target className="h-16 w-16 text-primary" />
            </div>
            <p className="text-xl italic">
              "I'm an engineer who understands what the world wants — and I'm on a mission to build and deliver what
              people need."
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
