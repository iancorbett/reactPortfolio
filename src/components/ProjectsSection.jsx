import { ExternalLink, Github, ArrowRight } from "lucide-react";

const featuredProject = {
    title: "Edify",
    description: "An AI-powered education platform for tracking student growth and behavior.",
    image: "/images/edify.png",
    tags: ["React", "Express", "PostgreSQL", "JWT", "OpenAI"],
    demoUrl: "#",
    githubUrl: "#",
  };


const projects = [
    {
        
        title: "Social Networking App",
        description: "A social networking app that runs in terminal and can be used with Insomnia and MongoDB. Front end will be built in future development. Walkthrough is also linked on the Github ReadME",
        image: "Project1.png",
        tags: ["React", "tailwind"],
        demoUrl: "#",
        githubUrl: "https://github.com/iancorbett/Social_Network_App",
    },
    {
        
        title: "E-Commerce Site",
        description: "This e-commerce backend app was built using Node.js, Express, Sequelize, and PostgreSQL. I set up models, associations, and API routes to perform full CRUD operations, and the app can be tested locally with Insomnia after seeding the database. Walkthrough is also linked on GitHub ReadMe.",
        image: "Project2.png",
        tags: ["React", "tailwind"],
        demoUrl: "#",
        githubUrl: "https://github.com/iancorbett/e-commerce_site",
    },
    {
        
        title: "Book Search Engine",
        description: "In this project, I built a book search engine where users can sign up, log in, and search for books by title. Using a provided starter codebase, I enhanced the functionality to integrate with an external book API, allowing users to view search results and save their favorite books to a personalized list they can access anytime.",
        image: "Project3.png",
        tags: ["React", "tailwind"],
        demoUrl: "#",
        githubUrl: "https://github.com/iancorbett/solid-broccoli",
    },
];

export const ProjectsSection = () => {
    return (
    <section id="projects" className="py-24 px-4 relative"> 

    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>

        <p className="text-center text-muted-foregroud mb-12 max-w-2xl mx-auto text-2xl">
        This is my most recent project that I am currently working on!
        </p>

        <div className="mb-16">
          <div className="group bg-card flex flex-col md:flex-row overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="w-full md:w-1/2 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{featuredProject.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {featuredProject.description}
                </p>
              </div>
              <div className="flex space-x-4">
                <a
                  href={featuredProject.demoUrl}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foregroud mb-12 max-w-2xl mx-auto text-2xl">
        These are a few other projects that I have built, and there are many more on my GitHub as well!
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
                <div key={key} 
                className="group bg-card  overflow-hidden rounded-lg shadow-xs card-hover"
                >
                    <div>
                        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>

                    <div className="p-6">

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, key) => (
                                
                                <span 
                                key={key}
                                className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>

                    
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                {/* <a href={project.demoUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20}/>
                                </a> */}
                                <a href={project.githubUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <Github size={20}/>
                                </a>
                            </div>
                            </div>
                        </div>
                </div>
            ))}
        </div>

        <div className="text-center mt-12">
            <a  
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/iancorbett"
            >
                Check out my GitHub! <ArrowRight size={16}/>
            </a>
        </div>
    </div>
    </section>
    );
}