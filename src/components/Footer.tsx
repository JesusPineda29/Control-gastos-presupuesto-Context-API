export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center text-center gap-4 w-full">
          
          <div className="sm:text-left">
            <p className="text-2xl font-bold">Planificador de Gastos</p>
            <p className="text-sm">Desarrollado por <strong>Jesús Pineda</strong></p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
            <a
              href="https://jesus-pineda-portafolio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-500 transition-colors"
            >
              <i className="fas fa-globe"></i>
              <span>Sitio Web</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jesús-pineda-630a3b300"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-500 transition-colors"
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/JesusPineda29"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-500 transition-colors"
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
          </div>

          <p className="text-xs mt-6 sm:mt-0 text-gray-400">
            © {new Date().getFullYear()} - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
