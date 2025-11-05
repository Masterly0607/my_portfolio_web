import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectType {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  category: string[];
}

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");

  const projects: ProjectType[] = [
    {
      title: "EazyShop – E-commerce Platform",
      description:
        "Built a full-stack shopping platform using React, Spring Boot, and MySQL, supporting secure authentication and role-based access. Deployed on AWS with optimized API performance and scalable backend architecture.",
      image: "/img/eazyshop.png",
      techStack: ["React.js", "Spring Boot", "MySQL", "AWS"],
      githubLink: "https://github.com/Masterly0607/itcshop-customer",
      liveLink: "https://itcshop-customer.netlify.app/",
      category: ["web", "fullstack"],
    },
    {
      title: "ITCShop – E-commerce Platform",
      description:
        "A full-stack e-commerce web application built with Vue 3, Laravel 12, and MySQL. Features include authentication, product management, shopping cart, checkout, and admin panel.",
      image: "/img/itcshop.png",
      techStack: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS", "Docker"],
      githubLink: "https://github.com/Masterly0607/itcshop-customer",
      liveLink: "https://itcshop-customer.netlify.app/",
      category: ["web", "fullstack"],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Responsive and modern developer portfolio built with React and Tailwind CSS, showcasing projects, resume, and contact form integration.",
      image: "/img/portfolio.png",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/Masterly0607/my_portfolio_web",
      liveLink: "https://sok-masterly-portfolio.netlify.app/",
      category: ["web"],
    },
    {
      title: "E-Learning System",
      description:
        "An internal e-learning system developed during internship, designed to manage lessons, quizzes, users, and certifications using Laravel and Vue.",
      image: "/img/ibf.png",
      techStack: ["Vue.js", "Laravel", "Quasar"],
      githubLink: "https://github.com/Masterly0607/ibpf-framework",
      liveLink: "#",
      category: ["web"],
    },
    {
      title: "ITC Stock Management System",
      description:
        "Developed a branch-based stock management system using Laravel and Filament, featuring role-based access, stock ledger tracking, and real-time inventory control.",
      image: "/img/stock.png",
      techStack: ["Laravel", "Filament", "MySQL"],
      githubLink: "https://github.com/Masterly0607/ibpf-framework",
      liveLink: "#",
      category: ["web", "fullstack"],
    },
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Apps" },
    { value: "fullstack", label: "Full Stack" },
    // { value: "productivity", label: "Productivity" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Explore my real-world and personal projects built during
            internships, university courses, and self-learning.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={filter === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category.value)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between h-full overflow-hidden card-hover border border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="flex flex-col justify-between flex-1">
                <CardContent className="p-6 flex-1">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Badge key={i} variant="outline" className="bg-primary/5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between p-6 pt-0 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                    asChild
                  >
                    {/* <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a> */}
                  </Button>
                  <Button size="sm" className="rounded-full" asChild>
                    {/* <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a> */}
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
