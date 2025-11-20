import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Fill out the form below or
            reach out directly through my contact information.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <div className="space-y-6 mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out to me for any inquiries, project
                collaborations, or just to say hello!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <a
                    href="mailto:masterlysok@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    sokmasterlychanon06@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <a
                    href="tel:+855973331501"
                    className="hover:text-primary transition-colors"
                  >
                    +855 97 333 1501
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>Phnom Penh, Cambodia</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Masterly0607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border hover:bg-primary hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/masterlysok/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border hover:bg-primary hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 blur-xl rounded-2xl"></div>
              <div className="relative bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Working Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>Flexible</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-card border border-border/40 rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-muted-foreground"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-muted-foreground"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Hello, I'd like to talk about..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full md:w-auto rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
