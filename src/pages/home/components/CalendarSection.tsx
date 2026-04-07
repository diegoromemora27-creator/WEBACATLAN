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
    date: '7 de Abril, 2026',
    dayOfWeek: 'Martes',
    type: 'lab',
    labNumber: 3,
    title: 'LAB 06 - Introduccion a Next JS & Revision de Examen',
    mainLink: '/',
   resources: [
      { label: 'LAB en Canva', url:"https://canva.link/qjuqa543kwv0341", type: 'canva', icon: 'ri-palette-line' },
      {label:'Evaluacion Anonima del curso', url:'https://forms.gle/Eei1Vau2qTvh6d2X7', type:'internal', icon:'ri-file-text-line'},
      {label:'Lista para el examen', url:'https://docs.google.com/spreadsheets/d/1fRCNMdgKCW-Ao6PdhIhHz29_bAAgAWwjTURgDY9LELY/edit?usp=sharing', type:'internal', icon:'ri-file-text-line'}
    ],
    tips: [
      'Revisar el material de Next JS proporcionado en clase',
      'Practicar con ejemplos básicos de Next JS para entender su estructura y funcionamiento',
    ],
  },
    {
    date: '9 de Abril, 2026',
    dayOfWeek: 'Jueves',
    type: 'class',
    title: 'Next JS Repasando los Conceptos principales es momento de preparar dudas ',
    mainLink: '/frontend/nextjs-fundamentos',
    resources: [
        { label: 'Ver recurso', url: 'https://nextjs.org/learn?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=home', type: 'internal', icon: 'ri-file-text-line' },
    ],
    tips: [
        'Revisar el material de Next JS proporcionado en clase',

    ],
      relatedTo: 'Next JS.'
  },
    {
    date: ' 14 de Abril , 2026',
    dayOfWeek: 'Martes',
    type: 'lab',
    labNumber: 4,
    title: 'LAB 07 - Next JS & APIS',
    mainLink: '/',
    resources: [
      { label: 'LAB en Canva', url:"Pending", type: 'canva', icon: 'ri-palette-line' },
    ],
    tips: [
      'Revisar el material de Next JS proporcionado en clase',
      'Estudiar como podemos consumir APIs en Next JS,',
    ],
    relatedTo: 'Next JS & APIs.'
  
  },
  {
    date: '16 de Abril, 2026',
    dayOfWeek: 'Jueves',
    type: 'class',
    title: 'Next JS  para sus proyectos & Vercel',
    mainLink: '/',
    resources: [
    ],
    tips: [
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

        {/* Próxima Entrega Destacada */}
        <div className="mb-10 sm:mb-12">
          <div className="relative bg-gradient-to-r from-[#bb8800] to-[#d49a00] rounded-2xl p-6 sm:p-8 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-alarm-warning-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg sm:text-xl">📌 Próxima Entrega</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <i className="ri-calendar-event-line text-white/90"></i>
                      <p className="text-white/90 text-sm sm:text-base font-semibold">
                        Cierre: Sábado, 27 de abril de 2026, 00:00
                      </p>
                    </div>
                  </div> 
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://canva.link/uqphh4bctmvpqxh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-[#bb8800] rounded-full font-bold text-sm hover:bg-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <i className="ri-file-list-3-line"></i>
                    <span>Ver Instrucciones</span>
                    <i className="ri-external-link-line text-xs"></i>
                  </a>
                  <a
                    href="https://sea.acatlan.unam.mx/mod/assign/view.php?id=1201800&forceview=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1b3d70] text-white rounded-full font-bold text-sm hover:bg-[#2a5490] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <i className="ri-upload-cloud-line"></i>
                    <span>Entregar en SEA</span>
                    <i className="ri-external-link-line text-xs"></i>
                  </a>
                </div>
              </div>
            </div>
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

        {/* Google Forms CTA */}
        <div className="mt-8 sm:mt-10">
          <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center gap-4">
              <div className="text-4xl">📝</div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Evaluación de Desempeño - Sprint 3
                </h3>
                <p className="text-purple-100 text-sm sm:text-base mb-4">
                  Comparte tu experiencia y retroalimenta a tu equipo
                </p>
              </div>
              <a
                href="https://forms.gle/UFrnYME5hvqegn9w5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-bold text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <i className="ri-file-list-3-line text-lg"></i>
                <span>Responder Formulario</span>
                <i className="ri-external-link-line text-xs"></i>
              </a>
            </div>
          </div>
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
                    <span>Laboratorio 05 en el sea</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-[#bb8800] mt-0.5"></i>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#1b3d70] uppercase tracking-wide mb-2">Donde entregar</h4>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="text-sm text-gray-700 mb-2">
                    La entrega se realiza en la plataforma <span className="font-bold">SEA</span>.
                  </p>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-bold text-[#1b3d70] uppercase tracking-wide mb-2">Links de apoyo</h4>
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <a
                      href="https://learning.postman.com/docs/getting-started/importing-and-exporting/exporting-data"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#1b3d70] hover:text-[#2a5490]"
                    >
                      <i className="ri-file-text-line"></i>
                      <span>Exportar colecciones en Postman</span>
                      <i className="ri-external-link-line text-[10px]"></i>
                    </a>
                  </div>
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
