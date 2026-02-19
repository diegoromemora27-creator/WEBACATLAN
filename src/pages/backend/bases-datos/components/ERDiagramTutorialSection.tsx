import { useState } from 'react';

export default function ERDiagramTutorialSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { id: 0, title: 'Requisitos', icon: 'ri-file-list-line' },
    { id: 1, title: 'Entidades', icon: 'ri-layout-grid-line' },
    { id: 2, title: 'Atributos', icon: 'ri-list-check-2' },
    { id: 3, title: 'Relaciones', icon: 'ri-links-line' },
    { id: 4, title: 'N:M', icon: 'ri-arrow-left-right-line' },
    { id: 5, title: 'Ejemplar', icon: 'ri-book-mark-line' },
    { id: 6, title: 'Diagrama Final', icon: 'ri-mind-map' }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#dbe9f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#313131] mb-3 sm:mb-4">
            Diseño de Diagrama Entidad-Relación (ER)
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#274e6d] max-w-3xl mx-auto px-2">
            Aprende paso a paso cómo diseñar un diagrama ER para un <strong className="text-[#336791]">Sistema de Préstamos de Libros en Línea</strong>
          </p>
        </div>

        {/* Step Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeStep === step.id
                  ? 'bg-[#336791] text-white shadow-md scale-105'
                  : 'bg-white text-[#313131] border border-[#dbe9f4] hover:border-[#336791] hover:shadow-sm'
              }`}
            >
              <div className={`w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold ${
                activeStep === step.id ? 'bg-white/20' : 'bg-[#336791]/10'
              }`}>
                {step.id}
              </div>
              <i className={`${step.icon} ${activeStep === step.id ? 'text-white' : 'text-[#336791]'}`}></i>
              <span className="hidden sm:inline">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-white rounded p-6 sm:p-8 border border-[#336791]/20 shadow-sm">
          
          {/* Step 0: Requirements */}
          {activeStep === 0 && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-[#336791]/10 rounded">
                  <i className="ri-file-list-line text-[#336791] text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#313131]">Paso 0: Alcance y Requisitos del Sistema</h3>
                  <p className="text-sm text-[#274e6d]">Antes de dibujar, definimos qué problema resuelve el sistema</p>
                </div>
              </div>

              <div className="bg-[#f8f9fa] rounded p-6 mb-6">
                <h4 className="font-bold text-[#313131] mb-4 flex items-center gap-2">
                  <i className="ri-question-line text-[#ff9900]"></i>
                  ¿Qué necesita el sistema?
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: 'ri-user-add-line', text: 'Usuarios se registran y autentican', color: '#336791' },
                    { icon: 'ri-search-line', text: 'Usuarios pueden buscar libros en el catálogo', color: '#274e6d' },
                    { icon: 'ri-book-line', text: 'Un usuario puede pedir un libro prestado si hay ejemplares', color: '#ff9900' },
                    { icon: 'ri-calendar-line', text: 'Se registra fecha de préstamo y devolución', color: '#10b981' }
                  ].map((req, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white p-3 rounded border border-[#dbe9f4]">
                      <div className="w-8 h-8 flex items-center justify-center rounded flex-shrink-0" style={{ backgroundColor: `${req.color}15` }}>
                        <i className={`${req.icon}`} style={{ color: req.color }}></i>
                      </div>
                      <p className="text-sm text-[#313131]">{req.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Context */}
              <div className="bg-gradient-to-r from-[#336791]/5 to-[#ff9900]/5 rounded p-6 border border-[#336791]/20">
                <h4 className="font-bold text-[#313131] mb-4 text-center">Contexto Visual del Sistema</h4>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  {[
                    { icon: 'ri-user-3-line', label: 'Usuario', color: '#336791' },
                    { icon: 'ri-arrow-right-line', label: '', color: '#274e6d' },
                    { icon: 'ri-book-3-line', label: 'Catálogo', color: '#ff9900' },
                    { icon: 'ri-arrow-right-line', label: '', color: '#274e6d' },
                    { icon: 'ri-hand-coin-line', label: 'Préstamo', color: '#10b981' },
                    { icon: 'ri-arrow-right-line', label: '', color: '#274e6d' },
                    { icon: 'ri-calendar-check-line', label: 'Devolución', color: '#336791' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ backgroundColor: `${item.color}15` }}>
                        <i className={`${item.icon} text-xl`} style={{ color: item.color }}></i>
                      </div>
                      {item.label && <span className="text-xs text-[#274e6d] mt-1">{item.label}</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#ff9900]/10 rounded border border-[#ff9900]/30">
                <p className="text-sm text-[#274e6d]">
                  <i className="ri-information-line text-[#ff9900] mr-2"></i>
                  <strong>Nota:</strong> Para este diagrama básico no incluimos reservas, multas ni múltiples autores. Se puede extender después.
                </p>
              </div>
            </div>
          )}

          {/* Step 1: Entities */}
          {activeStep === 1 && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-[#336791]/10 rounded">
                  <i className="ri-layout-grid-line text-[#336791] text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#313131]">Paso 1: Identificar las Entidades Principales</h3>
                  <p className="text-sm text-[#274e6d]">Una entidad es "algo" del mundo real que el sistema necesita guardar</p>
                </div>
              </div>

              <div className="bg-[#f8f9fa] rounded p-6 mb-6">
                <h4 className="font-bold text-[#313131] mb-2">¿Qué es una entidad?</h4>
                <p className="text-sm text-[#274e6d] mb-4">
                  Es un <strong>sustantivo</strong> que representa algo que necesitamos almacenar: Usuario, Libro, Préstamo, etc.
                </p>
              </div>

              {/* Entity Cards */}
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { name: 'USUARIO', description: 'Quien usa la app y pide libros prestados', icon: 'ri-user-line', color: '#336791' },
                  { name: 'LIBRO', description: 'El título abstracto (ej. "Cien años de soledad")', icon: 'ri-book-2-line', color: '#ff9900' },
                  { name: 'PRÉSTAMO', description: 'El acto de que un usuario toma prestado un libro', icon: 'ri-hand-coin-line', color: '#10b981' }
                ].map((entity, i) => (
                  <div 
                    key={i} 
                    className="bg-white rounded p-5 border-t-4 shadow-sm hover:shadow-md transition-shadow"
                    style={{ borderColor: entity.color }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded mb-3" style={{ backgroundColor: `${entity.color}15` }}>
                      <i className={`${entity.icon} text-2xl`} style={{ color: entity.color }}></i>
                    </div>
                    <h4 className="font-bold text-lg text-[#313131] mb-1">{entity.name}</h4>
                    <p className="text-xs text-[#274e6d]">{entity.description}</p>
                  </div>
                ))}
              </div>

              {/* Conceptual Diagram */}
              <div className="bg-[#313131] rounded p-6">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <i className="ri-code-s-slash-line text-[#ff9900]"></i>
                  Diagrama Conceptual Inicial
                </h4>
                <pre className="text-sm font-mono text-[#dbe9f4]">
{`Entidades:
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   USUARIO    │    │    LIBRO     │    │   PRÉSTAMO   │
└──────────────┘    └──────────────┘    └──────────────┘

Relaciones (solo nombradas, sin detalles aún):
  USUARIO ─── hace ───> PRÉSTAMO
  LIBRO ─── es objeto de ───> PRÉSTAMO`}
                </pre>
              </div>
            </div>
          )}

          {/* Step 2: Attributes */}
          {activeStep === 2 && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-[#336791]/10 rounded">
                  <i className="ri-list-check-2 text-[#336791] text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#313131]">Paso 2: Añadir Atributos y Claves</h3>
                  <p className="text-sm text-[#274e6d]">Detallamos los datos de cada entidad y marcamos la clave primaria (PK)</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-4">
                {/* USUARIO */}
                <div className="bg-white rounded overflow-hidden border-2 border-[#336791] shadow-sm">
                  <div className="bg-[#336791] text-white px-4 py-3 flex items-center gap-2">
                    <i className="ri-user-line text-lg"></i>
                    <span className="font-bold">USUARIO</span>
                  </div>
                  <div className="p-4 space-y-2">
                    {[
                      { name: 'id_usuario', isPK: true },
                      { name: 'nombre', isPK: false },
                      { name: 'email', isPK: false },
                      { name: 'password_hash', isPK: false },
                      { name: 'fecha_registro', isPK: false }
                    ].map((attr, i) => (
                      <div key={i} className={`flex items-center gap-2 text-sm ${attr.isPK ? 'font-bold text-[#336791]' : 'text-[#313131]'}`}>
                        {attr.isPK && (
                          <span className="px-1.5 py-0.5 bg-[#ff9900] text-white text-[10px] rounded font-bold">PK</span>
                        )}
                        <i className={`ri-key-2-line ${attr.isPK ? 'text-[#ff9900]' : 'text-transparent'}`}></i>
                        {attr.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* LIBRO */}
                <div className="bg-white rounded overflow-hidden border-2 border-[#ff9900] shadow-sm">
                  <div className="bg-[#ff9900] text-white px-4 py-3 flex items-center gap-2">
                    <i className="ri-book-2-line text-lg"></i>
                    <span className="font-bold">LIBRO</span>
                  </div>
                  <div className="p-4 space-y-2">
                    {[
                      { name: 'id_libro', isPK: true },
                      { name: 'titulo', isPK: false },
                      { name: 'autor', isPK: false },
                      { name: 'isbn', isPK: false },
                      { name: 'anio_publicacion', isPK: false },
                      { name: 'disponible', isPK: false, note: '(boolean)' }
                    ].map((attr, i) => (
                      <div key={i} className={`flex items-center gap-2 text-sm ${attr.isPK ? 'font-bold text-[#ff9900]' : 'text-[#313131]'}`}>
                        {attr.isPK && (
                          <span className="px-1.5 py-0.5 bg-[#336791] text-white text-[10px] rounded font-bold">PK</span>
                        )}
                        <i className={`ri-key-2-line ${attr.isPK ? 'text-[#336791]' : 'text-transparent'}`}></i>
                        {attr.name}
                        {attr.note && <span className="text-[10px] text-[#274e6d]">{attr.note}</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* PRÉSTAMO */}
                <div className="bg-white rounded overflow-hidden border-2 border-[#10b981] shadow-sm">
                  <div className="bg-[#10b981] text-white px-4 py-3 flex items-center gap-2">
                    <i className="ri-hand-coin-line text-lg"></i>
                    <span className="font-bold">PRÉSTAMO</span>
                  </div>
                  <div className="p-4 space-y-2">
                    {[
                      { name: 'id_prestamo', isPK: true },
                      { name: 'fecha_prestamo', isPK: false },
                      { name: 'fecha_devolucion_prevista', isPK: false },
                      { name: 'fecha_devolucion_real', isPK: false, note: '(nullable)' }
                    ].map((attr, i) => (
                      <div key={i} className={`flex items-center gap-2 text-sm ${attr.isPK ? 'font-bold text-[#10b981]' : 'text-[#313131]'}`}>
                        {attr.isPK && (
                          <span className="px-1.5 py-0.5 bg-[#336791] text-white text-[10px] rounded font-bold">PK</span>
                        )}
                        <i className={`ri-key-2-line ${attr.isPK ? 'text-[#336791]' : 'text-transparent'}`}></i>
                        {attr.name}
                        {attr.note && <span className="text-[10px] text-[#274e6d]">{attr.note}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#dbe9f4] rounded">
                <p className="text-sm text-[#274e6d]">
                  <i className="ri-lightbulb-line text-[#ff9900] mr-2"></i>
                  <strong>Nota:</strong> Más adelante agregaremos claves foráneas (FK). Por ahora solo definimos PK y atributos propios de cada entidad.
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Relationships */}
          {activeStep === 3 && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-[#336791]/10 rounded">
                  <i className="ri-links-line text-[#336791] text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#313131]">Paso 3: Definir Relaciones y Cardinalidades</h3>
                  <p className="text-sm text-[#274e6d]">Una relación indica cómo se conectan las entidades</p>
                </div>
              </div>

              <div className="bg-[#f8f9fa] rounded p-6 mb-6">
                <h4 className="font-bold text-[#313131] mb-4">¿Qué son las cardinalidades?</h4>
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  {[
                    { card: '1:1', desc: 'Uno a uno', example: 'Un usuario tiene un perfil' },
                    { card: '1:N', desc: 'Uno a muchos', example: 'Un usuario hace muchos préstamos' },
                    { card: 'N:M', desc: 'Muchos a muchos', example: 'Usuarios y libros (indirectamente)' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-3 rounded border border-[#dbe9f4] text-center">
                      <span className="text-2xl font-bold text-[#336791]">{item.card}</span>
                      <p className="text-sm font-medium text-[#313131]">{item.desc}</p>
                      <p className="text-xs text-[#274e6d]">{item.example}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relationship Diagram */}
              <div className="bg-white rounded p-6 border border-[#336791]/20 mb-6">
                <h4 className="font-bold text-[#313131] mb-6 text-center">Relaciones en el Sistema de Préstamos</h4>
                
                {/* Relation 1: USUARIO - PRÉSTAMO */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 p-4 bg-[#dbe9f4] rounded">
                  <div className="bg-[#336791] text-white px-4 py-3 rounded text-center min-w-[120px]">
                    <i className="ri-user-line text-xl"></i>
                    <p className="font-bold">USUARIO</p>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded">1</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 sm:w-24 h-0.5 bg-[#336791]"></div>
                    <span className="text-xs text-[#336791] font-medium my-1">hace</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-[#313131]">Un usuario puede hacer</span>
                      <span className="text-xs font-bold text-[#ff9900]">muchos</span>
                      <span className="text-xs font-bold text-[#313131]">préstamos</span>
                    </div>
                  </div>
                  <div className="bg-[#10b981] text-white px-4 py-3 rounded text-center min-w-[120px]">
                    <i className="ri-hand-coin-line text-xl"></i>
                    <p className="font-bold">PRÉSTAMO</p>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded">N</span>
                  </div>
                </div>

                {/* Relation 2: LIBRO - PRÉSTAMO */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 bg-[#f8f9fa] rounded">
                  <div className="bg-[#ff9900] text-white px-4 py-3 rounded text-center min-w-[120px]">
                    <i className="ri-book-2-line text-xl"></i>
                    <p className="font-bold">LIBRO</p>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded">1</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 sm:w-24 h-0.5 bg-[#ff9900]"></div>
                    <span className="text-xs text-[#ff9900] font-medium my-1">es objeto de</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-[#313131]">Un libro puede estar en</span>
                      <span className="text-xs font-bold text-[#ff9900]">muchos</span>
                      <span className="text-xs font-bold text-[#313131]">préstamos</span>
                    </div>
                  </div>
                  <div className="bg-[#10b981] text-white px-4 py-3 rounded text-center min-w-[120px]">
                    <i className="ri-hand-coin-line text-xl"></i>
                    <p className="font-bold">PRÉSTAMO</p>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded">N</span>
                  </div>
                </div>
              </div>

              {/* Text Notation */}
              <div className="bg-[#313131] rounded p-4 overflow-x-auto">
                <p className="text-xs text-gray-400 mb-2">Notación textual:</p>
                <pre className="text-sm font-mono text-[#dbe9f4]">
{`USUARIO (1) ─────── (N) PRÉSTAMO
LIBRO   (1) ─────── (N) PRÉSTAMO`}
                </pre>
              </div>
            </div>
          )}

          {/* Step 4: Many-to-Many */}
          {activeStep === 4 && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-[#336791]/10 rounded">
                  <i className="ri-arrow-left-right-line text-[#336791] text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#313131]">Paso 4: Entender la Relación Muchos a Muchos (N:M)</h3>
                  <p className="text-sm text-[#274e6d]">Y cómo PRÉSTAMO la resuelve como tabla puente</p>
                </div>
              </div>

              <div className="bg-[#ff9900]/10 rounded p-6 mb-6 border border-[#ff9900]/30">
                <h4 className="font-bold text-[#313131] mb-2 flex items-center gap-2">
                  <i className="ri-question-line text-[#ff9900]"></i>
                  ¿Por qué existe una relación N:M conceptual?
                </h4>
                <ul className="text-sm text-[#274e6d] space-y-1">
                  <li>• Un <strong>USUARIO</strong> puede pedir <strong>muchos LIBROS</strong></li>
                  <li>• Un <strong>LIBRO</strong> puede ser prestado a <strong>muchos USUARIOS</strong> (en distintos momentos)</li>
                </ul>
              </div>

              {/* Before / After Comparison */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Before */}
                <div className="bg-red-50 rounded p-5 border border-red-200">
                  <div className="flex items-center gap-2 mb-4">
                    <i className="ri-close-circle-line text-red-500 text-xl"></i>
                    <h4 className="font-bold text-red-700">ANTES (Conceptual)</h4>
                  </div>
                  <div className="flex items-center justify-center gap-4 bg-white p-4 rounded">
                    <div className="bg-[#336791] text-white px-3 py-2 rounded text-center">
                      <p className="text-xs font-bold">USUARIO</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-0.5 bg-red-400"></div>
                      <span className="text-[10px] text-red-500 font-bold">N:M</span>
                    </div>
                    <div className="bg-[#ff9900] text-white px-3 py-2 rounded text-center">
                      <p className="text-xs font-bold">LIBRO</p>
                    </div>
                  </div>
                  <p className="text-xs text-red-600 mt-3 text-center">
                    ❌ No implementable directamente en tablas relacionales
                  </p>
                </div>

                {/* After */}
                <div className="bg-green-50 rounded p-5 border border-green-200">
                  <div className="flex items-center gap-2 mb-4">
                    <i className="ri-checkbox-circle-line text-green-500 text-xl"></i>
                    <h4 className="font-bold text-green-700">DESPUÉS (Modelo Relacional)</h4>
                  </div>
                  <div className="flex items-center justify-center gap-2 bg-white p-4 rounded">
                    <div className="bg-[#336791] text-white px-2 py-1.5 rounded text-center">
                      <p className="text-[10px] font-bold">USUARIO</p>
                      <span className="text-[8px]">1</span>
                    </div>
                    <span className="text-xs">─</span>
                    <span className="text-[10px] font-bold text-green-600">N</span>
                    <div className="bg-[#10b981] text-white px-2 py-1.5 rounded text-center">
                      <p className="text-[10px] font-bold">PRÉSTAMO</p>
                    </div>
                    <span className="text-[10px] font-bold text-green-600">N</span>
                    <span className="text-xs">─</span>
                    <span className="text-[10px] font-bold">1</span>
                    <div className="bg-[#ff9900] text-white px-2 py-1.5 rounded text-center">
                      <p className="text-[10px] font-bold">LIBRO</p>
                    </div>
                  </div>
                  <p className="text-xs text-green-600 mt-3 text-center">
                    ✓ PRÉSTAMO actúa como entidad intermedia (tabla puente)
                  </p>
                </div>
              </div>

              {/* Updated PRÉSTAMO with FK */}
              <div className="bg-white rounded overflow-hidden border-2 border-[#10b981] shadow-sm max-w-md mx-auto">
                <div className="bg-[#10b981] text-white px-4 py-3 flex items-center gap-2">
                  <i className="ri-hand-coin-line text-lg"></i>
                  <span className="font-bold">PRÉSTAMO</span>
                  <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded">Actualizado con FK</span>
                </div>
                <div className="p-4 space-y-2">
                  {[
                    { name: 'id_prestamo', badge: 'PK', badgeColor: '#336791' },
                    { name: 'id_usuario', badge: 'FK', badgeColor: '#336791', arrow: '→ USUARIO.id_usuario' },
                    { name: 'id_libro', badge: 'FK', badgeColor: '#ff9900', arrow: '→ LIBRO.id_libro' },
                    { name: 'fecha_prestamo', badge: null },
                    { name: 'fecha_devolucion_prevista', badge: null },
                    { name: 'fecha_devolucion_real', badge: null }
                  ].map((attr, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#313131]">
                      {attr.badge && (
                        <span className="px-1.5 py-0.5 text-white text-[10px] rounded font-bold" style={{ backgroundColor: attr.badgeColor }}>
                          {attr.badge}
                        </span>
                      )}
                      <span className={attr.badge ? 'font-medium' : ''}>{attr.name}</span>
                      {attr.arrow && <span className="text-[10px] text-[#274e6d] ml-auto">{attr.arrow}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Ejemplar */}
          {activeStep === 5 && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-[#336791]/10 rounded">
                  <i className="ri-book-mark-line text-[#336791] text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#313131]">Paso 5: Refinar con EJEMPLAR (Más Realista)</h3>
                  <p className="text-sm text-[#274e6d]">Muchas bibliotecas tienen varios ejemplares del mismo libro</p>
                </div>
              </div>

              <div className="bg-[#dbe9f4] rounded p-6 mb-6">
                <h4 className="font-bold text-[#313131] mb-2 flex items-center gap-2">
                  <i className="ri-lightbulb-line text-[#ff9900]"></i>
                  ¿Por qué necesitamos EJEMPLAR?
                </h4>
                <p className="text-sm text-[#274e6d]">
                  En una biblioteca real, puede haber <strong>3 copias de "Cálculo I"</strong>. 
                  La entidad EJEMPLAR permite controlar cada copia física o digital individualmente.
                </p>
              </div>

              {/* New Entity Diagram */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* LIBRO */}
                <div className="bg-white rounded overflow-hidden border-2 border-[#ff9900] shadow-sm">
                  <div className="bg-[#ff9900] text-white px-3 py-2 flex items-center gap-2">
                    <i className="ri-book-2-line"></i>
                    <span className="font-bold text-sm">LIBRO</span>
                  </div>
                  <div className="p-3 space-y-1 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="px-1 py-0.5 bg-[#336791] text-white text-[8px] rounded font-bold">PK</span>
                      <span className="font-medium">id_libro</span>
                    </div>
                    <div>titulo</div>
                    <div>autor</div>
                    <div>isbn</div>
                  </div>
                </div>

                {/* EJEMPLAR - NEW */}
                <div className="bg-white rounded overflow-hidden border-2 border-[#8B5CF6] shadow-sm ring-2 ring-[#8B5CF6]/30">
                  <div className="bg-[#8B5CF6] text-white px-3 py-2 flex items-center gap-2">
                    <i className="ri-book-mark-line"></i>
                    <span className="font-bold text-sm">EJEMPLAR</span>
                    <span className="ml-auto text-[8px] bg-white/20 px-1.5 py-0.5 rounded">NUEVO</span>
                  </div>
                  <div className="p-3 space-y-1 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="px-1 py-0.5 bg-[#336791] text-white text-[8px] rounded font-bold">PK</span>
                      <span className="font-medium">id_ejemplar</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="px-1 py-0.5 bg-[#ff9900] text-white text-[8px] rounded font-bold">FK</span>
                      <span>id_libro</span>
                    </div>
                    <div>codigo_inventario</div>
                    <div>estado <span className="text-[10px] text-[#274e6d]">(disp/prest/dañado)</span></div>
                  </div>
                </div>

                {/* PRÉSTAMO - Updated */}
                <div className="bg-white rounded overflow-hidden border-2 border-[#10b981] shadow-sm">
                  <div className="bg-[#10b981] text-white px-3 py-2 flex items-center gap-2">
                    <i className="ri-hand-coin-line"></i>
                    <span className="font-bold text-sm">PRÉSTAMO</span>
                  </div>
                  <div className="p-3 space-y-1 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="px-1 py-0.5 bg-[#336791] text-white text-[8px] rounded font-bold">PK</span>
                      <span className="font-medium">id_prestamo</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="px-1 py-0.5 bg-[#336791] text-white text-[8px] rounded font-bold">FK</span>
                      <span>id_usuario</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#8B5CF6] font-medium">
                      <span className="px-1 py-0.5 bg-[#8B5CF6] text-white text-[8px] rounded font-bold">FK</span>
                      <span>id_ejemplar</span>
                      <span className="text-[10px]">← Cambio</span>
                    </div>
                    <div>fecha_prestamo</div>
                    <div>fecha_devolucion_*</div>
                  </div>
                </div>

                {/* USUARIO */}
                <div className="bg-white rounded overflow-hidden border-2 border-[#336791] shadow-sm">
                  <div className="bg-[#336791] text-white px-3 py-2 flex items-center gap-2">
                    <i className="ri-user-line"></i>
                    <span className="font-bold text-sm">USUARIO</span>
                  </div>
                  <div className="p-3 space-y-1 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="px-1 py-0.5 bg-[#336791] text-white text-[8px] rounded font-bold">PK</span>
                      <span className="font-medium">id_usuario</span>
                    </div>
                    <div>nombre</div>
                    <div>email</div>
                    <div>password_hash</div>
                    <div>fecha_registro</div>
                  </div>
                </div>
              </div>

              {/* New Relationships */}
              <div className="bg-[#313131] rounded p-4 overflow-x-auto">
                <p className="text-xs text-gray-400 mb-2">Nuevas relaciones:</p>
                <pre className="text-sm font-mono text-[#dbe9f4]">
{`LIBRO    (1) ─────── (N) EJEMPLAR
EJEMPLAR (1) ─────── (N) PRÉSTAMO
USUARIO  (1) ─────── (N) PRÉSTAMO`}
                </pre>
              </div>
            </div>
          )}

          {/* Step 6: Final Diagram */}
          {activeStep === 6 && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-[#336791]/10 rounded">
                  <i className="ri-mind-map text-[#336791] text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#313131]">Paso 6: Diagrama ER Completo</h3>
                  <p className="text-sm text-[#274e6d]">Sistema de Préstamos de Libros en Línea</p>
                </div>
              </div>

              {/* Complete ER Diagram */}
              <div className="bg-[#f8f9fa] rounded p-6 mb-6 overflow-x-auto">
                <div className="min-w-[600px]">
                  <svg viewBox="0 0 800 400" className="w-full">
                    {/* USUARIO Entity */}
                    <g>
                      <rect x="50" y="50" width="150" height="140" fill="white" stroke="#336791" strokeWidth="2" rx="4" />
                      <rect x="50" y="50" width="150" height="30" fill="#336791" rx="4" />
                      <text x="125" y="70" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">USUARIO</text>
                      <text x="60" y="95" fill="#336791" fontSize="10" fontWeight="bold">🔑 id_usuario (PK)</text>
                      <text x="60" y="115" fill="#313131" fontSize="10">nombre</text>
                      <text x="60" y="135" fill="#313131" fontSize="10">email</text>
                      <text x="60" y="155" fill="#313131" fontSize="10">password_hash</text>
                      <text x="60" y="175" fill="#313131" fontSize="10">fecha_registro</text>
                    </g>

                    {/* LIBRO Entity */}
                    <g>
                      <rect x="600" y="50" width="150" height="130" fill="white" stroke="#ff9900" strokeWidth="2" rx="4" />
                      <rect x="600" y="50" width="150" height="30" fill="#ff9900" rx="4" />
                      <text x="675" y="70" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">LIBRO</text>
                      <text x="610" y="95" fill="#ff9900" fontSize="10" fontWeight="bold">🔑 id_libro (PK)</text>
                      <text x="610" y="115" fill="#313131" fontSize="10">titulo</text>
                      <text x="610" y="135" fill="#313131" fontSize="10">autor</text>
                      <text x="610" y="155" fill="#313131" fontSize="10">isbn</text>
                      <text x="610" y="175" fill="#313131" fontSize="10">anio_publicacion</text>
                    </g>

                    {/* EJEMPLAR Entity */}
                    <g>
                      <rect x="430" y="220" width="150" height="120" fill="white" stroke="#8B5CF6" strokeWidth="2" rx="4" />
                      <rect x="430" y="220" width="150" height="30" fill="#8B5CF6" rx="4" />
                      <text x="505" y="240" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">EJEMPLAR</text>
                      <text x="440" y="265" fill="#8B5CF6" fontSize="10" fontWeight="bold">🔑 id_ejemplar (PK)</text>
                      <text x="440" y="285" fill="#ff9900" fontSize="10">🔗 id_libro (FK)</text>
                      <text x="440" y="305" fill="#313131" fontSize="10">codigo_inventario</text>
                      <text x="440" y="325" fill="#313131" fontSize="10">estado</text>
                    </g>

                    {/* PRÉSTAMO Entity */}
                    <g>
                      <rect x="220" y="220" width="170" height="140" fill="white" stroke="#10b981" strokeWidth="2" rx="4" />
                      <rect x="220" y="220" width="170" height="30" fill="#10b981" rx="4" />
                      <text x="305" y="240" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">PRÉSTAMO</text>
                      <text x="230" y="265" fill="#10b981" fontSize="10" fontWeight="bold">🔑 id_prestamo (PK)</text>
                      <text x="230" y="285" fill="#336791" fontSize="10">🔗 id_usuario (FK)</text>
                      <text x="230" y="305" fill="#8B5CF6" fontSize="10">🔗 id_ejemplar (FK)</text>
                      <text x="230" y="325" fill="#313131" fontSize="10">fecha_prestamo</text>
                      <text x="230" y="345" fill="#313131" fontSize="10">fecha_devolucion_*</text>
                    </g>

                    {/* Relations - Lines */}
                    {/* USUARIO to PRÉSTAMO */}
                    <line x1="125" y1="190" x2="125" y2="220" stroke="#336791" strokeWidth="2" />
                    <line x1="125" y1="220" x2="220" y2="280" stroke="#336791" strokeWidth="2" />
                    <text x="100" y="205" fill="#336791" fontSize="10" fontWeight="bold">1</text>
                    <text x="195" y="275" fill="#336791" fontSize="10" fontWeight="bold">N</text>

                    {/* LIBRO to EJEMPLAR */}
                    <line x1="675" y1="180" x2="675" y2="200" stroke="#ff9900" strokeWidth="2" />
                    <line x1="675" y1="200" x2="505" y2="220" stroke="#ff9900" strokeWidth="2" />
                    <text x="680" y="195" fill="#ff9900" fontSize="10" fontWeight="bold">1</text>
                    <text x="520" y="215" fill="#ff9900" fontSize="10" fontWeight="bold">N</text>

                    {/* EJEMPLAR to PRÉSTAMO */}
                    <line x1="430" y1="280" x2="390" y2="280" stroke="#8B5CF6" strokeWidth="2" />
                    <text x="415" y="275" fill="#8B5CF6" fontSize="10" fontWeight="bold">1</text>
                    <text x="393" y="275" fill="#8B5CF6" fontSize="10" fontWeight="bold">N</text>
                  </svg>
                </div>
              </div>

              {/* Summary */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded p-4 border border-[#336791]/20">
                  <h4 className="font-bold text-[#313131] mb-3 flex items-center gap-2">
                    <i className="ri-table-line text-[#336791]"></i>
                    Entidades
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded" style={{ backgroundColor: '#336791' }}></span>
                      <strong>USUARIO</strong> - Quien usa la app
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded" style={{ backgroundColor: '#ff9900' }}></span>
                      <strong>LIBRO</strong> - Título abstracto
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded" style={{ backgroundColor: '#8B5CF6' }}></span>
                      <strong>EJEMPLAR</strong> - Copia física
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded" style={{ backgroundColor: '#10b981' }}></span>
                      <strong>PRÉSTAMO</strong> - Transacción
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded p-4 border border-[#336791]/20">
                  <h4 className="font-bold text-[#313131] mb-3 flex items-center gap-2">
                    <i className="ri-links-line text-[#ff9900]"></i>
                    Relaciones
                  </h4>
                  <ul className="space-y-2 text-sm text-[#274e6d]">
                    <li>USUARIO (1) → (N) PRÉSTAMO</li>
                    <li>LIBRO (1) → (N) EJEMPLAR</li>
                    <li>EJEMPLAR (1) → (N) PRÉSTAMO</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-all ${
              activeStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#336791] text-white hover:bg-[#274e6d]'
            }`}
          >
            <i className="ri-arrow-left-line"></i>
            Anterior
          </button>
          <button
            onClick={() => setActiveStep(Math.min(6, activeStep + 1))}
            disabled={activeStep === 6}
            className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-all ${
              activeStep === 6
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#ff9900] text-white hover:bg-[#e68a00]'
            }`}
          >
            Siguiente
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
