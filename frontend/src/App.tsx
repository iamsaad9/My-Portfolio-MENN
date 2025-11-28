import Hero from "./pages/Hero";
import { Header } from "./components/NavBar";
import IntroSection from "./components/IntroSection";
import IntroSummary from "./components/IntroSummary";
import SkillsSection from "./components/SkillsSection";
import { HeroParallaxDemo } from "./components/HeroParalax";
import Services from "./components/ServicesSection";
import ProjectsHeading from "./components/ProjectHeading";
import ProjectCarousel from "./components/ProjectCarousal";
import ProjectsSection from "./components/Projects";
import { AnimatedTestimonialsDemo } from "./components/Testimonials";

function App() {
  return (
    <div className="z-10">
      <Header />
      <Hero />
      <IntroSection />
      <IntroSummary />
      <SkillsSection />
      <HeroParallaxDemo />
      <Services />
      <ProjectsHeading />
      <ProjectCarousel />
      <ProjectsSection />
      <AnimatedTestimonialsDemo />
    </div>
  );
}

export default App;
