import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number; // 0-100
  color: string; // tailwind gradient end classes
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-500" },
      { name: "PHP", level: 85, color: "from-indigo-500 to-indigo-600" },
      { name: "Java", level: 80, color: "from-orange-500 to-orange-600" },
      { name: "C / C++", level: 70, color: "from-gray-500 to-gray-600" },
    ],
  },
  {
    title: "Frontend Frameworks",
    skills: [
      { name: "Vue.js", level: 90, color: "from-emerald-500 to-emerald-600" },
      { name: "Quasar", level: 78, color: "from-purple-500 to-purple-600" },
      { name: "React", level: 85, color: "from-cyan-500 to-cyan-600" },
      { name: "Next.js", level: 75, color: "from-sky-500 to-sky-600" },
      { name: "Tailwind CSS", level: 85, color: "from-teal-500 to-teal-600" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 85, color: "from-lime-500 to-lime-600" },
      { name: "Express.js", level: 83, color: "from-green-500 to-green-600" },
      { name: "Laravel", level: 90, color: "from-red-500 to-red-600" },
      { name: "Filament", level: 82, color: "from-rose-500 to-rose-600" },
      {
        name: "Spring Boot",
        level: 82,
        color: "from-orange-500 to-orange-600",
      },
      { name: "GraphQL", level: 78, color: "from-pink-500 to-pink-600" },
      { name: "REST API", level: 88, color: "from-slate-500 to-slate-600" },
      { name: "JWT / Auth", level: 80, color: "from-zinc-500 to-zinc-600" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 85, color: "from-green-500 to-green-600" },
      { name: "MongoDB", level: 80, color: "from-emerald-600 to-emerald-700" },
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
      { name: "Figma", level: 72, color: "from-pink-400 to-pink-500" },
      {
        name: "CI/CD (Basics)",
        level: 65,
        color: "from-indigo-400 to-indigo-500",
      },
      {
        name: "AWS (EC2 / RDS / S3)",
        level: 75,
        color: "from-yellow-500 to-yellow-600",
      },
    ],
  },
];

const SkillBar = ({ name, level, color }: Skill) => (
  <div aria-label={`${name} proficiency ${level}%`}>
    <div className="flex justify-between mb-2">
      <span className="font-medium">{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div
      className="h-2.5 w-full bg-muted rounded-full overflow-hidden"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={level}
    >
      <div
        className={`h-full bg-gradient-to-r ${color} rounded-full`}
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The technologies, languages, and tools I use to build real-world
            apps and systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <SkillBar key={skill.name} {...skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
              "GraphQL Schema Design",
              "RESTful APIs",
              "OOP Principles",
              "System Design",
              "Full‑stack Web Security",
              "Agile & Collaboration",
              "Time Management",
              "Testing & Debugging",
              "Problem Solving",
            ].map((chip) => (
              <div
                key={chip}
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
