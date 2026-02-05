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
            Parte 1
          </span>
        </h1>
        
        <p className="text-xl text-[#b4b5b6] mb-8 leading-relaxed max-w-3xl">
          El arte de diseñar instrucciones precisas para guiar a los Modelos de Lenguaje Grandes (LLMs) 
          hacia respuestas óptimas. Domina los fundamentos esenciales.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <div className="px-4 py-2 bg-[#1e1f20] rounded-lg border border-[#4285f4]/20">
            <span className="text-sm text-[#e3e3e3]">Tokens</span>
          </div>
          <div className="px-4 py-2 bg-[#1e1f20] rounded-lg border border-[#9b72cb]/20">
            <span className="text-sm text-[#e3e3e3]">Embeddings</span>
          </div>
          <div className="px-4 py-2 bg-[#1e1f20] rounded-lg border border-[#d96570]/20">
            <span className="text-sm text-[#e3e3e3]">Atención</span>
          </div>
          <div className="px-4 py-2 bg-[#1e1f20] rounded-lg border border-[#4285f4]/20">
            <span className="text-sm text-[#e3e3e3]">Parámetros</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Fundamentos Iniciales Section
const FundamentosSection = () => {
  return (
    <section className="bg-[#131314] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Fundamentos Iniciales</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-full"></div>
        </div>
        
        <div className="bg-[#1e1f20] p-8 rounded-2xl border border-[#4285f4]/20 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4285f4] to-[#9b72cb] rounded-xl flex items-center justify-center shrink-0">
              <i className="ri-brain-line text-2xl text-white"></i>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">¿Qué es un LLM?</h3>
              <p className="text-lg text-[#e3e3e3] leading-relaxed">
                Un LLM es una red neuronal profunda, basada en arquitectura Transformer, entrenada en terabytes de texto 
                para entender y generar lenguaje natural con miles de millones de parámetros. <span className="text-[#9b72cb] font-semibold">Multimodal</span> significa 
                que integra modalidades sensoriales: por ejemplo, Gemini procesa texto + imágenes para describir fotos o 
                generar código desde diagramas visuales, superando LLMs solo textuales como GPT-3.5 que se limitan a 
                secuencias de tokens de texto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Principales Arquitecturas de IA</h3>
          <p className="text-[#b4b5b6] text-base mb-8">
            Las principales arquitecturas de IA son diseños básicos que determinan cómo las máquinas "piensan" y procesan datos, 
            como el cerebro humano pero simplificado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* CNN Card */}
          <div className="bg-[#1e1f20] p-8 rounded-2xl border border-[#4285f4]/20 hover:border-[#4285f4]/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4285f4] to-[#9b72cb] rounded-xl flex items-center justify-center mb-4">
              <i className="ri-image-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Redes Convolucionales (CNN)</h3>
            <p className="text-[#b4b5b6] text-sm mb-4 leading-relaxed">
              Son expertas en imágenes y videos: detectan patrones como bordes o formas escaneando la imagen con "filtros" 
              pequeños, como un ojo que enfoca detalles locales primero.
            </p>
            <div className="bg-[#131314] p-3 rounded-lg border border-[#4285f4]/10">
              <p className="text-xs text-[#4285f4] font-semibold mb-1">Ejemplo:</p>
              <p className="text-xs text-[#e3e3e3]">Apps que reconocen caras en fotos de tu teléfono</p>
            </div>
          </div>

          {/* RNN Card */}
          <div className="bg-[#1e1f20] p-8 rounded-2xl border border-[#9b72cb]/20 hover:border-[#9b72cb]/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-[#9b72cb] to-[#d96570] rounded-xl flex items-center justify-center mb-4">
              <i className="ri-time-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Redes Recurrentes (RNN/LSTM)</h3>
            <p className="text-[#b4b5b6] text-sm mb-4 leading-relaxed">
              Ideales para secuencias como texto o series temporales: "recuerdan" información anterior mientras avanzan, 
              como leer una historia palabra por palabra recordando el contexto previo.
            </p>
            <div className="bg-[#131314] p-3 rounded-lg border border-[#9b72cb]/10">
              <p className="text-xs text-[#9b72cb] font-semibold mb-1">Ejemplo:</p>
              <p className="text-xs text-[#e3e3e3]">Predicción del próximo clima basada en días pasados</p>
            </div>
          </div>

          {/* Transformers Card */}
          <div className="bg-[#1e1f20] p-8 rounded-2xl border border-[#d96570]/20 hover:border-[#d96570]/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-[#d96570] to-[#4285f4] rounded-xl flex items-center justify-center mb-4">
              <i className="ri-sparkling-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Transformadores</h3>
            <p className="text-[#b4b5b6] text-sm mb-4 leading-relaxed">
              Revolucionaron el lenguaje: procesan todo el texto de una vez con "atención", enfocándose en palabras 
              relevantes sin importar la distancia, como saltar directamente a conectar sujeto y verbo en oraciones largas.
            </p>
            <div className="bg-[#131314] p-3 rounded-lg border border-[#d96570]/10">
              <p className="text-xs text-[#d96570] font-semibold mb-1">Ejemplo:</p>
              <p className="text-xs text-[#e3e3e3]">ChatGPT o traductores como Google Translate</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-[#4285f4]/10 via-[#9b72cb]/10 to-[#d96570]/10 p-6 rounded-2xl border border-[#4285f4]/20">
          <p className="text-[#e3e3e3] text-sm text-center">
            <i className="ri-information-line text-[#4285f4] mr-2"></i>
            Estas arquitecturas se combinan hoy en modelos híbridos para tareas complejas, pasando de lo simple (imágenes) a lo conversacional.
          </p>
        </div>
      </div>
    </section>
  );
};

// Tokens y Embeddings Section con visualización interactiva
const TokensSection = () => {
  const [inputText, setInputText] = useState("AI models are fascinating!");
  const [tokens, setTokens] = useState(["AI", "models", "are", "fascinating", "!"]);
  
  const handleTokenize = (text: string) => {
    setInputText(text);
    // Simulación simple de tokenización
    const newTokens = text.split(/(\s+|[.,!?;:])/).filter(t => t.trim());
    setTokens(newTokens);
  };
  
  return (
    <section className="bg-[#1e1f20] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Tokens y Embeddings</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#131314] p-8 rounded-2xl border border-[#4285f4]/20">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4285f4] to-[#9b72cb] rounded-xl flex items-center justify-center mb-4">
              <i className="ri-text text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">¿Qué es un Token?</h3>
            <p className="text-[#e3e3e3] text-base leading-relaxed">
              Un token es como un <span className="text-[#4285f4] font-semibold">"pedacito"</span> básico de texto que usa la IA para entender y procesar el lenguaje humano, como palabras completas, sílabas o signos de puntuación.
            </p>
          </div>
          
          <div className="bg-[#131314] p-8 rounded-2xl border border-[#9b72cb]/20">
            <div className="w-12 h-12 bg-gradient-to-br from-[#9b72cb] to-[#d96570] rounded-xl flex items-center justify-center mb-4">
              <i className="ri-node-tree text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">¿Qué es un Embedding?</h3>
            <p className="text-[#e3e3e3] text-base leading-relaxed">
              Un embedding, en cambio, es una <span className="text-[#9b72cb] font-semibold">representación numérica</span> (un vector de números) de ese token que captura su significado y contexto, permitiendo que la IA relacione ideas parecidas, como "rey" cerca de "corona".
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Proceso de Tokenización</h3>
          <p className="text-[#b4b5b6] text-base mb-8 leading-relaxed">
            La tokenización divide el texto en tokens de forma paso a paso para que la IA lo maneje fácilmente.
          </p>
          
          <div className="space-y-6">
            <div className="bg-[#131314] p-6 rounded-xl border border-[#4285f4]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#4285f4] to-[#9b72cb] rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Primero, toma tu texto</h4>
                  <p className="text-[#e3e3e3] text-sm">
                    Ejemplo: <span className="text-[#4285f4] font-mono">"Hola, ¿cómo estás?"</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#131314] p-6 rounded-xl border border-[#9b72cb]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#9b72cb] to-[#d96570] rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Segundo, lo parte en unidades pequeñas</h4>
                  <p className="text-[#e3e3e3] text-sm mb-3">
                    Usando reglas o algoritmos como <span className="text-[#9b72cb] font-semibold">Byte-Pair Encoding (BPE)</span>, que agrupa letras frecuentes en subpalabras:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Hola", ",", " ", "¿", "cómo", " ", "est", "ás", "?"].map((token, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#1e1f20] text-[#e3e3e3] rounded-lg border border-[#9b72cb]/30 text-xs font-mono">
                        {token}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#131314] p-6 rounded-xl border border-[#d96570]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#d96570] to-[#4285f4] rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Tercero, asigna IDs numéricos únicos</h4>
                  <p className="text-[#e3e3e3] text-sm mb-3">
                    De un vocabulario predefinido (como un diccionario de la IA), convirtiendo cada token en un número:
                  </p>
                  <p className="text-[#d96570] text-sm font-mono">
                    "Hola" → ID: 12345
                  </p>
                  <p className="text-[#b4b5b6] text-xs mt-3">
                    <i className="ri-information-line mr-1"></i>
                    Esto prepara el texto para el siguiente paso, ya que las IA solo "entienden" números.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="bg-[#131314] p-8 rounded-2xl border border-[#9b72cb]/20">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Visualización del Proceso</h3>
            <p className="text-sm text-[#b4b5b6] mb-6 text-center">
              De tokens a embeddings: cómo el texto se convierte en vectores numéricos
            </p>
            <div className="flex justify-center">
              <img 
                src="https://static.readdy.ai/image/f0504b97139bc354dc5720a1b109b5af/ee7b65dcbfeeb880f2a9a1dac40d8354.png" 
                alt="Proceso de tokenización a embeddings mostrando cómo los tokens se convierten en vectores numéricos"
                className="w-full max-w-4xl h-auto rounded-xl"
              />
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="bg-[#1e1f20] p-4 rounded-lg border border-[#4285f4]/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#4285f4] to-[#9b72cb] rounded-lg flex items-center justify-center shrink-0">
                    <i className="ri-arrow-left-line text-white text-sm"></i>
                  </div>
                  <h4 className="text-sm font-semibold text-[#4285f4]">Tokenización</h4>
                </div>
                <p className="text-xs text-[#b4b5b6]">
                  El texto se divide en tokens individuales que la IA puede procesar
                </p>
              </div>
              <div className="bg-[#1e1f20] p-4 rounded-lg border border-[#9b72cb]/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#9b72cb] to-[#d96570] rounded-lg flex items-center justify-center shrink-0">
                    <i className="ri-arrow-right-line text-white text-sm"></i>
                  </div>
                  <h4 className="text-sm font-semibold text-[#9b72cb]">Embedding</h4>
                </div>
                <p className="text-xs text-[#b4b5b6]">
                  Cada token se convierte en un vector numérico que captura su significado
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Creación de Embeddings</h3>
          <p className="text-[#b4b5b6] text-base mb-8 leading-relaxed">
            Una vez tokenizados, se crean embeddings para darles significado numérico y contextual.
          </p>
          
          <div className="space-y-6">
            <div className="bg-[#131314] p-6 rounded-xl border border-[#4285f4]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#4285f4] to-[#9b72cb] rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-2">Conversión a vectores</h4>
                  <p className="text-[#e3e3e3] text-sm mb-3">
                    Cada ID de token se pasa por una <span className="text-[#4285f4] font-semibold">matriz de embeddings</span> (una tabla gigante aprendida en entrenamiento) que lo convierte en un vector largo de números:
                  </p>
                  <div className="bg-[#1e1f20] p-4 rounded-lg border border-[#4285f4]/20">
                    <code className="text-[#4285f4] text-xs font-mono">
                      [0.2, -0.5, 1.3, 0.8, -0.2, ...] (768+ dimensiones)
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#131314] p-6 rounded-xl border border-[#9b72cb]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#9b72cb] to-[#d96570] rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Embedding posicional</h4>
                  <p className="text-[#e3e3e3] text-sm">
                    Se suma un <span className="text-[#9b72cb] font-semibold">embedding posicional</span> para indicar el orden (ej. "Hola" al inicio vs. al final cambia su vector).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#131314] p-6 rounded-xl border border-[#d96570]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#d96570] to-[#4285f4] rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Ajuste contextual</h4>
                  <p className="text-[#e3e3e3] text-sm mb-3">
                    Estos vectores se ajustan con contexto: palabras cercanas como <span className="text-[#d96570] font-semibold">"rey"</span> y <span className="text-[#d96570] font-semibold">"reina"</span> terminan con vectores numéricamente similares, capturando relaciones semánticas.
                  </p>
                  <p className="text-[#b4b5b6] text-xs">
                    <i className="ri-lightbulb-line mr-1"></i>
                    Así, la IA "ve" el significado completo de la frase para generar respuestas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nueva imagen de Vector Embeddings */}
        <div className="mb-12">
          <div className="bg-[#131314] p-8 rounded-2xl border border-[#9b72cb]/20">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Vector Embeddings en 2D</h3>
            <p className="text-sm text-[#b4b5b6] mb-6 text-center">
              Visualización de cómo palabras similares se agrupan en el espacio vectorial
            </p>
            <div className="flex justify-center bg-white rounded-xl p-4">
              <img 
                src="https://static.readdy.ai/image/f0504b97139bc354dc5720a1b109b5af/8340864d20e9cdba88ff6932b5c6aa1f.png" 
                alt="Vector embeddings en 2D mostrando cómo palabras similares como king, man, woman (verde), apple, banana, orange (azul) y football, golf, tennis (rojo) se agrupan en clusters cercanos en el espacio vectorial"
                className="w-full max-w-4xl h-auto rounded-lg"
              />
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-[#1e1f20] p-4 rounded-lg border border-green-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h4 className="text-sm font-semibold text-green-400">Personas</h4>
                </div>
                <p className="text-xs text-[#b4b5b6]">
                  king, man, woman - vectores cercanos por relación semántica
                </p>
              </div>
              <div className="bg-[#1e1f20] p-4 rounded-lg border border-blue-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h4 className="text-sm font-semibold text-blue-400">Frutas</h4>
                </div>
                <p className="text-xs text-[#b4b5b6]">
                  apple, banana, orange - agrupadas por categoría
                </p>
              </div>
              <div className="bg-[#1e1f20] p-4 rounded-lg border border-red-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <h4 className="text-sm font-semibold text-red-400">Deportes</h4>
                </div>
                <p className="text-xs text-[#b4b5b6]">
                  football, golf, tennis - cluster de actividades deportivas
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#131314] p-8 rounded-2xl border border-[#4285f4]/20">
          <h3 className="text-xl font-semibold text-white mb-6">Visualizador de Tokenización Interactivo</h3>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#b4b5b6] mb-2">
              Ingresa tu texto:
            </label>
            <input
              type="text"
              value={inputText}
              onChange={(e) => handleTokenize(e.target.value)}
              className="w-full bg-[#1e1f20] text-[#e3e3e3] px-4 py-3 rounded-lg border border-[#4285f4]/30 focus:border-[#4285f4] focus:outline-none transition-colors text-sm"
              placeholder="Escribe algo..."
            />
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-[#b4b5b6] mb-3">Tokens generados: {tokens.length}</p>
            <div className="flex flex-wrap gap-2">
              {tokens.map((token, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-[#4285f4]/20 to-[#9b72cb]/20 rounded-lg border border-[#4285f4]/30 hover:scale-105 transition-transform cursor-pointer"
                >
                  <span className="text-sm text-[#e3e3e3] font-mono">{token}</span>
                  <span className="ml-2 text-xs text-[#b4b5b6]">#{idx}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#1e1f20] p-4 rounded-lg border border-[#9b72cb]/20">
            <p className="text-xs text-[#b4b5b6] mb-2">
              <i className="ri-information-line mr-1"></i>
              Cada token se convierte en un embedding (vector de ~768 dimensiones)
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-full"></div>
              <span className="text-xs text-[#e3e3e3]">Vector semántico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Mecanismo de Atención Section con visualización
const AtencionSection = () => {
  const [selectedToken, setSelectedToken] = useState(0);
  const tokens = ["El", "perro", "negro", "ladró", "fuerte"];
  
  // Matriz de atención simulada (5x5)
  const attentionMatrix = [
    [0.8, 0.1, 0.05, 0.03, 0.02],
    [0.2, 0.6, 0.1, 0.05, 0.05],
    [0.1, 0.3, 0.5, 0.05, 0.05],
    [0.15, 0.4, 0.1, 0.3, 0.05],
    [0.1, 0.2, 0.1, 0.2, 0.4]
  ];
  
  return (
    <section className="bg-[#131314] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Mecanismo de Atención</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-full"></div>
        </div>
        
        <p className="text-lg text-[#e3e3e3] mb-12 leading-relaxed">
          La atención (<span className="text-[#9b72cb] font-semibold">self-attention</span> en transformers) 
          permite que cada token "preste atención" a otros en la secuencia, calculando pesos vía productos punto 
          entre queries (Q), keys (K) y values (V).
        </p>
        
        <div className="bg-[#1e1f20] p-8 rounded-2xl border border-[#9b72cb]/20 mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Visualizador de Atención Interactivo</h3>
          
          <div className="mb-6">
            <p className="text-sm text-[#b4b5b6] mb-3">
              Haz clic en un token para ver a qué otros tokens presta atención:
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {tokens.map((token, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedToken(idx)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedToken === idx
                      ? 'bg-gradient-to-r from-[#4285f4] to-[#9b72cb] text-white shadow-lg scale-105'
                      : 'bg-[#131314] text-[#e3e3e3] border border-[#4285f4]/20 hover:border-[#4285f4]/40'
                  }`}
                >
                  {token}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-[#131314] p-6 rounded-xl border border-[#4285f4]/20">
            <p className="text-sm text-[#b4b5b6] mb-4">
              Pesos de atención desde "<span className="text-[#4285f4] font-semibold">{tokens[selectedToken]}</span>" hacia:
            </p>
            <div className="space-y-3">
              {tokens.map((token, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="text-sm text-[#e3e3e3] w-20">{token}</span>
                  <div className="flex-1 bg-[#1e1f20] rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#4285f4] to-[#9b72cb] rounded-full transition-all duration-500"
                      style={{ width: `${attentionMatrix[selectedToken][idx] * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-[#b4b5b6] w-12 text-right">
                    {(attentionMatrix[selectedToken][idx] * 100).toFixed(0)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-[#1e1f20] p-8 rounded-2xl border border-[#d96570]/20">
          <h3 className="text-xl font-semibold text-white mb-4">Fórmula de Atención</h3>
          <div className="bg-[#131314] p-6 rounded-xl border border-[#d96570]/10 mb-6">
            <code className="text-[#4285f4] text-lg font-mono">
              score = (Q · K) / √d_k
            </code>
            <p className="text-sm text-[#b4b5b6] mt-3">
              Seguido de softmax para normalizar los pesos de atención
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#131314] p-4 rounded-lg border border-[#4285f4]/20">
              <h4 className="text-sm font-semibold text-[#4285f4] mb-2">Query (Q)</h4>
              <p className="text-xs text-[#b4b5b6]">Lo que el token busca</p>
            </div>
            <div className="bg-[#131314] p-4 rounded-lg border border-[#9b72cb]/20">
              <h4 className="text-sm font-semibold text-[#9b72cb] mb-2">Key (K)</h4>
              <p className="text-xs text-[#b4b5b6]">Características del token</p>
            </div>
            <div className="bg-[#131314] p-4 rounded-lg border border-[#d96570]/20">
              <h4 className="text-sm font-semibold text-[#d96570] mb-2">Value (V)</h4>
              <p className="text-xs text-[#b4b5b6]">Información a transmitir</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Parámetros de Generación Section con controles interactivos
const ParametrosSection = () => {
  const [temperature, setTemperature] = useState(0.7);
  const [topK, setTopK] = useState(40);
  const [topP, setTopP] = useState(0.9);
  
  const getTemperatureDescription = (temp: number) => {
    if (temp < 0.3) return "Muy determinista - Respuestas predecibles";
    if (temp < 0.7) return "Equilibrado - Buena mezcla de precisión y creatividad";
    if (temp < 1.2) return "Creativo - Mayor diversidad en respuestas";
    return "Muy aleatorio - Máxima exploración";
  };
  
  const getExampleText = (temp: number) => {
    if (temp < 0.3) return "El cielo es azul.";
    if (temp < 0.7) return "El cielo es de un hermoso color azul.";
    if (temp < 1.2) return "El firmamento se extiende en tonos azulados.";
    return "El firmamento danza en tonos celestes y añiles.";
  };
  
  return (
    <section className="bg-[#1e1f20] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Parámetros de Generación</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-full"></div>
        </div>
        
        <p className="text-lg text-[#e3e3e3] mb-12 leading-relaxed">
          Estos controlan la salida post-atención, ajustando la distribución de probabilidades del siguiente token.
        </p>
        
        <div className="bg-[#131314] p-8 rounded-2xl border border-[#4285f4]/20 mb-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Simulador Interactivo</h3>
          
          {/* Temperature Control */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-lg font-medium text-white">
                <i className="ri-temp-hot-line mr-2 text-[#4285f4]"></i>
                Temperature
              </label>
              <span className="text-2xl font-bold text-[#4285f4]">{temperature.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-full h-3 bg-[#1e1f20] rounded-full appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #4285f4 0%, #9b72cb ${temperature * 50}%, #1e1f20 ${temperature * 50}%, #1e1f20 100%)`
              }}
            />
            <p className="text-sm text-[#b4b5b6] mt-2">{getTemperatureDescription(temperature)}</p>
            
            <div className="bg-[#1e1f20] p-4 rounded-lg border border-[#4285f4]/20 mt-4">
              <p className="text-xs text-[#b4b5b6] mb-2">Ejemplo de salida:</p>
              <p className="text-[#e3e3e3] italic">"{getExampleText(temperature)}"</p>
            </div>
          </div>
          
          {/* Top-K Control */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-lg font-medium text-white">
                <i className="ri-list-ordered mr-2 text-[#9b72cb]"></i>
                Top-K
              </label>
              <span className="text-2xl font-bold text-[#9b72cb]">{topK}</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={topK}
              onChange={(e) => setTopK(parseInt(e.target.value))}
              className="w-full h-3 bg-[#1e1f20] rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #9b72cb 0%, #d96570 ${topK}%, #1e1f20 ${topK}%, #1e1f20 100%)`
              }}
            />
            <p className="text-sm text-[#b4b5b6] mt-2">
              Limita el muestreo a los {topK} tokens más probables
            </p>
          </div>
          
          {/* Top-P Control */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="text-lg font-medium text-white">
                <i className="ri-percent-line mr-2 text-[#d96570]"></i>
                Top-P (Nucleus)
              </label>
              <span className="text-2xl font-bold text-[#d96570]">{topP.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={topP}
              onChange={(e) => setTopP(parseFloat(e.target.value))}
              className="w-full h-3 bg-[#1e1f20] rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #d96570 0%, #4285f4 ${topP * 100}%, #1e1f20 ${topP * 100}%, #1e1f20 100%)`
              }}
            />
            <p className="text-sm text-[#b4b5b6] mt-2">
              Considera tokens con probabilidad acumulada ≥ {(topP * 100).toFixed(0)}%
            </p>
          </div>
          
          <div className="bg-[#1e1f20] p-6 rounded-xl border border-[#4285f4]/20">
            <h4 className="text-lg font-semibold text-white mb-3">Configuración Actual</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-[#b4b5b6]">Creatividad:</span>
                <span className="ml-2 text-[#e3e3e3] font-semibold">
                  {temperature < 0.5 ? 'Baja' : temperature < 1 ? 'Media' : 'Alta'}
                </span>
              </div>
              <div>
                <span className="text-[#b4b5b6]">Diversidad:</span>
                <span className="ml-2 text-[#e3e3e3] font-semibold">
                  {topK < 30 ? 'Limitada' : topK < 60 ? 'Moderada' : 'Amplia'}
                </span>
              </div>
              <div>
                <span className="text-[#b4b5b6]">Precisión:</span>
                <span className="ml-2 text-[#e3e3e3] font-semibold">
                  {topP < 0.5 ? 'Alta' : topP < 0.8 ? 'Media' : 'Exploratoria'}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#131314] p-6 rounded-xl border border-[#4285f4]/20">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4285f4] to-[#9b72cb] rounded-xl flex items-center justify-center mb-4">
              <i className="ri-temp-hot-line text-2xl text-white"></i>
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">Temperature</h4>
            <p className="text-sm text-[#b4b5b6] leading-relaxed">
              Escala logits antes de softmax. Baja (0.2) = determinista; Alta (1.5) = creativa.
            </p>
          </div>
          
          <div className="bg-[#131314] p-6 rounded-xl border border-[#9b72cb]/20">
            <div className="w-12 h-12 bg-gradient-to-br from-[#9b72cb] to-[#d96570] rounded-xl flex items-center justify-center mb-4">
              <i className="ri-list-ordered text-2xl text-white"></i>
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">Top-K</h4>
            <p className="text-sm text-[#b4b5b6] leading-relaxed">
              Limita muestreo a k tokens más probables. Reduce ruido, equilibra foco y diversidad.
            </p>
          </div>
          
          <div className="bg-[#131314] p-6 rounded-xl border border-[#d96570]/20">
            <div className="w-12 h-12 bg-gradient-to-br from-[#d96570] to-[#4285f4] rounded-xl flex items-center justify-center mb-4">
              <i className="ri-percent-line text-2xl text-white"></i>
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">Top-P</h4>
            <p className="text-sm text-[#b4b5b6] leading-relaxed">
              Dinámico vs. fijo. Considera tokens con probabilidad acumulada ≥ p.
            </p>
          </div>
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-[#4285f4]/10 via-[#9b72cb]/10 to-[#d96570]/10 p-6 rounded-xl border border-[#4285f4]/20">
          <h4 className="text-lg font-semibold text-white mb-3">
            <i className="ri-lightbulb-line mr-2 text-[#4285f4]"></i>
            Recomendaciones de Combinación
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-[#131314] p-4 rounded-lg">
              <p className="text-[#4285f4] font-semibold mb-2">Para Precisión:</p>
              <p className="text-[#b4b5b6]">Temperature baja (0.1-0.3) + Top-P bajo (0.1-0.5)</p>
            </div>
            <div className="bg-[#131314] p-4 rounded-lg">
              <p className="text-[#d96570] font-semibold mb-2">Para Creatividad:</p>
              <p className="text-[#b4b5b6]">Temperature alta (1.0-1.5) + Top-P alto (0.8-0.95)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
const IAPartePage = () => {
  return (
    <div className="min-h-screen bg-[#131314]">
      <Navbar />
      <HeroSection />
      <FundamentosSection />
      <TokensSection />
      <AtencionSection />
      <ParametrosSection />
      <Footer />
    </div>
  );
};

export default IAPartePage;
