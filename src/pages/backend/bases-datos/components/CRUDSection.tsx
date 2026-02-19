import { useState } from 'react';

export default function CRUDSection() {
  const [activeOperation, setActiveOperation] = useState('create');

  const operations = [
    {
      id: 'create',
      name: 'Create',
      title: 'CREATE (INSERT)',
      subtitle: 'Crear datos',
      icon: 'ri-add-circle-line',
      color: '#10b981',
      httpMethod: 'POST',
      endpoint: '/api/usuarios',
      description: 'Registrar un nuevo usuario en el sistema',
      sql: `INSERT INTO usuarios (nombre, email, password_hash)
VALUES ('Ana Pérez', 'ana@example.com', 'hash_seguro_123');`,
      beforeTable: {
        headers: ['id', 'nombre', 'email'],
        rows: [
          ['1', 'Carlos', 'carlos@example.com'],
          ['2', 'María', 'maria@example.com']
        ]
      },
      afterTable: {
        headers: ['id', 'nombre', 'email'],
        rows: [
          ['1', 'Carlos', 'carlos@example.com'],
          ['2', 'María', 'maria@example.com'],
          ['3', 'Ana Pérez', 'ana@example.com']
        ],
        highlightRow: 2
      },
      formExample: {
        title: 'Formulario de Registro',
        fields: ['Nombre: Ana Pérez', 'Email: ana@example.com', 'Contraseña: ********']
      }
    },
    {
      id: 'read',
      name: 'Read',
      title: 'READ (SELECT)',
      subtitle: 'Leer/consultar datos',
      icon: 'ri-search-line',
      color: '#336791',
      httpMethod: 'GET',
      endpoint: '/api/productos',
      description: 'Listar todos los productos activos de una tienda',
      sql: `SELECT id, nombre, precio
FROM productos
WHERE activo = TRUE
ORDER BY nombre;`,
      filters: ['Categoría: Electrónica', 'Precio: < $500', 'Stock: Disponible'],
      resultJson: `[
  { "id": 1, "nombre": "Laptop HP", "precio": 450 },
  { "id": 2, "nombre": "Monitor Dell", "precio": 299 },
  { "id": 3, "nombre": "Teclado Logitech", "precio": 89 }
]`
    },
    {
      id: 'update',
      name: 'Update',
      title: 'UPDATE',
      subtitle: 'Modificar datos',
      icon: 'ri-edit-line',
      color: '#ff9900',
      httpMethod: 'PUT',
      endpoint: '/api/usuarios/42',
      description: 'Actualizar el email de un usuario existente',
      sql: `UPDATE usuarios
SET email = 'nuevo_email@example.com'
WHERE id = 42;`,
      beforeTable: {
        headers: ['id', 'nombre', 'email'],
        rows: [
          ['42', 'Juan López', 'juan_viejo@example.com']
        ]
      },
      afterTable: {
        headers: ['id', 'nombre', 'email'],
        rows: [
          ['42', 'Juan López', 'nuevo_email@example.com']
        ],
        highlightRow: 0,
        highlightCol: 2
      },
      formExample: {
        title: 'Editar Perfil',
        fields: ['Nombre: Juan López', 'Email: nuevo_email@example.com']
      }
    },
    {
      id: 'delete',
      name: 'Delete',
      title: 'DELETE',
      subtitle: 'Eliminar datos',
      icon: 'ri-delete-bin-line',
      color: '#ef4444',
      httpMethod: 'DELETE',
      endpoint: '/api/pedidos/1001',
      description: 'Eliminar o cancelar un pedido',
      sqlLogical: `-- Borrado lógico (soft delete)
UPDATE pedidos
SET eliminado = TRUE
WHERE id = 1001;`,
      sqlPhysical: `-- Borrado físico (permanente)
DELETE FROM pedidos
WHERE id = 1001;`,
      beforeTable: {
        headers: ['id', 'producto', 'estado'],
        rows: [
          ['1000', 'Laptop HP', 'Entregado'],
          ['1001', 'Monitor Dell', 'Pendiente'],
          ['1002', 'Teclado', 'En camino']
        ]
      },
      afterTable: {
        headers: ['id', 'producto', 'estado'],
        rows: [
          ['1000', 'Laptop HP', 'Entregado'],
          ['1002', 'Teclado', 'En camino']
        ],
        deletedRow: { id: '1001', producto: 'Monitor Dell', estado: 'Cancelado' }
      }
    }
  ];

  const activeOp = operations.find(op => op.id === activeOperation)!;

  return (
    <section className="py-12 sm:py-16 bg-[#dbe9f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#313131] mb-3 sm:mb-4">
            Operaciones CRUD
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#274e6d] max-w-3xl mx-auto px-2">
            <strong className="text-[#336791]">CRUD</strong> = Create, Read, Update, Delete - Las cuatro operaciones básicas sobre datos en cualquier aplicación web dinámica
          </p>
        </div>

        {/* Operation Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8">
          {operations.map((op) => (
            <button
              key={op.id}
              onClick={() => setActiveOperation(op.id)}
              className={`flex flex-col items-center gap-1 px-3 sm:px-5 py-2 sm:py-3 rounded transition-all duration-300 ${
                activeOperation === op.id
                  ? 'shadow-md scale-105'
                  : 'bg-white border border-[#dbe9f4] hover:shadow-sm'
              }`}
              style={{
                backgroundColor: activeOperation === op.id ? op.color : undefined,
                color: activeOperation === op.id ? 'white' : '#313131'
              }}
            >
              <i className={`${op.icon} text-xl sm:text-2xl`}></i>
              <span className="text-xs sm:text-sm font-bold">{op.name}</span>
            </button>
          ))}
        </div>

        {/* Active Operation Content */}
        <div className="bg-white rounded p-6 sm:p-8 border border-[#336791]/20 shadow-sm">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 pb-4 border-b border-[#dbe9f4]">
            <div 
              className="w-12 h-12 flex items-center justify-center rounded"
              style={{ backgroundColor: `${activeOp.color}15` }}
            >
              <i className={`${activeOp.icon} text-2xl`} style={{ color: activeOp.color }}></i>
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-[#313131]">{activeOp.title}</h3>
              <p className="text-sm text-[#274e6d]">{activeOp.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <span 
                className="px-2 py-1 rounded text-xs font-bold text-white"
                style={{ backgroundColor: activeOp.color }}
              >
                {activeOp.httpMethod}
              </span>
              <code className="text-xs bg-[#313131] text-[#dbe9f4] px-2 py-1 rounded font-mono">
                {activeOp.endpoint}
              </code>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Column - Visual */}
            <div>
              {/* Form Example for Create/Update */}
              {activeOp.formExample && (
                <div className="mb-4">
                  <p className="text-xs font-bold text-[#274e6d] mb-2 flex items-center gap-1">
                    <i className="ri-layout-4-line"></i>
                    {activeOp.formExample.title}
                  </p>
                  <div className="bg-[#f8f9fa] rounded p-4 border border-[#dbe9f4]">
                    {activeOp.formExample.fields.map((field, i) => (
                      <div key={i} className="flex items-center gap-2 mb-2 last:mb-0">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: activeOp.color }}></div>
                        <span className="text-sm text-[#313131]">{field}</span>
                      </div>
                    ))}
                    <button 
                      className="mt-3 w-full py-2 rounded text-white text-sm font-medium transition-opacity hover:opacity-90"
                      style={{ backgroundColor: activeOp.color }}
                    >
                      {activeOp.id === 'create' ? 'Registrar' : 'Guardar Cambios'}
                    </button>
                  </div>
                </div>
              )}

              {/* Filters for Read */}
              {activeOp.filters && (
                <div className="mb-4">
                  <p className="text-xs font-bold text-[#274e6d] mb-2 flex items-center gap-1">
                    <i className="ri-filter-line"></i>
                    Filtros de búsqueda
                  </p>
                  <div className="bg-[#f8f9fa] rounded p-4 border border-[#dbe9f4] flex flex-wrap gap-2">
                    {activeOp.filters.map((filter, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-[#336791]/10 text-[#336791] rounded">
                        {filter}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Before/After Tables */}
              {activeOp.beforeTable && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-bold text-[#274e6d] mb-2 flex items-center gap-1">
                      <i className="ri-time-line"></i>
                      Antes
                    </p>
                    <div className="bg-[#f8f9fa] rounded overflow-hidden border border-[#dbe9f4]">
                      <table className="w-full text-[10px] sm:text-xs">
                        <thead>
                          <tr className="bg-[#274e6d] text-white">
                            {activeOp.beforeTable.headers.map((h, i) => (
                              <th key={i} className="px-2 py-1.5 text-left">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {activeOp.beforeTable.rows.map((row, ri) => (
                            <tr key={ri} className="border-b border-[#dbe9f4] last:border-0">
                              {row.map((cell, ci) => (
                                <td key={ci} className="px-2 py-1.5 text-[#313131]">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#274e6d] mb-2 flex items-center gap-1">
                      <i className="ri-check-line text-green-500"></i>
                      Después
                    </p>
                    <div className="bg-[#f8f9fa] rounded overflow-hidden border border-[#dbe9f4]">
                      <table className="w-full text-[10px] sm:text-xs">
                        <thead>
                          <tr className="bg-[#336791] text-white">
                            {activeOp.afterTable!.headers.map((h, i) => (
                              <th key={i} className="px-2 py-1.5 text-left">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {activeOp.afterTable!.rows.map((row, ri) => (
                            <tr 
                              key={ri} 
                              className={`border-b border-[#dbe9f4] last:border-0 ${
                                ri === activeOp.afterTable!.highlightRow ? 'bg-green-100' : ''
                              }`}
                            >
                              {row.map((cell, ci) => (
                                <td 
                                  key={ci} 
                                  className={`px-2 py-1.5 ${
                                    ri === activeOp.afterTable!.highlightRow && ci === activeOp.afterTable!.highlightCol
                                      ? 'text-green-600 font-bold'
                                      : 'text-[#313131]'
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                          {activeOp.afterTable!.deletedRow && (
                            <tr className="bg-red-50 line-through opacity-50">
                              <td className="px-2 py-1.5 text-red-400">{activeOp.afterTable!.deletedRow.id}</td>
                              <td className="px-2 py-1.5 text-red-400">{activeOp.afterTable!.deletedRow.producto}</td>
                              <td className="px-2 py-1.5 text-red-400">{activeOp.afterTable!.deletedRow.estado}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* JSON Result for Read */}
              {activeOp.resultJson && (
                <div className="mt-4">
                  <p className="text-xs font-bold text-[#274e6d] mb-2 flex items-center gap-1">
                    <i className="ri-code-s-slash-line"></i>
                    Respuesta JSON
                  </p>
                  <div className="bg-[#313131] rounded p-3 overflow-x-auto">
                    <pre className="text-xs text-green-400 font-mono">{activeOp.resultJson}</pre>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - SQL */}
            <div>
              <p className="text-xs font-bold text-[#274e6d] mb-2 flex items-center gap-1">
                <i className="ri-database-2-line"></i>
                Consulta SQL
              </p>
              <div className="bg-[#313131] rounded overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#274e6d]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-white/70 font-mono">SQL Query</span>
                </div>
                <div className="p-4">
                  {activeOp.sql && (
                    <pre className="text-xs sm:text-sm font-mono text-[#dbe9f4] whitespace-pre-wrap">{activeOp.sql}</pre>
                  )}
                  {activeOp.sqlLogical && (
                    <>
                      <pre className="text-xs sm:text-sm font-mono text-[#dbe9f4] whitespace-pre-wrap mb-4">{activeOp.sqlLogical}</pre>
                      <div className="border-t border-gray-600 pt-4">
                        <pre className="text-xs sm:text-sm font-mono text-[#dbe9f4] whitespace-pre-wrap">{activeOp.sqlPhysical}</pre>
                      </div>
                    </>
                  )}
                </div>
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="flex items-center gap-1 text-green-400">
                      <i className="ri-checkbox-circle-fill"></i>
                      Query ejecutada exitosamente
                    </span>
                  </div>
                </div>
              </div>

              {/* Delete specific UI */}
              {activeOp.id === 'delete' && (
                <div className="mt-4 bg-red-50 rounded p-4 border border-red-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded flex-shrink-0">
                      <i className="ri-delete-bin-line text-red-500 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-700 text-sm mb-1">¿Eliminar pedido #1001?</h4>
                      <p className="text-xs text-red-600 mb-3">Esta acción cancelará el pedido "Monitor Dell"</p>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors">
                          Confirmar
                        </button>
                        <button className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded hover:bg-gray-300 transition-colors">
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {operations.map((op) => (
            <div 
              key={op.id}
              className="bg-white rounded p-4 border-l-4 text-center"
              style={{ borderColor: op.color }}
            >
              <div 
                className="w-10 h-10 flex items-center justify-center rounded mx-auto mb-2"
                style={{ backgroundColor: `${op.color}15` }}
              >
                <i className={`${op.icon} text-xl`} style={{ color: op.color }}></i>
              </div>
              <p className="font-bold text-sm text-[#313131]">{op.name}</p>
              <p className="text-[10px] text-[#274e6d]">{op.httpMethod} {op.endpoint.split('/').pop()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
