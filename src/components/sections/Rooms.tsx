import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { ResponsiveImage } from "../ui/responsive-image";

const Rooms = () => {
  const [currentElixirImage, setCurrentElixirImage] = useState(0);
  const [currentCortezaImage, setCurrentCortezaImage] = useState(0);

  const elixir = {
    title: "Elixir",
    description:
      "Habitaciones íntimas con jacuzzi privado, perfectas para desconectar y revitalizarte frente al mar Caribe.",
    images: [
      "elixir",
      "elixir-2",
      "elixir-3",
      "jacuzzi",
    ],
    size: "35 m²",
    capacity: "2 adultos",
  };

  const cortezas = {
    title: "Cortezas",
    description:
      "Espaciosas casitas con cocina equipada y terraza privada, ideales para familias que buscan independencia y comodidad junto al río Yeguada.",
    images: [
      "cortezas",
      "cortezas-2",
      "cortezas-3",
      "cortezas-bar",
    ],
    size: "65 m²",
    capacity: "4 adultos + 2 niños",
  };

  const nextElixirImage = () => {
    setCurrentElixirImage((prev) => (prev + 1) % elixir.images.length);
  };

  const prevElixirImage = () => {
    setCurrentElixirImage(
      (prev) => (prev - 1 + elixir.images.length) % elixir.images.length,
    );
  };

  const nextCortezaImage = () => {
    setCurrentCortezaImage((prev) => (prev + 1) % cortezas.images.length);
  };

  const prevCortezaImage = () => {
    setCurrentCortezaImage(
      (prev) => (prev - 1 + cortezas.images.length) % cortezas.images.length,
    );
  };

  return (
    <section id="rooms" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-4">
            Nuestros Espacios
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Entre el mar y el río, cada habitación es un refugio diseñado para
            reconectar contigo mismo y con quienes más quieres.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Elixir Column */}
          <div className="space-y-8">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentElixirImage}
                    className="w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <ResponsiveImage
                      src={elixir.images[currentElixirImage]}
                      alt={`${elixir.title} - Imagen ${currentElixirImage + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-end space-x-4 mt-4">
                <Button onClick={prevElixirImage} variant="link" size="icon">
                  <ChevronLeft className="size-4" />
                </Button>
                <Button onClick={nextElixirImage} variant="link" size="icon">
                  <ChevronRight className="size-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-neutral-900">
                  {elixir.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {elixir.description}
                </p>

                <div className="flex justify-between text-xs uppercase tracking-wider text-neutral-500">
                  <span>{elixir.size}</span>
                  <span>{elixir.capacity}</span>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {elixir.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentElixirImage(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                      index === currentElixirImage
                        ? "bg-neutral-900"
                        : "bg-neutral-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Cortezas Column */}
          <div className="space-y-8">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCortezaImage}
                    className="w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <ResponsiveImage
                      src={cortezas.images[currentCortezaImage]}
                      alt={`${cortezas.title} - Imagen ${currentCortezaImage + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-end space-x-4 mt-4">
                <Button onClick={prevCortezaImage} variant="link" size="icon">
                  <ChevronLeft className="size-4" />
                </Button>
                <Button onClick={nextCortezaImage} variant="link" size="icon">
                  <ChevronRight className="size-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-neutral-900">
                  {cortezas.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {cortezas.description}
                </p>

                <div className="flex justify-between text-xs uppercase tracking-wider text-neutral-500">
                  <span>{cortezas.size}</span>
                  <span>{cortezas.capacity}</span>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {cortezas.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCortezaImage(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                      index === currentCortezaImage
                        ? "bg-neutral-900"
                        : "bg-neutral-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="border border-neutral-300 text-neutral-900 px-8 py-3 text-sm uppercase tracking-wider hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300">
            Ver Todas las Habitaciones
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
