import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number; // 0-100
  color: string; // tailwind gradient end classes
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  // Updated to align with your CV screenshots: React, Vue/Quasar, Laravel/Filament, Spring Boot,
  // MySQL, Docker, AWS, GitHub, Postman, VS Code, Tailwind CSS, JWT, etc.
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        {
          name: "JavaScript",
          level: 90,
          color: "from-yellow-400 to-yellow-500",
        },
        { name: "PHP", level: 85, color: "from-indigo-500 to-indigo-600" },
        { name: "Java", level: 80, color: "from-orange-500 to-orange-600" },
        { name: "C / C++", level: 70, color: "from-gray-500 to-gray-600" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Vue.js", level: 90, color: "from-emerald-500 to-emerald-600" },
        { name: "Quasar", level: 78, color: "from-purple-500 to-purple-600" },
        { name: "React", level: 85, color: "from-cyan-500 to-cyan-600" },
        { name: "Next.js", level: 75, color: "from-sky-500 to-sky-600" },
        { name: "Laravel", level: 90, color: "from-red-500 to-red-600" },
        { name: "Filament", level: 82, color: "from-rose-500 to-rose-600" },
        { name: "Spring Boot", level: 78, color: "from-lime-500 to-lime-600" },
        { name: "Tailwind CSS", level: 85, color: "from-teal-500 to-teal-600" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        {
          name: "Git & GitHub",
          level: 90,
          color: "from-fuchsia-500 to-fuchsia-600",
        },
        {
          name: "Docker (Desktop)",
          level: 80,
          color: "from-blue-600 to-blue-700",
        },
        { name: "Postman", level: 82, color: "from-amber-500 to-amber-600" },
        { name: "VS Code", level: 90, color: "from-blue-400 to-blue-500" },
        { name: "MySQL", level: 85, color: "from-green-500 to-green-600" },
        { name: "AWS", level: 70, color: "from-yellow-500 to-yellow-600" },
        { name: "Figma", level: 72, color: "from-pink-400 to-pink-500" },
        { name: "JWT / Auth", level: 78, color: "from-slate-500 to-slate-600" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The technologies, languages, and tools I use to build real-world
            apps and systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Other Skills & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Responsive Design",
              "UI/UX Basics",
              "RESTful APIs",
              "OOP Principles",
              "System Design",
              "Full‑stack Web Security",
              "Agile & Collaboration",
              "Time Management",
              "Testing & Debugging",
              "Problem Solving",
            ].map((chip, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-card border border-border/50 rounded-full text-sm font-medium hover:bg-primary/10 transition-colors"
              >
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
