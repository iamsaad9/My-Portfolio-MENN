import Hero from "./pages/Hero";
import { Header } from "./components/NavBar";
import IntroSection from "./components/IntroSection";
import IntroSummary from "./components/IntroSummary";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div className="z-10">
      <Header />
      <Hero />
      <IntroSection />
      <IntroSummary />
      <SkillsSection />
    </div>
  );
}

export default App;
