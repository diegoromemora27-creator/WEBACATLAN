export default function SecuritySection() {
  const securityFlow = [
    {
      step: '1',
      title: 'Login',
      description: 'El cliente envía credenciales (email + password)',
      icon: 'ri-login-box-line',
      color: 'text-[#3b82f6]',
      bgColor: 'bg-[#3b82f6]/10',
      borderColor: 'border-[#3b82f6]/30'
    },
    {
      step: '2',
      title: 'Validación',
      description: 'El servidor verifica las credenciales en la base de datos',
      icon: 'ri-shield-check-line',
      color: 'text-[#10b981]',
      bgColor: 'bg-[#10b981]/10',
      borderColor: 'border-[#10b981]/30'
    },
    {
      step: '3',
      title: 'Token JWT',
      description: 'Si es válido, el servidor genera y devuelve un token JWT',
      icon: 'ri-key-2-line',
      color: 'text-[#f59e0b]',
      bgColor: 'bg-[#f59e0b]/10',
      borderColor: 'border-[#f59e0b]/30'
    },
    {
      step: '4',
      title: 'Almacenamiento',
      description: 'El cliente guarda el token (localStorage, cookie)',
      icon: 'ri-save-line',
      color: 'text-[#8b5cf6]',
      bgColor: 'bg-[#8b5cf6]/10',
      borderColor: 'border-[#8b5cf6]/30'
    },
    {
      step: '5',
      title: 'Peticiones',
      description: 'El cliente envía el token en cada petición posterior',
      icon: 'ri-send-plane-line',
      color: 'text-[#14b8a6]',
      bgColor: 'bg-[#14b8a6]/10',
      borderColor: 'border-[#14b8a6]/30'
    },
    {
      step: '6',
      title: 'Middleware',
      description: 'El middleware verifica el token antes de procesar la petición',
      icon: 'ri-shield-line',
      color: 'text-[#10b981]',
      bgColor: 'bg-[#10b981]/10',
      borderColor: 'border-[#10b981]/30'
    }
  ];

  const jwtExample = `// Estructura de un JWT
{
  "header": {
    "alg": "HS256",
    "typ": "JWT"
  },
  "payload": {
    "userId": "123",
    "email": "user@example.com",
    "role": "admin",
    "iat": 1516239022,
    "exp": 1516242622
  },
  "signature": "..."
}`;

  const middlewareExample = `// Middleware de Autenticación
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      throw new UnauthorizedException('Token no proporcionado');
    }
    
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}`;

  const apiRequestExample = `const createProduct = async () => {
  const url = 'https://api.tu-tienda.com/v1/products';
  
  // Datos que enviamos (Deberían coincidir con el DTO en el backend)
  const productData = {
    name: "Teclado Mecánico RGB",
    price: 85.50,
    category: "Hardware"
  };

  try {
    const response = await fetch(url, {
      method: 'POST', // 1. Definimos el Verbo HTTP
      headers: {
        // 2. Definimos los Headers
        'Content-Type': 'application/json',
        'Authorization': 'Bearer TU_TOKEN_JWT_AQUI'
      },
      body: JSON.stringify(productData) // 3. El cuerpo de la petición
    });

    // 4. Manejo de Status Codes
    if (response.status === 201) {
      const data = await response.json();
      console.log('✅ Recurso creado con éxito:', data);
    } else if (response.status === 400) {
      console.error('❌ Error de validación (El DTO falló)');
    } else {
      console.error('⚠️ Algo salió mal:', response.statusText);
    }

  } catch (error) {
    console.error('🔥 Error de red o del servidor (5xx):', error);
  }
};

createProduct();`;

  const concepts = [
    {
      title: 'Autenticación (AuthN)',
      question: '¿Quién eres?',
      description: 'Se suele resolver con JWT (JSON Web Tokens). El cliente envía sus credenciales, el servidor responde con un token.',
      icon: 'ri-user-line',
      color: 'text-[#3b82f6]',
      bgColor: 'bg-[#3b82f6]/10',
      borderColor: 'border-[#3b82f6]/30'
    },
    {
      title: 'Autorización (AuthZ)',
      question: '¿Qué puedes hacer?',
      description: 'Una vez identificado, el servidor revisa tus Roles (ej. ¿Eres Admin o Usuario?).',
      icon: 'ri-shield-user-line',
      color: 'text-[#10b981]',
      bgColor: 'bg-[#10b981]/10',
      borderColor: 'border-[#10b981]/30'
    },
    {
      title: 'Middleware',
      question: '¿Cómo se protege?',
      description: 'Es una capa intermedia. Si una petición no trae un token válido, el Middleware la rebota con un 401 Unauthorized.',
      icon: 'ri-shield-check-line',
      color: 'text-[#f59e0b]',
      bgColor: 'bg-[#f59e0b]/10',
      borderColor: 'border-[#f59e0b]/30'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Seguridad y Flujo
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            No basta con recibir datos; hay que saber <span className="text-[#3b82f6] font-semibold">quién los envía</span>. El flujo de seguridad estándar en APIs modernas utiliza <span className="text-[#10b981] font-semibold">Middlewares y Guards</span>.
          </p>
        </div>

        {/* Concepts */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-lg">
              <i className="ri-shield-star-line text-white text-sm sm:text-base"></i>
            </span>
            El "Guardián" de la API
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {concepts.map((concept) => (
              <div
                key={concept.title}
                className={`bg-[#161b22] border ${concept.borderColor} rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300`}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center ${concept.bgColor} rounded-xl mb-3 sm:mb-4`}>
                  <i className={`${concept.icon} ${concept.color} text-2xl sm:text-3xl`}></i>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{concept.title}</h4>
                <p className={`${concept.color} font-semibold text-xs sm:text-sm mb-2 sm:mb-3`}>{concept.question}</p>
                <p className="text-gray-400 text-xs sm:text-sm">{concept.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Flow */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#f59e0b] to-[#ef4444] rounded-lg">
              <i className="ri-flow-chart text-white text-sm sm:text-base"></i>
            </span>
            Flujo de Autenticación con JWT
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {securityFlow.map((flow, index) => (
              <div key={index} className="relative">
                <div className={`bg-[#161b22] border ${flow.borderColor} rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300`}>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${flow.bgColor} rounded-full mb-3 sm:mb-4`}>
                    <span className={`text-xl sm:text-2xl font-bold ${flow.color}`}>{flow.step}</span>
                  </div>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${flow.bgColor} rounded-lg mb-3 sm:mb-4`}>
                    <i className={`${flow.icon} ${flow.color} text-xl sm:text-2xl`}></i>
                  </div>
                  <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2">{flow.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">{flow.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* JWT Example */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-lg">
              <i className="ri-key-2-line text-white text-sm sm:text-base"></i>
            </span>
            Estructura de un JWT
          </h3>
          
          <div className="bg-[#161b22] border border-gray-700 rounded-xl overflow-hidden">
            <div className="bg-[#0d1117] px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-700 flex items-center gap-2">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ef4444]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f59e0b]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10b981]"></div>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm ml-2 sm:ml-4 font-mono">jwt-structure.json</span>
            </div>
            <div className="p-4 sm:p-6 overflow-x-auto">
              <pre className="text-xs sm:text-sm font-mono text-gray-300">
                <code>{jwtExample}</code>
              </pre>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded-xl p-4 sm:p-6">
            <div className="flex items-start gap-2 sm:gap-3">
              <i className="ri-information-line text-[#3b82f6] text-xl sm:text-2xl mt-0.5 sm:mt-1 flex-shrink-0"></i>
              <div className="min-w-0">
                <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2">¿Cómo se envía el token?</h4>
                <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">
                  El cliente lo guarda y lo envía en cada petición posterior en el header:
                </p>
                <div className="overflow-x-auto">
                  <code className="text-[#3b82f6] font-mono text-xs sm:text-sm bg-[#0d1117] px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg block whitespace-nowrap">
                    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middleware Example */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#10b981] to-[#14b8a6] rounded-lg">
              <i className="ri-code-box-line text-white text-sm sm:text-base"></i>
            </span>
            Ejemplo de Middleware de Autenticación
          </h3>
          
          <div className="bg-[#161b22] border border-gray-700 rounded-xl overflow-hidden">
            <div className="bg-[#0d1117] px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-700 flex items-center gap-2">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ef4444]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f59e0b]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10b981]"></div>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm ml-2 sm:ml-4 font-mono">auth.middleware.ts</span>
            </div>
            <div className="p-4 sm:p-6 overflow-x-auto">
              <pre className="text-xs sm:text-sm font-mono text-gray-300">
                <code>{middlewareExample}</code>
              </pre>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 bg-[#10b981]/10 border border-[#10b981]/30 rounded-xl p-4 sm:p-6">
            <div className="flex items-start gap-2 sm:gap-3">
              <i className="ri-shield-check-line text-[#10b981] text-xl sm:text-2xl mt-0.5 sm:mt-1 flex-shrink-0"></i>
              <div>
                <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2">¿Qué hace el Middleware?</h4>
                <ul className="text-gray-400 text-xs sm:text-sm space-y-1.5 sm:space-y-2">
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-[#10b981] mt-0.5 flex-shrink-0"></i>
                    <span>Extrae el token del header <code className="text-[#10b981] font-mono text-xs">Authorization</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-[#10b981] mt-0.5 flex-shrink-0"></i>
                    <span>Verifica que el token sea válido y no haya expirado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-[#10b981] mt-0.5 flex-shrink-0"></i>
                    <span>Si es válido, adjunta la información del usuario a la petición</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-[#ef4444] mt-0.5 flex-shrink-0"></i>
                    <span>Si no es válido, lanza un error <code className="text-[#ef4444] font-mono text-xs">401 Unauthorized</code></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* API Request Example */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#10b981] to-[#14b8a6] rounded-lg">
              <i className="ri-terminal-box-line text-white text-sm sm:text-base"></i>
            </span>
            <span className="text-base sm:text-2xl">💻 Ejemplo de Petición API (JavaScript)</span>
          </h3>
          <p className="text-gray-400 mb-6 sm:mb-8 text-xs sm:text-base">
            Para explicar cómo interactúan todos los conceptos (Métodos, Headers, DTOs y REST), el mejor ejemplo es usar <code className="text-[#3b82f6] font-mono bg-[#3b82f6]/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs">fetch</code>, que es el estándar nativo de JavaScript para hacer peticiones HTTP.
          </p>

          {/* Code Example */}
          <div className="bg-[#161b22] border border-gray-700 rounded-xl overflow-hidden mb-6 sm:mb-8">
            <div className="bg-[#0d1117] px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-700 flex items-center gap-2">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ef4444]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f59e0b]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10b981]"></div>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm ml-2 sm:ml-4 font-mono">createProduct.js</span>
            </div>
            <div className="p-4 sm:p-6 overflow-x-auto">
              <pre className="text-xs sm:text-sm font-mono text-gray-300">
                <code>{apiRequestExample}</code>
              </pre>
            </div>
          </div>

          {/* Explanation Cards */}
          <div className="mb-4 sm:mb-6">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <i className="ri-tools-line text-[#10b981]"></i>
              <span className="text-sm sm:text-xl">🛠️ ¿Cómo funciona esta pieza de código?</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* La URL */}
              <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4 sm:p-5 hover:border-[#10b981]/50 transition-all duration-300">
                <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#10b981]/10 rounded-lg flex-shrink-0">
                    <i className="ri-link text-[#10b981] text-sm sm:text-base"></i>
                  </span>
                  <div className="min-w-0">
                    <h5 className="text-white font-bold text-sm sm:text-base mb-0.5 sm:mb-1">La URL (RESTful)</h5>
                    <code className="text-[#10b981] text-xs font-mono">/v1/products</code>
                  </div>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Es un sustantivo (Nouns, no verbs) y está versionado. No dice <code className="text-[#ef4444] font-mono text-xs">/create-product</code>, porque el método POST ya indica que estamos creando.
                </p>
              </div>

              {/* El Método */}
              <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4 sm:p-5 hover:border-[#3b82f6]/50 transition-all duration-300">
                <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#3b82f6]/10 rounded-lg flex-shrink-0">
                    <i className="ri-send-plane-line text-[#3b82f6] text-sm sm:text-base"></i>
                  </span>
                  <div className="min-w-0">
                    <h5 className="text-white font-bold text-sm sm:text-base mb-0.5 sm:mb-1">El Método (POST)</h5>
                    <code className="text-[#3b82f6] text-xs font-mono">method: 'POST'</code>
                  </div>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Le dice al servidor: "No solo quiero leer, quiero que guardes esta información nueva".
                </p>
              </div>

              {/* Headers */}
              <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4 sm:p-5 hover:border-[#f59e0b]/50 transition-all duration-300">
                <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#f59e0b]/10 rounded-lg flex-shrink-0">
                    <i className="ri-file-list-3-line text-[#f59e0b] text-sm sm:text-base"></i>
                  </span>
                  <div>
                    <h5 className="text-white font-bold text-sm sm:text-base">Headers (Metadatos)</h5>
                  </div>
                </div>
                <ul className="text-gray-400 text-xs sm:text-sm space-y-1.5 sm:space-y-2">
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <span className="text-[#f59e0b] mt-0.5">•</span>
                    <span><code className="text-[#f59e0b] font-mono text-xs">Content-Type</code>: Le avisa al servidor que los datos son JSON.</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <span className="text-[#f59e0b] mt-0.5">•</span>
                    <span><code className="text-[#f59e0b] font-mono text-xs">Authorization</code>: Es el "pasaporte". Sin esto, el servidor devuelve 401.</span>
                  </li>
                </ul>
              </div>

              {/* El Body y el DTO */}
              <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4 sm:p-5 hover:border-[#8b5cf6]/50 transition-all duration-300">
                <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#8b5cf6]/10 rounded-lg flex-shrink-0">
                    <i className="ri-file-code-line text-[#8b5cf6] text-sm sm:text-base"></i>
                  </span>
                  <div className="min-w-0">
                    <h5 className="text-white font-bold text-sm sm:text-base mb-0.5 sm:mb-1">El Body y el DTO</h5>
                    <code className="text-[#8b5cf6] text-xs font-mono">productData</code>
                  </div>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  El objeto <code className="text-[#8b5cf6] font-mono text-xs">productData</code> es lo que el backend recibirá. Un Pipe de validación revisará si el <code className="text-[#8b5cf6] font-mono text-xs">price</code> es un número antes de tocar la base de datos.
                </p>
              </div>

              {/* Promesas */}
              <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4 sm:p-5 hover:border-[#14b8a6]/50 transition-all duration-300">
                <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#14b8a6]/10 rounded-lg flex-shrink-0">
                    <i className="ri-time-line text-[#14b8a6] text-sm sm:text-base"></i>
                  </span>
                  <div className="min-w-0">
                    <h5 className="text-white font-bold text-sm sm:text-base mb-0.5 sm:mb-1">Promesas (Async/Await)</h5>
                    <code className="text-[#14b8a6] text-xs font-mono">async/await</code>
                  </div>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Como las peticiones por red toman tiempo, usamos <code className="text-[#14b8a6] font-mono text-xs">await</code> para esperar la respuesta sin bloquear el resto de la aplicación.
                </p>
              </div>

              {/* Status Codes */}
              <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4 sm:p-5 hover:border-[#ec4899]/50 transition-all duration-300">
                <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#ec4899]/10 rounded-lg flex-shrink-0">
                    <i className="ri-error-warning-line text-[#ec4899] text-sm sm:text-base"></i>
                  </span>
                  <div>
                    <h5 className="text-white font-bold text-sm sm:text-base">Status Codes</h5>
                  </div>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  El código de respuesta nos permite tomar decisiones. Si recibimos un <code className="text-[#10b981] font-mono text-xs">201</code>, mostramos éxito; si recibimos un <code className="text-[#ef4444] font-mono text-xs">400</code>, sabemos que hubo un error en los datos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}