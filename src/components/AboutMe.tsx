import { BadgeCheck, Award, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
  const achievements = [
    {
      icon: <BadgeCheck className="h-8 w-8 text-primary" />,
      title: "Full-Stack Web Projects",
      description:
        "Built and deployed full-stack applications using Vue.js, React.js (Next.js), Laravel, Spring Boot, MySQL, MongoDB, and Docker for both internship and university projects.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Real Internship Experience",
      description:
        "Hands-on experience from two internships at the Institute of Banking and Finance (IBF) and CyberLab (ITC), working with real systems, teams, and workflows.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Software Engineering Student",
      description:
        "Final-year B.Eng. Software Engineering student at the Institute of Technology of Cambodia (ITC), expected to graduate in January 2026.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, skills, and what drives me as a
            developer.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-br from-primary to-accent opacity-20 blur-xl"></div>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Who am I?</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I’m a full-stack web developer passionate about building
                      clean, responsive, and user-friendly applications. I work
                      mainly with Vue.js, React.js (Next.js), Laravel, and
                      Spring Boot — creating modern web experiences from
                      frontend UI to backend systems.
                    </p>

                    <p>
                      As a final-year Software Engineering student at ITC, I've
                      built real projects such as e-commerce platforms,
                      e-learning systems, and inventory management tools using
                      technologies like Laravel, Vue.js, MySQL, MongoDB, and
                      Docker.
                    </p>

                    <p>
                      I’m always exploring new web technologies, contributing to
                      open-source projects, and improving through hands-on
                      learning. My goal is to build meaningful, stable, and
                      scalable web applications that solve real problems.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">My Values</h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li className="mb-2">
                        Writing clean and maintainable code
                      </li>
                      <li className="mb-2">
                        Designing simple and intuitive UI/UX
                      </li>
                      <li className="mb-2">Continuously learning new skills</li>
                      <li>Collaborating and sharing knowledge with others</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition-all card-hover"
                >
                  <div className="rounded-full bg-primary/10 p-2 flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Education & Experience */}
              <Card className="overflow-hidden card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Education & Experience
                  </h3>

                  <div className="space-y-4">
                    {/* IBF Internship */}
                    <div className="border-l-2 border-primary pl-4">
                      <div className="text-sm text-muted-foreground">
                        Aug 2024 – Jan 2025 (6 months)
                      </div>
                      <div className="font-medium">
                        Frontend Web Developer Intern
                      </div>
                      <div className="text-muted-foreground">
                        Institute of Banking and Finance (IBF)
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Developed a responsive frontend for an internal
                        e-learning system using Vue.js and Quasar. Worked
                        closely with backend developers to integrate APIs.
                      </p>
                    </div>

                    {/* CyberLab Internship */}
                    <div className="border-l-2 border-primary/80 pl-4">
                      <div className="text-sm text-muted-foreground">
                        Aug 2025 – Oct 2025 (3 months)
                      </div>
                      <div className="font-medium">
                        Backend Developer Intern
                      </div>
                      <div className="text-muted-foreground">
                        CyberLab – Institute of Technology of Cambodia
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Built a web-based inventory system using Laravel,
                        Filament, and MySQL. Implemented real-time stock control
                        and role-based access across branches.
                      </p>
                    </div>

                    {/* Education */}
                    <div className="border-l-2 border-primary/60 pl-4">
                      <div className="text-sm text-muted-foreground">
                        2022 – Present
                      </div>
                      <div className="font-medium">
                        B.Eng. in Software Engineering
                      </div>
                      <div className="text-muted-foreground">
                        Institute of Technology of Cambodia (ITC)
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Specializing in full-stack development using Vue.js,
                        React.js, Laravel, Spring Boot, MySQL, and MongoDB.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
