import { DownloadCloud, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download my resume to explore my experience, education, and
            technical background in detail.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Left Card */}
          <div className="md:w-1/2 lg:w-2/5 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl rounded-2xl"></div>
            <div className="relative bg-card border border-border/40 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Sok Masterly</h3>
                  <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
                    Web Developer
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-muted-foreground text-sm">Email</div>
                    <div>masterlysok@gmail.com</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">
                      Location
                    </div>
                    <div>Phnom Penh, Cambodia</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">
                      Available for
                    </div>
                    <div>Frontend / Backend / Full-Stack Developer Roles</div>
                  </div>
                </div>

                {/* Resume Highlights */}
                <div className="border-t border-border pt-6">
                  <h4 className="font-medium mb-2">Resume Highlights</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>
                        Year 5 Software Engineering student at ITC (2022 –
                        Present)
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>
                        Experience building real-world systems using Vue.js,
                        React.js, Laravel, Spring Boot, Filament, MySQL,
                        MongoDB, and Docker.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>
                        Frontend Web Developer Intern at Institute of Banking
                        and Finance (Aug 2024 – Jan 2025)
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>
                        Backend Developer Intern at CyberLab – Institute of
                        Technology of Cambodia (Aug – Oct 2025)
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>
                        Passionate about full-stack development, clean code, and
                        building real-world applications.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Download */}
          <div className="md:w-1/2 lg:w-2/5">
            <div className="bg-card border border-border/40 rounded-lg p-8 flex flex-col items-center card-hover">
              <FileText className="h-16 w-16 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">My Resume</h3>
              <p className="text-center text-muted-foreground mb-6">
                Download my complete resume to learn more about my experience,
                projects, and skills.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="rounded-full" asChild>
                  <a href="/cv.pdf" download>
                    <DownloadCloud className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </Button>

                <Button variant="outline" className="rounded-full" asChild>
                  <a
                    href="https://www.linkedin.com/in/masterlysok/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
