export default function FacebookSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F0F2F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1877F2]/10 px-4 py-2 rounded-full mb-4">
            <i className="ri-facebook-fill text-[#1877F2] text-xl"></i>
            <span className="text-[#1C1E21] text-sm font-semibold">Caso de Estudio: Facebook</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1E21] mb-4">
            DRY (Don't Repeat Yourself)
          </h2>
          <p className="text-lg text-[#65676B] max-w-3xl mx-auto">
            Imagina la cantidad de veces que aparece tu foto de perfil en Facebook: en tus posts, en los comentarios, en la barra de navegación y en los ajustes.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Explanation */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="w-14 h-14 flex items-center justify-center bg-[#1877F2]/10 rounded-full mb-6">
              <i className="ri-code-s-slash-line text-[#1877F2] text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-[#1C1E21] mb-4">
              Componentes Compartidos
            </h3>
            <p className="text-[#65676B] leading-relaxed mb-6">
              En lugar de programar la lógica de la foto de perfil 50 veces, crean un componente llamado <code className="bg-[#F0F2F5] px-2 py-1 rounded text-[#1877F2] font-mono text-sm">&lt;Avatar /&gt;</code>.
            </p>
            <p className="text-[#65676B] leading-relaxed">
              Si mañana Facebook decide que las fotos sean redondas en lugar de cuadradas, solo cambian ese componente y se actualiza en toda la red social.
            </p>
          </div>

          {/* Right: Visual Example */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h4 className="text-lg font-bold text-[#1C1E21] mb-6">Ejemplo Visual</h4>
            <div className="space-y-4">
              {/* Post Example */}
              <div className="flex items-start gap-3 p-4 bg-[#F0F2F5] rounded-lg">
                <div className="w-10 h-10 flex items-center justify-center bg-[#1877F2] rounded-full text-white font-bold flex-shrink-0">
                  U
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-[#1C1E21] text-sm">Usuario en Post</div>
                  <div className="text-xs text-[#65676B]">Componente: &lt;Avatar /&gt;</div>
                </div>
              </div>

              {/* Comment Example */}
              <div className="flex items-start gap-3 p-4 bg-[#F0F2F5] rounded-lg">
                <div className="w-8 h-8 flex items-center justify-center bg-[#1877F2] rounded-full text-white font-bold text-sm flex-shrink-0">
                  U
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-[#1C1E21] text-sm">Usuario en Comentario</div>
                  <div className="text-xs text-[#65676B]">Componente: &lt;Avatar /&gt;</div>
                </div>
              </div>

              {/* Navbar Example */}
              <div className="flex items-start gap-3 p-4 bg-[#F0F2F5] rounded-lg">
                <div className="w-9 h-9 flex items-center justify-center bg-[#1877F2] rounded-full text-white font-bold flex-shrink-0">
                  U
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-[#1C1E21] text-sm">Usuario en Navegación</div>
                  <div className="text-xs text-[#65676B]">Componente: &lt;Avatar /&gt;</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UI Description */}
        <div className="bg-gradient-to-r from-[#1877F2] to-[#0C63D4] rounded-2xl p-8 sm:p-10 text-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg flex-shrink-0">
              <i className="ri-layout-grid-line text-white text-xl"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Descripción de la UI</h4>
              <p className="text-white/95 leading-relaxed">
                Diseño estructurado y funcional. Se basa en una cuadrícula clara de tres columnas, con un flujo de noticias infinito en el centro. Utiliza una paleta de azules y grises sutiles para organizar una gran cantidad de interacciones sociales sin saturar visualmente al usuario.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
