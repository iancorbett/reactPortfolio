

const projects = [
    {
        id: 1,
        title: "project 1",
        description: "hey",
        // image: tbd,
        tags: ["React", "tailwind"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 1,
        title: "project 1",
        description: "hey",
        // image: tbd,
        tags: ["React", "tailwind"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 1,
        title: "project 1",
        description: "hey",
        // image: tbd,
        tags: ["React", "tailwind"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

export const ProjectsSection = () => {
    return (
    <section id="projects" className="py-24 px-4 relative"> 
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>

        <p className="text-center text-muted-foregroud mb-12 max-w-2xl mx-auto">
            Here aer some projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
                <div key={key} 
                className="group bg-card  overflow-hidden rounded-lg shadow-xs card-hover">

                </div>
            ))}
        </div>
    </div>
    </section>
    );
}