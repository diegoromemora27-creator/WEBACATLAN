export default function PillaresSection() {
  const pilares = [
    {
      id: 1,
      title: 'Abstracción',
      icon: 'ri-shield-check-line',
      color: '#007BFF',
      description: 'La abstracción consiste en ocultar la complejidad interna y mostrar solo las piezas esenciales. En NestJS, esto se ve claramente en los Providers y Servicios.',
      practice: 'Tú defines una clase UserService que tiene un método findAll(). Al controlador no le importa si los datos vienen de una base de datos SQL o de una API externa; solo le interesa que el método existe y devuelve usuarios.',
    },
    {
      id: 2,
      title: 'Encapsulamiento',
      icon: 'ri-lock-line',
      color: '#00BCD4',
      description: 'Es la protección del estado interno de un objeto. Usamos modificadores de acceso (private, protected, public) para controlar quién puede ver o modificar las propiedades.',
      practice: 'Propiedades privadas: Evitan que otros componentes manipulen directamente los datos de un servicio. Getters/Setters: Puedes usarlos en tus entidades de TypeORM para transformar datos antes de guardarlos o después de leerlos.',
      nestjs: 'En NestJS/TypeORM',
    },
    {
      id: 3,
      title: 'Herencia',
      icon: 'ri-git-branch-line',
      color: '#28A745',
      description: 'Permite que una clase (hija) adquiera propiedades y métodos de otra (padre). Esto es vital para evitar repetir código.',
      practice: 'Es común usar una "Clase Base" para tus entidades. Ejemplo: Una clase BaseEntity con los campos id, createdAt y updatedAt. Todas tus demás entidades (User, Product, etc.) extienden de ella.',
      nestjs: 'En TypeORM',
    },
    {
      id: 4,
      title: 'Polimorfismo',
      icon: 'ri-shape-line',
      color: '#007BFF',
      description: 'Es la capacidad de que diferentes clases respondan al mismo mensaje (método) de maneras distintas.',
      practice: 'Imagina una interfaz Logger. Puedes tener un FileLogger y un DatabaseLogger. En tu código, inyectas el Logger genérico, pero el comportamiento real dependerá de qué versión decidas usar en ese momento.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-3 sm:mb-4">
            Los 4 Pilares de la POO
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#666666] max-w-3xl mx-auto">
            Conceptos fundamentales aplicados en el desarrollo con NestJS y TypeORM
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {pilares.map((pilar) => (
            <div
              key={pilar.id}
              className="bg-[#F8F8F8] rounded-xl p-4 sm:p-6 md:p-8 border-2 border-transparent hover:border-[#007BFF] transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${pilar.color}20` }}
                >
                  <i className={`${pilar.icon} text-2xl sm:text-3xl md:text-4xl`} style={{ color: pilar.color }}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#333333] mb-2">
                    {pilar.id}. {pilar.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-[#666666] mb-4 leading-relaxed">
                {pilar.description}
              </p>

              <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4" style={{ borderColor: pilar.color }}>
                {pilar.nestjs && (
                  <div className="text-[10px] sm:text-xs font-semibold mb-2" style={{ color: pilar.color }}>
                    {pilar.nestjs}:
                  </div>
                )}
                <div className="text-[10px] sm:text-xs font-semibold text-[#333333] mb-2">
                  {pilar.nestjs ? '' : 'En la práctica:'}
                </div>
                <p className="text-[11px] sm:text-xs md:text-sm text-[#666666] leading-relaxed">
                  {pilar.practice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
