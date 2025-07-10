const skills = [
    
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Next.js", level: 90, category: "frontend" },

    { name: "Node.js", level: 90, category: "backend" },
    { name: "Express", level: 90, category: "backend" },
    { name: "MongoDB", level: 90, category: "backend" },
    { name: "PostgreSQL", level: 90, category: "backend" },
    { name: "GraphQL", level: 90, category: "backend" },

    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Docker", level: 90, category: "tools" },
    { name: "Figma", level: 90, category: "tools" },
    { name: "VS Code", level: 90, category: "tools" },

];

export const SkillsSection = () => {
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

        </div>

    </section>
}