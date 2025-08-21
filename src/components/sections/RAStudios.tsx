import React from "react";
import { Instagram, Building, Compass } from "lucide-react";

const RAStudios = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-brevana-50 to-brevana-100/50">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-brevana-900 mb-6">
            Quiénes Somos
          </h2>
          <div className="text-lg text-brevana-700 leading-relaxed max-w-4xl mx-auto space-y-6">
            <p>
              En RA Studio creemos que cada espacio cuenta una historia. Somos un estudio de arquitectura 
              comprometido con la creación de proyectos innovadores, sostenibles y con identidad propia, 
              que aporten valor tanto a nuestros clientes como al entorno en el que se desarrollan.
            </p>
            <p>
              Fundado y dirigido por las proyectistas <strong>Raudeluz Luis</strong> y <strong>Yasser Florentino</strong>, 
              el estudio combina la visión creativa y técnica de sus fundadoras para transformar ideas en 
              realidades arquitectónicas que generan bienestar, armonía y funcionalidad.
            </p>
            <p>
              Nuestro trabajo se guía por principios de innovación, calidad, ética profesional y sostenibilidad, 
              siempre con un firme compromiso hacia quienes confían en nosotros.
            </p>
            <p>
              A través de un enfoque integral, buscamos que cada proyecto refleje la esencia del cliente y 
              su contexto, dando vida a espacios únicos con impacto positivo y duradero.
            </p>
          </div>
        </div>

        {/* RA Studio Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 bg-brevana-50/80 backdrop-blur-sm px-8 py-4 rounded-full border border-brevana-200">
            <div className="w-12 h-12 bg-gradient-to-br from-brevana-200 to-brevana-300 rounded-full flex items-center justify-center">
              <Building className="w-6 h-6 text-brevana-800" />
            </div>
            <div className="text-left">
              <div className="font-medium text-brevana-900">RA Studio</div>
              <div className="text-sm text-brevana-600">Estudio de Arquitectura</div>
            </div>
          </div>
        </div>

        {/* Social Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/brevanadr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 text-brevana-700 hover:text-brevana-900 transition-colors group"
          >
            <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="text-lg">Síguenos en @brevanadr</span>
          </a>
        </div>

        {/* Academic Disclaimer */}
        <div className="mt-16 pt-8 border-t border-brevana-200">
          <div className="text-center text-sm text-brevana-500 space-y-2">
            <p className="font-medium">Proyecto de Presentación 2024</p>
            <p>
              Este sitio web fue creado para la presentación del modelo 3D arquitectónico 
              del Hotel Brevana, como parte del portafolio académico de RA Studio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RAStudios;