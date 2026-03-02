
import { useState } from 'react';

const formaciones = [
  {
    formacion: 'FORMACIÓN 1',
    tema: 'HTML & CSS',
    color: '#00FF88',
    border: '#00AA55',
    emoji: '🌐',
    conceptos: [
      { nombre: 'HTML Semántico', desc: 'Etiquetas con significado: header, nav, main, section, article, aside, footer. Mejora SEO y accesibilidad.' },
      { nombre: 'Estructura de Documento', desc: '<!DOCTYPE html>, <html>, <head>, <body>. Jerarquía correcta de elementos HTML.' },
      { nombre: 'Atributos HTML', desc: 'id, class, href, src, alt, type, name, value, placeholder. Cada atributo tiene un propósito específico.' },
      { nombre: 'CSS Box Model', desc: 'Content + Padding + Border + Margin. Todo elemento es una caja rectangular. box-sizing: border-box.' },
      { nombre: 'Selectores CSS', desc: 'Elemento, clase (.clase), ID (#id), atributo ([attr]), pseudo-clases (:hover, :first-child), pseudo-elementos (::before).' },
      { nombre: 'Flexbox', desc: 'Layout 1D. display:flex, justify-content, align-items, flex-direction, flex-wrap, gap, flex-grow/shrink/basis.' },
      { nombre: 'CSS Grid', desc: 'Layout 2D. grid-template-columns/rows, gap, grid-area, place-items, auto-fill, minmax().' },
      { nombre: 'Responsive Design', desc: 'Media queries (@media), unidades relativas (rem, %, vw/vh), mobile-first, breakpoints estándar.' },
      { nombre: 'Especificidad CSS', desc: 'Inline > ID > Clase > Elemento. Calcula el peso de cada selector para resolver conflictos.' },
      { nombre: 'Animaciones CSS', desc: '@keyframes, animation, transition. Propiedades: duration, timing-function, delay, iteration-count.' },
    ],
  },
  {
    formacion: 'FORMACIÓN 2',
    tema: 'TypeScript',
    color: '#00DDFF',
    border: '#0099BB',
    emoji: '📘',
    conceptos: [
      { nombre: 'Tipos Básicos', desc: 'string, number, boolean, null, undefined, any, unknown, never, void. Tipado estático en tiempo de compilación.' },
      { nombre: 'Interfaces', desc: 'Define la forma de un objeto. Soporta extensión (extends), implementación en clases, y declaración de métodos.' },
      { nombre: 'Types (Type Alias)', desc: 'Alias para tipos complejos. Soporta uniones (|), intersecciones (&), tipos literales y mapped types.' },
      { nombre: 'Genéricos', desc: 'Funciones y clases parametrizadas por tipo. <T> permite reutilizar lógica con diferentes tipos de datos.' },
      { nombre: 'Enums', desc: 'Conjunto de constantes nombradas. enum Direction { Up, Down, Left, Right }. Numéricos o de string.' },
      { nombre: 'Decoradores', desc: 'Funciones que modifican clases, métodos o propiedades. @Component, @Injectable, @Controller en frameworks.' },
      { nombre: 'Utility Types', desc: 'Partial<T>, Required<T>, Readonly<T>, Pick<T,K>, Omit<T,K>, Record<K,V>, ReturnType<T>.' },
      { nombre: 'Type Guards', desc: 'typeof, instanceof, in operator, type predicates (is). Narrowing de tipos en tiempo de ejecución.' },
      { nombre: 'Módulos', desc: 'import/export, export default, re-exports. Organización del código en archivos independientes.' },
      { nombre: 'Diferencias con JS', desc: 'Tipado estático, interfaces, genéricos, decoradores, enums. TS compila a JS y no corre en el navegador directamente.' },
    ],
  },
  {
    formacion: 'FORMACIÓN 3',
    tema: 'POO',
    color: '#FFD700',
    border: '#CC9900',
    emoji: '🏗️',
    conceptos: [
      { nombre: 'Encapsulamiento', desc: 'Ocultar el estado interno y exponer solo lo necesario. Modificadores: public, private, protected.' },
      { nombre: 'Herencia', desc: 'Una clase hija extiende a la padre (extends). Reutiliza y especializa comportamiento. super() llama al constructor padre.' },
      { nombre: 'Polimorfismo', desc: 'Un mismo método se comporta diferente según el objeto. Override de métodos en clases hijas.' },
      { nombre: 'Abstracción', desc: 'Clases abstractas (abstract class) e interfaces. Define contratos sin implementación concreta.' },
      { nombre: 'Clases', desc: 'Plantilla para crear objetos. Constructor, propiedades, métodos. Instanciación con new.' },
      { nombre: 'Interfaces en POO', desc: 'Contrato que una clase debe cumplir (implements). Define qué métodos/propiedades debe tener.' },
      { nombre: 'Métodos Estáticos', desc: 'static. Pertenecen a la clase, no a la instancia. Se llaman con NombreClase.metodo().' },
      { nombre: 'Getters y Setters', desc: 'get y set. Controlan el acceso a propiedades privadas con lógica adicional.' },
      { nombre: 'Principio SOLID', desc: 'S: Single Responsibility, O: Open/Closed, L: Liskov, I: Interface Segregation, D: Dependency Inversion.' },
      { nombre: 'Composición vs Herencia', desc: 'Composición: "tiene un". Herencia: "es un". Preferir composición para mayor flexibilidad.' },
    ],
  },
  {
    formacion: 'FORMACIÓN 4',
    tema: 'Next.js & Frontend Avanzado',
    color: '#AA88FF',
    border: '#7755CC',
    emoji: '⚡',
    conceptos: [
      { nombre: 'App Router', desc: 'Sistema de rutas basado en carpetas en Next.js 13+. page.tsx, layout.tsx, loading.tsx, error.tsx.' },
      { nombre: 'Server Components', desc: 'Componentes que se renderizan en el servidor. No tienen estado ni efectos. Acceso directo a BD.' },
      { nombre: 'Client Components', desc: '"use client". Tienen estado, efectos y eventos. Se hidratan en el navegador.' },
      { nombre: 'SSR (Server Side Rendering)', desc: 'HTML generado en cada petición. Datos siempre frescos. Más lento que SSG pero dinámico.' },
      { nombre: 'SSG (Static Site Generation)', desc: 'HTML generado en build time. Muy rápido. Ideal para contenido que no cambia frecuentemente.' },
      { nombre: 'BEM', desc: 'Block__Element--Modifier. Metodología de nomenclatura CSS. .card__title--highlighted.' },
      { nombre: 'Frameworks CSS', desc: 'Tailwind (utility-first), Bootstrap (componentes), Sass (preprocesador). Cada uno con su filosofía.' },
      { nombre: 'Componentes React', desc: 'Funciones que retornan JSX. Props (datos de entrada), estado (useState), efectos (useEffect).' },
      { nombre: 'Hooks React', desc: 'useState, useEffect, useContext, useRef, useMemo, useCallback. Solo en Client Components.' },
      { nombre: 'Optimización Next.js', desc: 'Image (next/image), Font (next/font), Link (next/link), lazy loading, code splitting automático.' },
    ],
  },
];

export default function ConceptosSection() {
  const [activeFormacion, setActiveFormacion] = useState(0);
  const [search, setSearch] = useState('');

  const current = formaciones[activeFormacion];
  const filtered = current.conceptos.filter(
    c => c.nombre.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 md:py-24 relative" style={{ background: '#000820' }}>
      {/* Stars */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: '2px', height: '2px',
            top: `${(i * 29 + 11) % 100}%`,
            left: `${(i * 41 + 17) % 100}%`,
            opacity: 0.1 + (i % 4) * 0.05,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div
            className="inline-block border-2 px-5 py-2 mb-4"
            style={{ borderColor: '#FFD700', background: 'rgba(255,215,0,0.08)', boxShadow: '0 0 16px rgba(255,215,0,0.2)' }}
          >
            <span className="font-black text-xs tracking-widest uppercase" style={{ fontFamily: "'Press Start 2P', monospace", color: '#FFD700' }}>
              INTEL DATABASE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
            Conceptos del Examen
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#00FF8899' }}>
            Tu base de datos de inteligencia. Domina estos conceptos para destruir al enemigo final.
          </p>
        </div>

        {/* Formation selector */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {formaciones.map((f, i) => (
            <button
              key={i}
              onClick={() => { setActiveFormacion(i); setSearch(''); }}
              className="flex items-center gap-2 px-4 py-2 border-2 font-black text-sm transition-all duration-200 whitespace-nowrap cursor-pointer hover:-translate-y-0.5"
              style={
                activeFormacion === i
                  ? { background: f.color + '22', borderColor: f.border, color: f.color, boxShadow: `0 0 12px ${f.color}44` }
                  : { background: 'rgba(0,10,20,0.8)', borderColor: '#003322', color: '#AACCBB' }
              }
            >
              <span>{f.emoji}</span>
              <span className="hidden sm:inline">{f.formacion}:</span>
              <span>{f.tema}</span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
            <i className="ri-search-line" style={{ color: current.color }}></i>
          </div>
          <input
            type="text"
            placeholder="Buscar concepto..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 text-sm font-medium focus:outline-none transition-all"
            style={{
              borderColor: current.border,
              background: 'rgba(0,10,20,0.9)',
              color: '#CCFFEE',
              fontFamily: 'inherit',
            }}
          />
        </div>

        {/* Concepts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {filtered.map((concepto, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 md:p-5 border-l-4 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderLeftColor: current.color,
                background: 'rgba(0,10,20,0.8)',
                boxShadow: `0 0 8px ${current.color}11`,
              }}
            >
              <div
                className="w-8 h-8 flex-shrink-0 flex items-center justify-center font-black text-xs"
                style={{ background: current.color + '22', border: `2px solid ${current.border}`, color: current.color }}
              >
                {i + 1}
              </div>
              <div>
                <h4 className="font-black text-sm md:text-base mb-1" style={{ color: current.color }}>{concepto.nombre}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#AACCBB' }}>{concepto.desc}</p>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-2 text-center py-12" style={{ color: '#00FF8866' }}>
              <div className="text-4xl mb-3">👾</div>
              <p className="font-bold">No se encontraron conceptos con ese término.</p>
            </div>
          )}
        </div>

        {/* Count */}
        <div className="text-center mt-8">
          <span
            className="inline-block px-4 py-2 border-2 text-sm font-bold"
            style={{ borderColor: current.border, color: current.color, background: current.color + '11' }}
          >
            {filtered.length} de {current.conceptos.length} conceptos
          </span>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      `}</style>
    </section>
  );
}
