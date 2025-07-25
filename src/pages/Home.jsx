import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/*theme toggle*/}
        <ThemeToggle />

        {/*background effects*/}
        <StarBackground />

        {/*navbar */}
        <Navbar />
        {/*main cintent*/}
        <main>
         <HeroSection />
         <AboutSection />
         <SkillsSection />
         <ProjectsSection />
         <ContactSection />
        </main>

        {/*footer*/}



    </div>
    );
};