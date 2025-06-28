
import { BadgeCheck, Award, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
  const achievements = [
    {
      icon: <BadgeCheck className="h-8 w-8 text-primary" />,
      title: "5+ Projects",
      description: "Built and completed full-stack and mobile projects using Vue.js, Laravel, Flutter, and Docker — including real internship and university projects.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "3+ Years of Practical Development Experience",
      description: "Hands-on experience developing responsive web and mobile apps since 2021, including an internship at IBF and volunteering for SEA Games.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "B.Eng. in Software Engineering",
      description: "Currently pursuing a Software Engineering degree at the Institute of Technology of Cambodia (ITC), graduating in January 2026.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me forward.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-br from-primary to-accent opacity-20 blur-xl"></div>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Who am I?</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                     I’m a passionate software developer with a strong foundation in full-stack and mobile development. I enjoy creating clean, responsive, and user-friendly applications using technologies like Vue.js, Laravel, and Flutter. My journey in tech started with a curiosity to build useful things — and over time, it grew into a commitment to solving real-world problems through elegant code and thoughtful design.
                    </p>
                    <p>
                   As a final-year Software Engineering student at ITC, I’ve worked on projects across the full development stack — from building e-commerce platforms with Dockerized Laravel backends to developing mobile apps with Flutter and Firebase. During my internship, I collaborated with real teams, integrated APIs, and focused on performance, UI/UX, and scalability.
                    </p>
                    <p>
                     Outside of coding, I enjoy exploring new tools, learning from open-source communities, and continuously improving my skills through hands-on practice. I value clean code, great user experience, and teamwork — and I’m excited to keep growing as a developer who builds things that truly make an impact.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">My Values</h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li className="mb-2">Writing clean, readable, and well-documented code</li>
                      <li className="mb-2">Designing user-centered, intuitive interfaces</li>
                      <li className="mb-2">Continuous learning and real-world skill growth</li>
                      <li>Collaborating and sharing knowledge with others</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

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
                    <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
              
              <Card className="overflow-hidden card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Education & Experience</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary pl-4">
                      <div className="text-sm text-muted-foreground">Aug 2024 – Feb 2025</div>
                      <div className="font-medium">Frontend Developer Intern</div>
                      <div className="text-muted-foreground">Institute of Banking and Finance (IBF)</div>
                    </div>
                    
                    <div className="border-l-2 border-primary/80 pl-4">
                      <div className="text-sm text-muted-foreground">Aug 2023 – May 2024</div>
                      <div className="font-medium">IT Support Volunteer</div>
                      <div className="text-muted-foreground">SEA Games 2023 – Cambodia</div>
                    </div>
                    
                    <div className="border-l-2 border-primary/60 pl-4">
                      <div className="text-sm text-muted-foreground">2022 – Present</div>
                      <div className="font-medium">B.Eng. in Software Engineering</div>
                      <div className="text-muted-foreground">Institute of Technology of Cambodia (ITC)</div>
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
