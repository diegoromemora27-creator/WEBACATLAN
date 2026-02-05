
import { useState } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

export default function AsincroniaPage() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navbar activeSection={activeSection} />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#f59e0b] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#10b981] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-white/10">
            <i className="ri-time-line text-[#f59e0b] text-lg sm:text-xl"></i>
            <span className="text-white text-xs sm:text-sm font-medium">Programación Asíncrona</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Asincronía en<br />JavaScript
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            Domina el arte de manejar operaciones que toman tiempo sin bloquear tu aplicación. Desde Callbacks hasta Async/Await.
          </p>

          {/* Imagen de Asincronía */}
          <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
            <img 
              src="https://static.readdy.ai/image/f0504b97139bc354dc5720a1b109b5af/2e45de63800503e5dabfcaf3f96a8bc4.png" 
              alt="Diagrama de tareas síncronas y asíncronas en JavaScript"
              className="w-full h-auto rounded-xl border border-white/10 shadow-2xl"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-checkbox-circle-fill text-[#ef4444]"></i>
              <span>Callbacks</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-checkbox-circle-fill text-[#f59e0b]"></i>
              <span>Promises</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-checkbox-circle-fill text-[#10b981]"></i>
              <span>Async/Await</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-checkbox-circle-fill text-[#3b82f6]"></i>
              <span>Event Loop</span>
            </div>
          </div>

          {/* Botón Invito a Profundizar */}
          <div className="mt-6 sm:mt-8">
            <a 
              href="https://lenguajejs.com/asincronia/introduccion/que-es/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-black font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap text-sm sm:text-base"
            >
              <i className="ri-book-open-line text-lg sm:text-xl"></i>
              Invito a Profundizar
              <i className="ri-external-link-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ¿Por qué Asincronía? */}
      <section className="py-12 sm:py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              ¿Por qué necesitamos Asincronía?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              JavaScript es single-threaded. Sin asincronía, tu app se congelaría cada vez que espera datos del servidor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            {/* Código Síncrono */}
            <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-[#ef4444]/30">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#ef4444]/20 rounded-lg">
                  <i className="ri-close-circle-line text-[#ef4444] text-lg sm:text-xl"></i>
                </div>
                <h3 className="text-sm sm:text-base md:text-xl font-bold text-white">Código Síncrono (Bloqueante)</h3>
              </div>
              <div className="bg-[#0d1117] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4 overflow-x-auto">
                <pre className="text-gray-300 whitespace-pre">
{`// ❌ Esto bloquea TODO
const datos = fetchDatosDelServidor(); // 3 segundos...
console.log(datos); // Espera 3 segundos
console.log("Hola"); // También espera`}
                </pre>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                <i className="ri-error-warning-line text-[#ef4444] mr-1 sm:mr-2"></i>
                El usuario no puede hacer nada mientras espera. La UI se congela.
              </p>
            </div>

            {/* Código Asíncrono */}
            <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-[#10b981]/30">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#10b981]/20 rounded-lg">
                  <i className="ri-checkbox-circle-line text-[#10b981] text-lg sm:text-xl"></i>
                </div>
                <h3 className="text-sm sm:text-base md:text-xl font-bold text-white">Código Asíncrono (No Bloqueante)</h3>
              </div>
              <div className="bg-[#0d1117] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4 overflow-x-auto">
                <pre className="text-gray-300 whitespace-pre">
{`// ✅ Esto NO bloquea
fetchDatosDelServidor().then(datos => {
  console.log(datos); // Se ejecuta cuando llegan
});
console.log("Hola"); // Se ejecuta inmediatamente`}
                </pre>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                <i className="ri-checkbox-circle-line text-[#10b981] mr-1 sm:mr-2"></i>
                El usuario puede seguir interactuando. La UI permanece responsiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Loop */}
      <section className="py-12 sm:py-16 bg-[#161b22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              <i className="ri-loop-left-line text-[#3b82f6] mr-2 sm:mr-3"></i>
              El Event Loop
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              El corazón de la asincronía en JavaScript. Entiende cómo funciona y nunca más te confundirás.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-white/10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#f59e0b]/20 rounded-xl mb-3 sm:mb-4">
                <span className="text-[#f59e0b] font-bold text-lg sm:text-xl">1</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Call Stack</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                La pila de ejecución. Aquí se ejecuta tu código línea por línea. Solo puede hacer UNA cosa a la vez.
              </p>
            </div>

            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-white/10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#10b981]/20 rounded-xl mb-3 sm:mb-4">
                <span className="text-[#10b981] font-bold text-lg sm:text-xl">2</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Web APIs</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                El navegador maneja las operaciones asíncronas (fetch, setTimeout, eventos) en segundo plano.
              </p>
            </div>

            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-white/10 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#3b82f6]/20 rounded-xl mb-3 sm:mb-4">
                <span className="text-[#3b82f6] font-bold text-lg sm:text-xl">3</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Callback Queue</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Cuando una operación termina, su callback espera aquí hasta que el Call Stack esté vacío.
              </p>
            </div>
          </div>

          {/* Diagrama del Event Loop */}
          <div className="bg-[#0d1117] rounded-xl p-4 sm:p-8 border border-white/10">
            <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 text-center">Flujo del Event Loop</h4>
            <div className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-8">
              <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg p-3 sm:p-4 text-center">
                <i className="ri-stack-line text-[#f59e0b] text-xl sm:text-2xl mb-1 sm:mb-2"></i>
                <p className="text-white font-medium text-xs sm:text-sm">Call Stack</p>
                <p className="text-gray-500 text-[10px] sm:text-xs">Ejecuta código</p>
              </div>
              
              <div className="hidden sm:block">
                <i className="ri-arrow-right-line text-gray-500 text-xl sm:text-2xl"></i>
              </div>
              
              <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg p-3 sm:p-4 text-center">
                <i className="ri-global-line text-[#10b981] text-xl sm:text-2xl mb-1 sm:mb-2"></i>
                <p className="text-white font-medium text-xs sm:text-sm">Web APIs</p>
                <p className="text-gray-500 text-[10px] sm:text-xs">Procesa async</p>
              </div>
              
              <div className="hidden sm:block">
                <i className="ri-arrow-right-line text-gray-500 text-xl sm:text-2xl"></i>
              </div>
              
              <div className="bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded-lg p-3 sm:p-4 text-center">
                <i className="ri-list-check text-[#3b82f6] text-xl sm:text-2xl mb-1 sm:mb-2"></i>
                <p className="text-white font-medium text-xs sm:text-sm">Callback Queue</p>
                <p className="text-gray-500 text-[10px] sm:text-xs">Espera turno</p>
              </div>
              
              <div className="hidden sm:block">
                <i className="ri-arrow-right-line text-gray-500 text-xl sm:text-2xl"></i>
              </div>
              
              <div className="bg-[#a855f7]/10 border border-[#a855f7]/30 rounded-lg p-3 sm:p-4 text-center">
                <i className="ri-loop-left-line text-[#a855f7] text-xl sm:text-2xl mb-1 sm:mb-2"></i>
                <p className="text-white font-medium text-xs sm:text-sm">Event Loop</p>
                <p className="text-gray-500 text-[10px] sm:text-xs">Mueve al Stack</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Callbacks */}
      <section className="py-12 sm:py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#ef4444]/20 rounded-xl">
              <i className="ri-function-line text-[#ef4444] text-xl sm:text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">1. Callbacks</h2>
              <p className="text-gray-400 text-xs sm:text-base">La forma original de manejar asincronía</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">¿Qué es un Callback?</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                Es simplemente una función que se pasa como argumento a otra función, para que se ejecute cuando algo termine.
              </p>
              
              <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-white/10 mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-2 sm:mb-3">Ejemplo Básico</h4>
                <div className="bg-[#0d1117] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                  <pre className="text-gray-300 whitespace-pre">
{`function hacerAlgo(callback) {
  console.log("Haciendo algo...");
  setTimeout(() => {
    callback("¡Listo!");
  }, 2000);
}

hacerAlgo((mensaje) => {
  console.log(mensaje); // "¡Listo!" después de 2s
});`}
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#ef4444] mb-3 sm:mb-4">
                <i className="ri-error-warning-line mr-1 sm:mr-2"></i>
                Callback Hell
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                El problema: cuando tienes muchas operaciones asíncronas que dependen una de otra, el código se vuelve ilegible.
              </p>
              
              <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-[#ef4444]/30">
                <h4 className="text-xs sm:text-sm font-medium text-[#ef4444] mb-2 sm:mb-3">❌ La Pirámide del Doom</h4>
                <div className="bg-[#0d1117] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                  <pre className="text-gray-300 whitespace-pre">
{`getUsuario(id, (usuario) => {
  getPedidos(usuario.id, (pedidos) => {
    getProductos(pedidos[0].id, (productos) => {
      getDetalles(productos[0].id, (detalles) => {
        // 😵 Esto es inmantenible
        console.log(detalles);
      });
    });
  });
});`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="py-12 sm:py-16 bg-[#161b22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#f59e0b]/20 rounded-xl">
              <i className="ri-hand-heart-line text-[#f59e0b] text-xl sm:text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">2. Promises (Promesas)</h2>
              <p className="text-gray-400 text-xs sm:text-base">La evolución que salvó a JavaScript</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">¿Qué es una Promise?</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                Es un objeto que representa el resultado eventual de una operación asíncrona. Puede estar en 3 estados:
              </p>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 bg-[#0d1117] rounded-lg p-3 sm:p-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#f59e0b]/20 rounded-full flex-shrink-0">
                    <i className="ri-loader-4-line text-[#f59e0b] text-sm sm:text-base"></i>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[#f59e0b] font-medium text-sm sm:text-base">Pending</span>
                    <span className="text-gray-400 text-xs sm:text-sm ml-1 sm:ml-2">- Esperando resultado</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 bg-[#0d1117] rounded-lg p-3 sm:p-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#10b981]/20 rounded-full flex-shrink-0">
                    <i className="ri-checkbox-circle-line text-[#10b981] text-sm sm:text-base"></i>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[#10b981] font-medium text-sm sm:text-base">Fulfilled</span>
                    <span className="text-gray-400 text-xs sm:text-sm ml-1 sm:ml-2">- Operación exitosa</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 bg-[#0d1117] rounded-lg p-3 sm:p-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#ef4444]/20 rounded-full flex-shrink-0">
                    <i className="ri-close-circle-line text-[#ef4444] text-sm sm:text-base"></i>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[#ef4444] font-medium text-sm sm:text-base">Rejected</span>
                    <span className="text-gray-400 text-xs sm:text-sm ml-1 sm:ml-2">- Algo falló</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Sintaxis de Promises</h3>
              <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-white/10">
                <div className="font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                  <pre className="text-gray-300 whitespace-pre">
{`// Crear una Promise
const miPromesa = new Promise((resolve, reject) => {
  const exito = true;
  
  if (exito) {
    resolve("¡Datos obtenidos!"); // Fulfilled
  } else {
    reject("Error al obtener datos"); // Rejected
  }
});

// Consumir la Promise
miPromesa
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error))
  .finally(() => console.log("Terminó"));`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Promise Chaining */}
          <div className="bg-[#0d1117] rounded-xl p-4 sm:p-8 border border-[#10b981]/30">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              <i className="ri-link text-[#10b981] mr-2"></i>
              Promise Chaining (Encadenamiento)
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              La magia de las Promises: puedes encadenar operaciones de forma legible, evitando el Callback Hell.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-[#ef4444] mb-2 sm:mb-3">❌ Callback Hell</h4>
                <div className="bg-[#161b22] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                  <pre className="text-gray-300 whitespace-pre">
{`getUsuario(id, (usuario) => {
  getPedidos(usuario.id, (pedidos) => {
    getProductos(pedidos[0].id, (prod) => {
      console.log(prod);
    });
  });
});`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-[#10b981] mb-2 sm:mb-3">✅ Promise Chain</h4>
                <div className="bg-[#161b22] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                  <pre className="text-gray-300 whitespace-pre">
{`getUsuario(id)
  .then(usuario => getPedidos(usuario.id))
  .then(pedidos => getProductos(pedidos[0].id))
  .then(productos => console.log(productos))
  .catch(error => console.error(error));`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Async/Await */}
      <section className="py-12 sm:py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#10b981]/20 rounded-xl">
              <i className="ri-magic-line text-[#10b981] text-xl sm:text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">3. Async/Await</h2>
              <p className="text-gray-400 text-xs sm:text-base">Azúcar sintáctico que hace las Promises aún más legibles</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">¿Qué es Async/Await?</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                Es una forma de escribir código asíncrono que <span className="text-[#10b981]">parece síncrono</span>. 
                Internamente sigue usando Promises, pero la sintaxis es mucho más limpia.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-[#161b22] rounded-lg p-3 sm:p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <span className="text-[#10b981] font-mono font-bold text-sm sm:text-base">async</span>
                    <span className="text-gray-400 text-xs sm:text-sm">- Declara una función asíncrona</span>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm">Hace que la función siempre retorne una Promise.</p>
                </div>
                
                <div className="bg-[#161b22] rounded-lg p-3 sm:p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <span className="text-[#f59e0b] font-mono font-bold text-sm sm:text-base">await</span>
                    <span className="text-gray-400 text-xs sm:text-sm">- Espera el resultado de una Promise</span>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm">Pausa la ejecución hasta que la Promise se resuelva.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Comparación de Sintaxis</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-[#161b22] rounded-xl p-3 sm:p-4 border border-[#f59e0b]/30">
                  <h4 className="text-xs sm:text-sm font-medium text-[#f59e0b] mb-2 sm:mb-3">Promises (.then)</h4>
                  <div className="bg-[#0d1117] rounded-lg p-2 sm:p-3 font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                    <pre className="text-gray-300 whitespace-pre">
{`fetch('/api/usuarios')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`}
                    </pre>
                  </div>
                </div>
                
                <div className="bg-[#161b22] rounded-xl p-3 sm:p-4 border border-[#10b981]/30">
                  <h4 className="text-xs sm:text-sm font-medium text-[#10b981] mb-2 sm:mb-3">Async/Await ✨</h4>
                  <div className="bg-[#0d1117] rounded-lg p-2 sm:p-3 font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                    <pre className="text-gray-300 whitespace-pre">
{`async function getUsuarios() {
  try {
    const res = await fetch('/api/usuarios');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ejemplo Completo */}
          <div className="bg-[#161b22] rounded-xl p-4 sm:p-8 border border-[#10b981]/30">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              <i className="ri-code-s-slash-line text-[#10b981] mr-2"></i>
              Ejemplo Completo: Fetch con Async/Await
            </h3>
            
            <div className="bg-[#0d1117] rounded-lg p-2 sm:p-3 md:p-6 font-mono text-[10px] sm:text-xs md:text-sm mb-4 sm:mb-6 overflow-x-auto">
              <pre className="text-gray-300 whitespace-pre">
{`const obtenerProductos = async () => {
  try {
    // 1. Mostrar loading
    setLoading(true);
    
    // 2. Hacer la petición y ESPERAR la respuesta
    const response = await fetch('https://api.tienda.com/productos');
    
    // 3. Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    // 4. Convertir a JSON y ESPERAR
    const productos = await response.json();
    
    // 5. Actualizar el estado
    setProductos(productos);
    
  } catch (error) {
    // 6. Manejar errores
    console.error('Error al obtener productos:', error);
    setError(error.message);
    
  } finally {
    // 7. Siempre ocultar loading
    setLoading(false);
  }
};

// Llamar la función
obtenerProductos();`}
              </pre>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
              <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 text-center">
                <i className="ri-loader-4-line text-[#f59e0b] text-xl sm:text-2xl mb-1 sm:mb-2"></i>
                <p className="text-white text-xs sm:text-sm font-medium">try</p>
                <p className="text-gray-500 text-[10px] sm:text-xs">Intenta ejecutar</p>
              </div>
              <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 text-center">
                <i className="ri-time-line text-[#3b82f6] text-xl sm:text-2xl mb-1 sm:mb-2"></i>
                <p className="text-white text-xs sm:text-sm font-medium">await</p>
                <p className="text-gray-500 text-[10px] sm:text-xs">Espera resultado</p>
              </div>
              <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 text-center">
                <i className="ri-error-warning-line text-[#ef4444] text-xl sm:text-2xl mb-1 sm:mb-2"></i>
                <p className="text-white text-xs sm:text-sm font-medium">catch</p>
                <p className="text-gray-500 text-[10px] sm:text-xs">Captura errores</p>
              </div>
              <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 text-center">
                <i className="ri-checkbox-circle-line text-[#10b981] text-xl sm:text-2xl mb-1 sm:mb-2"></i>
                <p className="text-white text-xs sm:text-sm font-medium">finally</p>
                <p className="text-gray-500 text-[10px] sm:text-xs">Siempre ejecuta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Métodos Útiles de Promises */}
      <section className="py-12 sm:py-16 bg-[#161b22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Métodos Útiles de Promise
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              Cuando necesitas manejar múltiples operaciones asíncronas al mismo tiempo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Promise.all */}
            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#10b981]/30">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#10b981]/20 rounded-lg flex-shrink-0">
                  <i className="ri-checkbox-multiple-line text-[#10b981] text-lg sm:text-xl"></i>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white">Promise.all()</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">Espera a que TODAS terminen</p>
                </div>
              </div>
              <div className="bg-[#161b22] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4 overflow-x-auto">
                <pre className="text-gray-300 whitespace-pre">
{`const [usuarios, productos, pedidos] = await Promise.all([
  fetch('/api/usuarios').then(r => r.json()),
  fetch('/api/productos').then(r => r.json()),
  fetch('/api/pedidos').then(r => r.json())
]);
// Las 3 peticiones se hacen en PARALELO`}
                </pre>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                <i className="ri-information-line text-[#10b981] mr-1 sm:mr-2"></i>
                Si UNA falla, todas fallan. Ideal para datos que necesitas juntos.
              </p>
            </div>

            {/* Promise.allSettled */}
            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#f59e0b]/30">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#f59e0b]/20 rounded-lg flex-shrink-0">
                  <i className="ri-list-check-2 text-[#f59e0b] text-lg sm:text-xl"></i>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white">Promise.allSettled()</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">Espera a todas, sin importar si fallan</p>
                </div>
              </div>
              <div className="bg-[#161b22] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4 overflow-x-auto">
                <pre className="text-gray-300 whitespace-pre">
{`const resultados = await Promise.allSettled([
  fetch('/api/usuarios'),
  fetch('/api/productos'),
  fetch('/api/pedidos')
]);
// Cada resultado tiene: { status, value/reason }`}
                </pre>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                <i className="ri-information-line text-[#f59e0b] mr-1 sm:mr-2"></i>
                Nunca falla. Útil cuando quieres saber qué funcionó y qué no.
              </p>
            </div>

            {/* Promise.race */}
            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#3b82f6]/30">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#3b82f6]/20 rounded-lg flex-shrink-0">
                  <i className="ri-speed-line text-[#3b82f6] text-lg sm:text-xl"></i>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white">Promise.race()</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">La primera que termine gana</p>
                </div>
              </div>
              <div className="bg-[#161b22] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4 overflow-x-auto">
                <pre className="text-gray-300 whitespace-pre">
{`const resultado = await Promise.race([
  fetch('/api/servidor1'),
  fetch('/api/servidor2'),
  new Promise((_, reject) => 
    setTimeout(() => reject('Timeout'), 5000)
  )
]);`}
                </pre>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                <i className="ri-information-line text-[#3b82f6] mr-1 sm:mr-2"></i>
                Útil para implementar timeouts o elegir el servidor más rápido.
              </p>
            </div>

            {/* Promise.any */}
            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#a855f7]/30">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#a855f7]/20 rounded-lg flex-shrink-0">
                  <i className="ri-trophy-line text-[#a855f7] text-lg sm:text-xl"></i>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white">Promise.any()</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">La primera EXITOSA gana</p>
                </div>
              </div>
              <div className="bg-[#161b22] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4 overflow-x-auto">
                <pre className="text-gray-300 whitespace-pre">
{`const resultado = await Promise.any([
  fetch('/api/cdn1/imagen.jpg'),
  fetch('/api/cdn2/imagen.jpg'),
  fetch('/api/cdn3/imagen.jpg')
]);
// Retorna la primera que NO falle`}
                </pre>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                <i className="ri-information-line text-[#a855f7] mr-1 sm:mr-2"></i>
                Solo falla si TODAS fallan. Ideal para redundancia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Errores Comunes */}
      <section className="py-12 sm:py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              <i className="ri-bug-line text-[#ef4444] mr-2 sm:mr-3"></i>
              Errores Comunes
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              Evita estos errores que todos cometemos al empezar con asincronía.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Error 1 */}
            <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-[#ef4444]/30">
              <h3 className="text-base sm:text-lg font-bold text-[#ef4444] mb-3 sm:mb-4">
                ❌ Olvidar el await
              </h3>
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-[#ef4444] mb-2">Incorrecto</h4>
                  <div className="bg-[#0d1117] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                    <pre className="text-gray-300 whitespace-pre">
{`async function getData() {
  const data = fetch('/api/data'); // ❌ Sin await
  console.log(data); // Promise { <pending> }
}`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-[#10b981] mb-2">Correcto</h4>
                  <div className="bg-[#0d1117] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                    <pre className="text-gray-300 whitespace-pre">
{`async function getData() {
  const data = await fetch('/api/data'); // ✅
  console.log(data); // Response object
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Error 2 */}
            <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-[#ef4444]/30">
              <h3 className="text-base sm:text-lg font-bold text-[#ef4444] mb-3 sm:mb-4">
                ❌ Await en bucles (secuencial en vez de paralelo)
              </h3>
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-[#ef4444] mb-2">Lento (secuencial)</h4>
                  <div className="bg-[#0d1117] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                    <pre className="text-gray-300 whitespace-pre">
{`// ❌ Cada petición espera a la anterior
for (const id of ids) {
  const data = await fetch(\`/api/\${id}\`);
  results.push(data);
} // 5 peticiones = 5 segundos`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-[#10b981] mb-2">Rápido (paralelo)</h4>
                  <div className="bg-[#0d1117] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                    <pre className="text-gray-300 whitespace-pre">
{`// ✅ Todas las peticiones en paralelo
const results = await Promise.all(
  ids.map(id => fetch(\`/api/\${id}\`))
); // 5 peticiones = 1 segundo`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Error 3 */}
            <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-[#ef4444]/30">
              <h3 className="text-base sm:text-lg font-bold text-[#ef4444] mb-3 sm:mb-4">
                ❌ No manejar errores
              </h3>
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-[#ef4444] mb-2">Peligroso</h4>
                  <div className="bg-[#0d1117] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                    <pre className="text-gray-300 whitespace-pre">
{`// ❌ Si falla, la app explota
async function getData() {
  const res = await fetch('/api/data');
  const data = await res.json();
  return data;
}`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-[#10b981] mb-2">Seguro</h4>
                  <div className="bg-[#0d1117] rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                    <pre className="text-gray-300 whitespace-pre">
{`// ✅ Errores controlados
async function getData() {
  try {
    const res = await fetch('/api/data');
    if (!res.ok) throw new Error('HTTP Error');
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resumen Visual */}
      <section className="py-12 sm:py-16 bg-[#161b22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Resumen: Evolución de la Asincronía
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
            {/* Callbacks */}
            <div className="bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-xl p-4 sm:p-6 text-center w-full sm:w-auto lg:w-64">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#ef4444]/20 rounded-full mx-auto mb-3 sm:mb-4">
                <i className="ri-function-line text-[#ef4444] text-2xl sm:text-3xl"></i>
              </div>
              <h3 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2">Callbacks</h3>
              <p className="text-gray-400 text-xs sm:text-sm">La forma original</p>
              <p className="text-[#ef4444] text-[10px] sm:text-xs mt-1 sm:mt-2">⚠️ Callback Hell</p>
            </div>

            <div className="hidden lg:block">
              <i className="ri-arrow-right-line text-gray-500 text-2xl sm:text-3xl mx-4"></i>
            </div>
            <div className="lg:hidden">
              <i className="ri-arrow-down-line text-gray-500 text-2xl my-1"></i>
            </div>

            {/* Promises */}
            <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-xl p-4 sm:p-6 text-center w-full sm:w-auto lg:w-64">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#f59e0b]/20 rounded-full mx-auto mb-3 sm:mb-4">
                <i className="ri-hand-heart-line text-[#f59e0b] text-2xl sm:text-3xl"></i>
              </div>
              <h3 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2">Promises</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Encadenamiento limpio</p>
              <p className="text-[#f59e0b] text-[10px] sm:text-xs mt-1 sm:mt-2">✓ .then().catch()</p>
            </div>

            <div className="hidden lg:block">
              <i className="ri-arrow-right-line text-gray-500 text-2xl sm:text-3xl mx-4"></i>
            </div>
            <div className="lg:hidden">
              <i className="ri-arrow-down-line text-gray-500 text-2xl my-1"></i>
            </div>

            {/* Async/Await */}
            <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-xl p-4 sm:p-6 text-center w-full sm:w-auto lg:w-64">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#10b981]/20 rounded-full mx-auto mb-3 sm:mb-4">
                <i className="ri-magic-line text-[#10b981] text-2xl sm:text-3xl"></i>
              </div>
              <h3 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2">Async/Await</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Código que parece síncrono</p>
              <p className="text-[#10b981] text-[10px] sm:text-xs mt-1 sm:mt-2">✨ Recomendado</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
