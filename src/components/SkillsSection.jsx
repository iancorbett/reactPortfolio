import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML & CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Responsive Design", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "C# / ASP.NET", category: "backend" },
  { name: "REST APIs", category: "backend" },

  // Design
  { name: "UI/UX Design", category: "design" },
  { name: "Figma", category: "design" },
  { name: "Visual Hierarchy", category: "design" },
  { name: "Typography & Layout", category: "design" },

  // Tools
  { name: "Git & GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "OpenAI API", category: "tools" },
  { name: "AI-Assisted Development", category: "tools" },
];

const categories = ["all", "frontend", "backend", "design", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A modern full-stack toolkit focused on building polished,
          responsive, production-ready web applications.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card px-5 py-4 rounded-lg shadow-xs card-hover border border-border/40"
            >
              <h3 className="font-medium text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};