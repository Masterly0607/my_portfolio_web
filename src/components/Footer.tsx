import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a
              href="#"
              className="text-xl font-poppins font-bold hover:text-primary transition-colors"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Masterly Portfolio
              </span>
            </a>
            <p className="text-muted-foreground mt-2 text-sm">
              &copy; {currentYear} Sok Masterly. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white mb-4 hover:bg-primary/90 transition-colors"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
            <div className="text-sm text-muted-foreground">
              Designed with ❤️ by Sok Masterly
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
