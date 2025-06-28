
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/30"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center">
        <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
              Sok Masterly
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Turning Ideas into{" "}
            <span className="font-semibold text-primary">Digital Reality</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
           I’m a passionate full-stack developer who specializes in building clean, responsive, and user-friendly web and mobile applications. With a strong eye for design and a love for clean, maintainable code, I enjoy turning ideas into real, functional products. I’m driven by solving real-world problems and delivering impactful digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
  <Button
  size="lg"
  className="rounded-full"
  onClick={(e) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Explore Projects
</Button>
            
           <a href="/cv.pdf" download>
  <Button variant="outline" size="lg" className="rounded-full">
    Download CV
  </Button>
</a>
          </div>
        </div>
        
        <div className="flex-1 relative opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-xl animate-float"></div>
            <div className="relative bg-gradient-to-br from-background to-muted border-2 border-primary/20 rounded-full p-3 z-10">
              <img
                src="img/me.png"
                alt="Profile Image"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 hover:bg-background/80 transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
