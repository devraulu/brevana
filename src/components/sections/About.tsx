import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-10 md:pt-16 w-3/5 mx-auto">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
        <span className="text-xs block uppercase text-center">
          Miches, Dominican Republic
        </span>
        <h2 className="text-3xl md:text-4xl font-light text-brevana-900 mt-4 block">Brevana Miches</h2>
        <div className="mt-6">
          <p className="text-pretty text-base leading-relaxed text-brevana-700 mb-8">
            Desde la costa caribeña de Miches, abrazando los ritmos de
            la vida dominicana con profunda tranquilidad. Inspirado en la
            tradición de la mamajuana, con brisas oceánicas, sonidos del río
            e inmersión cultural, el hotel íntimo, los espacios familiares
            y las experiencias auténticas están arraigados en el patrimonio local.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
