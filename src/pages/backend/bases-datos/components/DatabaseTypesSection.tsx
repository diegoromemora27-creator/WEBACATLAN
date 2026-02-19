export default function DatabaseTypesSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#313131] mb-3 sm:mb-4">
            Tipos de Bases de Datos
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#274e6d] max-w-3xl mx-auto px-2">
            Existen diferentes formas de organizar los datos según las necesidades de tu aplicación
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {/* Relational */}
          <div className="bg-white rounded p-6 sm:p-8 border border-[#336791]/30 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#336791]/10 rounded">
                <i className="ri-table-line text-[#336791] text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#313131]">Bases de Datos Relacionales</h3>
                <span className="text-xs text-[#336791] font-medium">SQL</span>
              </div>
            </div>
            
            <p className="text-sm text-[#274e6d] mb-4">
              Los datos se organizan en <strong className="text-[#336791]">tablas</strong> con filas (registros) y columnas (campos). Usan SQL como lenguaje de consulta.
            </p>

            {/* Visual Table Example */}
            <div className="bg-[#dbe9f4] rounded p-4 mb-4 overflow-x-auto">
              <p className="text-xs font-bold text-[#274e6d] mb-2">Tabla "Usuarios"</p>
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#336791] text-white">
                    <th className="px-2 py-1.5 text-left rounded-tl">id</th>
                    <th className="px-2 py-1.5 text-left">nombre</th>
                    <th className="px-2 py-1.5 text-left">email</th>
                    <th className="px-2 py-1.5 text-left rounded-tr">password_hash</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-[#dbe9f4]">
                    <td className="px-2 py-1.5 font-mono text-[#ff9900]">1</td>
                    <td className="px-2 py-1.5">María</td>
                    <td className="px-2 py-1.5">maria@email.com</td>
                    <td className="px-2 py-1.5 font-mono text-[#274e6d]">$2b$10...</td>
                  </tr>
                  <tr className="border-b border-[#dbe9f4]">
                    <td className="px-2 py-1.5 font-mono text-[#ff9900]">2</td>
                    <td className="px-2 py-1.5">Carlos</td>
                    <td className="px-2 py-1.5">carlos@email.com</td>
                    <td className="px-2 py-1.5 font-mono text-[#274e6d]">$2b$10...</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1.5 font-mono text-[#ff9900]">3</td>
                    <td className="px-2 py-1.5">Ana</td>
                    <td className="px-2 py-1.5">ana@email.com</td>
                    <td className="px-2 py-1.5 font-mono text-[#274e6d]">$2b$10...</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap gap-2">
              {['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle', 'SQLite'].map((db, i) => (
                <span key={i} className="text-xs px-2.5 py-1 bg-[#336791]/10 text-[#336791] rounded font-medium">{db}</span>
              ))}
            </div>
          </div>

          {/* NoSQL */}
          <div className="bg-white rounded p-6 sm:p-8 border border-[#ff9900]/30 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#ff9900]/10 rounded">
                <i className="ri-braces-line text-[#ff9900] text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#313131]">Bases de Datos NoSQL</h3>
                <span className="text-xs text-[#ff9900] font-medium">No Relacional</span>
              </div>
            </div>
            
            <p className="text-sm text-[#274e6d] mb-4">
              Los datos pueden organizarse como <strong className="text-[#ff9900]">documentos (JSON)</strong>, pares clave-valor, grafos o columnas anchas.
            </p>

            {/* Visual Document Example */}
            <div className="bg-[#313131] rounded p-4 mb-4 overflow-x-auto">
              <p className="text-xs font-bold text-gray-400 mb-2">Documento "Usuario"</p>
              <pre className="text-xs sm:text-sm text-gray-300 font-mono">
{`{
  "_id": "507f1f77bcf86cd799439011",
  "nombre": "María",
  "email": "maria@email.com",
  "perfil": {
    "avatar": "avatar.jpg",
    "bio": "Desarrolladora web"
  },
  "intereses": ["React", "Node.js"]
}`}
              </pre>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { type: 'Documentos', example: 'MongoDB, CouchDB', icon: 'ri-file-text-line' },
                { type: 'Clave-Valor', example: 'Redis, DynamoDB', icon: 'ri-key-line' },
                { type: 'Grafos', example: 'Neo4j, ArangoDB', icon: 'ri-mind-map' },
                { type: 'Columnas', example: 'Cassandra, HBase', icon: 'ri-layout-column-line' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-[#ff9900]/5 rounded">
                  <i className={`${item.icon} text-[#ff9900]`}></i>
                  <div>
                    <p className="font-medium text-[#313131]">{item.type}</p>
                    <p className="text-[10px] text-[#274e6d]">{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SQL Code Example */}
        <div className="bg-white rounded p-6 sm:p-8 border border-[#dbe9f4] shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold text-[#313131] mb-4 text-center">
            <i className="ri-code-s-slash-line text-[#336791] mr-2"></i>
            Conexión Visual ↔ Código SQL
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Visual representation */}
            <div className="bg-[#dbe9f4] rounded p-4">
              <p className="text-xs font-bold text-[#274e6d] mb-3">Vista Gráfica</p>
              <div className="space-y-2">
                <div className="bg-white rounded p-3 border border-[#336791]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="ri-user-line text-[#336791]"></i>
                    <span className="font-bold text-sm text-[#313131]">Usuario #1</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div><span className="text-[#274e6d]">nombre:</span> <span className="text-[#313131]">María</span></div>
                    <div><span className="text-[#274e6d]">email:</span> <span className="text-[#313131]">maria@...</span></div>
                  </div>
                </div>
                <div className="bg-white rounded p-3 border border-[#336791]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="ri-user-line text-[#336791]"></i>
                    <span className="font-bold text-sm text-[#313131]">Usuario #2</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div><span className="text-[#274e6d]">nombre:</span> <span className="text-[#313131]">Carlos</span></div>
                    <div><span className="text-[#274e6d]">email:</span> <span className="text-[#313131]">carlos@...</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* SQL Code */}
            <div className="bg-[#313131] rounded p-4 overflow-x-auto">
              <p className="text-xs font-bold text-gray-400 mb-3">Consulta SQL</p>
              <pre className="text-xs sm:text-sm font-mono">
                <code>
                  <span className="text-[#ff9900]">SELECT</span> <span className="text-[#dbe9f4]">id, nombre, email</span>{'\n'}
                  <span className="text-[#ff9900]">FROM</span> <span className="text-[#336791]">usuarios</span>{'\n'}
                  <span className="text-[#ff9900]">WHERE</span> <span className="text-[#dbe9f4]">activo</span> <span className="text-gray-400">=</span> <span className="text-green-400">true</span>{'\n'}
                  <span className="text-[#ff9900]">ORDER BY</span> <span className="text-[#dbe9f4]">nombre</span> <span className="text-[#ff9900]">ASC</span><span className="text-gray-400">;</span>
                </code>
              </pre>
              <div className="mt-4 pt-3 border-t border-gray-700">
                <p className="text-[10px] text-gray-500 mb-1">Resultado:</p>
                <pre className="text-xs text-green-400 font-mono">
{`| id | nombre | email           |
|----|--------|-----------------|
| 1  | María  | maria@email.com |
| 2  | Carlos | carlos@email.com|`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
