import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseInfo from './components/CourseInfo';
import ProfessorProfile from './components/ProfessorProfile';
import EvaluationDashboard from './components/EvaluationDashboard';
import ProjectTimeline from './components/ProjectTimeline';
import Gamification from './components/Gamification';
import ReviewsRecapSection from './components/ReviewsRecapSection';
import ShowRoom from './components/ShowRoom';
import Footer from './components/Footer';

function CollapsibleSection({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <span className="flex items-center gap-3 text-lg font-bold text-[#1b3d70]">
          <i className={`${icon} text-xl text-[#bb8800]`}></i>
          {title}
        </span>
        <i className={`ri-arrow-down-s-line text-2xl text-gray-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}></i>
      </button>
      {open && <div className="pb-2">{children}</div>}
    </div>
  );
}

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'showroom', 'recap', 'sobre-el-curso'];
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
      <ShowRoom />
      <div id="recap">
        <ReviewsRecapSection />
      </div>

      {/* ¿Cómo se desarrolla la clase? */}
      <section className="max-w-5xl mx-auto mt-12 mb-6 px-4">
        <div className="bg-gradient-to-r from-[#1b3d70] to-[#2a5298] rounded-2xl p-8 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <i className="ri-lightbulb-flash-line text-3xl text-[#bb8800]"></i>
            <h2 className="text-2xl font-bold">¿Cómo se desarrolla la clase?</h2>
          </div>
          <p className="text-white/90 mb-5 leading-relaxed">
            Este curso sigue una metodología práctica y colaborativa enfocada en el desarrollo real de software.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <i className="ri-team-line text-2xl text-[#bb8800] mb-2 block"></i>
              <h3 className="font-semibold mb-1">Trabajo en Equipo</h3>
              <p className="text-sm text-white/80">Equipos de desarrollo con roles definidos, simulando un entorno profesional real.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <i className="ri-git-branch-line text-2xl text-[#bb8800] mb-2 block"></i>
              <h3 className="font-semibold mb-1">Desarrollo Iterativo</h3>
              <p className="text-sm text-white/80">Sprints semanales con entregas incrementales, revisiones de código y retroalimentación continua.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <i className="ri-file-list-3-line text-2xl text-[#bb8800] mb-2 block"></i>
              <h3 className="font-semibold mb-1">Evaluación Integral</h3>
              <p className="text-sm text-white/80">Exámenes teóricos, proyecto práctico y contribuciones individuales medibles vía GitHub.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre el Curso - Secciones colapsables */}
      <section id="sobre-el-curso" className="max-w-5xl mx-auto mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <CollapsibleSection title="Información del Curso" icon="ri-book-open-line">
          <CourseInfo />
        </CollapsibleSection>
        <CollapsibleSection title="Profesor" icon="ri-user-star-line">
          <ProfessorProfile />
        </CollapsibleSection>
        <CollapsibleSection title="Evaluación" icon="ri-bar-chart-box-line">
          <EvaluationDashboard />
        </CollapsibleSection>
        <CollapsibleSection title="Proyecto" icon="ri-rocket-line">
          <ProjectTimeline />
        </CollapsibleSection>
        <CollapsibleSection title="Recompensas" icon="ri-trophy-line">
          <Gamification />
        </CollapsibleSection>
      </section>

      <Footer />
    </div>
  );
}
