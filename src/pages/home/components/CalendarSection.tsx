import { Link } from 'react-router-dom';

interface ResourceLink {
  label: string;
  url: string;
  type: 'internal' | 'external' | 'canva';
  icon: string;
}

interface CalendarItem {
  date: string;
  dayOfWeek: string;
  type: 'class' | 'lab';
  labNumber?: number;
  title: string;
  mainLink: string;
  resources: ResourceLink[];
  tips: string[];
  relatedTo?: string;
}

const calendarItems: CalendarItem[] = [
  {
    date: '24 de Febrero, 2026',
    dayOfWeek: 'Martes',
    type: 'lab',
    labNumber: 3,
    title: 'LAB 03 - Práctica Arquitectura de Capas (Usando Supabase, PostgREST y Postman)',
    mainLink: '/backend',
    resources: [
      { label: 'LAB en Canva', url: 'https://www.canva.com/design/DAHByEE8z2Q/Lj6Z3MS87_h6AoQxJnpoMQ/view?utm_content=DAHByEE8z2Q&utm_campaign=designshare&utm_medium=link&utm_source=viewer', type: 'canva', icon: 'ri-palette-line' },
      { label: 'Postman Docs', url: 'https://learning.postman.com/docs/getting-started/introduction/', type: 'external', icon: 'ri-file-text-line' },
      { label: 'Supabase Docs', url: 'https://supabase.com/docs', type: 'external', icon: 'ri-database-2-line' },
      { label: 'Entrega en el SEA', url: 'https://sea.acatlan.unam.mx/mod/assign/view.php?id=1196361', type: 'external', icon: 'ri-database-2-line' }

    ],
    tips: [
      'Repasa los métodos HTTP (GET, POST, PUT, DELETE) y sus codigos de estado asociados',
      'Entender la arquitectura de capas (Capa de Datos, Capa de Servicio, Capa de Presentación)',
      'Tener una cuenta gratuita en Supabase para pruebas'
    ],
    relatedTo: 'Repaso: Bases de Datos para desarrollo web y Arquitectura de Capas'
  },
    {
    date: '26 de Febrero, 2026',
    dayOfWeek: 'Jueves',
    type: 'class',
    title: 'Bases de Datos y Modelado ER para su proyecto en equipo (y repaso de conceptos vistos)',
    mainLink: '/backend/bases-datos',
    resources: [
      { label: 'Ver tema', url: '/backend/bases-datos', type: 'internal', icon: 'ri-book-open-line' },
      { label: 'LAB en Canva', url: 'https://www.canva.com/design/DAHByEE8z2Q/Lj6Z3MS87_h6AoQxJnpoMQ/view?utm_content=DAHByEE8z2Q&utm_campaign=designshare&utm_medium=link&utm_source=viewer', type: 'canva', icon: 'ri-palette-line' },
      { label: 'Diagrama ER by IBM', url: 'https://www.ibm.com/mx-es/think/topics/entity-relationship-diagram', type: 'external', icon: 'ri-database-2-line' },
      { label: 'Diagrama ER by lucidchart', url: 'https://www.lucidchart.com/pages/es/que-es-un-diagrama-entidad-relacion', type: 'external', icon: 'ri-layout-grid-line' }
    ],
    tips: [
      'Entender conceptos de relaciones (1:1, 1:N, N:M)',
      'Conocer SQL básico (SELECT, INSERT, UPDATE)',
      'Revisar conceptos de normalización'
    ],
     relatedTo: 'Realizaremos un repaso de los conceptos vistos y luego trabajaran en equipo en su proyecto.'

  },
    {
    date: '3 de Marzo, 2026',
    dayOfWeek: 'Martes',
    type: 'lab',
    labNumber: 4,
    title: 'LAB 04 - Aplica los conocimientos adquiridos en tu proyecto en equipo (Modelado ER, Arquitectura de Capas, CRUD con PostgREST y Supabase)',
    mainLink: '/backend/nestjs-fundamentos',
    resources: [
      { label: 'Ver tema', url: '/backend/bases-datos', type: 'internal', icon: 'ri-book-open-line' },
      { label: 'LAB en Canva', url: 'https://www.canva.com/design/DAHByEE8z2Q/Lj6Z3MS87_h6AoQxJnpoMQ/view?utm_content=DAHByEE8z2Q&utm_campaign=designshare&utm_medium=link&utm_source=viewer', type: 'canva', icon: 'ri-palette-line' },
      { label: 'Diagrama ER by IBM', url: 'https://www.ibm.com/mx-es/think/topics/entity-relationship-diagram', type: 'external', icon: 'ri-database-2-line' },
      { label: 'Diagrama ER by lucidchart', url: 'https://www.lucidchart.com/pages/es/que-es-un-diagrama-entidad-relacion', type: 'external', icon: 'ri-layout-grid-line' }
    ],
    tips: [
      'Entender conceptos de relaciones (1:1, 1:N, N:M)',
      'Conocer SQL básico (SELECT, INSERT, UPDATE)',
      'Revisar conceptos de normalización'
    ],
    relatedTo: 'Realizaran el mismo ejercicio del LAB 03 pero ahora aplicando los conocimientos adquiridos en su proyecto en equipo. Deberán modelar su base de datos, crear las tablas en Supabase y exponer un CRUD básico usando PostgREST.'
  },
  {
    date: '5 de Marzo, 2026',
    dayOfWeek: 'Jueves',
    type: 'class',
    title: 'Introducción a HTML Y CSS y JavaScript',
    mainLink: '/frontend/html-css-fundamentos',
    resources: [
      { label: 'Ver tema', url: '/frontend/html-css-fundamentos', type: 'internal', icon: 'ri-book-open-line' },
      { label: 'HTML Docs', url: 'https://developer.mozilla.org/es/docs/Web/HTML', type: 'external', icon: 'ri-file-text-line' },
      { label: 'CSS Docs', url: 'https://developer.mozilla.org/es/docs/Web/CSS', type: 'external', icon: 'ri-file-text-line' },
      { label: 'JavaScript Docs', url: 'https://developer.mozilla.org/es/docs/Web/JavaScript', type: 'external', icon: 'ri-file-text-line' },
      { label: 'Video Tutorial', url: 'https://www.youtube.com/watch?v=Y-OhzQpsRwI', type: 'external', icon: 'ri-youtube-fill' }
    ],
    tips: [
      'Familiarizarse con la estructura básica de un documento HTML',
      'Entender la diferencia entre etiquetas de bloque y en línea',
      'Revisar conceptos básicos de selectores y propiedades CSS',
      'Familiarizarse con la sintaxis básica de JavaScript'
      ]
  },
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
                    <h3 className="text-lg sm:text-xl font-bold text-[#1b3d70] mb-3">
                      {item.title}
                    </h3>
                    
                    {/* Resources Links */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.resources.map((resource, resIndex) => (
                        resource.type === 'internal' ? (
                          <Link
                            key={resIndex}
                            to={resource.url}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                              item.type === 'lab'
                                ? 'bg-[#bb8800]/10 text-[#bb8800] hover:bg-[#bb8800] hover:text-white'
                                : 'bg-[#1b3d70]/10 text-[#1b3d70] hover:bg-[#1b3d70] hover:text-white'
                            }`}
                          >
                            <i className={resource.icon}></i>
                            <span>{resource.label}</span>
                          </Link>
                        ) : resource.type === 'canva' ? (
                          <a
                            key={resIndex}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#00C4CC] to-[#7B2FF7] text-white hover:from-[#00D4DC] hover:to-[#8B3FFF] hover:shadow-lg transition-all duration-300"
                          >
                            <i className={resource.icon}></i>
                            <span>{resource.label}</span>
                            <i className="ri-external-link-line text-[10px]"></i>
                          </a>
                        ) : (
                          <a
                            key={resIndex}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-all duration-300"
                          >
                            <i className={resource.icon}></i>
                            <span>{resource.label}</span>
                            <i className="ri-external-link-line text-[10px]"></i>
                          </a>
                        )
                      ))}
                    </div>
                    
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
                      to={item.mainLink}
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

        {/* Sprint Deliverable */}
        <div className="mt-10 sm:mt-14">
          <div className="border-2 rounded-2xl p-5 sm:p-6 md:p-8 bg-white shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-2xl">📦</div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1b3d70]">Entregable Final por Sprint</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Para este sprint entregaremos el cierre del avance del proyecto.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <h4 className="text-sm font-bold text-[#1b3d70] uppercase tracking-wide mb-2">Lo que se entrega</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-[#bb8800] mt-0.5"></i>
                    <span>Diagrama ER del proyecto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-[#bb8800] mt-0.5"></i>
                    <span>Implementacion en Supabase (tablas y relaciones)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-[#bb8800] mt-0.5"></i>
                    <span>Pruebas completas en Postman con todos los endpoints probados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-[#bb8800] mt-0.5"></i>
                    <span>Coleccion de Postman en formato JSON</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#1b3d70] uppercase tracking-wide mb-2">Donde entregar</h4>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="text-sm text-gray-700 mb-2">
                    La entrega se realiza en la plataforma <span className="font-bold">SEA</span>.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <i className="ri-file-upload-line text-[#1b3d70] mt-0.5"></i>
                      <span>Subir un PDF con capturas del Diagrama ER y de la BD en Supabase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-link-m text-[#1b3d70] mt-0.5"></i>
                      <span>Incluir links a Supabase (proyecto y tablas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-test-tube-line text-[#1b3d70] mt-0.5"></i>
                      <span>Adjuntar pruebas de Postman y la coleccion JSON</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-gradient-to-r from-[#00C4CC] to-[#7B2FF7]"></span>
              <span className="text-gray-600 text-xs sm:text-sm font-medium">Canva LAB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
