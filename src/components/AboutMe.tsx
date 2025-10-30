import { BadgeCheck, Award, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
  const achievements = [
    {
      icon: <BadgeCheck className="h-8 w-8 text-primary" />,
      title: "4+ Web Projects",
      description:
        "Developed and deployed full-stack web applications using Vue.js, React, Laravel, Spring boot and Docker — including real internship and university projects.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "2+ Years of Experience",
      description:
        "Practical experience building responsive web apps since 2023, including an internship at IBF and volunteering for the SEA Games.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "B.Eng. in Software Engineering",
      description:
        "Last-year Software Engineering student at ITC, graduating in January 2026.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me
            forward.
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
                      I’m a passionate full-stack web developer who loves
                      creating clean, responsive, and user-friendly applications
                      using Vue.js, React (Next.js), Laravel, and Spring Boot. I
                      enjoy turning ideas into modern, high-performing web
                      experiences.
                    </p>

                    <p>
                      As a year 5 (final-year) Software Engineering student at
                      ITC, I’ve built and deployed full-stack projects — from
                      e-commerce platforms with Laravel backends to dynamic
                      frontends with Vue.js and React. I focus on clean code,
                      scalability, and great user experience.
                    </p>

                    <p>
                      Beyond coding, I explore new web technologies, contribute
                      to open source, and keep improving through hands-on
                      learning. I’m excited to keep growing as a developer who
                      builds meaningful web solutions.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">My Values</h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li className="mb-2">
                        Writing clean and easy-to-understand code
                      </li>
                      <li className="mb-2">
                        Creating simple and user-friendly web designs
                      </li>
                      <li className="mb-2">
                        Always learning and improving my skills
                      </li>
                      <li>Working with others and sharing knowledge</li>
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
                    <h4 className="text-xl font-semibold mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}

              <Card className="overflow-hidden card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Education & Experience
                  </h3>

                  <div className="space-y-4">
                    <div className="border-l-2 border-primary pl-4">
                      <div className="text-sm text-muted-foreground">
                        Aug 2024 – Jan 2025
                      </div>
                      <div className="font-medium">
                        Frontend Web Developer Intern
                      </div>
                      <div className="text-muted-foreground">
                        Institute of Banking and Finance (IBF)
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Built frontend for an internal e-learning platform using
                        Vue.js. Collaborated with backend developers to
                        integrate APIs and improve UI performance.
                      </p>
                    </div>

                    <div className="border-l-2 border-primary/80 pl-4">
                      <div className="text-sm text-muted-foreground">
                        Aug 2025 – Oct 2025
                      </div>
                      <div className="font-medium">Web Developer Intern</div>
                      <div className="text-muted-foreground">
                        Institute of Technology of Cambodia (ITC)
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Developed a web-based inventory system using Laravel,
                        Filament, and MySQL with role-based access and real-time
                        stock management features.
                      </p>
                    </div>

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
                        Last-year student specializing in full-stack web
                        development using Vue.js, React, Laravel, and Spring
                        Boot.
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
