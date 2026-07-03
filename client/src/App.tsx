import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
