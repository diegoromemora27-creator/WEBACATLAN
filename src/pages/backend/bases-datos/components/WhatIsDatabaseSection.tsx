export default function WhatIsDatabaseSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#313131] mb-3 sm:mb-4">
            ¿Qué es una Base de Datos?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#274e6d] max-w-3xl mx-auto px-2">
            Una <strong className="text-[#336791]">base de datos</strong> es una colección organizada de información que se almacena de forma estructurada para poder buscarla, insertarla, modificarla y eliminarla de manera eficiente.
          </p>
        </div>

        {/* Main concept card */}
        <div className="bg-white rounded p-6 sm:p-8 border border-[#dbe9f4] shadow-sm mb-8">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-[#336791]/10 rounded flex-shrink-0">
              <i className="ri-database-2-fill text-[#336791] text-3xl sm:text-4xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-[#313131] mb-2">¿Por qué la necesitas?</h3>
              <p className="text-sm sm:text-base text-[#313131] leading-relaxed mb-4">
                En desarrollo web, las bases de datos permiten que tu sitio deje de ser "estático" y pueda manejar funcionalidades dinámicas como:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: 'ri-user-line', text: 'Logins' },
                  { icon: 'ri-search-line', text: 'Búsquedas' },
                  { icon: 'ri-file-list-line', text: 'Formularios' },
                  { icon: 'ri-shopping-cart-line', text: 'Carritos de compra' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-[#dbe9f4] rounded p-2.5">
                    <i className={`${item.icon} text-[#336791] text-base`}></i>
                    <span className="text-xs sm:text-sm text-[#313131] font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Library metaphor */}
        <div className="bg-gradient-to-r from-[#336791]/5 to-[#ff9900]/5 rounded p-6 sm:p-8 border border-[#dbe9f4] mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-[#313131] mb-4 text-center">
            <i className="ri-lightbulb-line text-[#ff9900] mr-2"></i>
            Metáfora Visual: La Biblioteca Digital
          </h3>
          <p className="text-sm sm:text-base text-[#274e6d] text-center mb-6">
            Imagina la base de datos como una biblioteca digital organizada
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { 
                icon: 'ri-book-3-line', 
                title: 'Libros = Registros', 
                description: 'Cada libro es como un registro o fila en tu base de datos.',
                color: '#336791'
              },
              { 
                icon: 'ri-stack-line', 
                title: 'Anaqueles = Tablas', 
                description: 'Los estantes organizan libros por categoría, como las tablas organizan datos.',
                color: '#274e6d'
              },
              { 
                icon: 'ri-user-settings-line', 
                title: 'Bibliotecario = SGBD', 
                description: 'El bibliotecario administra y busca la información que necesitas.',
                color: '#ff9900'
              }
            ].map((card, index) => (
              <div key={index} className="bg-white rounded p-4 sm:p-5 border border-[#dbe9f4] text-center hover:shadow-md transition-shadow">
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded mx-auto mb-3"
                  style={{ backgroundColor: `${card.color}15` }}
                >
                  <i className={`${card.icon} text-2xl sm:text-3xl`} style={{ color: card.color }}></i>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#313131] mb-2">{card.title}</h4>
                <p className="text-xs sm:text-sm text-[#274e6d]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SGBD Section */}
        <div className="bg-white rounded p-6 sm:p-8 border border-[#dbe9f4] shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-[#313131] mb-4 text-center">
            Sistema de Gestión de Bases de Datos (SGBD)
          </h3>
          <p className="text-sm sm:text-base text-[#274e6d] text-center mb-6 max-w-3xl mx-auto">
            Un <strong className="text-[#336791]">SGBD</strong> (o DBMS en inglés) es el software que controla usuarios, permisos, consultas y el acceso concurrente desde el backend de la aplicación.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {[
              { name: 'PostgreSQL', color: '#336791', icon: 'ri-database-2-line' },
              { name: 'MySQL', color: '#00758F', icon: 'ri-database-2-line' },
              { name: 'SQL Server', color: '#CC2927', icon: 'ri-database-2-line' },
              { name: 'Oracle', color: '#F80000', icon: 'ri-database-2-line' },
              { name: 'MongoDB', color: '#47A248', icon: 'ri-braces-line' }
            ].map((db, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded border border-[#dbe9f4] hover:border-[#336791] transition-colors"
              >
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded"
                  style={{ backgroundColor: `${db.color}15` }}
                >
                  <i className={`${db.icon} text-lg sm:text-xl`} style={{ color: db.color }}></i>
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#313131]">{db.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
