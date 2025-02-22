import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import SubHeroSection from "./components/subHeroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HelperSection from "./HelperSection";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectsMain from "./components/projectsSections/ProjectsMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <HelperSection />
    </main>
  );
}

export default App;
