import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  avatar: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content:
        "Masterly demonstrated strong frontend development skills during his internship at IBF. He played a key role in building a responsive UI with Vue and Quasar and collaborated well with our backend team.",
      author: "Nov Panha",
      role: "Digital Manager, Institute of Banking and Finance",
      avatar: "/img/ibfmanager.jpeg",
    },
    {
      id: 2,
      content:
        "Masterly showed strong dedication and fast learning throughout my Vue.js class. He applied concepts quickly into real projects, asked smart questions, and demonstrated great potential as a frontend developer.",
      author: "Mr. Pheakdey",
      role: "Vue.js Instructor, Reanweb.com",
      avatar: "/img/reanweb.jpeg",
    },
    {
      id: 3,
      content:
        "Masterly is a reliable teammate who brings passion and precision to every project. He contributes actively, handles complex features independently, and always strives to improve.",
      author: "Thavrith Sroas",
      role: "Teammate – ITCShop Project",
      avatar: "img/friend.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>(
    []
  );
  const isMobile = useIsMobile();

  useEffect(() => {
    const displayCount = isMobile ? 1 : 2;
    setVisibleTestimonials(
      testimonials.slice(currentIndex, currentIndex + displayCount)
    );
  }, [currentIndex, isMobile]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - (isMobile ? 1 : 2) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 > testimonials.length - (isMobile ? 1 : 2) ? 0 : prev + 1
    );
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What others have to say about working with me.
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8">
            {visibleTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="w-full md:w-1/2 border-border/40 bg-card/50 backdrop-blur-sm card-hover"
              >
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="mb-6 text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
