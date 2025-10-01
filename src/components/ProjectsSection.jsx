import { ExternalLink, Github, ArrowRight } from "lucide-react";
import FeaturedProjectImage from "@/assets/FeaturedProject.png";
import Project1 from "@/assets/Project1.png";
import Project2 from "@/assets/Project2.png";
import Project3 from "@/assets/Project3.png";
import ProjectIsing from "@/assets/ProjectIsing.png";
import EdifyAssistant from "@/assets/EdifyAssistant.png";
import ChessEngine from "@/assets/ChessEngine.png";



const featuredProject = {
    title: "Edify",
    description: "Edify is a modern, AI-powered education platform designed to empower teachers and administrators with real-time insights into student growth. By combining academic, social-emotional, and behavioral data, Edify delivers intelligent summaries, visual dashboards, and streamlined observations — all in one place. With a focus on clarity, simplicity, and impact, Edify helps educators make faster, smarter decisions that truly support every student. I recently completed an ai chatbot designed to handle instructions and troubleshooting on the app.",
    image: FeaturedProjectImage,
    tags: ["React", "Express", "PostgreSQL", "Node.js", "OpenAI"],
    demoUrl: "https://www.loom.com/share/5b28b97103e44b05b7c4a8a581f26665",
    githubUrl: "https://github.com/iancorbett/Edify",
    deployedUrl: "https://edify-web-1.onrender.com/",
  };


const projects = [
      {
            
        title: "Ising Model Simulation",
        description: "Collaborative project with my brother using Rust + JavaScript + Canvas to simulate 2D lattice magnetism, visualizing spin behavior and phase transitions in real time.",
        image: ProjectIsing,
        tags: ["Rust", "JavaScript", "WebAssembly"],
        demoUrl: "https://ising-rust.onrender.com/",
        githubUrl: "https://github.com/iancorbett/Ising_Rust",
    },
    {
            
      title: "Edify Assistant",
      description: "A hybrid chatbot embedded in Edify. It answers most “how do I…?” questions via semantic search over the help docs (TensorFlow.js), and only falls back to GPT-4o-mini when the match against the knowledge base is low-confidence.",
      image: EdifyAssistant,
      tags: ["Hybrid Chatbot", "OpenAI", "Express"],
      demoUrl: "https://iancorbett.github.io/edifyAssistant/",
      githubUrl: "https://github.com/iancorbett/edifyAssistant",
    },
    {
            
        title: "Chess Engine",
        description: "Lightweight engine with legal move generation, check/mate detection, and a depth-limited search (minimax + alpha-beta). Comes with a simple browser UI so you can play against it.",
        image: ChessEngine,
        tags: ["JavaScript", "Chess.js", "Game AI"],
        demoUrl: "https://iancorbett.github.io/chessEngine/",
        githubUrl: "https://github.com/iancorbett/chessEngine",
    },
    {
        
        title: "Social Networking App",
        description: "A social networking app that runs in terminal and can be used with Insomnia and MongoDB. Front end will be built in future development. Walkthrough is also linked on the Github ReadME",
        image: Project1,
        tags: ["Node.js", "MongoDB", "Express"],
        // demoUrl: "#",
        githubUrl: "https://github.com/iancorbett/Social_Network_App",
    },
    {
        
        title: "E-Commerce Site",
        description: "This e-commerce backend app was built using Node.js, Express, Sequelize, and PostgreSQL. I set up models, associations, and API routes to perform full CRUD operations, and the app can be tested locally with Insomnia after seeding the database. Walkthrough is also linked on GitHub ReadMe.",
        image: Project2,
        tags: ["Node.js", "Express", "PostgreSQL"],
        // demoUrl: "#",
        githubUrl: "https://github.com/iancorbett/e-commerce_site",
    },
    {
        
        title: "Book Search Engine",
        description: "In this project, I built a book search engine where users can sign up, log in, and search for books by title. Using a provided starter codebase, I enhanced the functionality to integrate with an external book API, allowing users to view search results and save their favorite books to a personalized list they can access anytime.",
        image: Project3,
        tags: ["React", "GraphQL", "Express"],
        // demoUrl: "#",
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
          <div className="group bg-card flex flex-col md:flex-row overflow-hidden border-1 border-amber-50 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
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
                  <ExternalLink size={20} />Watch Update
                </a>
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <Github size={20} /> Visit Repo
                </a>
                <a
                  href={featuredProject.deployedUrl}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <ExternalLink size={20} /> Visit Deployed Site
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
                className="group bg-card  overflow-hidden rounded-lg shadow-xs card-hover border-1 border-amber-50"
                >
                    <div className="h-48 md:h-56 w-full overflow-hidden">
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
                                { <a href={project.demoUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20}/> Visit Deployed Project
                                </a> }
                                <a href={project.githubUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <Github size={20}/>Visit Repo
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