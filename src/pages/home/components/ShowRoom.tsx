import { useState, useEffect } from 'react';

// Import project screenshots
import imgDevStudy from '../../assets/devstudy-eight.vercel.app_ (1).png';
import img4deAsada from '../../assets/4deasada.png';
import imgStudyLink from '../../assets/studylink.png';
import imgNullNexus from '../../assets/NullNexus.png';
import imgAcaShop from '../../assets/acashop.png';
import imgMundial from '../../assets/mundial.png';
import imgAngelesMac from '../../assets/Angelesmac.png';
import imgAcademicosWeb from '../../assets/AcademicosWeb.png';
import imgExtraWebOrdinarios from '../../assets/WebExtraordinarios.png';
import imgSistemaGestion from '../../assets/Sistemadegestion.png';

const tools = [
  { name: 'Next.js', icon: 'ri-reactjs-line' },
  { name: 'TypeScript', icon: 'ri-code-s-slash-line' },
  { name: 'Supabase', icon: 'ri-database-2-line' },
  { name: 'PostgreSQL', icon: 'ri-database-line' },
  { name: 'Vercel', icon: 'ri-cloud-line' },
  { name: 'Postman', icon: 'ri-send-plane-line' },
  { name: 'Git & GitHub', icon: 'ri-git-branch-line' },
  { name: 'CI/CD', icon: 'ri-loop-left-line' },
  { name: 'Trello / Notion', icon: 'ri-kanban-view' },
  { name: 'Scrum', icon: 'ri-team-line' },
  { name: 'HTML', icon: 'ri-html5-line' },
  { name: 'CSS', icon: 'ri-css3-line' },
];

const projects = [
  {
    id: 1,
    name: 'DevStudy',
    description: 'Plataforma de juegos interactivos diseñada para apoyar la enseñanza de materias como inglés, matemáticas y más, adaptada a distintos niveles educativos en México con el objetivo de reducir la brecha educativa.',
    vercelUrl: 'https://devstudy-eight.vercel.app/',
    githubUrl: 'https://github.com/DevStudyJS',
    image: imgDevStudy,
    members: ['Ángel Hernández', 'Jazmín Gil', 'Ramón Medina', 'Saraí Buenrostro', 'Zaira Pérez'],
  },
  {
    id: 2,
    name: 'Garra Deal',
    description: 'Aplicación para regularizar y formalizar el comercio en el tianguis de la FES Acatlán, permitiendo a estudiantes verificados gestionar sus productos y ofrecer servicios como clases o cursos, apoyando así el sustento de sus estudios.',
    vercelUrl: 'https://frontend-project-two-mu.vercel.app/',
    githubUrl: 'https://github.com/4-de-Asada',
    image: img4deAsada,
    members: ['Antonio Velázquez', 'Samuel Herrera', 'Carlos Segura', 'Saúl Villeda'],
  },
  {
    id: 3,
    name: 'StudyLink',
    description: 'Plataforma académica colaborativa para compartir apuntes, asesorías y recursos universitarios, fomentando el compromiso de la comunidad para crear contenido que ayude a futuras generaciones y reducir los índices de reprobación.',
    vercelUrl: 'https://front-end-project-beta-three.vercel.app/',
    githubUrl: 'https://github.com/RecursosMAC/FrontEnd-Project',
    image: imgStudyLink,
    members: ['Estefaní Pérez', 'Monserrat Del Angel', 'Emiliano Ruiz', 'Ángel Raygoza'],
  },
  {
    id: 4,
    name: 'UNAM Estudia',
    description: 'Plataforma integral para estudiantes de la UNAM que unifica la vida estudiantil: gestión de tareas, servicio social, asesorías con tutores certificados y trabajo en equipo, centralizando recursos e información académica en un solo lugar.',
    vercelUrl: 'https://lynx-beige.vercel.app/',
    githubUrl: 'https://github.com/Null-Nexus/Frontend-Proyecto',
    image: imgNullNexus,
    members: ['Fernando Martínez', 'Josué Trinidad', 'Bruno Aguilar', 'Daniela Mendoza'],
  },
  {
    id: 5,
    name: 'AcaShop',
    description: 'Marketplace estudiantil para la FES Acatlán que busca formalizar la venta de productos y servicios entre alumnos, brindando un espacio digital seguro para que la comunidad apoye su economía mientras estudia.',
    vercelUrl: 'https://front-end-proyect-delta.vercel.app/',
    githubUrl: 'https://github.com/AcaShop-Acatlan',
    image: imgAcaShop,
    members: ['Alitzel Camacho', 'Cristina Saiz', 'Itzel Chávez', 'Ximena Toledo'],
  },
  {
    id: 6,
    name: 'Recursos Académicos',
    description: 'Red de material académico compartido por estudiantes, tutores y egresados, ofreciendo apuntes, ejercicios y recursos de apoyo para profundizar el conocimiento en las asignaturas de la comunidad universitaria.',
    vercelUrl: 'https://front-end-proyecto-two.vercel.app/',
    githubUrl: 'https://github.com/Angeles-de-MAC',
    image: imgAngelesMac,
    members: ['Raúl González', 'Eduardo Escutia', 'Sadrach Libonatti', 'Michelle Moctezuma', 'Luis Elías'],
  },
  {
    id: 7,
    name: 'Académicos Web',
    description: 'Plataforma de evaluación docente que promueve el feedback respetuoso sobre materias y metodologías, ayudando a estudiantes a elegir optativas y materias de profesionalización informadamente para su mejora continua.',
    vercelUrl: 'https://frontend-next-js-ochre.vercel.app/',
    githubUrl: 'https://github.com/Academicos-Web',
    image: imgAcademicosWeb,
    members: ['Armando Hernández', 'Erick Rodríguez', 'Alyn Márquez', 'Monserrat Hernández', 'Arturo Moreno', 'Miguel Cruz'],
  },
  {
    id: 8,
    name: 'Enlace MAC',
    description: 'Plataforma de gestión de servicio social, pasantías e internships que permite consultar servicios aprobados, dar seguimiento a cada etapa del trámite y contar con una guía centralizada de tareas pendientes y requisitos.',
    vercelUrl: 'https://front-end-proyecto-lake.vercel.app/',
    githubUrl: 'https://github.com/ExtraWeb0rdinarios',
    image: imgExtraWebOrdinarios,
    members: ['Diego Herrera', 'Vanesa Cervantes', 'Leslie González', 'Mauricio Báez'],
  },
  {
    id: 9,
    name: 'Sistema de Gestión',
    description: 'Sistema integral de gestión de datos y procesos administrativos.',
    vercelUrl: 'https://front-end-proyecto-vert.vercel.app/',
    githubUrl: 'https://github.com/EQUIPO9-DESARROLLOWEB/Front-end-proyecto',
    image: imgSistemaGestion,
    members: ['Bryan Cortés', 'Arantza Ríos', 'Luis Fernando Romero', 'Daniela Valdovinos'],
  },
  {
    id: 10,
    name: 'Monitoreo',
    description: 'Sistema de monitoreo y visualización de datos en tiempo real.',
    vercelUrl: 'https://front-end-project-yd84.vercel.app/',
    githubUrl: 'https://github.com/Equipo10MAC',
    image: imgMundial,
    members: ['Leonardo Velázquez', 'Rodrigo Rojas', 'Guillermo Luna', 'Ricardo Martínez', 'Jesús Álvarez'],
  },
];

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative w-full max-w-7xl h-[92vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <i className="ri-close-line text-xl text-gray-700"></i>
        </button>

        {/* Left: iframe preview */}
        <div className="flex-1 bg-gray-100 border-r border-gray-200 min-h-[300px]">
          {project.vercelUrl ? (
            <iframe
              src={project.vercelUrl}
              title={`Preview de ${project.name}`}
              className="w-full h-full"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-400 text-lg">Deploy pendiente</p>
            </div>
          )}
        </div>

        {/* Right: info panel */}
        <div className="w-full md:w-[340px] p-6 overflow-y-auto flex flex-col gap-5">
          {/* Project name */}
          <div>
            <span className="text-xs bg-[#1b3d70]/10 text-[#1b3d70] px-2 py-0.5 rounded-full font-medium">
              Equipo {project.id}
            </span>
            <h2 className="text-2xl font-bold text-[#1b3d70] mt-2">{project.name}</h2>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Descripción</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{project.description}</p>
          </div>

          {/* Members */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Integrantes</h4>
            <div className="flex flex-col gap-1.5">
              {project.members.map((member) => (
                <div key={member} className="flex items-center gap-2">
                  <i className="ri-user-line text-[#bb8800] text-sm"></i>
                  <span className="text-sm text-gray-700">{member}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-2">
            {project.vercelUrl && (
              <a
                href={project.vercelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-[#1b3d70] text-white rounded-lg hover:bg-[#15305a] transition-colors text-sm font-medium"
              >
                <i className="ri-global-line"></i>
                Ver en Vercel
                <i className="ri-external-link-line ml-auto"></i>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                <i className="ri-github-fill"></i>
                Repositorio GitHub
                <i className="ri-external-link-line ml-auto"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onPreview }: { project: typeof projects[0]; onPreview: () => void }) {
  return (
    <div className="group relative p-[2px] rounded-xl overflow-hidden bg-gray-200 hover:bg-transparent transition-colors duration-300 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15),0_4px_15px_rgba(187,136,0,0.1)]">
      {/* Animated gradient border - spinning element */}
      <div className="absolute inset-[-100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin bg-[conic-gradient(from_0deg,transparent_25%,#1b3d70,#3b82f6,#bb8800,#daa520,#1b3d70,transparent_75%)]"></div>
      <div className="relative bg-white rounded-[10px] overflow-hidden">
      {/* Preview area with image */}
      <div className="relative w-full h-44 overflow-hidden border-b border-gray-100">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={`Preview de ${project.name}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <button
              onClick={onPreview}
              className="absolute inset-0 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#1b3d70]/10 flex items-center justify-center border border-[#1b3d70]/20">
                <i className="ri-eye-line text-xl text-[#1b3d70]"></i>
              </div>
              <span className="text-sm text-[#1b3d70] font-medium">Ver proyecto</span>
            </button>
          </>
        ) : (
          <div className="w-full h-full bg-gray-50 flex items-center justify-center">
            <span className="text-sm text-gray-400">Deploy pendiente</span>
          </div>
        )}
      </div>

      {/* Card info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1.5">
          <h3 className="text-base font-bold text-[#1b3d70]">{project.name}</h3>
          <span className="text-xs bg-[#bb8800]/10 text-[#bb8800] px-2 py-0.5 rounded-full font-semibold">
            #{project.id}
          </span>
        </div>
        <p className="text-xs text-gray-500 line-clamp-2">{project.description}</p>
      </div>
      </div>
    </div>
  );
}

export default function ShowRoom() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="showroom" className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b3d70] mb-4">
            <i className="ri-gallery-line text-[#bb8800] mr-2"></i>
            Show Room
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Durante el semestre 2026-2, los estudiantes desarrollaron proyectos web full-stack aplicando metodologías ágiles,
            buenas prácticas de ingeniería de software y tecnologías modernas del ecosistema JavaScript/TypeScript.
            Cada equipo construyó una aplicación funcional desplegada en producción.
          </p>
        </div>

        {/* Banner de tecnologías - marquee draggable */}
        <div
          className="relative overflow-hidden mb-14 py-4 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={(e) => {
            const container = e.currentTarget;
            const inner = container.querySelector('.marquee-inner') as HTMLElement;
            if (!inner) return;
            e.preventDefault();
            // Get current animated position
            const computedStyle = window.getComputedStyle(inner);
            const matrix = new DOMMatrix(computedStyle.transform);
            const currentX = matrix.m41;
            // Stop animation and set current position
            inner.classList.remove('animate-marquee');
            inner.style.transform = `translateX(${currentX}px)`;
            const startX = e.pageX;
            const handleMouseMove = (ev: MouseEvent) => {
              const diff = ev.pageX - startX;
              inner.style.transform = `translateX(${currentX + diff}px)`;
            };
            const handleMouseUp = () => {
              inner.style.transform = '';
              inner.classList.add('animate-marquee');
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
            };
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          }}
          onTouchStart={(e) => {
            const container = e.currentTarget;
            const inner = container.querySelector('.marquee-inner') as HTMLElement;
            if (!inner) return;
            const computedStyle = window.getComputedStyle(inner);
            const matrix = new DOMMatrix(computedStyle.transform);
            const currentX = matrix.m41;
            inner.classList.remove('animate-marquee');
            inner.style.transform = `translateX(${currentX}px)`;
            const startX = e.touches[0].pageX;
            const handleTouchMove = (ev: TouchEvent) => {
              const diff = ev.touches[0].pageX - startX;
              inner.style.transform = `translateX(${currentX + diff}px)`;
            };
            const handleTouchEnd = () => {
              inner.style.transform = '';
              inner.classList.add('animate-marquee');
              document.removeEventListener('touchmove', handleTouchMove);
              document.removeEventListener('touchend', handleTouchEnd);
            };
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleTouchEnd);
          }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          <div className="marquee-inner flex animate-marquee gap-6 whitespace-nowrap">
            {[...tools, ...tools].map((tool, i) => (
              <div
                key={`${tool.name}-${i}`}
                className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 px-5 py-2.5 rounded-full shrink-0"
              >
                <i className={`${tool.icon} text-lg text-[#bb8800]`}></i>
                <span className="text-sm font-medium text-gray-700">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPreview={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {/* Comparte en LinkedIn */}
      <div className="max-w-7xl mx-auto px-4 mt-14">
        <div className="bg-gradient-to-r from-[#0077B5]/10 via-[#0077B5]/5 to-[#0077B5]/10 rounded-2xl p-8 border border-[#0077B5]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#0077B5]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0077B5]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="h-16 w-16 rounded-2xl bg-[#0077B5] flex items-center justify-center shrink-0 shadow-lg">
              <i className="ri-linkedin-box-fill text-3xl text-white"></i>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-[#1b3d70] mb-2">
                ¡Comparte tu proyecto en LinkedIn! 🚀
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                Acabas de construir una aplicación web full-stack con tecnologías profesionales. 
                Eso es un <strong>logro real</strong> que merece ser visible. Publica tu proyecto, 
                etiqueta a tu equipo y muestra al mundo lo que eres capaz de hacer. 
                Tu próximo empleo o cliente puede estar viendo tu perfil ahora mismo.
              </p>
              <p className="text-[#0077B5] text-xs font-semibold mt-2 italic">
                "Un portafolio que nadie ve, es un portafolio que no existe."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  const texto = '🎓 Orgulloso de compartir el proyecto que desarrollamos en el curso de Desarrollo Web en la FES Acatlán (UNAM). Construimos una aplicación full-stack con Next.js, TypeScript, Supabase y desplegada en Vercel. Aprendimos metodologías ágiles, CI/CD y trabajo colaborativo con GitHub.\n\n🔗 https://webacatlan.vercel.app\n\n#DesarrolloWeb #UNAM #FESAcatlán #NextJS #TypeScript #Supabase #FullStack';
                  navigator.clipboard.writeText(texto);
                  alert('✅ Texto copiado al portapapeles. Ahora pégalo en tu nuevo post de LinkedIn.');
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0077B5] text-white font-semibold hover:bg-[#005f8d] transition-colors shadow-md shrink-0 cursor-pointer"
              >
                <i className="ri-file-copy-line text-lg"></i>
                Copiar mensaje
              </button>
              <a
                href="https://www.linkedin.com/feed/?shareActive=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0077B5]/20 text-[#0077B5] font-semibold hover:bg-[#0077B5]/30 transition-colors shrink-0"
              >
                <i className="ri-linkedin-box-fill text-lg"></i>
                Abrir LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee + border animation styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes border-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-border-spin {
          animation: border-spin 1.7s linear infinite;
        }
      `}</style>
    </section>
  );
}
