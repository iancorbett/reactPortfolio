import { ExternalLink, Github, ArrowRight } from "lucide-react";

import NewFeaturedProjectImage from "@/assets/NewFeaturedProject.png";
import Project1 from "@/assets/Project1.png";
import Project2 from "@/assets/Project2.png";
import Project3 from "@/assets/Project3.png";
import ProjectIsing from "@/assets/ProjectIsing.png";
import EdifyAssistant from "@/assets/EdifyAssistant.png";
import ChessEngine from "@/assets/ChessEngine.png";

const featuredProject = {
  title: "CreatorLab Pulse",
  description:
    "A production creator analytics and content platform built to help Threads creators understand performance, generate tailored ideas, and improve their content strategy.",
  image: NewFeaturedProjectImage,
  tags: ["React", "Express", "PostgreSQL", "Node.js", "OpenAI"],
  deployedUrl: "https://www.creatorlabpulse.com/",
};

const projects = [
  {
    title: "Ising Model Simulation",
    description:
      "Collaborative project with my brother using Rust + JavaScript + Canvas to simulate 2D lattice magnetism, visualizing spin behavior and phase transitions in real time.",
    image: ProjectIsing,
    tags: ["Rust", "JavaScript", "WebAssembly"],
    demoUrl: "https://ising-rust.onrender.com/",
    githubUrl: "https://github.com/iancorbett/Ising_Rust",
  },
  {
    title: "Edify Assistant",
    description:
      "A hybrid chatbot embedded in Edify. It answers most “how do I…?” questions via semantic search over the help docs (TensorFlow.js), and only falls back to GPT-4o-mini when the match against the knowledge base is low-confidence.",
    image: EdifyAssistant,
    tags: ["Hybrid Chatbot", "OpenAI", "Express"],
    demoUrl: "https://iancorbett.github.io/edifyAssistant/",
    githubUrl: "https://github.com/iancorbett/edifyAssistant",
  },
  {
    title: "Chess Engine",
    description:
      "Lightweight engine with legal move generation, check/mate detection, and a depth-limited search (minimax + alpha-beta). Comes with a simple browser UI so you can play against it.",
    image: ChessEngine,
    tags: ["JavaScript", "Chess.js", "Game AI"],
    demoUrl: "https://iancorbett.github.io/chessEngine/",
    githubUrl: "https://github.com/iancorbett/chessEngine",
  },
  {
    title: "Social Networking App",
    description:
      "A social networking app that runs in terminal and can be used with Insomnia and MongoDB. Front end will be built in future development. Walkthrough is also linked on the GitHub README.",
    image: Project1,
    tags: ["Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/iancorbett/Social_Network_App",
  },
  {
    title: "E-Commerce Site",
    description:
      "This e-commerce backend app was built using Node.js, Express, Sequelize, and PostgreSQL. I set up models, associations, and API routes to perform full CRUD operations, and the app can be tested locally with Insomnia after seeding the database. Walkthrough is also linked on the GitHub README.",
    image: Project2,
    tags: ["Node.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/iancorbett/e-commerce_site",
  },
  {
    title: "Book Search Engine",
    description:
      "In this project, I built a book search engine where users can sign up, log in, and search for books by title. Using a provided starter codebase, I enhanced the functionality to integrate with an external book API, allowing users to view search results and save favorite books to a personalized list.",
    image: Project3,
    tags: ["React", "GraphQL", "Express"],
    githubUrl: "https://github.com/iancorbett/solid-broccoli",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          A selection of products and applications I’ve designed and developed,
          combining polished front-end experiences with full-stack functionality.
        </p>

        {/* Featured project */}
        <div className="mb-20">
          <div className="group bg-card overflow-hidden rounded-2xl border border-border shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr]">
              {/* Screenshot */}
              <div className="relative bg-black/20 overflow-hidden min-h-[380px] lg:min-h-[430px]">
                <img
                  src={featuredProject.image}
                  alt={`${featuredProject.title} preview`}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-left
                    scale-[1.15]
                    transition-transform
                    duration-500
                    group-hover:scale-[1.18]
                  "
                />
              </div>

              {/* Project details */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="text-sm font-semibold tracking-wide text-primary mb-3">
                  FEATURED PROJECT
                </span>

                <h3 className="text-3xl font-bold mb-4">
                  {featuredProject.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <a
                    href={featuredProject.deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                  >
                    <ExternalLink size={18} />
                    View Live Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other projects intro */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          More projects spanning interactive applications, AI tools, simulations,
          and backend development.
        </p>

        {/* Existing project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card overflow-hidden rounded-lg shadow-xs card-hover border border-border"
            >
              <div className="h-48 md:h-56 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      Live Project
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/iancorbett"
          >
            Explore More on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};