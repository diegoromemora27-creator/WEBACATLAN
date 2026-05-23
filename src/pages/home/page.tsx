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

function RecordatorioModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-[fadeIn_0.3s_ease-out]">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#bb8800] to-[#d4a017] flex items-center justify-center">
            <i className="ri-megaphone-line text-2xl text-white"></i>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#1b3d70]">Recordatorio</h2>
            <p className="text-xs text-gray-500">Antes de continuar...</p>
          </div>
        </div>

        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 mb-5">
          <div className="flex items-start gap-3">
            <i className="ri-edit-2-line text-xl text-amber-600 mt-0.5"></i>
            <div>
              <p className="text-sm font-semibold text-amber-800 mb-1">
                📝 Llena la sección de Recap
              </p>
              <p className="text-sm text-amber-700">
                Comparte tus experiencias durante la clase, lo que aprendiste y cómo te sentiste. Tu retroalimentación es valiosa para mejorar el curso.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-4 mb-5">
          <p className="text-sm text-indigo-700 italic text-center">
            "El conocimiento que no se comparte, se pierde. El que se comparte, se multiplica."
          </p>
          <p className="text-xs text-indigo-500 text-center mt-2">— Sigue construyendo, sigue creciendo 🚀</p>
        </div>

        <div className="rounded-xl bg-[#0077B5]/10 border border-[#0077B5]/20 p-4 mb-6">
          <div className="flex items-start gap-3">
            <i className="ri-linkedin-box-fill text-xl text-[#0077B5] mt-0.5"></i>
            <div>
              <p className="text-sm font-semibold text-[#0077B5] mb-1">
                🚀 Comparte tu proyecto en LinkedIn
              </p>
              <p className="text-xs text-gray-600 mb-3">
                Muestra al mundo lo que construiste este semestre. ¡Es un logro profesional real!
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    const texto = '🎓 Orgulloso de compartir el proyecto que desarrollamos en el curso de Desarrollo Web en la FES Acatlán (UNAM). Construimos una aplicación full-stack con Next.js, TypeScript, Supabase y desplegada en Vercel. Aprendimos metodologías ágiles, CI/CD y trabajo colaborativo con GitHub.\n\n🔗 https://webacatlan.vercel.app\n\n#DesarrolloWeb #UNAM #FESAcatlán #NextJS #TypeScript #Supabase #FullStack';
                    navigator.clipboard.writeText(texto);
                    alert('✅ Texto copiado al portapapeles. Ahora pégalo en tu nuevo post de LinkedIn.');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077B5] text-white text-xs font-semibold hover:bg-[#005f8d] transition-colors cursor-pointer"
                >
                  <i className="ri-file-copy-line"></i>
                  Copiar mensaje
                </button>
                <a
                  href="https://www.linkedin.com/feed/?shareActive=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077B5]/20 text-[#0077B5] text-xs font-semibold hover:bg-[#0077B5]/30 transition-colors"
                >
                  <i className="ri-linkedin-box-fill"></i>
                  Abrir LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            onClose();
            setTimeout(() => {
              document.getElementById('recap')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1b3d70] to-[#2a5298] text-white font-semibold hover:opacity-90 transition-opacity cursor-pointer"
        >
          Entendido, ¡vamos!
        </button>
      </div>
    </div>
  );
}

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
  const [showModal, setShowModal] = useState(true);

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
      {showModal && <RecordatorioModal onClose={() => setShowModal(false)} />}
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
