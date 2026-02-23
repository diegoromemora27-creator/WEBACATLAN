import { Link } from 'react-router-dom';

interface CalendarItem {
  date: string;
  dayOfWeek: string;
  type: 'class' | 'lab';
  labNumber?: number;
  title: string;
  link: string;
  tips: string[];
  relatedTo?: string;
}

const calendarItems: CalendarItem[] = [
  {
    date: '24 de Febrero, 2026',
    dayOfWeek: 'Martes',
    type: 'lab',
    labNumber: 3,
    title: 'LAB 03 - Práctica de APIs RESTful',
    link: '/backend',
    tips: [
      'Repasa los métodos HTTP (GET, POST, PUT, DELETE)',
      'Ten Node.js instalado y actualizado',
      'Revisar conceptos de DTOs y validación'
    ],
    relatedTo: 'Repaso: APIs RESTful y Protocolo HTTP'
  },
  {
    date: '26 de Febrero, 2026',
    dayOfWeek: 'Jueves',
    type: 'class',
    title: 'Introducción a NestJS - Módulos y Controladores',
    link: '/backend/nestjs-fundamentos',
    tips: [
      'Conocimientos previos de TypeScript recomendados',
      'Entender decoradores básicos (@, annotations)',
      'Familiaridad con arquitectura MVC',
      'Tener instalado Node.js v18+'
    ]
  },
  {
    date: '3 de Marzo, 2026',
    dayOfWeek: 'Martes',
    type: 'lab',
    labNumber: 4,
    title: 'LAB 04 - Creando tu primer proyecto NestJS',
    link: '/backend/nestjs-fundamentos',
    tips: [
      'Repasa la estructura de módulos en NestJS',
      'Ten instalado @nestjs/cli globalmente',
      'Revisar el patrón de inyección de dependencias'
    ],
    relatedTo: 'Repaso: Introducción a NestJS'
  },
  {
    date: '5 de Marzo, 2026',
    dayOfWeek: 'Jueves',
    type: 'class',
    title: 'Bases de Datos y Modelado ER',
    link: '/backend/bases-datos',
    tips: [
      'Entender conceptos de relaciones (1:1, 1:N, N:M)',
      'Conocer SQL básico (SELECT, INSERT, UPDATE)',
      'Tener PostgreSQL o MySQL instalado',
      'Revisar conceptos de normalización'
    ]
  }
];

export default function CalendarSection() {
  return (
    <section id="calendario" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b3d70] mb-4">
            📅 Calendario de Temas
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#bb8800] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Planifica tu estudio con anticipación. Revisa los tips y conocimientos previos antes de cada clase.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#1b3d70]/10 px-4 py-2 rounded-full mt-4 border border-[#1b3d70]/20">
            <i className="ri-calendar-schedule-line text-[#1b3d70] text-lg"></i>
            <span className="text-[#1b3d70] text-sm font-semibold">Próximas 2 Semanas</span>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid gap-4 sm:gap-6">
          {calendarItems.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                item.type === 'lab'
                  ? 'border-[#bb8800] hover:border-[#d49a00]'
                  : 'border-[#1b3d70] hover:border-[#2a5490]'
              }`}
            >
              {/* Date Badge */}
              <div className={`absolute top-0 left-0 px-4 py-2 rounded-br-xl ${
                item.type === 'lab' ? 'bg-[#bb8800]' : 'bg-[#1b3d70]'
              }`}>
                <span className="text-white text-xs font-bold">{item.dayOfWeek}</span>
              </div>

              <div className="p-5 sm:p-6 md:p-8 pt-12 sm:pt-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
                  {/* Left Side - Date & Type */}
                  <div className="lg:w-52 flex-shrink-0">
                    <div className="flex items-center gap-2 mb-2">
                      <i className={`text-xl ${
                        item.type === 'lab' 
                          ? 'ri-flask-line text-[#bb8800]' 
                          : 'ri-book-open-line text-[#1b3d70]'
                      }`}></i>
                      <span className={`text-sm font-bold uppercase tracking-wide ${
                        item.type === 'lab' ? 'text-[#bb8800]' : 'text-[#1b3d70]'
                      }`}>
                        {item.type === 'lab' ? 'Laboratorio' : 'Clase Teórica'}
                      </span>
                    </div>
                    <p className="text-[#1b3d70] font-semibold text-sm sm:text-base">{item.date}</p>
                    {item.relatedTo && (
                      <p className="text-gray-500 text-xs mt-1 italic">
                        {item.relatedTo}
                      </p>
                    )}
                  </div>

                  {/* Center - Title & Link */}
                  <div className="flex-1">
                    <Link 
                      to={item.link}
                      className="group inline-flex items-center gap-2 mb-3"
                    >
                      <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                        item.type === 'lab' 
                          ? 'text-[#1b3d70] group-hover:text-[#bb8800]' 
                          : 'text-[#1b3d70] group-hover:text-[#2a5490]'
                      }`}>
                        {item.title}
                      </h3>
                      <i className={`ri-external-link-line transition-colors ${
                        item.type === 'lab' 
                          ? 'text-gray-400 group-hover:text-[#bb8800]' 
                          : 'text-gray-400 group-hover:text-[#1b3d70]'
                      }`}></i>
                    </Link>
                    
                    {/* Tips */}
                    <div className="space-y-2">
                      <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                        <i className="ri-lightbulb-line text-[#bb8800]"></i>
                        Tips / Conocimientos Previos:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.tips.map((tip, tipIndex) => (
                          <li 
                            key={tipIndex}
                            className="flex items-start gap-2 text-gray-600 text-sm"
                          >
                            <i className="ri-checkbox-circle-fill text-[#bb8800] mt-0.5 flex-shrink-0"></i>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right - Action Button */}
                  <div className="lg:w-36 flex-shrink-0 flex lg:justify-end mt-4 lg:mt-0">
                    <Link
                      to={item.link}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
                        item.type === 'lab'
                          ? 'bg-[#bb8800] text-white hover:bg-[#d49a00]'
                          : 'bg-[#1b3d70] text-white hover:bg-[#2a5490]'
                      }`}
                    >
                      <span>Ver tema</span>
                      <i className="ri-arrow-right-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-white rounded-full px-6 py-4 border-2 border-gray-200 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#bb8800]"></span>
              <span className="text-gray-600 text-xs sm:text-sm font-medium">LAB (Martes)</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#1b3d70]"></span>
              <span className="text-gray-600 text-xs sm:text-sm font-medium">Clase (Jueves)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
