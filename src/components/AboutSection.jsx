import { Briefcase, Code, Palette } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About copy */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
              I build polished, intuitive web experiences that combine thoughtful
              design with practical development.
            </h3>

            <p className="text-lg leading-relaxed text-muted-foreground">
              My work spans responsive front-end interfaces and full-stack web
              applications using technologies including React, JavaScript,
              Node.js, PostgreSQL, and modern CSS frameworks.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I’ve built products independently, collaborated on team projects,
              and developed websites and applications for clients — taking
              projects from initial concept through development and deployment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Skills cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-1">
                    Front-End Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive, accessible interfaces with HTML, CSS,
                    JavaScript, React, and modern component-based workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Palette className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-1">
                    UI/UX & Responsive Design
                  </h4>
                  <p className="text-muted-foreground">
                    Creating clear visual hierarchy, intuitive layouts, and
                    consistent experiences across desktop and mobile devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-1">
                    Product & Client Work
                  </h4>
                  <p className="text-muted-foreground">
                    Developing real-world websites and applications from concept
                    and design through implementation, testing, and deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};