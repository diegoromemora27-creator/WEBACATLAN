import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CalendarSection from './components/CalendarSection';
import CourseInfo from './components/CourseInfo';
import ProfessorProfile from './components/ProfessorProfile';
import EvaluationDashboard from './components/EvaluationDashboard';
import ProjectTimeline from './components/ProjectTimeline';
import Gamification from './components/Gamification';
import Footer from './components/Footer';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'curso', 'profesor', 'evaluacion', 'proyecto', 'gamificacion'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} />
      <Hero />
      <CalendarSection />
      <CourseInfo />
      <ProfessorProfile />
      <EvaluationDashboard />
      <ProjectTimeline />
      <Gamification />
      <Footer />
    </div>
  );
}
