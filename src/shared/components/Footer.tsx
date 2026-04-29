import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <footer className="w-full bg-black/30 text-white px-6 py-6 border-t-2 border-border shadow-shadow">

      <div className="max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-[280px_1fr] gap-6 items-center">
          
          <div className="text-center">
            <h4 className="text-xl font-bold">
              Alexander<span className="text-main">Web</span>
            </h4>

            <div className="flex justify-center gap-4 mt-3 text-2xl">
              <a 
                href="https://www.linkedin.com/in/alexander-morenoc/" 
                className="hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a 
                href="https://github.com/xander-on" 
                className="hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a 
                href="#" 
                className="hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-center text-sm">
            Copyright 2026 © alexanderweb.cloud Todos los derechos reservados
          </div>

        </div>

      </div>
    </footer>
  );
};