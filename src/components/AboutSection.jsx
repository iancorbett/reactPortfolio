import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                    Passionate about building impactful web applications, crafting intuitive user interfaces, and delivering an exceptional user experience on every project I touch.
                    </h3>

                    <p className=" text-2xl pt-4 font-semibold text-muted-foreground">
                    Developed a variety of full-stack projects leveraging React, Node.js, PostgreSQL, and additional tools across the JavaScript ecosystem.
                    </p>

                    <p className="text-2xl pt-6 font-semibold text-muted-foreground">
                    Experienced in building both solo projects as well as collaborative applications, including freelance work for multiple clients.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get in Touch!
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Dounload CV
                        </a>

                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-12">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">Experience building everything from front-end interfaces to full-stack applications with AI integration. </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">I design responsive, user-friendly interfaces that prioritize clarity, usability, and a smooth experience across all devices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Freelance Work</h4>
                                <p className="text-muted-foreground">I’ve delivered custom websites and applications for freelance clients, handling everything from design to deployment.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </section>;
}