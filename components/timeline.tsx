import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const timelineItems = [
  {
    year: "Sep 2020 -- Jun 2025",
    role: "Bachelor of Science in Computer Science",
    company: "University of British Columbia",
    location: "Kelowna, BC",
    description: "Focus on Computer Science with a strong GPA of 87.7%. Relevant coursework includes Machine Learning, Data Structures and Algorithms, Computer Networking, and Software Engineering.",
    achievements: [
      "GPA: 87.7% with focus on Computer Science",
      "Relevant Coursework: Machine Learning, Data Structures and Algorithms, Computer Networking, Software Engineering, Object-Oriented Programming, Data Analysis, Parallel Programming, Machine Architecture",
      "Awards: Faculty of Science International Student Award, Deputy Vice-Chancellor Scholarship (2021-2023)",
    ],
  },
  {
    year: "August 2021 -- September 2021",
    role: "Orientation Leader",
    company: "University of British Columbia",
    location: "Kelowna, BC",
    description: "Facilitated interactive group activities and icebreakers for incoming students, fostering connections and helping them build a supportive community.",
    achievements: [
      "Facilitated interactive group activities and icebreakers for incoming students, fostering connections and helping them build a supportive community to ease their transition into university life",
      "Presented detailed information about university resources, including academic support, health services, and campus facilities, improving student awareness and access to essential support systems",
      "Collaborated with a team of orientation leaders to plan and execute welcoming events, ensuring a smooth and engaging onboarding experience for over 200 new students",
    ],
  },
  {
    year: "September 2021 -- April 2022",
    role: "Teaching Assistant, COSC 121 & DATA 101",
    company: "University of British Columbia",
    location: "Kelowna, BC",
    description: "Assisted students with R and Java lab assignments, providing code reviews and debugging support.",
    achievements: [
      "Assisted students with R and Java lab assignments, providing code reviews and debugging support",
      "Explained technical concepts during lab sessions, enhancing student understanding",
      "Graded assignments and provided feedback to improve coding and data analysis skills",
    ],
  },
  {
    year: "September 2023 -- September 2024",
    role: "Co-op Student, Network Engineering",
    company: "Acronym Solutions",
    location: "Toronto, ON",
    description: "Updated network diagrams to support optical network and data refresh projects, improving team reference materials.",
    achievements: [
      "Updated network diagrams to support optical network and data refresh projects, improving team reference materials",
      "Assisted in early-phase Passive Optical Network (PON) setup in a testing lab, contributing to configuration tasks",
      "Used CLI on UNIX/Linux systems to validate network data, ensuring accurate documentation",
      "Created documentation for Network Switch Replacement project, aiding team coordination",
    ],
  },
]

export default function Timeline() {
  return (
    <div className="relative max-w-6xl mx-auto px-4">
      {/* Center line - hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-px"></div>

      {/* Mobile timeline container with left border */}
      <div className="md:hidden timeline-mobile">
        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-card mobile-timeline-card">
              <Card className="hover-glow transition-all duration-300 hover:scale-105 card-gradient group border-l-4 border-l-primary/30 hover:border-l-primary/60">
                <CardContent className="p-4 sm:p-5">
                  <Badge variant="outline" className="mb-2 font-mono hover-glow text-xs">
                    {item.year}
                  </Badge>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {item.role}
                  </h3>
                  <p className="text-primary font-medium mb-1 text-sm sm:text-base">{item.company}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">{item.location}</p>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-1.5">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="text-xs sm:text-sm flex items-start gap-2 group/item">
                        <div className="h-1 w-1 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:bg-accent transition-colors duration-300"></div>
                        <span className="group-hover/item:text-primary transition-colors duration-300 leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop timeline */}
      <div className="hidden md:block space-y-16">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-row gap-12 ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            {/* Card Container */}
            <div className="w-1/2 flex justify-end">
              <div className={`w-full max-w-xl lg:max-w-2xl relative ${
                index % 2 === 0 ? "mr-20" : "ml-20"
              }`}>
                <Card className="hover-glow transition-all duration-300 hover:scale-105 card-gradient group border-l-4 border-l-primary/30 hover:border-l-primary/60">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3 font-mono hover-glow text-xs">
                      {item.year}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {item.role}
                    </h3>
                    <p className="text-primary font-medium mb-1 text-base">{item.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{item.location}</p>
                    <p className="text-base text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm flex items-start gap-2 group/item">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0 group-hover/item:bg-accent transition-colors duration-300"></div>
                          <span className="group-hover/item:text-primary transition-colors duration-300 leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Desktop: Center dot only - no horizontal lines to avoid overlap */}
            <div className="absolute left-1/2 top-8 transform -translate-x-1/2">
              {/* Center dot */}
              <div className="w-4 h-4 bg-primary border-4 border-background rounded-full z-10 shadow-lg"></div>
            </div>

            {/* Empty space for layout balance */}
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
