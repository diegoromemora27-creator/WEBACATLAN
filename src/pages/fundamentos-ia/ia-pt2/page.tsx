import { useState } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative bg-[#131314] text-white py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#4285f4] to-[#9b72cb] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#9b72cb] to-[#d96570] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="inline-block px-4 py-2 bg-[#1e1f20] rounded-full mb-6 border border-[#4285f4]/30">
          <span className="text-sm font-medium bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] bg-clip-text text-transparent">
            Fundamentos de IA
          </span>
        </div>
        
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Prompt Engineering
          <span className="block bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] bg-clip-text text-transparent">
            Parte 2
          </span>
        </h1>
        
        <p className="text-xl text-[#b4b5b6] mb-8 leading-relaxed max-w-3xl">
          Domina las técnicas avanzadas de Prompt Engineering para optimizar la generación de código, 
          depuración y resolución de problemas complejos con modelos de IA generativa.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <div className="px-4 py-2 bg-[#1e1f20] rounded-lg border border-[#4285f4]/20">
            <span className="text-sm text-[#e3e3e3]">Zero-Shot</span>
          </div>
          <div className="px-4 py-2 bg-[#1e1f20] rounded-lg border border-[#9b72cb]/20">
            <span className="text-sm text-[#e3e3e3]">Few-Shot</span>
          </div>
          <div className="px-4 py-2 bg-[#1e1f20] rounded-lg border border-[#d96570]/20">
            <span className="text-sm text-[#e3e3e3]">Chain-of-Thought</span>
          </div>
          <div className="px-4 py-2 bg-[#1e1f20] rounded-lg border border-[#4285f4]/20">
            <span className="text-sm text-[#e3e3e3]">Role Prompting</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Introducción Section
const IntroduccionSection = () => {
  return (
    <section className="bg-[#131314] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">¿Qué es Prompt Engineering?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-full"></div>
        </div>
        
        <div className="bg-[#1e1f20] p-8 rounded-2xl border border-[#4285f4]/20">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4285f4] to-[#9b72cb] rounded-xl flex items-center justify-center shrink-0">
              <i className="ri-quill-pen-line text-2xl text-white"></i>
            </div>
            <div>
              <p className="text-lg text-[#e3e3e3] leading-relaxed mb-4">
                El <span className="text-[#4285f4] font-semibold">prompt engineering</span> es el proceso de diseñar e iterar prompts 
                para modelos de IA generativa como GPT o Gemini, con el fin de obtener respuestas más precisas, relevantes y útiles.
              </p>
              <p className="text-lg text-[#e3e3e3] leading-relaxed">
                Para desarrolladores, esta disciplina optimiza tareas como <span className="text-[#9b72cb] font-semibold">generación de código</span>, 
                <span className="text-[#d96570] font-semibold"> depuración</span> y resolución de problemas complejos mediante técnicas estructuradas.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#131314] p-4 rounded-lg border border-[#4285f4]/20">
              <i className="ri-code-s-slash-line text-2xl text-[#4285f4] mb-2"></i>
              <h4 className="text-sm font-semibold text-white mb-1">Generación de Código</h4>
              <p className="text-xs text-[#b4b5b6]">Crea funciones y algoritmos optimizados</p>
            </div>
            <div className="bg-[#131314] p-4 rounded-lg border border-[#9b72cb]/20">
              <i className="ri-bug-line text-2xl text-[#9b72cb] mb-2"></i>
              <h4 className="text-sm font-semibold text-white mb-1">Depuración</h4>
              <p className="text-xs text-[#b4b5b6]">Identifica y corrige errores eficientemente</p>
            </div>
            <div className="bg-[#131314] p-4 rounded-lg border border-[#d96570]/20">
              <i className="ri-lightbulb-line text-2xl text-[#d96570] mb-2"></i>
              <h4 className="text-sm font-semibold text-white mb-1">Resolución de Problemas</h4>
              <p className="text-xs text-[#b4b5b6]">Aborda desafíos técnicos complejos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Zero-Shot Prompting Section
const ZeroShotSection = () => {
  const [showExample, setShowExample] = useState(false);
  
  return (
    <section className="bg-[#1e1f20] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Zero-Shot Prompting</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-full"></div>
        </div>
        
        <div className="bg-[#131314] p-8 rounded-2xl border border-[#4285f4]/20 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4285f4] to-[#9b72cb] rounded-xl flex items-center justify-center shrink-0">
              <i className="ri-flashlight-line text-2xl text-white"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-3">¿Qué es?</h3>
              <p className="text-base text-[#e3e3e3] leading-relaxed mb-4">
                Esta técnica pide al modelo que realice una tarea <span className="text-[#4285f4] font-semibold">sin ejemplos previos</span>, 
                confiando en su conocimiento preentrenado. Es ideal para instrucciones simples en programación, como generar código básico, 
                ya que es rápida y escalable.
              </p>
            </div>
          </div>
          
          <div className="bg-[#1e1f20] p-6 rounded-xl border border-[#4285f4]/20">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Ejemplo Interactivo</h4>
              <button
                onClick={() => setShowExample(!showExample)}
                className="px-4 py-2 bg-gradient-to-r from-[#4285f4] to-[#9b72cb] text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform whitespace-nowrap cursor-pointer"
              >
                {showExample ? 'Ocultar' : 'Ver Ejemplo'}
              </button>
            </div>
            
            {showExample && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-[#131314] p-4 rounded-lg border border-[#4285f4]/10">
                  <p className="text-xs text-[#4285f4] font-semibold mb-2">Prompt para GPT/Gemini:</p>
                  <p className="text-sm text-[#e3e3e3] font-mono">
                    "Escribe una función en Python para invertir una cadena de texto."
                  </p>
                </div>
                
                <div className="bg-[#131314] p-4 rounded-lg border border-[#9b72cb]/10">
                  <p className="text-xs text-[#9b72cb] font-semibold mb-2">Respuesta típica:</p>
                  <pre className="text-sm text-[#e3e3e3] font-mono overflow-x-auto">
{`def reverse_string(s):
    return s[::-1]`}
                  </pre>
                </div>
                
                <div className="bg-gradient-to-r from-[#4285f4]/10 to-[#9b72cb]/10 p-4 rounded-lg border border-[#4285f4]/20">
                  <p className="text-xs text-[#b4b5b6]">
                    <i className="ri-information-line mr-1"></i>
                    Útil en desarrollo para prototipos rápidos o consultas directas de APIs.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#131314] p-6 rounded-xl border border-[#4285f4]/20">
            <i className="ri-speed-line text-3xl text-[#4285f4] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Rápido</h4>
            <p className="text-sm text-[#b4b5b6]">No requiere preparación de ejemplos</p>
          </div>
          <div className="bg-[#131314] p-6 rounded-xl border border-[#9b72cb]/20">
            <i className="ri-scales-3-line text-3xl text-[#9b72cb] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Escalable</h4>
            <p className="text-sm text-[#b4b5b6]">Funciona para múltiples tareas simples</p>
          </div>
          <div className="bg-[#131314] p-6 rounded-xl border border-[#d96570]/20">
            <i className="ri-checkbox-circle-line text-3xl text-[#d96570] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Directo</h4>
            <p className="text-sm text-[#b4b5b6]">Instrucciones claras y concisas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Few-Shot Prompting Section
const FewShotSection = () => {
  const [showExample, setShowExample] = useState(false);
  
  return (
    <section className="bg-[#131314] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Few-Shot Prompting</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-full"></div>
        </div>
        
        <div className="bg-[#1e1f20] p-8 rounded-2xl border border-[#9b72cb]/20 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#9b72cb] to-[#d96570] rounded-xl flex items-center justify-center shrink-0">
              <i className="ri-file-list-3-line text-2xl text-white"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-3">¿Qué es?</h3>
              <p className="text-base text-[#e3e3e3] leading-relaxed mb-4">
                Proporciona <span className="text-[#9b72cb] font-semibold">unos pocos ejemplos (1-5)</span> en el prompt para guiar 
                el formato y estilo de salida, mejorando la precisión en tareas complejas sin entrenamiento adicional. En programación, 
                ayuda a generar código consistente o patrones repetitivos.
              </p>
            </div>
          </div>
          
          <div className="bg-[#131314] p-6 rounded-xl border border-[#9b72cb]/20">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Ejemplo Interactivo</h4>
              <button
                onClick={() => setShowExample(!showExample)}
                className="px-4 py-2 bg-gradient-to-r from-[#9b72cb] to-[#d96570] text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform whitespace-nowrap cursor-pointer"
              >
                {showExample ? 'Ocultar' : 'Ver Ejemplo'}
              </button>
            </div>
            
            {showExample && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-[#1e1f20] p-4 rounded-lg border border-[#9b72cb]/10">
                  <p className="text-xs text-[#9b72cb] font-semibold mb-3">Prompt para GPT/Gemini:</p>
                  <div className="space-y-3 text-sm text-[#e3e3e3] font-mono">
                    <div className="bg-[#131314] p-3 rounded border border-[#4285f4]/20">
                      <p className="text-[#4285f4] mb-1">Ejemplo 1:</p>
                      <p>Entrada: 5</p>
                      <p>Salida: factorial(5) = 120</p>
                    </div>
                    <div className="bg-[#131314] p-3 rounded border border-[#4285f4]/20">
                      <p className="text-[#4285f4] mb-1">Ejemplo 2:</p>
                      <p>Entrada: 3</p>
                      <p>Salida: factorial(3) = 6</p>
                    </div>
                    <div className="bg-[#131314] p-3 rounded border border-[#9b72cb]/20">
                      <p className="text-[#9b72cb] mb-1">Ahora:</p>
                      <p>Entrada: 4, salida:</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#131314] p-4 rounded-lg border border-[#d96570]/10">
                  <p className="text-xs text-[#d96570] font-semibold mb-2">Respuesta:</p>
                  <p className="text-sm text-[#e3e3e3] font-mono">factorial(4) = 24</p>
                </div>
                
                <div className="bg-gradient-to-r from-[#9b72cb]/10 to-[#d96570]/10 p-4 rounded-lg border border-[#9b72cb]/20">
                  <p className="text-xs text-[#b4b5b6]">
                    <i className="ri-information-line mr-1"></i>
                    En depuración, usa ejemplos de bugs corregidos para patrones como manejo de errores en loops.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1e1f20] p-6 rounded-xl border border-[#9b72cb]/20">
            <i className="ri-guide-line text-3xl text-[#9b72cb] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Guía el Formato</h4>
            <p className="text-sm text-[#b4b5b6]">Los ejemplos muestran el patrón esperado de entrada/salida</p>
          </div>
          <div className="bg-[#1e1f20] p-6 rounded-xl border border-[#d96570]/20">
            <i className="ri-focus-3-line text-3xl text-[#d96570] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Mayor Precisión</h4>
            <p className="text-sm text-[#b4b5b6]">Mejora la consistencia en tareas complejas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Chain-of-Thought Section
const ChainOfThoughtSection = () => {
  const [showExample, setShowExample] = useState(false);
  
  return (
    <section className="bg-[#1e1f20] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Chain-of-Thought (CoT)</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-full"></div>
        </div>
        
        <div className="bg-[#131314] p-8 rounded-2xl border border-[#d96570]/20 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#d96570] to-[#4285f4] rounded-xl flex items-center justify-center shrink-0">
              <i className="ri-links-line text-2xl text-white"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-3">¿Qué es?</h3>
              <p className="text-base text-[#e3e3e3] leading-relaxed mb-4">
                Instruye al modelo a <span className="text-[#d96570] font-semibold">razonar paso a paso</span>, agregando frases como 
                "piensa paso a paso" para mejorar el razonamiento en problemas multistep. Para desarrolladores, es clave en debugging 
                lógico o optimización de algoritmos.
              </p>
            </div>
          </div>
          
          <div className="bg-[#1e1f20] p-6 rounded-xl border border-[#d96570]/20">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Ejemplo Interactivo</h4>
              <button
                onClick={() => setShowExample(!showExample)}
                className="px-4 py-2 bg-gradient-to-r from-[#d96570] to-[#4285f4] text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform whitespace-nowrap cursor-pointer"
              >
                {showExample ? 'Ocultar' : 'Ver Ejemplo'}
              </button>
            </div>
            
            {showExample && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-[#131314] p-4 rounded-lg border border-[#d96570]/10">
                  <p className="text-xs text-[#d96570] font-semibold mb-2">Prompt para GPT/Gemini:</p>
                  <p className="text-sm text-[#e3e3e3] font-mono">
                    "Resuelve: Tengo 3 manzanas y doy 1. ¿Cuántas quedan? <span className="text-[#d96570]">Piensa paso a paso.</span>"
                  </p>
                </div>
                
                <div className="bg-[#131314] p-4 rounded-lg border border-[#4285f4]/10">
                  <p className="text-xs text-[#4285f4] font-semibold mb-2">Respuesta:</p>
                  <div className="space-y-2 text-sm text-[#e3e3e3]">
                    <div className="flex items-start gap-2">
                      <span className="text-[#4285f4] font-semibold">Paso 1:</span>
                      <span>Inicio con 3 manzanas.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#9b72cb] font-semibold">Paso 2:</span>
                      <span>Resto 1 manzana.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#d96570] font-semibold">Paso 3:</span>
                      <span>Quedan 2 manzanas.</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#131314] p-4 rounded-lg border border-[#9b72cb]/10">
                  <p className="text-xs text-[#9b72cb] font-semibold mb-2">En código:</p>
                  <p className="text-sm text-[#e3e3e3] font-mono">
                    "Debuggea esta función recursiva defectuosa. Piensa paso a paso: [código]."
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#131314] p-6 rounded-xl border border-[#d96570]/20">
            <i className="ri-route-line text-3xl text-[#d96570] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Razonamiento</h4>
            <p className="text-sm text-[#b4b5b6]">Descompone problemas complejos</p>
          </div>
          <div className="bg-[#131314] p-6 rounded-xl border border-[#4285f4]/20">
            <i className="ri-bug-2-line text-3xl text-[#4285f4] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Debugging</h4>
            <p className="text-sm text-[#b4b5b6]">Identifica errores lógicos paso a paso</p>
          </div>
          <div className="bg-[#131314] p-6 rounded-xl border border-[#9b72cb]/20">
            <i className="ri-dashboard-line text-3xl text-[#9b72cb] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Optimización</h4>
            <p className="text-sm text-[#b4b5b6]">Mejora algoritmos sistemáticamente</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Role Prompting Section
const RolePromptingSection = () => {
  const [showExample, setShowExample] = useState(false);
  
  return (
    <section className="bg-[#131314] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Role Prompting</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-full"></div>
        </div>
        
        <div className="bg-[#1e1f20] p-8 rounded-2xl border border-[#4285f4]/20 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4285f4] to-[#9b72cb] rounded-xl flex items-center justify-center shrink-0">
              <i className="ri-user-star-line text-2xl text-white"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-3">¿Qué es?</h3>
              <p className="text-base text-[#e3e3e3] leading-relaxed mb-4">
                Asigna un <span className="text-[#4285f4] font-semibold">rol específico</span> al modelo (ej. "desarrollador senior") 
                para contextualizar respuestas con expertise y tono adecuados. Útil en programación para simular revisiones de código 
                o arquitectura.
              </p>
            </div>
          </div>
          
          <div className="bg-[#131314] p-6 rounded-xl border border-[#4285f4]/20">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Ejemplo Interactivo</h4>
              <button
                onClick={() => setShowExample(!showExample)}
                className="px-4 py-2 bg-gradient-to-r from-[#4285f4] to-[#9b72cb] text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform whitespace-nowrap cursor-pointer"
              >
                {showExample ? 'Ocultar' : 'Ver Ejemplo'}
              </button>
            </div>
            
            {showExample && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-[#1e1f20] p-4 rounded-lg border border-[#4285f4]/10">
                  <p className="text-xs text-[#4285f4] font-semibold mb-2">Prompt para GPT/Gemini:</p>
                  <p className="text-sm text-[#e3e3e3] leading-relaxed">
                    "<span className="text-[#4285f4] font-semibold">Eres un desarrollador backend senior en Python.</span> Diseña una API REST 
                    para tareas con endpoints POST /tasks y GET /tasks."
                  </p>
                </div>
                
                <div className="bg-[#1e1f20] p-4 rounded-lg border border-[#9b72cb]/10">
                  <p className="text-xs text-[#9b72cb] font-semibold mb-2">Respuesta:</p>
                  <p className="text-sm text-[#e3e3e3] mb-3">
                    Incluye esquemas con FastAPI, validación y manejo de DB.
                  </p>
                  <pre className="text-xs text-[#e3e3e3] font-mono overflow-x-auto bg-[#131314] p-3 rounded border border-[#9b72cb]/20">
{`from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Task(BaseModel):
    title: str
    description: str

@app.post("/tasks")
async def create_task(task: Task):
    # Validación y DB logic
    return {"status": "created"}

@app.get("/tasks")
async def get_tasks():
    # Retrieve from DB
    return {"tasks": []}`}
                  </pre>
                </div>
                
                <div className="bg-gradient-to-r from-[#4285f4]/10 to-[#9b72cb]/10 p-4 rounded-lg border border-[#4285f4]/20">
                  <p className="text-xs text-[#b4b5b6]">
                    <i className="ri-information-line mr-1"></i>
                    Ideal para preparación de entrevistas o diseño de sistemas.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#1e1f20] p-6 rounded-xl border border-[#4285f4]/20">
            <i className="ri-shield-user-line text-3xl text-[#4285f4] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Expertise</h4>
            <p className="text-sm text-[#b4b5b6]">Respuestas con conocimiento especializado</p>
          </div>
          <div className="bg-[#1e1f20] p-6 rounded-xl border border-[#9b72cb]/20">
            <i className="ri-chat-check-line text-3xl text-[#9b72cb] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Tono Apropiado</h4>
            <p className="text-sm text-[#b4b5b6]">Contexto profesional adecuado</p>
          </div>
          <div className="bg-[#1e1f20] p-6 rounded-xl border border-[#d96570]/20">
            <i className="ri-code-view text-3xl text-[#d96570] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Code Review</h4>
            <p className="text-sm text-[#b4b5b6]">Simula revisiones de arquitectura</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Self-Consistency Section
const SelfConsistencySection = () => {
  const [showExample, setShowExample] = useState(false);
  
  return (
    <section className="bg-[#1e1f20] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Self-Consistency</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-full"></div>
        </div>
        
        <div className="bg-[#131314] p-8 rounded-2xl border border-[#9b72cb]/20 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#9b72cb] to-[#d96570] rounded-xl flex items-center justify-center shrink-0">
              <i className="ri-refresh-line text-2xl text-white"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-3">¿Qué es?</h3>
              <p className="text-base text-[#e3e3e3] leading-relaxed mb-4">
                Genera <span className="text-[#9b72cb] font-semibold">múltiples respuestas independientes</span> al mismo prompt 
                (con temperature alta) y selecciona la más consistente por votación mayoritaria. En desarrollo, resuelve ambigüedades 
                en lógica compleja o pruebas unitarias.
              </p>
            </div>
          </div>
          
          <div className="bg-[#1e1f20] p-6 rounded-xl border border-[#9b72cb]/20">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Ejemplo Interactivo</h4>
              <button
                onClick={() => setShowExample(!showExample)}
                className="px-4 py-2 bg-gradient-to-r from-[#9b72cb] to-[#d96570] text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform whitespace-nowrap cursor-pointer"
              >
                {showExample ? 'Ocultar' : 'Ver Ejemplo'}
              </button>
            </div>
            
            {showExample && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-[#131314] p-4 rounded-lg border border-[#9b72cb]/10">
                  <p className="text-xs text-[#9b72cb] font-semibold mb-2">Prompt CoT (simular 3 runs):</p>
                  <p className="text-sm text-[#e3e3e3]">
                    "Cuando tenía 6, mi hermana tenía la mitad. Ahora tengo 70. ¿Cuántos años tiene?"
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-[#131314] p-4 rounded-lg border border-[#4285f4]/20">
                    <p className="text-xs text-[#4285f4] font-semibold mb-2">Run 1:</p>
                    <p className="text-sm text-[#e3e3e3]">Respuesta: <span className="text-[#4285f4] font-bold">67</span></p>
                  </div>
                  <div className="bg-[#131314] p-4 rounded-lg border border-[#9b72cb]/20">
                    <p className="text-xs text-[#9b72cb] font-semibold mb-2">Run 2:</p>
                    <p className="text-sm text-[#e3e3e3]">Respuesta: <span className="text-[#9b72cb] font-bold">67</span></p>
                  </div>
                  <div className="bg-[#131314] p-4 rounded-lg border border-[#d96570]/20">
                    <p className="text-xs text-[#d96570] font-semibold mb-2">Run 3:</p>
                    <p className="text-sm text-[#e3e3e3]">Respuesta: <span className="text-[#d96570] font-bold">67</span></p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#9b72cb]/10 to-[#d96570]/10 p-4 rounded-lg border border-[#9b72cb]/20">
                  <p className="text-sm text-[#e3e3e3] mb-2">
                    <i className="ri-checkbox-circle-line text-[#9b72cb] mr-2"></i>
                    Respuestas convergen en <span className="text-[#9b72cb] font-bold">"67"</span> tras votación.
                  </p>
                  <p className="text-xs text-[#b4b5b6]">
                    En código: Genera 5 versiones de una query SQL optimizada y elige la más repetida.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#131314] p-6 rounded-xl border border-[#9b72cb]/20">
            <i className="ri-vote-line text-3xl text-[#9b72cb] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Votación Mayoritaria</h4>
            <p className="text-sm text-[#b4b5b6]">Selecciona la respuesta más consistente entre múltiples ejecuciones</p>
          </div>
          <div className="bg-[#131314] p-6 rounded-xl border border-[#d96570]/20">
            <i className="ri-shield-check-line text-3xl text-[#d96570] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Reduce Ambigüedad</h4>
            <p className="text-sm text-[#b4b5b6]">Ideal para lógica compleja y pruebas unitarias</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Tree of Thoughts Section
const TreeOfThoughtsSection = () => {
  const [showExample, setShowExample] = useState(false);
  
  return (
    <section className="bg-[#131314] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Tree of Thoughts (ToT)</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-full"></div>
        </div>
        
        <div className="bg-[#1e1f20] p-8 rounded-2xl border border-[#d96570]/20 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#d96570] to-[#4285f4] rounded-xl flex items-center justify-center shrink-0">
              <i className="ri-git-branch-line text-2xl text-white"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-3">¿Qué es?</h3>
              <p className="text-base text-[#e3e3e3] leading-relaxed mb-4">
                Extiende CoT explorando <span className="text-[#d96570] font-semibold">múltiples ramas de razonamiento</span> en un 
                "árbol" de pensamientos, con evaluación y backtracking. Para problemas de programación como optimización o búsqueda 
                combinatoria, permite explorar soluciones alternativas.
              </p>
            </div>
          </div>
          
          <div className="bg-[#131314] p-6 rounded-xl border border-[#d96570]/20">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Ejemplo Interactivo</h4>
              <button
                onClick={() => setShowExample(!showExample)}
                className="px-4 py-2 bg-gradient-to-r from-[#d96570] to-[#4285f4] text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform whitespace-nowrap cursor-pointer"
              >
                {showExample ? 'Ocultar' : 'Ver Ejemplo'}
              </button>
            </div>
            
            {showExample && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-[#1e1f20] p-4 rounded-lg border border-[#d96570]/10">
                  <p className="text-xs text-[#d96570] font-semibold mb-2">Prompt para GPT/Gemini:</p>
                  <p className="text-sm text-[#e3e3e3] leading-relaxed">
                    "Para resolver un puzzle de 24 con 4 números (ej. 10, 3, 2, 1), genera 3 pensamientos iniciales, 
                    evalúa y expande el mejor paso a paso."
                  </p>
                </div>
                
                <div className="bg-[#1e1f20] p-4 rounded-lg border border-[#4285f4]/10">
                  <p className="text-xs text-[#4285f4] font-semibold mb-3">Árbol de Pensamientos:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#4285f4] to-[#9b72cb] rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-[#e3e3e3]">Rama 1: (10 - 3) × 2 + 1 = 15 ❌</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#9b72cb] to-[#d96570] rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-[#e3e3e3]">(10 + 2) × (3 - 1) = 24 ✅</p>
                        <p className="text-xs text-[#9b72cb] mt-1">← Mejor rama, expandir</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#d96570] to-[#4285f4] rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-[#e3e3e3]">Rama 3: 10 × 3 - 2 - 1 = 27 ❌</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#d96570]/10 to-[#4285f4]/10 p-4 rounded-lg border border-[#d96570]/20">
                  <p className="text-xs text-[#b4b5b6]">
                    <i className="ri-information-line mr-1"></i>
                    Útil en algoritmos como pathfinding o refactoring multistep.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#1e1f20] p-6 rounded-xl border border-[#d96570]/20">
            <i className="ri-node-tree text-3xl text-[#d96570] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Exploración</h4>
            <p className="text-sm text-[#b4b5b6]">Múltiples ramas de solución</p>
          </div>
          <div className="bg-[#1e1f20] p-6 rounded-xl border border-[#4285f4]/20">
            <i className="ri-arrow-go-back-line text-3xl text-[#4285f4] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Backtracking</h4>
            <p className="text-sm text-[#b4b5b6]">Retrocede si una rama falla</p>
          </div>
          <div className="bg-[#1e1f20] p-6 rounded-xl border border-[#9b72cb]/20">
            <i className="ri-search-eye-line text-3xl text-[#9b72cb] mb-3"></i>
            <h4 className="text-lg font-semibold text-white mb-2">Optimización</h4>
            <p className="text-sm text-[#b4b5b6]">Ideal para búsqueda combinatoria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Comparación de Técnicas Section
const ComparacionSection = () => {
  return (
    <section className="bg-[#1e1f20] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Comparación de Técnicas</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-full"></div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-[#131314] rounded-2xl border border-[#4285f4]/20 overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-[#4285f4]/20 via-[#9b72cb]/20 to-[#d96570]/20">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Técnica</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Complejidad</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Mejor Para</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Ejemplo de Uso</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#4285f4]/10">
              <tr className="hover:bg-[#1e1f20] transition-colors">
                <td className="px-6 py-4">
                  <span className="text-[#4285f4] font-semibold">Zero-Shot</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#e3e3e3]">Baja</td>
                <td className="px-6 py-4 text-sm text-[#e3e3e3]">Tareas simples</td>
                <td className="px-6 py-4 text-sm text-[#b4b5b6]">Generar función básica</td>
              </tr>
              <tr className="hover:bg-[#1e1f20] transition-colors">
                <td className="px-6 py-4">
                  <span className="text-[#9b72cb] font-semibold">Few-Shot</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#e3e3e3]">Media</td>
                <td className="px-6 py-4 text-sm text-[#e3e3e3]">Patrones consistentes</td>
                <td className="px-6 py-4 text-sm text-[#b4b5b6]">Código con formato específico</td>
              </tr>
              <tr className="hover:bg-[#1e1f20] transition-colors">
                <td className="px-6 py-4">
                  <span className="text-[#d96570] font-semibold">Chain-of-Thought</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#e3e3e3]">Media</td>
                <td className="px-6 py-4 text-sm text-[#e3e3e3]">Razonamiento paso a paso</td>
                <td className="px-6 py-4 text-sm text-[#b4b5b6]">Debugging lógico</td>
              </tr>
              <tr className="hover:bg-[#1e1f20] transition-colors">
                <td className="px-6 py-4">
                  <span className="text-[#4285f4] font-semibold">Role Prompting</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#e3e3e3]">Baja</td>
                <td className="px-6 py-4 text-sm text-[#e3e3e3]">Contexto especializado</td>
                <td className="px-6 py-4 text-sm text-[#b4b5b6]">Revisión de arquitectura</td>
              </tr>
              <tr className="hover:bg-[#1e1f20] transition-colors">
                <td className="px-6 py-4">
                  <span className="text-[#9b72cb] font-semibold">Self-Consistency</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#e3e3e3]">Alta</td>
                <td className="px-6 py-4 text-sm text-[#e3e3e3]">Ambigüedad compleja</td>
                <td className="px-6 py-4 text-sm text-[#b4b5b6]">Queries SQL optimizadas</td>
              </tr>
              <tr className="hover:bg-[#1e1f20] transition-colors">
                <td className="px-6 py-4">
                  <span className="text-[#d96570] font-semibold">Tree of Thoughts</span>
                </td>
                <td className="px-6 py-4 text-sm text-[#e3e3e3]">Muy Alta</td>
                <td className="px-6 py-4 text-sm text-[#e3e3e3]">Búsqueda combinatoria</td>
                <td className="px-6 py-4 text-sm text-[#b4b5b6]">Pathfinding, refactoring</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-[#4285f4]/10 via-[#9b72cb]/10 to-[#d96570]/10 p-6 rounded-2xl border border-[#4285f4]/20">
          <h4 className="text-lg font-semibold text-white mb-3">
            <i className="ri-lightbulb-line mr-2 text-[#4285f4]"></i>
            Recomendación General
          </h4>
          <p className="text-sm text-[#e3e3e3]">
            Comienza con <span className="text-[#4285f4] font-semibold">Zero-Shot</span> para tareas simples. 
            Si necesitas más precisión, usa <span className="text-[#9b72cb] font-semibold">Few-Shot</span>. 
            Para problemas complejos, combina <span className="text-[#d96570] font-semibold">Chain-of-Thought</span> con 
            <span className="text-[#4285f4] font-semibold"> Role Prompting</span>. 
            Reserva <span className="text-[#9b72cb] font-semibold">Self-Consistency</span> y 
            <span className="text-[#d96570] font-semibold"> Tree of Thoughts</span> para casos críticos.
          </p>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
const IAParte2Page = () => {
  return (
    <div className="min-h-screen bg-[#131314]">
      <Navbar />
      <HeroSection />
      <IntroduccionSection />
      <ZeroShotSection />
      <FewShotSection />
      <ChainOfThoughtSection />
      <RolePromptingSection />
      <SelfConsistencySection />
      <TreeOfThoughtsSection />
      <ComparacionSection />
      <Footer />
    </div>
  );
};

export default IAParte2Page;
