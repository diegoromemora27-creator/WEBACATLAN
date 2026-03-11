
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
            <i className="ri-loop-left-line text-[#f59e0b] text-lg sm:text-xl"></i>
            <span className="text-white text-xs sm:text-sm font-medium">Modelo de Ejecución en JavaScript</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Asincronía y el<br />Event Loop
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            Entiende cómo JavaScript organiza el trabajo con un solo hilo, delega tareas lentas y logra concurrencia sin dejar de atender al usuario.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-checkbox-circle-fill text-[#ef4444]"></i>
              <span>Síncrono vs Asíncrono</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-checkbox-circle-fill text-[#f59e0b]"></i>
              <span>Call Stack</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-checkbox-circle-fill text-[#10b981]"></i>
              <span>Web APIs</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-checkbox-circle-fill text-[#3b82f6]"></i>
              <span>Event Loop</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-checkbox-circle-fill text-[#a855f7]"></i>
              <span>Callback Queue</span>
            </div>
          </div>

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

      {/* Glosario */}
      <section className="py-12 sm:py-16 bg-[#161b22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              <i className="ri-book-2-line text-[#f59e0b] mr-2 sm:mr-3"></i>
              Glosario
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              Conceptos clave que necesitas conocer antes de avanzar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-5 border border-[#ef4444]/30 hover:border-[#ef4444]/60 transition-colors">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#ef4444]/20 rounded-lg flex-shrink-0">
                  <i className="ri-pause-circle-line text-[#ef4444] text-lg"></i>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">Síncrono</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Espera y no avanza hasta terminar.</p>
            </div>

            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-5 border border-[#10b981]/30 hover:border-[#10b981]/60 transition-colors">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#10b981]/20 rounded-lg flex-shrink-0">
                  <i className="ri-play-circle-line text-[#10b981] text-lg"></i>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">Asíncrono</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Delega y sigue avanzando.</p>
            </div>

            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-5 border border-[#f59e0b]/30 hover:border-[#f59e0b]/60 transition-colors">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#f59e0b]/20 rounded-lg flex-shrink-0">
                  <i className="ri-user-line text-[#f59e0b] text-lg"></i>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">Monohilo</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Un solo flujo principal de trabajo.</p>
            </div>

            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-5 border border-[#3b82f6]/30 hover:border-[#3b82f6]/60 transition-colors">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#3b82f6]/20 rounded-lg flex-shrink-0">
                  <i className="ri-swap-line text-[#3b82f6] text-lg"></i>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">Concurrencia</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Avanzar en varias tareas intercalándolas.</p>
            </div>

            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-5 border border-[#a855f7]/30 hover:border-[#a855f7]/60 transition-colors">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#a855f7]/20 rounded-lg flex-shrink-0">
                  <i className="ri-speed-line text-[#a855f7] text-lg"></i>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">Paralelismo</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Ejecutar varias tareas al mismo tiempo real.</p>
            </div>

            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-5 border border-[#f59e0b]/30 hover:border-[#f59e0b]/60 transition-colors">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#f59e0b]/20 rounded-lg flex-shrink-0">
                  <i className="ri-stack-line text-[#f59e0b] text-lg"></i>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">Call Stack</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Pila de lo que se está ejecutando.</p>
            </div>

            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-5 border border-[#10b981]/30 hover:border-[#10b981]/60 transition-colors">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#10b981]/20 rounded-lg flex-shrink-0">
                  <i className="ri-global-line text-[#10b981] text-lg"></i>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">Web APIs</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Servicios externos al motor de JS que manejan tareas lentas o eventos.</p>
            </div>

            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-5 border border-[#3b82f6]/30 hover:border-[#3b82f6]/60 transition-colors">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#3b82f6]/20 rounded-lg flex-shrink-0">
                  <i className="ri-list-check text-[#3b82f6] text-lg"></i>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">Callback Queue</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Fila de tareas listas para ser atendidas.</p>
            </div>

            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-5 border border-[#a855f7]/30 hover:border-[#a855f7]/60 transition-colors">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#a855f7]/20 rounded-lg flex-shrink-0">
                  <i className="ri-loop-left-line text-[#a855f7] text-lg"></i>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">Event Loop</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Coordinador que mete tareas al Stack cuando este queda libre.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Idea General */}
      <section className="py-12 sm:py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              <i className="ri-lightbulb-line text-[#f59e0b] mr-2 sm:mr-3"></i>
              Idea General
            </h2>
          </div>

          <div className="bg-[#161b22] rounded-xl p-6 sm:p-8 border border-[#f59e0b]/30 max-w-4xl mx-auto">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              JavaScript, especialmente en el navegador, trabaja con <span className="text-[#f59e0b] font-semibold">un solo hilo principal</span> para ejecutar instrucciones. Eso significa que no puede hacer dos cosas al mismo tiempo en ese hilo, pero sí puede <span className="text-[#10b981] font-semibold">organizar el trabajo</span> para no quedarse detenido cuando una tarea tarda mucho. Esa organización se logra gracias al <span className="text-[#f59e0b]">Call Stack</span>, las <span className="text-[#10b981]">Web APIs</span>, las <span className="text-[#3b82f6]">colas de tareas</span> y el <span className="text-[#a855f7]">Event Loop</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Ejecución Bloqueante / Síncrona */}
      <section className="py-12 sm:py-16 bg-[#161b22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#ef4444]/20 rounded-xl">
              <i className="ri-stop-circle-line text-[#ef4444] text-xl sm:text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">1. Ejecución Bloqueante (Síncrona)</h2>
              <p className="text-gray-400 text-xs sm:text-base">El programa hace una cosa a la vez y no avanza hasta terminar</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Definiciones */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <i className="ri-code-s-slash-line text-[#ef4444]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-white">Definición técnica</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  La ejecución bloqueante o síncrona es un modelo en el que cada instrucción debe terminar completamente antes de que la siguiente pueda comenzar. El hilo de ejecución permanece ocupado durante toda la operación, incluso si esa operación implica esperar un resultado externo, como una lectura de disco, una consulta a base de datos o una petición de red.
                </p>
              </div>

              <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <i className="ri-chat-smile-2-line text-[#f59e0b]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-white">Definición sencilla</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Es cuando el programa hace una cosa a la vez y no puede avanzar hasta terminar la actual. Si una tarea tarda, todo lo demás se queda esperando.
                </p>
              </div>
            </div>

            {/* Analogía y problemas */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#f59e0b]/30">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <i className="ri-restaurant-line text-[#f59e0b]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-[#f59e0b]">Ejemplo cotidiano</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Imagina una cocina con un solo cocinero. Si pone un muffin en el horno y decide quedarse parado frente al horno hasta que se caliente, no puede atender nuevos pedidos, servir café ni cobrar. Toda la cocina se frena por esa espera.
                </p>
              </div>

              <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#ef4444]/30">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <i className="ri-error-warning-line text-[#ef4444]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-[#ef4444]">¿Qué problema causa?</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <i className="ri-close-line text-[#ef4444] mt-0.5 flex-shrink-0"></i>
                    <p className="text-gray-400 text-xs sm:text-sm">La aplicación parece congelarse.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-close-line text-[#ef4444] mt-0.5 flex-shrink-0"></i>
                    <p className="text-gray-400 text-xs sm:text-sm">El usuario no recibe respuesta inmediata.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-close-line text-[#ef4444] mt-0.5 flex-shrink-0"></i>
                    <p className="text-gray-400 text-xs sm:text-sm">Botones, animaciones o interacciones pueden sentirse lentas o detenidas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ejecución No Bloqueante / Asíncrona */}
      <section className="py-12 sm:py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#10b981]/20 rounded-xl">
              <i className="ri-play-circle-line text-[#10b981] text-xl sm:text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">2. Ejecución No Bloqueante (Asíncrona)</h2>
              <p className="text-gray-400 text-xs sm:text-base">Encarga la tarea lenta y sigue trabajando</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <i className="ri-code-s-slash-line text-[#10b981]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-white">Definición técnica</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  La ejecución no bloqueante o asíncrona permite iniciar una operación que tardará tiempo y continuar con otras tareas sin esperar a que esa operación termine de inmediato. Cuando el resultado está listo, este se agenda para ser procesado después, mediante mecanismos como callbacks, promesas o colas de eventos.
                </p>
              </div>

              <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <i className="ri-chat-smile-2-line text-[#f59e0b]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-white">Definición sencilla</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Es cuando el programa encarga una tarea lenta a otro sistema y mientras tanto sigue trabajando en otras cosas. Luego, cuando la tarea termina, recoge el resultado.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-[#f59e0b]/30">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <i className="ri-store-2-line text-[#f59e0b]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-[#f59e0b]">Ejemplo cotidiano</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  En una cafetería, el empleado mete el muffin al horno y no se queda mirando. Mientras el muffin se calienta, toma otro pedido, sirve una bebida y cobra a otro cliente. Cuando el horno avisa que el muffin está listo, entonces lo recoge.
                </p>
              </div>

              <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-[#10b981]/30">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <i className="ri-key-2-line text-[#10b981]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-[#10b981]">La idea clave</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <i className="ri-check-line text-[#10b981] mt-0.5 flex-shrink-0"></i>
                    <p className="text-gray-400 text-xs sm:text-sm">La tarea lenta no detiene todo.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-check-line text-[#10b981] mt-0.5 flex-shrink-0"></i>
                    <p className="text-gray-400 text-xs sm:text-sm">El sistema necesita una forma de enterarse de que ya terminó.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-check-line text-[#10b981] mt-0.5 flex-shrink-0"></i>
                    <p className="text-gray-400 text-xs sm:text-sm">Esa "notificación" es lo que permite continuar con el resultado más adelante.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Single Thread */}
      <section className="py-12 sm:py-16 bg-[#161b22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#f59e0b]/20 rounded-xl">
              <i className="ri-user-line text-[#f59e0b] text-xl sm:text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">3. Single Thread (Un Solo Hilo)</h2>
              <p className="text-gray-400 text-xs sm:text-base">JavaScript tiene un solo "brazo" de trabajo principal</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <i className="ri-code-s-slash-line text-[#f59e0b]"></i>
                <h3 className="text-sm sm:text-base font-bold text-white">Definición técnica</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                JavaScript, en su modelo tradicional de ejecución en el hilo principal, es monohilo. Esto significa que solo tiene un flujo principal de ejecución para procesar instrucciones, evaluar expresiones y ejecutar funciones. En ese hilo no hay paralelismo real entre tareas; las operaciones se atienden una por una.
              </p>
            </div>

            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#f59e0b]/30">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <i className="ri-building-line text-[#f59e0b]"></i>
                <h3 className="text-sm sm:text-base font-bold text-[#f59e0b]">Ejemplo cotidiano</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Piensa en una recepcionista sola en una oficina. Solo hay una persona para contestar llamadas, recibir paquetes y atender visitantes. No puede hablar con dos personas al mismo tiempo, pero sí puede organizar el trabajo y dejar algunas tareas en otras áreas.
              </p>
            </div>

            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#10b981]/30">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <i className="ri-lightbulb-flash-line text-[#10b981]"></i>
                <h3 className="text-sm sm:text-base font-bold text-[#10b981]">Punto importante</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Que JavaScript sea monohilo <span className="text-white font-medium">no significa que todo sea lento</span>. Lo importante es que sabe delegar tareas largas fuera del hilo principal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Concurrencia vs Paralelismo */}
      <section className="py-12 sm:py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              4. Concurrencia vs Paralelismo
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              Dos conceptos que suenan igual pero funcionan diferente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Concurrencia */}
            <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-[#3b82f6]/30">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#3b82f6]/20 rounded-xl">
                  <i className="ri-swap-line text-[#3b82f6] text-xl sm:text-2xl"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#3b82f6]">Concurrencia</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-gray-400 mb-1 font-medium text-white">Técnica:</p>
                  <p className="text-xs sm:text-sm text-gray-400">La capacidad de avanzar en múltiples tareas durante el mismo periodo de tiempo, intercalando su atención y coordinando su progreso, aunque no necesariamente se ejecuten exactamente al mismo tiempo.</p>
                </div>
                <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-gray-400 mb-1 font-medium text-white">Sencilla:</p>
                  <p className="text-xs sm:text-sm text-gray-400">Es saber manejar varias cosas "a la vez", alternando entre ellas de forma organizada.</p>
                </div>
                <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 border border-[#3b82f6]/20">
                  <div className="flex items-center gap-2 mb-1">
                    <i className="ri-restaurant-line text-[#3b82f6] text-sm"></i>
                    <p className="text-xs sm:text-sm font-medium text-[#3b82f6]">Ejemplo:</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">Un mesero toma un pedido, luego lleva un café a otra mesa, después cobra una cuenta y luego vuelve a revisar la cocina. No hizo todo exactamente al mismo segundo, pero sí avanzó en varias tareas en el mismo periodo.</p>
                </div>
              </div>
            </div>

            {/* Paralelismo */}
            <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-[#a855f7]/30">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#a855f7]/20 rounded-xl">
                  <i className="ri-speed-line text-[#a855f7] text-xl sm:text-2xl"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#a855f7]">Paralelismo</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-gray-400 mb-1 font-medium text-white">Técnica:</p>
                  <p className="text-xs sm:text-sm text-gray-400">La ejecución real y simultánea de múltiples tareas al mismo tiempo, generalmente usando varios hilos o varios núcleos de procesamiento.</p>
                </div>
                <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-gray-400 mb-1 font-medium text-white">Sencilla:</p>
                  <p className="text-xs sm:text-sm text-gray-400">Es cuando varias cosas sí se hacen literalmente al mismo instante porque hay varios trabajadores haciéndolas.</p>
                </div>
                <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 border border-[#a855f7]/20">
                  <div className="flex items-center gap-2 mb-1">
                    <i className="ri-restaurant-line text-[#a855f7] text-sm"></i>
                    <p className="text-xs sm:text-sm font-medium text-[#a855f7]">Ejemplo:</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">En una cocina con tres cocineros, uno prepara ensalada, otro hornea pan y otro sirve bebidas al mismo tiempo. Eso sí es paralelismo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Relación con JS */}
          <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-white/10 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <i className="ri-javascript-line text-[#f59e0b] text-lg sm:text-xl"></i>
              <h3 className="text-sm sm:text-base font-bold text-white">Relación con JavaScript</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-[#3b82f6] mt-0.5 flex-shrink-0"></i>
                <p className="text-gray-400 text-xs sm:text-sm">JavaScript en el hilo principal trabaja sobre todo con <span className="text-[#3b82f6] font-medium">concurrencia</span>.</p>
              </div>
              <div className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-[#a855f7] mt-0.5 flex-shrink-0"></i>
                <p className="text-gray-400 text-xs sm:text-sm">No hace <span className="text-[#a855f7] font-medium">paralelismo</span> real en ese hilo principal.</p>
              </div>
              <div className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-[#10b981] mt-0.5 flex-shrink-0"></i>
                <p className="text-gray-400 text-xs sm:text-sm">El entorno que lo rodea (navegador o Node.js) sí puede apoyarse en otros mecanismos del sistema para manejar tareas externas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call Stack */}
      <section className="py-12 sm:py-16 bg-[#161b22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#f59e0b]/20 rounded-xl">
              <i className="ri-stack-line text-[#f59e0b] text-xl sm:text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">5. Call Stack (Pila de Ejecución)</h2>
              <p className="text-gray-400 text-xs sm:text-base">Lo que JavaScript está haciendo ahora mismo</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <i className="ri-code-s-slash-line text-[#f59e0b]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-white">Definición técnica</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  El Call Stack es la estructura de datos donde JavaScript registra el contexto de ejecución de las funciones activas. Sigue el principio <span className="text-[#f59e0b] font-semibold">LIFO</span> (Last In, First Out), es decir, la última función en entrar es la primera en salir. Cada nueva llamada se apila encima de la anterior hasta completarse.
                </p>
              </div>

              <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#f59e0b]/30">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <i className="ri-stack-line text-[#f59e0b]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-[#f59e0b]">Ejemplo cotidiano</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Imagina una pila de platos. Cada vez que llega una nueva tarea urgente, se coloca arriba. Para quitar platos, siempre retiras primero el de arriba. Así funciona la pila de ejecución.
                </p>
              </div>
            </div>

            {/* Visual LIFO */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#f59e0b]/30">
                <h4 className="text-sm sm:text-base font-bold text-white mb-4 text-center">Principio LIFO (Pila de Platos)</h4>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-full max-w-xs bg-[#f59e0b]/20 border border-[#f59e0b]/40 rounded-lg p-2 sm:p-3 text-center">
                    <span className="text-[#f59e0b] text-xs sm:text-sm font-medium">funcion3() ← sale primero</span>
                  </div>
                  <div className="w-full max-w-xs bg-[#10b981]/20 border border-[#10b981]/40 rounded-lg p-2 sm:p-3 text-center">
                    <span className="text-[#10b981] text-xs sm:text-sm font-medium">funcion2()</span>
                  </div>
                  <div className="w-full max-w-xs bg-[#3b82f6]/20 border border-[#3b82f6]/40 rounded-lg p-2 sm:p-3 text-center">
                    <span className="text-[#3b82f6] text-xs sm:text-sm font-medium">funcion1() ← entró primero</span>
                  </div>
                  <i className="ri-arrow-down-line text-gray-500 text-lg mt-1"></i>
                  <p className="text-gray-500 text-[10px] sm:text-xs">Base del Stack</p>
                </div>
              </div>

              <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#ef4444]/30">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <i className="ri-error-warning-line text-[#ef4444]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-[#ef4444]">¿Por qué importa?</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <i className="ri-alert-line text-[#ef4444] mt-0.5 flex-shrink-0"></i>
                    <p className="text-gray-400 text-xs sm:text-sm">Si una tarea pesada ocupa el Stack demasiado tiempo, nada más puede ejecutarse.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-alert-line text-[#ef4444] mt-0.5 flex-shrink-0"></i>
                    <p className="text-gray-400 text-xs sm:text-sm">Si entra un proceso infinito, el sistema queda atrapado.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-alert-line text-[#ef4444] mt-0.5 flex-shrink-0"></i>
                    <p className="text-gray-400 text-xs sm:text-sm">El Event Loop no puede mover nuevas tareas al Stack si este sigue ocupado.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Web APIs */}
      <section className="py-12 sm:py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#10b981]/20 rounded-xl">
              <i className="ri-global-line text-[#10b981] text-xl sm:text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">6. Web APIs (Sistema de Delegación)</h2>
              <p className="text-gray-400 text-xs sm:text-base">Departamentos externos que se encargan de tareas que toman tiempo</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <i className="ri-code-s-slash-line text-[#10b981]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-white">Definición técnica</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Las Web APIs son capacidades proporcionadas por el entorno de ejecución del navegador, no por el lenguaje JavaScript en sí. Incluyen temporizadores, manejo del DOM, eventos del usuario, peticiones de red, geolocalización y más. Estas APIs permiten que ciertas operaciones se realicen fuera del Call Stack principal.
                </p>
              </div>

              <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-[#f59e0b]/30">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <i className="ri-building-line text-[#f59e0b]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-[#f59e0b]">Ejemplo cotidiano</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  En una oficina, la recepcionista no hace todo. Si necesita enviar un paquete, se lo entrega al mensajero. Si necesita imprimir cien hojas, se lo manda a la impresora. La recepcionista sigue atendiendo mientras otros sistemas trabajan.
                </p>
              </div>
            </div>

            <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-[#10b981]/30">
              <div className="flex items-center gap-2 mb-4 sm:mb-5">
                <i className="ri-list-unordered text-[#10b981]"></i>
                <h3 className="text-sm sm:text-base font-bold text-white">¿Qué tipo de cosas se delegan?</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 text-center">
                  <i className="ri-timer-line text-[#f59e0b] text-lg sm:text-xl mb-1"></i>
                  <p className="text-gray-300 text-xs sm:text-sm">Temporizadores</p>
                </div>
                <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 text-center">
                  <i className="ri-cursor-line text-[#3b82f6] text-lg sm:text-xl mb-1"></i>
                  <p className="text-gray-300 text-xs sm:text-sm">Clics y eventos</p>
                </div>
                <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 text-center">
                  <i className="ri-server-line text-[#10b981] text-lg sm:text-xl mb-1"></i>
                  <p className="text-gray-300 text-xs sm:text-sm">Peticiones a servidores</p>
                </div>
                <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 text-center">
                  <i className="ri-download-line text-[#a855f7] text-lg sm:text-xl mb-1"></i>
                  <p className="text-gray-300 text-xs sm:text-sm">Descargas de archivos</p>
                </div>
                <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 text-center col-span-2">
                  <i className="ri-window-line text-[#ef4444] text-lg sm:text-xl mb-1"></i>
                  <p className="text-gray-300 text-xs sm:text-sm">Operaciones del navegador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Callback Queue */}
      <section className="py-12 sm:py-16 bg-[#161b22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#3b82f6]/20 rounded-xl">
              <i className="ri-list-check text-[#3b82f6] text-xl sm:text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">7. Callback Queue (Task Queue)</h2>
              <p className="text-gray-400 text-xs sm:text-base">La fila de tareas terminadas que esperan su turno</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <i className="ri-code-s-slash-line text-[#3b82f6]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-white">Definición técnica</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  La Callback Queue, también llamada Task Queue, es una estructura <span className="text-[#3b82f6] font-semibold">FIFO</span> (First In, First Out) donde se colocan las tareas cuyo trabajo externo ya terminó y están listas para ejecutarse cuando el Call Stack quede libre.
                </p>
              </div>

              <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <i className="ri-chat-smile-2-line text-[#f59e0b]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-white">Definición sencilla</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Es la fila de tareas terminadas que están esperando su turno para ser atendidas por JavaScript.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#f59e0b]/30">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <i className="ri-ticket-line text-[#f59e0b]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-[#f59e0b]">Ejemplo cotidiano</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Imagina una ventanilla donde se entregan fichas. Aunque varias personas ya llegaron y están listas para ser atendidas, deben esperar formadas. La primera que entró a la fila será la primera en pasar cuando el encargado quede libre.
                </p>
              </div>

              {/* Visual FIFO */}
              <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#3b82f6]/30">
                <h4 className="text-sm sm:text-base font-bold text-white mb-3 text-center">Principio FIFO (Fila)</h4>
                <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto">
                  <div className="bg-[#3b82f6]/20 border border-[#3b82f6]/40 rounded-lg p-2 sm:p-3 text-center flex-shrink-0">
                    <span className="text-[#3b82f6] text-[10px] sm:text-xs font-medium">Tarea 1 →</span>
                  </div>
                  <div className="bg-[#10b981]/20 border border-[#10b981]/40 rounded-lg p-2 sm:p-3 text-center flex-shrink-0">
                    <span className="text-[#10b981] text-[10px] sm:text-xs font-medium">Tarea 2</span>
                  </div>
                  <div className="bg-[#f59e0b]/20 border border-[#f59e0b]/40 rounded-lg p-2 sm:p-3 text-center flex-shrink-0">
                    <span className="text-[#f59e0b] text-[10px] sm:text-xs font-medium">Tarea 3</span>
                  </div>
                  <i className="ri-arrow-right-line text-gray-500 text-lg flex-shrink-0"></i>
                  <div className="bg-[#a855f7]/20 border border-[#a855f7]/40 rounded-lg p-2 sm:p-3 text-center flex-shrink-0">
                    <span className="text-[#a855f7] text-[10px] sm:text-xs font-medium">Al Stack</span>
                  </div>
                </div>
                <p className="text-gray-500 text-[10px] sm:text-xs text-center mt-2">Una tarea terminada no interrumpe directamente al programa. Debe esperar su turno.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Event Loop */}
      <section className="py-12 sm:py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#a855f7]/20 rounded-xl">
              <i className="ri-loop-left-line text-[#a855f7] text-xl sm:text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">8. Event Loop</h2>
              <p className="text-gray-400 text-xs sm:text-base">El supervisor que coordina cuándo entra cada tarea</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <i className="ri-code-s-slash-line text-[#a855f7]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-white">Definición técnica</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  El Event Loop es el mecanismo de coordinación que monitorea continuamente el Call Stack y las colas de tareas. Cuando detecta que el Stack está vacío, toma la siguiente tarea pendiente de la cola correspondiente y la coloca en el Stack para su ejecución.
                </p>
              </div>

              <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-[#f59e0b]/30">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <i className="ri-shield-user-line text-[#f59e0b]"></i>
                  <h3 className="text-sm sm:text-base font-bold text-[#f59e0b]">Ejemplo cotidiano</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Piensa en un guardia de acceso. Revisa si la oficina principal está libre. Si lo está, deja entrar a la siguiente persona formada. Si no, la hace esperar afuera.
                </p>
              </div>
            </div>

            <div className="bg-[#161b22] rounded-xl p-4 sm:p-6 border border-[#a855f7]/30">
              <div className="flex items-center gap-2 mb-4 sm:mb-5">
                <i className="ri-key-2-line text-[#a855f7]"></i>
                <h3 className="text-sm sm:text-base font-bold text-[#a855f7]">La clave del Event Loop</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 bg-[#0d1117] rounded-lg p-3 sm:p-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#a855f7]/20 rounded-full flex-shrink-0">
                    <span className="text-[#a855f7] text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">No ejecuta tareas por sí mismo.</p>
                </div>
                <div className="flex items-start gap-3 bg-[#0d1117] rounded-lg p-3 sm:p-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#a855f7]/20 rounded-full flex-shrink-0">
                    <span className="text-[#a855f7] text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">Solo administra el momento en que una tarea puede entrar al Stack.</p>
                </div>
                <div className="flex items-start gap-3 bg-[#0d1117] rounded-lg p-3 sm:p-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#ef4444]/20 rounded-full flex-shrink-0">
                    <span className="text-[#ef4444] text-xs font-bold">!</span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">Si el Stack nunca queda libre, <span className="text-[#ef4444] font-medium">nadie más entra</span>.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Diagrama completo del flujo */}
          <div className="bg-[#161b22] rounded-xl p-4 sm:p-8 border border-white/10">
            <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 text-center">Flujo Completo del Event Loop</h4>
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

      {/* 9. Cómo viaja una petición web */}
      <section className="py-12 sm:py-16 bg-[#161b22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              <i className="ri-route-line text-[#10b981] mr-2 sm:mr-3"></i>
              9. Cómo Viaja una Petición Web
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              Paso a paso: desde que el usuario hace clic hasta que la respuesta se muestra en pantalla.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Paso 1 */}
            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#ef4444]/30">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#ef4444]/20 rounded-xl flex-shrink-0">
                  <span className="text-[#ef4444] font-bold text-lg sm:text-xl">1</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">El usuario dispara un evento</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 leading-relaxed">
                    El usuario hace clic en un botón, por ejemplo "Buscar productos". Ese clic es un evento. El navegador detecta el clic y, cuando JavaScript puede atenderlo, la función asociada entra al Call Stack.
                  </p>
                  <div className="bg-[#161b22] rounded-lg p-3 sm:p-4 border border-[#ef4444]/20">
                    <div className="flex items-center gap-2">
                      <i className="ri-restaurant-line text-[#f59e0b] text-sm"></i>
                      <p className="text-xs sm:text-sm text-gray-400"><span className="text-[#f59e0b] font-medium">Analogía:</span> Un cliente toca el timbre en recepción. La recepcionista lo atiende cuando queda libre.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#f59e0b]/30">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#f59e0b]/20 rounded-xl flex-shrink-0">
                  <span className="text-[#f59e0b] font-bold text-lg sm:text-xl">2</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">JavaScript inicia la petición</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 leading-relaxed">
                    La lógica de la página decide pedir información a un servidor externo. JavaScript inicia la solicitud pero no se queda esperando la respuesta dentro del Call Stack. Delega esa operación a las Web APIs del navegador.
                  </p>
                  <div className="bg-[#161b22] rounded-lg p-3 sm:p-4 border border-[#f59e0b]/20">
                    <div className="flex items-center gap-2">
                      <i className="ri-restaurant-line text-[#f59e0b] text-sm"></i>
                      <p className="text-xs sm:text-sm text-gray-400"><span className="text-[#f59e0b] font-medium">Analogía:</span> La recepcionista llena un formato y lo manda al departamento de mensajería para que traiga un expediente de otro edificio.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#10b981]/30">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#10b981]/20 rounded-xl flex-shrink-0">
                  <span className="text-[#10b981] font-bold text-lg sm:text-xl">3</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">La Web API se encarga de la espera</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 leading-relaxed">
                    La Web API administra la comunicación con internet. Mientras el servidor remoto procesa y responde, el hilo principal de JavaScript sigue libre para otras tareas. La página puede seguir respondiendo a clics, animaciones u otras acciones.
                  </p>
                  <div className="bg-[#161b22] rounded-lg p-3 sm:p-4 border border-[#10b981]/20">
                    <div className="flex items-center gap-2">
                      <i className="ri-restaurant-line text-[#f59e0b] text-sm"></i>
                      <p className="text-xs sm:text-sm text-gray-400"><span className="text-[#f59e0b] font-medium">Analogía:</span> El mensajero salió por el expediente. Mientras tanto, la recepcionista sigue atendiendo llamadas y visitantes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#3b82f6]/30">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#3b82f6]/20 rounded-xl flex-shrink-0">
                  <span className="text-[#3b82f6] font-bold text-lg sm:text-xl">4</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">La respuesta llega</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 leading-relaxed">
                    Cuando el servidor finalmente responde, la Web API ya tiene el resultado. La respuesta no entra de golpe al Call Stack. Primero se coloca en la Callback Queue para que JavaScript la procese cuando pueda.
                  </p>
                  <div className="bg-[#161b22] rounded-lg p-3 sm:p-4 border border-[#3b82f6]/20">
                    <div className="flex items-center gap-2">
                      <i className="ri-restaurant-line text-[#f59e0b] text-sm"></i>
                      <p className="text-xs sm:text-sm text-gray-400"><span className="text-[#f59e0b] font-medium">Analogía:</span> El mensajero regresa con el expediente, pero si la recepcionista sigue ocupada, deja el expediente en una bandeja de pendientes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#a855f7]/30">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#a855f7]/20 rounded-xl flex-shrink-0">
                  <span className="text-[#a855f7] font-bold text-lg sm:text-xl">5</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">El Event Loop revisa si JavaScript está libre</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 leading-relaxed">
                    El Event Loop observa continuamente si el Call Stack está vacío. Si JavaScript ya terminó lo anterior, el Event Loop toma la tarea pendiente de la cola, la coloca en el Stack y ahora sí se procesa la respuesta: se actualiza la interfaz, se muestran productos, se guarda información o se avisa un error.
                  </p>
                  <div className="bg-[#161b22] rounded-lg p-3 sm:p-4 border border-[#a855f7]/20">
                    <div className="flex items-center gap-2">
                      <i className="ri-restaurant-line text-[#f59e0b] text-sm"></i>
                      <p className="text-xs sm:text-sm text-gray-400"><span className="text-[#f59e0b] font-medium">Analogía:</span> Cuando la recepcionista termina con el visitante actual, toma el expediente de la bandeja y ahora sí lo registra en el sistema.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Ejemplo Completo: El Restaurante */}
      <section className="py-12 sm:py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              <i className="ri-restaurant-2-line text-[#f59e0b] mr-2 sm:mr-3"></i>
              10. Ejemplo Completo: El Restaurante
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              Todo el modelo de asincronía explicado con una sola analogía.
            </p>
          </div>

          <div className="bg-[#161b22] rounded-xl p-4 sm:p-8 border border-[#f59e0b]/30 mb-8 sm:mb-10">
            <div className="space-y-3 sm:space-y-4">
              {[
                { num: '1', text: 'Llega un cliente y pide ver el menú de postres.', color: '#ef4444' },
                { num: '2', text: 'La persona de caja no va a cocinar el postre ni a ir por ingredientes; solo manda la orden a cocina.', color: '#f59e0b' },
                { num: '3', text: 'Mientras cocina trabaja en eso, la persona de caja sigue cobrando a otros clientes y recibiendo pedidos.', color: '#10b981' },
                { num: '4', text: 'Cuando cocina termina, no grita encima del cliente actual para interrumpirlo.', color: '#3b82f6' },
                { num: '5', text: 'En lugar de eso, deja el platillo en una barra de entregas.', color: '#3b82f6' },
                { num: '6', text: 'Cuando la persona de caja termina con quien estaba atendiendo, revisa la barra.', color: '#a855f7' },
                { num: '7', text: 'Toma el siguiente platillo listo y se lo entrega al cliente correcto.', color: '#a855f7' },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full flex-shrink-0" style={{ backgroundColor: `${step.color}20` }}>
                    <span className="font-bold text-sm" style={{ color: step.color }}>{step.num}</span>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base pt-1">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mapeo de analogía */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <div className="bg-[#161b22] rounded-xl p-4 sm:p-5 border border-[#f59e0b]/30 text-center">
              <i className="ri-user-line text-[#f59e0b] text-2xl sm:text-3xl mb-2 sm:mb-3"></i>
              <h4 className="text-white font-bold text-sm sm:text-base mb-1">La persona de caja</h4>
              <p className="text-gray-400 text-xs sm:text-sm">= Hilo principal de JavaScript</p>
            </div>
            <div className="bg-[#161b22] rounded-xl p-4 sm:p-5 border border-[#10b981]/30 text-center">
              <i className="ri-restaurant-line text-[#10b981] text-2xl sm:text-3xl mb-2 sm:mb-3"></i>
              <h4 className="text-white font-bold text-sm sm:text-base mb-1">La cocina</h4>
              <p className="text-gray-400 text-xs sm:text-sm">= Web API / sistema externo</p>
            </div>
            <div className="bg-[#161b22] rounded-xl p-4 sm:p-5 border border-[#3b82f6]/30 text-center">
              <i className="ri-inbox-line text-[#3b82f6] text-2xl sm:text-3xl mb-2 sm:mb-3"></i>
              <h4 className="text-white font-bold text-sm sm:text-base mb-1">La barra de entregas</h4>
              <p className="text-gray-400 text-xs sm:text-sm">= Callback Queue</p>
            </div>
            <div className="bg-[#161b22] rounded-xl p-4 sm:p-5 border border-[#a855f7]/30 text-center">
              <i className="ri-eye-line text-[#a855f7] text-2xl sm:text-3xl mb-2 sm:mb-3"></i>
              <h4 className="text-white font-bold text-sm sm:text-base mb-1">Revisar si está libre</h4>
              <p className="text-gray-400 text-xs sm:text-sm">= Event Loop</p>
            </div>
            <div className="bg-[#161b22] rounded-xl p-4 sm:p-5 border border-[#ef4444]/30 text-center sm:col-span-2 lg:col-span-1">
              <i className="ri-user-smile-line text-[#ef4444] text-2xl sm:text-3xl mb-2 sm:mb-3"></i>
              <h4 className="text-white font-bold text-sm sm:text-base mb-1">El cliente esperando</h4>
              <p className="text-gray-400 text-xs sm:text-sm">= La interfaz esperando la respuesta</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Qué pasa si el hilo se bloquea */}
      <section className="py-12 sm:py-16 bg-[#161b22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#ef4444]/20 rounded-xl">
              <i className="ri-alarm-warning-line text-[#ef4444] text-xl sm:text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">11. ¿Qué Pasa si el Hilo se Bloquea?</h2>
              <p className="text-gray-400 text-xs sm:text-base">Aunque la respuesta esté lista, no se procesa si el Stack está ocupado</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <i className="ri-code-s-slash-line text-[#ef4444]"></i>
                <h3 className="text-sm sm:text-base font-bold text-white">Definición técnica</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Si el Call Stack permanece saturado con una operación larga, el Event Loop no puede transferir tareas pendientes desde la cola hacia el Stack, retrasando el procesamiento de eventos, temporizadores y respuestas de red.
              </p>
            </div>

            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#f59e0b]/30">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <i className="ri-chat-smile-2-line text-[#f59e0b]"></i>
                <h3 className="text-sm sm:text-base font-bold text-white">Definición sencilla</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Aunque la comida ya esté lista, si quien la entrega sigue atrapado haciendo otra cosa pesada, nadie recibirá su pedido todavía.
              </p>
            </div>

            <div className="bg-[#0d1117] rounded-xl p-4 sm:p-6 border border-[#ef4444]/30">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <i className="ri-restaurant-line text-[#ef4444]"></i>
                <h3 className="text-sm sm:text-base font-bold text-[#ef4444]">Ejemplo cotidiano</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                La cocina ya terminó el platillo y lo dejó en la barra, pero la cajera está ocupada contando monedas durante diez minutos. Aunque el pedido está listo, el cliente siente que "el sistema no responde".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Relación entre todos los conceptos */}
      <section className="py-12 sm:py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              <i className="ri-mind-map text-[#10b981] mr-2 sm:mr-3"></i>
              12. Relación entre Todos los Conceptos
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              Estos conceptos no están separados; forman una cadena completa.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-0">
              {/* Paso 1 */}
              <div className="flex items-stretch gap-3 sm:gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#f59e0b]/20 rounded-full border-2 border-[#f59e0b]/50 flex-shrink-0">
                    <i className="ri-stack-line text-[#f59e0b] text-lg sm:text-xl"></i>
                  </div>
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-[#f59e0b]/50 to-[#10b981]/50"></div>
                </div>
                <div className="pb-6 sm:pb-8">
                  <h3 className="text-sm sm:text-base font-bold text-[#f59e0b] mb-1">Call Stack</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Ejecuta lo que JavaScript hace ahora mismo.</p>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="flex items-stretch gap-3 sm:gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#10b981]/20 rounded-full border-2 border-[#10b981]/50 flex-shrink-0">
                    <i className="ri-global-line text-[#10b981] text-lg sm:text-xl"></i>
                  </div>
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-[#10b981]/50 to-[#3b82f6]/50"></div>
                </div>
                <div className="pb-6 sm:pb-8">
                  <h3 className="text-sm sm:text-base font-bold text-[#10b981] mb-1">Web APIs</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Si aparece una tarea lenta, se delega a las Web APIs.</p>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="flex items-stretch gap-3 sm:gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#3b82f6]/20 rounded-full border-2 border-[#3b82f6]/50 flex-shrink-0">
                    <i className="ri-list-check text-[#3b82f6] text-lg sm:text-xl"></i>
                  </div>
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-[#3b82f6]/50 to-[#a855f7]/50"></div>
                </div>
                <div className="pb-6 sm:pb-8">
                  <h3 className="text-sm sm:text-base font-bold text-[#3b82f6] mb-1">Callback Queue</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Cuando esa tarea termina, su resultado se forma en la Callback Queue.</p>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="flex items-stretch gap-3 sm:gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#a855f7]/20 rounded-full border-2 border-[#a855f7]/50 flex-shrink-0">
                    <i className="ri-loop-left-line text-[#a855f7] text-lg sm:text-xl"></i>
                  </div>
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-[#a855f7]/50 to-[#f59e0b]/50"></div>
                </div>
                <div className="pb-6 sm:pb-8">
                  <h3 className="text-sm sm:text-base font-bold text-[#a855f7] mb-1">Event Loop</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Vigila cuándo el Stack queda libre.</p>
                </div>
              </div>

              {/* Paso 5 */}
              <div className="flex items-stretch gap-3 sm:gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#f59e0b]/20 rounded-full border-2 border-[#f59e0b]/50 flex-shrink-0">
                    <i className="ri-arrow-up-circle-line text-[#f59e0b] text-lg sm:text-xl"></i>
                  </div>
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-[#f59e0b]/50 to-[#10b981]/50"></div>
                </div>
                <div className="pb-6 sm:pb-8">
                  <h3 className="text-sm sm:text-base font-bold text-[#f59e0b] mb-1">De vuelta al Stack</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Cuando puede, mueve la siguiente tarea al Stack.</p>
                </div>
              </div>

              {/* Conclusión */}
              <div className="flex items-start gap-3 sm:gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#10b981]/20 rounded-full border-2 border-[#10b981]/50 flex-shrink-0">
                    <i className="ri-checkbox-circle-line text-[#10b981] text-lg sm:text-xl"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#10b981] mb-1">Resultado</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Así JavaScript logra <span className="text-[#10b981] font-semibold">concurrencia</span> sin dejar de ser <span className="text-[#f59e0b] font-semibold">monohilo</span> en su hilo principal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
