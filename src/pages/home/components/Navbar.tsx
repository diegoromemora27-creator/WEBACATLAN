import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);
  const [isMobileTopicsOpen, setIsMobileTopicsOpen] = useState(false);
  const [isBackendOpen, setIsBackendOpen] = useState(false);
  const [isMobileBackendOpen, setIsMobileBackendOpen] = useState(false);
  const [isFrontendOpen, setIsFrontendOpen] = useState(false);
  const [isMobileFrontendOpen, setIsMobileFrontendOpen] = useState(false);
  const [isCodeConceptsOpen, setIsCodeConceptsOpen] = useState(false);
  const [isMobileCodeConceptsOpen, setIsMobileCodeConceptsOpen] = useState(false);
  const [isDevOpsOpen, setIsDevOpsOpen] = useState(false);
  const [isMobileDevOpsOpen, setIsMobileDevOpsOpen] = useState(false);
  const [isFundamentosOpen, setIsFundamentosOpen] = useState(false);
  const [isMobileFundamentosOpen, setIsMobileFundamentosOpen] = useState(false);
  const [isIAOpen, setIsIAOpen] = useState(false);
  const [isMobileIAOpen, setIsMobileIAOpen] = useState(false);
  const dropdownRef = useRef(null);
  const backendDropdownRef = useRef(null);
  const frontendDropdownRef = useRef(null);
  const codeConceptsDropdownRef = useRef(null);
  const devOpsDropdownRef = useRef(null);
  const fundamentosDropdownRef = useRef(null);
  const iaDropdownRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // ----------------------------------------------
  // Scroll handling – adds a shadow / background
  // when the page is scrolled more than 50px.
  // ----------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // -------------------------------------------------
  // Close the desktop “Temas” dropdown when clicking
  // outside of it.
  // -------------------------------------------------
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsTopicsOpen(false);
      }
      if (backendDropdownRef.current && !backendDropdownRef.current.contains(event.target)) {
        setIsBackendOpen(false);
      }
      if (frontendDropdownRef.current && !frontendDropdownRef.current.contains(event.target)) {
        setIsFrontendOpen(false);
      }
      if (codeConceptsDropdownRef.current && !codeConceptsDropdownRef.current.contains(event.target)) {
        setIsCodeConceptsOpen(false);
      }
      if (devOpsDropdownRef.current && !devOpsDropdownRef.current.contains(event.target)) {
        setIsDevOpsOpen(false);
      }
      if (fundamentosDropdownRef.current && !fundamentosDropdownRef.current.contains(event.target)) {
        setIsFundamentosOpen(false);
      }
      if (iaDropdownRef.current && !iaDropdownRef.current.contains(event.target)) {
        setIsIAOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // -------------------------------------------------
  // Smooth‑scroll to a page section.
  // -------------------------------------------------
  const scrollToSection = (sectionId) => {
    try {
      // Si no estamos en la página de inicio, navegar primero a ella
      if (!isHomePage) {
        if (window.REACT_APP_NAVIGATE) {
          window.REACT_APP_NAVIGATE('/');
          // Después de navegar, hacer scroll a la sección
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } catch (err) {
      console.error(`Failed to scroll to section "${sectionId}":`, err);
    } finally {
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'curso', label: 'Información' },
    { id: 'profesor', label: 'Profesor' },
    { id: 'evaluacion', label: 'Evaluación' },
    { id: 'proyecto', label: 'Proyecto' },
    { id: 'gamificacion', label: 'Recompensas' },
  ];

  const topicItems = [
    { 
      id: 'devops-deployment', 
      label: 'DevOps, Containerización & Deployment', 
      icon: 'ri-cloud-line',
      hasSubmenu: true,
      submenu: [
        { id: 'devops-intro', label: 'Introducción a DevOps', icon: 'ri-information-line', path: '/devops' },
        { id: 'docker-intro', label: 'Introducción a Docker', icon: 'ri-ship-line', path: '/devops/docker-intro' },
        { id: 'docker-ejemplo', label: 'Docker Ejemplo', icon: 'ri-code-box-line', path: '/devops/docker-ejemplo' },
        { id: 'cloud-computing', label: 'Introducción a Cloud Computing', icon: 'ri-cloud-line', path: '/devops/cloud-computing' },
      ]
    },
    { id: 'metodologias-agiles', label: 'Metodologías Ágiles', icon: 'ri-team-line', path: '/metodologias-agiles' },
    { id: 'control-versiones', label: 'Control de Versiones', icon: 'ri-git-branch-line', path: '/control-versiones' },
    { 
      id: 'fundamentos-arquitectura', 
      label: 'Fundamentos & Arquitectura de Software', 
      icon: 'ri-building-2-line',
      hasSubmenu: true,
      submenu: [
        { id: 'casos-estudio', label: 'Casos de Estudio (Gigantes Tech)', icon: 'ri-building-4-line', path: '/fundamentos-arquitectura' },
      ]
    },
    { 
      id: 'fundamentos-ia', 
      label: 'Fundamentos de IA', 
      icon: 'ri-brain-line',
      hasSubmenu: true,
      submenu: [
        { id: 'ia-pt1', label: 'IA Parte 1', icon: 'ri-sparkling-line', path: '/fundamentos-ia/ia-pt1' },
        { id: 'ia-pt2', label: 'IA Parte 2', icon: 'ri-quill-pen-line', path: '/fundamentos-ia/ia-pt2' },
      ]
    },
    { 
      id: 'code-concepts', 
      label: 'Conceptos de Código', 
      icon: 'ri-code-box-line',
      hasSubmenu: true,
      submenu: [
        { id: 'code-concepts-poo', label: 'POO (Programación Orientada a Objetos)', icon: 'ri-shapes-line', path: '/code-concepts/poo' },
        { id: 'code-concepts-typescript', label: 'TypeScript', icon: 'ri-code-s-slash-line', path: '/code-concepts/typescript' },
      ]
    },
    { 
      id: 'backend', 
      label: 'Backend', 
      icon: 'ri-server-line', 
      hasSubmenu: true,
      submenu: [
        { id: 'backend-apis', label: 'APIs RESTful', icon: 'ri-code-s-slash-line', path: '/backend' },
        { id: 'backend-asincronia', label: 'Asincronía', icon: 'ri-time-line', path: '/backend/asincronia' },
        { id: 'backend-nestjs', label: 'NestJS Fundamentos', icon: 'ri-nest-line', path: '/backend/nestjs-fundamentos' },
        { id: 'backend-orm', label: 'ORM (TypeORM)', icon: 'ri-database-2-line', path: '/backend/orm' },
      ]
    },
    { 
      id: 'frontend', 
      label: 'Frontend', 
      icon: 'ri-layout-line',
      hasSubmenu: true,
      submenu: [
        { id: 'frontend-html', label: 'HTML', icon: 'ri-html5-line', path: '/frontend/html' },
        { id: 'frontend-css', label: 'CSS', icon: 'ri-css3-line', path: '/frontend/css' },
        { id: 'frontend-conceptos-avanzados', label: 'Conceptos Avanzados', icon: 'ri-graduation-cap-line', path: '/frontend/conceptos-avanzados' },
        { id: 'frontend-nextjs', label: 'Next.js Fundamentos', icon: 'ri-reactjs-line', path: '/frontend/nextjs-fundamentos' },
      ]
    },
    { id: 'bases-datos', label: 'Bases de Datos', icon: 'ri-database-2-line' },
    { id: 'seguridad-testing', label: 'Seguridad, Testing & Calidad del Software', icon: 'ri-shield-check-line', path: '/seguridad-testing' },
  ];

  const handleTopicClick = (topic) => {
    if (topic.hasSubmenu) {
      if (topic.id === 'backend') {
        setIsBackendOpen(!isBackendOpen);
        setIsFrontendOpen(false);
        setIsCodeConceptsOpen(false);
        setIsDevOpsOpen(false);
        setIsFundamentosOpen(false);
        setIsIAOpen(false);
      } else if (topic.id === 'frontend') {
        setIsFrontendOpen(!isFrontendOpen);
        setIsBackendOpen(false);
        setIsCodeConceptsOpen(false);
        setIsDevOpsOpen(false);
        setIsFundamentosOpen(false);
        setIsIAOpen(false);
      } else if (topic.id === 'code-concepts') {
        setIsCodeConceptsOpen(!isCodeConceptsOpen);
        setIsBackendOpen(false);
        setIsFrontendOpen(false);
        setIsDevOpsOpen(false);
        setIsFundamentosOpen(false);
        setIsIAOpen(false);
      } else if (topic.id === 'devops-deployment') {
        setIsDevOpsOpen(!isDevOpsOpen);
        setIsBackendOpen(false);
        setIsFrontendOpen(false);
        setIsCodeConceptsOpen(false);
        setIsFundamentosOpen(false);
        setIsIAOpen(false);
      } else if (topic.id === 'fundamentos-arquitectura') {
        setIsFundamentosOpen(!isFundamentosOpen);
        setIsBackendOpen(false);
        setIsFrontendOpen(false);
        setIsCodeConceptsOpen(false);
        setIsDevOpsOpen(false);
        setIsIAOpen(false);
      } else if (topic.id === 'fundamentos-ia') {
        setIsIAOpen(!isIAOpen);
        setIsBackendOpen(false);
        setIsFrontendOpen(false);
        setIsCodeConceptsOpen(false);
        setIsDevOpsOpen(false);
        setIsFundamentosOpen(false);
      }
      return;
    }
    
    setIsTopicsOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileTopicsOpen(false);
    setIsBackendOpen(false);
    setIsFrontendOpen(false);
    setIsCodeConceptsOpen(false);
    setIsDevOpsOpen(false);
    setIsFundamentosOpen(false);
    setIsIAOpen(false);
    
    if (topic.path && window.REACT_APP_NAVIGATE) {
      window.REACT_APP_NAVIGATE(topic.path);
    }
  };

  const handleSubmenuClick = (submenuItem) => {
    setIsTopicsOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileTopicsOpen(false);
    setIsBackendOpen(false);
    setIsMobileBackendOpen(false);
    setIsFrontendOpen(false);
    setIsMobileFrontendOpen(false);
    setIsCodeConceptsOpen(false);
    setIsMobileCodeConceptsOpen(false);
    setIsDevOpsOpen(false);
    setIsMobileDevOpsOpen(false);
    setIsFundamentosOpen(false);
    setIsMobileFundamentosOpen(false);
    setIsIAOpen(false);
    setIsMobileIAOpen(false);
    
    if (submenuItem.path && window.REACT_APP_NAVIGATE) {
      window.REACT_APP_NAVIGATE(submenuItem.path);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo + title */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <img
              src="https://static.readdy.ai/image/f0504b97139bc354dc5720a1b109b5af/be47f2a0a2638e93881bb6a05d2eb8d4.png"
              alt="UNAM FES Acatlán"
              className="h-10 sm:h-14 w-auto"
            />
            <div
              className={`transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen ? 'text-[#1b3d70]' : 'text-white'
              }`}
            >
              <div className="font-bold text-sm sm:text-lg leading-tight">
                Desarrollo de Aplicaciones Web
              </div>
              <div className="text-xs opacity-80 hidden sm:block">UNAM FES Acatlán</div>
            </div>
          </div>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium text-sm transition-all duration-300 whitespace-nowrap hover:scale-105 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-[#bb8800] border-b-2 border-[#bb8800]'
                      : isScrolled
                      ? 'text-[#1b3d70] hover:text-[#bb8800]'
                      : 'text-white hover:text-[#bb8800]'
                  } pb-1`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            {/* Topics dropdown – desktop */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsTopicsOpen(!isTopicsOpen)}
                className={`font-medium text-sm transition-all duration-300 whitespace-nowrap hover:scale-105 cursor-pointer flex items-center gap-1 ${
                  isScrolled ? 'text-[#1b3d70] hover:text-[#bb8800]' : 'text-white hover:text-[#bb8800]'
                } pb-1`}
              >
                Temas
                <i
                  className={`ri-arrow-down-s-line transition-transform duration-300 ${
                    isTopicsOpen ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>

              {isTopicsOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fadeIn max-h-[calc(100vh-120px)] overflow-y-auto">
                  {topicItems.map((topic) => (
                    <div key={topic.id} className="relative" ref={topic.id === 'backend' ? backendDropdownRef : topic.id === 'frontend' ? frontendDropdownRef : topic.id === 'code-concepts' ? codeConceptsDropdownRef : topic.id === 'devops-deployment' ? devOpsDropdownRef : topic.id === 'fundamentos-arquitectura' ? fundamentosDropdownRef : topic.id === 'fundamentos-ia' ? iaDropdownRef : null}>
                      <button
                        onClick={() => handleTopicClick(topic)}
                        className="w-full text-left px-4 py-3 text-sm text-[#1b3d70] hover:bg-[#1b3d70]/5 hover:text-[#bb8800] transition-all duration-200 flex items-center gap-3 cursor-pointer"
                      >
                        <span className="w-8 h-8 flex items-center justify-center bg-[#1b3d70]/10 rounded-lg">
                          <i className={`${topic.icon} text-[#1b3d70]`}></i>
                        </span>
                        <span className="font-medium flex-1">{topic.label}</span>
                        {topic.hasSubmenu && (
                          <i className={`ri-arrow-right-s-line transition-transform duration-300 ${
                            (topic.id === 'backend' && isBackendOpen) || (topic.id === 'frontend' && isFrontendOpen) || (topic.id === 'code-concepts' && isCodeConceptsOpen) || (topic.id === 'devops-deployment' && isDevOpsOpen) || (topic.id === 'fundamentos-arquitectura' && isFundamentosOpen) || (topic.id === 'fundamentos-ia' && isIAOpen) ? 'rotate-90' : ''
                          }`}></i>
                        )}
                      </button>
                      
                      {/* DevOps Submenu */}
                      {topic.id === 'devops-deployment' && topic.hasSubmenu && isDevOpsOpen && (
                        <div className="bg-[#f8f9fa] border-l-2 border-[#2496ED] ml-4 mr-2 rounded-r-lg overflow-hidden">
                          {topic.submenu.map((submenuItem) => (
                            <button
                              key={submenuItem.id}
                              onClick={() => handleSubmenuClick(submenuItem)}
                              className="w-full text-left px-4 py-2.5 text-sm text-[#1b3d70] hover:bg-[#2496ED]/10 hover:text-[#2496ED] transition-all duration-200 flex items-center gap-2 cursor-pointer"
                            >
                              <i className={`${submenuItem.icon} text-[#2496ED]`}></i>
                              <span>{submenuItem.label}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Fundamentos Submenu */}
                      {topic.id === 'fundamentos-arquitectura' && topic.hasSubmenu && isFundamentosOpen && (
                        <div className="bg-[#f8f9fa] border-l-2 border-[#8B5CF6] ml-4 mr-2 rounded-r-lg overflow-hidden">
                          <a
                            href="/fundamentos-arquitectura"
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] transition-all duration-200 cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              <i className="ri-building-line text-[#8B5CF6]"></i>
                              Casos de Estudio (Gigantes Tech)
                            </span>
                          </a>
                          <a
                            href="/fundamentos-arquitectura/arquitectura1"
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] transition-all duration-200 cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              <i className="ri-stack-line text-[#8B5CF6]"></i>
                              Arquitectura PT1
                            </span>
                          </a>
                          <a
                            href="/fundamentos-arquitectura//arquitectura2"
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] transition-all duration-200 cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              <i className="ri-stack-line text-[#8B5CF6]"></i>
                              Arquitectura PT2
                            </span>
                          </a>
                        </div>
                      )}

                      {/* IA Submenu */}
                      {topic.id === 'fundamentos-ia' && topic.hasSubmenu && isIAOpen && (
                        <div className="bg-[#f8f9fa] border-l-2 border-[#4285f4] ml-4 mr-2 rounded-r-lg overflow-hidden">
                          {topic.submenu.map((submenuItem) => (
                            <button
                              key={submenuItem.id}
                              onClick={() => handleSubmenuClick(submenuItem)}
                              className="w-full text-left px-4 py-2.5 text-sm text-[#1b3d70] hover:bg-[#4285f4]/10 hover:text-[#4285f4] transition-all duration-200 flex items-center gap-2 cursor-pointer"
                            >
                              <i className={`${submenuItem.icon} text-[#4285f4]`}></i>
                              <span>{submenuItem.label}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Code Concepts Submenu */}
                      {topic.id === 'code-concepts' && topic.hasSubmenu && isCodeConceptsOpen && (
                        <div className="bg-[#f8f9fa] border-l-2 border-[#bb8800] ml-4 mr-2 rounded-r-lg overflow-hidden">
                          {topic.submenu.map((submenuItem) => (
                            <button
                              key={submenuItem.id}
                              onClick={() => handleSubmenuClick(submenuItem)}
                              className="w-full text-left px-4 py-2.5 text-sm text-[#1b3d70] hover:bg-[#bb8800]/10 hover:text-[#bb8800] transition-all duration-200 flex items-center gap-2 cursor-pointer"
                            >
                              <i className={`${submenuItem.icon} text-[#bb8800]`}></i>
                              <span>{submenuItem.label}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Backend Submenu */}
                      {topic.id === 'backend' && topic.hasSubmenu && isBackendOpen && (
                        <div className="bg-[#f8f9fa] border-l-2 border-[#10b981] ml-4 mr-2 rounded-r-lg overflow-hidden">
                          {topic.submenu.map((submenuItem) => (
                            <button
                              key={submenuItem.id}
                              onClick={() => handleSubmenuClick(submenuItem)}
                              className="w-full text-left px-4 py-2.5 text-sm text-[#1b3d70] hover:bg-[#10b981]/10 hover:text-[#10b981] transition-all duration-200 flex items-center gap-2 cursor-pointer"
                            >
                              <i className={`${submenuItem.icon} text-[#10b981]`}></i>
                              <span>{submenuItem.label}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Frontend Submenu */}
                      {topic.id === 'frontend' && topic.hasSubmenu && isFrontendOpen && (
                        <div className="bg-[#f8f9fa] border-l-2 border-[#0070f3] ml-4 mr-2 rounded-r-lg overflow-hidden">
                          {topic.submenu.map((submenuItem) => (
                            <button
                              key={submenuItem.id}
                              onClick={() => handleSubmenuClick(submenuItem)}
                              className="w-full text-left px-4 py-2.5 text-sm text-[#1b3d70] hover:bg-[#0070f3]/10 hover:text-[#0070f3] transition-all duration-200 flex items-center gap-2 cursor-pointer"
                            >
                              <i className={`${submenuItem.icon} text-[#0070f3]`}></i>
                              <span>{submenuItem.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Hamburger – mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer ${
              isScrolled || isMobileMenuOpen ? 'text-[#1b3d70]' : 'text-white'
            }`}
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 max-h-[calc(100vh-100px)] overflow-y-auto">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left font-medium text-base py-2 px-4 rounded-lg transition-all duration-300 cursor-pointer ${
                      activeSection === item.id
                        ? 'text-[#bb8800] bg-[#bb8800]/10'
                        : 'text-[#1b3d70] hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              {/* Topics dropdown – mobile */}
              <li>
                <button
                  onClick={() => setIsMobileTopicsOpen(!isMobileTopicsOpen)}
                  className="w-full text-left font-medium text-base py-2 px-4 rounded-lg transition-all duration-300 cursor-pointer text-[#1b3d70] hover:bg-gray-100 flex items-center justify-between"
                >
                  <span>Temas</span>
                  <i
                    className={`ri-arrow-down-s-line transition-transform duration-300 ${
                      isMobileTopicsOpen ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>

                {isMobileTopicsOpen && (
                  <ul className="mt-2 ml-4 space-y-1 border-l-2 border-[#1b3d70]/20 pl-4">
                    {topicItems.map((topic) => (
                      <li key={topic.id}>
                        {topic.hasSubmenu ? (
                          <>
                            <button
                              onClick={() => {
                                if (topic.id === 'backend') {
                                  setIsMobileBackendOpen(!isMobileBackendOpen);
                                  setIsMobileFrontendOpen(false);
                                  setIsMobileCodeConceptsOpen(false);
                                  setIsMobileDevOpsOpen(false);
                                  setIsMobileFundamentosOpen(false);
                                  setIsMobileIAOpen(false);
                                } else if (topic.id === 'frontend') {
                                  setIsMobileFrontendOpen(!isMobileFrontendOpen);
                                  setIsMobileBackendOpen(false);
                                  setIsMobileCodeConceptsOpen(false);
                                  setIsMobileDevOpsOpen(false);
                                  setIsMobileFundamentosOpen(false);
                                  setIsMobileIAOpen(false);
                                } else if (topic.id === 'code-concepts') {
                                  setIsMobileCodeConceptsOpen(!isMobileCodeConceptsOpen);
                                  setIsMobileBackendOpen(false);
                                  setIsMobileFrontendOpen(false);
                                  setIsMobileDevOpsOpen(false);
                                  setIsMobileFundamentosOpen(false);
                                  setIsMobileIAOpen(false);
                                } else if (topic.id === 'devops-deployment') {
                                  setIsMobileDevOpsOpen(!isMobileDevOpsOpen);
                                  setIsMobileBackendOpen(false);
                                  setIsMobileFrontendOpen(false);
                                  setIsMobileCodeConceptsOpen(false);
                                  setIsMobileFundamentosOpen(false);
                                  setIsMobileIAOpen(false);
                                } else if (topic.id === 'fundamentos-arquitectura') {
                                  setIsMobileFundamentosOpen(!isMobileFundamentosOpen);
                                  setIsMobileBackendOpen(false);
                                  setIsMobileFrontendOpen(false);
                                  setIsMobileCodeConceptsOpen(false);
                                  setIsMobileDevOpsOpen(false);
                                  setIsMobileIAOpen(false);
                                } else if (topic.id === 'fundamentos-ia') {
                                  setIsMobileIAOpen(!isMobileIAOpen);
                                  setIsMobileBackendOpen(false);
                                  setIsMobileFrontendOpen(false);
                                  setIsMobileCodeConceptsOpen(false);
                                  setIsMobileDevOpsOpen(false);
                                  setIsMobileFundamentosOpen(false);
                                }
                              }}
                              className="w-full text-left py-2 px-3 text-sm text-[#1b3d70] hover:text-[#bb8800] transition-all duration-200 flex items-center justify-between cursor-pointer rounded-lg hover:bg-gray-50"
                            >
                              <div className="flex items-center gap-2">
                                <i className={`${topic.icon} text-base`}></i>
                                <span>{topic.label}</span>
                              </div>
                              <i className={`ri-arrow-down-s-line transition-transform duration-300 ${
                                (topic.id === 'backend' && isMobileBackendOpen) || (topic.id === 'frontend' && isMobileFrontendOpen) || (topic.id === 'code-concepts' && isMobileCodeConceptsOpen) || (topic.id === 'devops-deployment' && isMobileDevOpsOpen) || (topic.id === 'fundamentos-arquitectura' && isMobileFundamentosOpen) || (topic.id === 'fundamentos-ia' && isMobileIAOpen) ? 'rotate-180' : ''
                              }`}></i>
                            </button>
                            
                            {topic.id === 'devops-deployment' && isMobileDevOpsOpen && (
                              <ul className="mt-1 ml-4 space-y-1 border-l-2 border-[#2496ED]/30 pl-3">
                                {topic.submenu.map((submenuItem) => (
                                  <li key={submenuItem.id}>
                                    <button
                                      onClick={() => handleSubmenuClick(submenuItem)}
                                      className="w-full text-left py-2 px-2 text-sm text-[#1b3d70] hover:text-[#2496ED] transition-all duration-200 flex items-center gap-2 cursor-pointer rounded-lg hover:bg-[#2496ED]/5"
                                    >
                                      <i className={`${submenuItem.icon} text-[#2496ED]`}></i>
                                      <span>{submenuItem.label}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {topic.id === 'fundamentos-arquitectura' && isMobileFundamentosOpen && (
                              <ul className="mt-1 ml-4 space-y-1 border-l-2 border-[#8B5CF6]/30 pl-3">
                                <li>
                                  <a
                                    href="/fundamentos-arquitectura"
                                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] transition-all duration-200 cursor-pointer"
                                  >
                                    <span className="flex items-center gap-2">
                                      <i className="ri-building-line text-[#8B5CF6]"></i>
                                      Casos de Estudio (Gigantes Tech)
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="/fundamentos-arquitectura/arquitectura1"
                                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] transition-all duration-200 cursor-pointer"
                                  >
                                    <span className="flex items-center gap-2">
                                      <i className="ri-stack-line text-[#8B5CF6]"></i>
                                      Arquitectura PT1
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="/fundamentos-arquitectura/arquitectura2"
                                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] transition-all duration-200 cursor-pointer"
                                  >
                                    <span className="flex items-center gap-2">
                                      <i className="ri-stack-line text-[#8B5CF6]"></i>
                                      Arquitectura PT2
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            )}

                            {topic.id === 'fundamentos-ia' && isMobileIAOpen && (
                              <ul className="mt-1 ml-4 space-y-1 border-l-2 border-[#4285f4]/30 pl-3">
                                {topic.submenu.map((submenuItem) => (
                                  <li key={submenuItem.id}>
                                    <button
                                      onClick={() => handleSubmenuClick(submenuItem)}
                                      className="w-full text-left py-2 px-2 text-sm text-[#1b3d70] hover:text-[#4285f4] transition-all duration-200 flex items-center gap-2 cursor-pointer rounded-lg hover:bg-[#4285f4]/5"
                                    >
                                      <i className={`${submenuItem.icon} text-[#4285f4]`}></i>
                                      <span>{submenuItem.label}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {topic.id === 'code-concepts' && isMobileCodeConceptsOpen && (
                              <ul className="mt-1 ml-4 space-y-1 border-l-2 border-[#bb8800]/30 pl-3">
                                {topic.submenu.map((submenuItem) => (
                                  <li key={submenuItem.id}>
                                    <button
                                      onClick={() => handleSubmenuClick(submenuItem)}
                                      className="w-full text-left py-2 px-2 text-sm text-[#1b3d70] hover:text-[#bb8800] transition-all duration-200 flex items-center gap-2 cursor-pointer rounded-lg hover:bg-[#bb8800]/5"
                                    >
                                      <i className={`${submenuItem.icon} text-[#bb8800]`}></i>
                                      <span>{submenuItem.label}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {topic.id === 'backend' && isMobileBackendOpen && (
                              <ul className="mt-1 ml-4 space-y-1 border-l-2 border-[#10b981]/30 pl-3">
                                {topic.submenu.map((submenuItem) => (
                                  <li key={submenuItem.id}>
                                    <button
                                      onClick={() => handleSubmenuClick(submenuItem)}
                                      className="w-full text-left py-2 px-2 text-sm text-[#1b3d70] hover:text-[#10b981] transition-all duration-200 flex items-center gap-2 cursor-pointer rounded-lg hover:bg-[#10b981]/5"
                                    >
                                      <i className={`${submenuItem.icon} text-[#10b981]`}></i>
                                      <span>{submenuItem.label}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {topic.id === 'frontend' && isMobileFrontendOpen && (
                              <ul className="mt-1 ml-4 space-y-1 border-l-2 border-[#0070f3]/30 pl-3">
                                {topic.submenu.map((submenuItem) => (
                                  <li key={submenuItem.id}>
                                    <button
                                      onClick={() => handleSubmenuClick(submenuItem)}
                                      className="w-full text-left py-2 px-2 text-sm text-[#1b3d70] hover:text-[#0070f3] transition-all duration-200 flex items-center gap-2 cursor-pointer rounded-lg hover:bg-[#0070f3]/5"
                                    >
                                      <i className={`${submenuItem.icon} text-[#0070f3]`}></i>
                                      <span>{submenuItem.label}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        ) : (
                          <button
                            onClick={() => handleTopicClick(topic)}
                            className="w-full text-left py-2 px-3 text-sm text-[#1b3d70] hover:text-[#bb8800] transition-all duration-200 flex items-center gap-2 cursor-pointer rounded-lg hover:bg-gray-50"
                          >
                            <i className={`${topic.icon} text-base`}></i>
                            <span>{topic.label}</span>
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Inline animation styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
}
