import React from "react";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 py-16 md:py-24 bg-brevana-900 text-brevana-50">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <h3 className="font-logo text-3xl md:text-4xl tracking-wider mb-4">
              BREVANA
            </h3>

            <p className="text-brevana-200 leading-relaxed max-w-md">
              Un refugio costero inspirado en la tradición de la mamajuana,
              donde el mar Caribe se encuentra con el río Yeguada en auténtica
              hospitalidad dominicana.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <div>
              <div className="text-sm uppercase tracking-wider text-brevana-400 mb-4">
                Ubicación
              </div>
              <div className="text-brevana-200 text-sm leading-relaxed">
                Carretera Miches – El Cedro
                <br />
                Miches, Provincia El Seibo
                <br />
                República Dominicana
              </div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-brevana-400 mb-4">
                Contacto
              </div>
              <div className="text-brevana-200 text-sm space-y-1">
                <div>+1 (829) 357-9841</div>
                <div>+1 (829) 320-0043</div>
                <div>info@brevana.com</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm uppercase tracking-wider text-brevana-400 mb-4">
                  Síguenos
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/brevanadr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-brevana-200 hover:text-brevana-50 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm">@brevanadr</span>
                  </a>
                </div>
              </div>
              <div>
                <button className="border border-brevana-700 text-brevana-50 px-6 py-2 text-sm uppercase tracking-wider hover:border-brevana-300 hover:bg-brevana-100 hover:text-brevana-900 transition-all duration-300">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brevana-800 mt-16 pt-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-brevana-400 space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div>© 2024 Brevana</div>
              <div className="text-xs">
                hecho por{" "}
                <a
                  href="https://www.instagram.com/brevanadr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brevana-200 transition-colors underline"
                >
                  RA Studios
                </a>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-brevana-200 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-brevana-200 transition-colors">
                Términos
              </a>
            </div>
          </div>

          {/* College Assignment Disclaimer */}
          <div className="text-center text-xs text-brevana-400 pt-4 border-t border-brevana-800">
            Este es un proyecto académico presentado por Raudeluz Luis y Yasser
            Florentino
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
