
import { useState } from 'react';

const mundos = [
  {
    mundo: 'MUNDO 1',
    tema: 'Fundamentos & Arquitectura',
    color: '#5B3A8B',
    border: '#3B0764',
    emoji: '🏰',
    conceptos: [
      { nombre: 'Arquitectura de Software', desc: 'Estructura de alto nivel: módulos, comunicación y tecnologías para cumplir requisitos funcionales y no funcionales.' },
      { nombre: 'Modularidad', desc: 'División del sistema en piezas independientes con responsabilidades claras e interfaces definidas.' },
      { nombre: 'Separación en Capas', desc: 'Presentación, Aplicación, Dominio y Acceso a Datos. Cada capa tiene una responsabilidad específica.' },
      { nombre: 'Escalabilidad', desc: 'Capacidad del sistema de crecer sin degradar el rendimiento. Horizontal (más servidores) vs Vertical (más recursos).' },
      { nombre: 'Mantenibilidad', desc: 'Facilidad para entender, corregir y refactorizar el código sin romper funcionalidades existentes.' },
      { nombre: 'Patrón Hexagonal', desc: 'El núcleo de negocio no depende de detalles externos. Puertos (interfaces) y Adaptadores (implementaciones).' },
      { nombre: 'Arquitectura Monolítica', desc: 'Todo el sistema en un solo despliegue. Simple al inicio, difícil de escalar independientemente.' },
      { nombre: 'Microservicios', desc: 'Sistema dividido en servicios pequeños e independientes, cada uno con su propia base de datos y despliegue.' },
      { nombre: 'MVC', desc: 'Model-View-Controller. Separa datos, presentación y lógica de control.' },
      { nombre: 'Serverless', desc: 'Ejecución de código sin gestionar servidores. El proveedor escala automáticamente según demanda.' },
    ],
  },
  {
    mundo: 'MUNDO 2',
    tema: 'Backend & APIs',
    color: '#228B22',
    border: '#145214',
    emoji: '⚙️',
    conceptos: [
      { nombre: 'REST', desc: 'Representational State Transfer. Arquitectura para APIs usando HTTP con recursos, verbos y códigos de estado.' },
      { nombre: 'HTTP Verbos', desc: 'GET (leer), POST (crear), PUT/PATCH (actualizar), DELETE (eliminar). Cada uno tiene semántica específica.' },
      { nombre: 'Códigos de Estado', desc: '2xx éxito, 3xx redirección, 4xx error cliente, 5xx error servidor. Ej: 200, 201, 400, 401, 404, 500.' },
      { nombre: 'NestJS', desc: 'Framework Node.js con TypeScript. Usa decoradores, módulos, controladores y proveedores.' },
      { nombre: 'Decoradores NestJS', desc: '@Module, @Controller, @Injectable, @Get, @Post, @Body, @Param, @Query.' },
      { nombre: 'Inyección de Dependencias', desc: 'Patrón donde las dependencias se "inyectan" en lugar de instanciarse. NestJS lo maneja automáticamente.' },
      { nombre: 'TypeORM', desc: 'ORM para TypeScript/Node. Mapea clases a tablas. Usa @Entity, @Column, @PrimaryGeneratedColumn.' },
      { nombre: 'Relaciones BD', desc: 'OneToOne, OneToMany, ManyToOne, ManyToMany. Cada una con su decorador en TypeORM.' },
      { nombre: 'DTOs', desc: 'Data Transfer Objects. Definen la forma de los datos que entran/salen de la API. Usan class-validator.' },
      { nombre: 'Asincronía', desc: 'async/await, Promises, callbacks. Permite operaciones no bloqueantes en Node.js.' },
    ],
  },
  {
    mundo: 'MUNDO 3',
    tema: 'Frontend & Web',
    color: '#C8860A',
    border: '#8B6914',
    emoji: '🎨',
    conceptos: [
      { nombre: 'HTML Semántico', desc: 'Etiquetas con significado: header, nav, main, section, article, aside, footer. Mejora SEO y accesibilidad.' },
      { nombre: 'CSS Box Model', desc: 'Content + Padding + Border + Margin. Todo elemento es una caja rectangular.' },
      { nombre: 'Flexbox', desc: 'Sistema de layout 1D. display:flex, justify-content, align-items, flex-direction, flex-wrap.' },
      { nombre: 'CSS Grid', desc: 'Sistema de layout 2D. grid-template-columns, grid-template-rows, gap, grid-area.' },
      { nombre: 'Responsive Design', desc: 'Media queries, unidades relativas (rem, %, vw/vh), mobile-first approach.' },
      { nombre: 'Next.js', desc: 'Framework React con SSR, SSG, App Router, Server Components y optimizaciones automáticas.' },
      { nombre: 'BEM', desc: 'Block__Element--Modifier. Metodología de nomenclatura CSS para código mantenible.' },
      { nombre: 'TypeScript', desc: 'Superset de JS con tipado estático. Interfaces, tipos, genéricos, enums, decoradores.' },
      { nombre: 'POO', desc: 'Encapsulamiento, Herencia, Polimorfismo, Abstracción. Los 4 pilares de la programación orientada a objetos.' },
      { nombre: 'Componentes React', desc: 'Funciones que retornan JSX. Props, estado, hooks (useState, useEffect, useContext).' },
    ],
  },
  {
    mundo: 'MUNDO 4',
    tema: 'DevOps & Cloud',
    color: '#1b3d70',
    border: '#0d2040',
    emoji: '☁️',
    conceptos: [
      { nombre: 'Docker', desc: 'Plataforma de contenedores. Imagen (plantilla) vs Contenedor (instancia en ejecución).' },
      { nombre: 'Dockerfile', desc: 'Archivo de instrucciones para construir una imagen. FROM, RUN, COPY, EXPOSE, CMD.' },
      { nombre: 'Docker Compose', desc: 'Orquestación de múltiples contenedores con un archivo YAML. services, volumes, networks.' },
      { nombre: 'CI/CD', desc: 'Integración y Despliegue Continuo. Automatiza build, test y deploy. GitHub Actions, Jenkins.' },
      { nombre: 'Cloud Computing', desc: 'IaaS, PaaS, SaaS. Modelos de servicio en la nube. AWS, GCP, Azure.' },
      { nombre: 'Escalabilidad Cloud', desc: 'Auto-scaling, load balancers, CDN. La nube permite escalar según demanda.' },
      { nombre: 'Git', desc: 'Sistema de control de versiones distribuido. Commits, branches, merge, rebase, pull requests.' },
      { nombre: 'Metodologías Ágiles', desc: 'Scrum: sprints, backlog, daily, review, retrospectiva. Roles: PO, Scrum Master, Dev Team.' },
      { nombre: 'Seguridad OWASP', desc: 'Top 10 vulnerabilidades: SQL Injection, XSS, Broken Auth, Sensitive Data Exposure.' },
      { nombre: 'Testing', desc: 'Unit tests, Integration tests, E2E tests. TDD: escribir tests antes del código.' },
    ],
  },
];

export default function ConceptosSection() {
  const [activeMundo, setActiveMundo] = useState(0);
  const [search, setSearch] = useState('');

  const currentMundo = mundos[activeMundo];
  const filtered = currentMundo.conceptos.filter(
    c => c.nombre.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 md:py-24 relative" style={{ background: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block bg-[#C8860A] border-4 border-[#8B6914] px-5 py-2 mb-4 shadow-[4px_4px_0px_#8B6914]">
            <span className="text-white font-black text-xs tracking-widest uppercase" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              ITEM CATALOG
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1b3d70] mb-4">
            Conceptos del Examen
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Tu inventario de conocimiento. Domina estos conceptos y estarás listo para cualquier nivel.
          </p>
        </div>

        {/* World selector */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {mundos.map((m, i) => (
            <button
              key={i}
              onClick={() => { setActiveMundo(i); setSearch(''); }}
              className={`flex items-center gap-2 px-4 py-2 border-4 font-black text-sm transition-all duration-200 shadow-[3px_3px_0px_rgba(0,0,0,0.3)] hover:shadow-[5px_5px_0px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 whitespace-nowrap cursor-pointer ${
                activeMundo === i ? 'text-white scale-105' : 'bg-white text-gray-700'
              }`}
              style={activeMundo === i ? { background: m.color, borderColor: m.border } : { borderColor: m.border }}
            >
              <span>{m.emoji}</span>
              <span className="hidden sm:inline">{m.mundo}:</span>
              <span>{m.tema}</span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
            <i className="ri-search-line text-gray-400"></i>
          </div>
          <input
            type="text"
            placeholder="Buscar concepto..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-4 text-sm font-medium focus:outline-none transition-all"
            style={{ borderColor: currentMundo.border, fontFamily: 'inherit' }}
          />
        </div>

        {/* Concepts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {filtered.map((concepto, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 md:p-5 border-l-4 bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderLeftColor: currentMundo.color }}
            >
              <div
                className="w-8 h-8 flex-shrink-0 flex items-center justify-center font-black text-white text-xs rounded-none"
                style={{ background: currentMundo.color }}
              >
                {i + 1}
              </div>
              <div>
                <h4 className="font-black text-[#1b3d70] text-sm md:text-base mb-1">{concepto.nombre}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{concepto.desc}</p>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-2 text-center py-12 text-gray-400">
              <div className="text-4xl mb-3">🔍</div>
              <p className="font-bold">No se encontraron conceptos con ese término.</p>
            </div>
          )}
        </div>

        {/* Count */}
        <div className="text-center mt-8">
          <span className="inline-block px-4 py-2 border-2 text-sm font-bold" style={{ borderColor: currentMundo.border, color: currentMundo.color }}>
            {filtered.length} de {currentMundo.conceptos.length} conceptos
          </span>
        </div>
      </div>
    </section>
  );
}
