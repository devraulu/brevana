import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-10 md:pt-16 bg-white w-3/5 mx-auto">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
        <span className="text-xs block uppercase text-center">
          Miches, Dominican Republic
        </span>
        <span className="text-3xl font-bold mt-4 block">Brevana Miches</span>
        <div className="mt-6">
          <p className="text-pretty text-base leading-relaxed text-neutral-700 mb-8">
            From the Caribbean coast of Miches, embracing the rhythms of
            Dominican life with profound tranquility. Inspired by mamajuana
            tradition, with ocean breezes, river sounds and cultural immersion,
            the intimate hotel, family-friendly spaces and authentic experiences
            are all rooted in local heritage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
