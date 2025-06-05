import { FaGlobe, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          

          <div className="sm:flex-1">
            <p className="text-3xl font-extrabold mb-1">Planificador de Gastos</p>
            <p className="text-sm text-gray-300">
              Desarrollado por <strong>Jesús Pineda</strong>
            </p>
          </div>


          <nav className="flex gap-10 sm:gap-12 justify-center sm:justify-start flex-1">
            <a
              href="https://jesus-pineda-portafolio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sitio Web personal"
              className="flex items-center gap-3 text-gray-200 hover:text-pink-500 transition-colors"
            >
              <FaGlobe size={22} />
              <span className="font-medium">Sitio Web</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jesús-pineda-630a3b300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn"
              className="flex items-center gap-3 text-gray-200 hover:text-pink-500 transition-colors"
            >
              <FaLinkedin size={22} />
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com/JesusPineda29"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Repositorio en GitHub"
              className="flex items-center gap-3 text-gray-200 hover:text-pink-500 transition-colors"
            >
              <FaGithub size={22} />
              <span className="font-medium">GitHub</span>
            </a>
          </nav>


          <div className="sm:flex-1 text-center sm:text-right text-white text-sm">
            © {new Date().getFullYear()} - Todos los derechos reservados
          </div>
        </div>
      </div>
    </footer>
  );
};
