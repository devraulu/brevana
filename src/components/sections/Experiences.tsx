import React from "react";
import { ResponsiveImage } from "../ui/responsive-image";

const Experiences = () => {
  const experiences = [
    {
      category: "música en vivo",
      title: "Bar Caribeño",
      description:
        "Risas en el bar, ritmos auténticos y música en vivo que vibra hasta altas horas. Un espacio donde se mezclan viajeros curiosos, familias y amigos para bailar y compartir momentos únicos.",
      image: "bar",
      link: "Descubre Brevana Miches",
    },
    {
      category: "bienestar",
      title: "Jacuzzi Compartido",
      description:
        "Entre el mar Caribe y el río Yeguada, disfruta de un espacio de relajación donde la naturaleza y el bienestar se encuentran para crear experiencias memorables y tranquilas.",
      image: "shared-jacuzzi",
      link: "Descubre Brevana Miches",
    },
    {
      category: "aventura",
      title: "Actividades Naturales",
      description:
        "Kayaks navegando el río, rutas de senderismo, clases de cocina y juegos para todas las edades. Cada día puedes llenarlo de aventura o disfrutarlo descansando en la playa.",
      image: "pool",
      link: "Descubre Brevana Miches",
    },
    {
      category: "gastronomía",
      title: "Tradiciones Mamajuana",
      description:
        "Aromas que salen de la cocina, experiencias culinarias auténticas y la preparación tradicional de mamajuana. Un refugio costero donde la gastronomía dominicana cobra vida con recetas familiares y sabores del Caribe.",
      image: "main-lobby",
      link: "Descubre Brevana Miches",
      isWide: true,
    },
    {
      category: "naturaleza",
      title: "Mañanas Lentas",
      description:
        "Un regreso a las mañanas lentas y al horizonte abierto. Cada día comienza con un despertar frente al mar o junto al río Yeguada, donde puedes disfrutar de un atardecer con un trago en mano.",
      image: "chaise",
      link: "Descubre Brevana Miches",
    },
  ];

  return (
    <section id="experiences" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-6">
            Lo que vive aquí
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            Brevana es más que un hotel, es un ritmo que se siente. Entre el mar
            y el río, cada rincón está vivo con actividades, encuentros y
            momentos para recordar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 auto-rows-max">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`space-y-6 ${experience.isWide ? "lg:col-span-2" : ""} ${
                index >= 3 ? "lg:row-start-2" : ""
              }`}
            >
              {/* Image */}
              <div className="h-80 overflow-hidden">
                <ResponsiveImage
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm uppercase tracking-wider text-neutral-500">
                    {experience.category}
                  </div>
                  <h3 className="text-xl md:text-2xl font-light text-neutral-900">
                    {experience.title}
                  </h3>
                </div>

                <p className="text-base text-neutral-700 leading-relaxed">
                  {experience.description}
                </p>

                <button className="text-sm uppercase tracking-wider text-neutral-900 border-b border-neutral-300 hover:border-neutral-900 pb-1 transition-colors duration-200">
                  {experience.link}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
