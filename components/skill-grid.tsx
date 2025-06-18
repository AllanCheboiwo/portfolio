import { Card, CardContent } from "@/components/ui/card"

// Updated skills to match Allan's resume
const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "SQL", "C", "PHP", "R"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["FastAPI", "Django", "React", "Node.js", "Spring", "PyTorch", "OpenCV", "NumPy", "Pandas"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  },
  {
    category: "Tools",
    items: ["Docker", "Git", "Jenkins", "AWS", "GitHub"],
  },
  {
    category: "Concepts",
    items: ["RESTful APIs", "Microservices", "CI/CD", "Agile Methodologies", "Test-Driven Development"],
  },
  {
    category: "Soft Skills",
    items: ["Team Collaboration", "Problem-Solving", "Communication", "Time Management"],
  },
]

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skillGroup) => (
        <Card key={skillGroup.category} className="overflow-hidden hover-glow transition-all duration-300 hover:scale-105 card-gradient">
          <div className="bg-primary/10 border-b border-border p-4 group-hover:bg-primary/20 transition-colors duration-300">
            <h3 className="font-bold text-lg">{skillGroup.category}</h3>
          </div>
          <CardContent className="p-4">
            <ul className="grid grid-cols-2 gap-2">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2 group">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full group-hover:bg-accent transition-colors duration-300"></div>
                  <span className="text-sm group-hover:text-primary transition-colors duration-300">{skill}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
