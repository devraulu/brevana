import React from "react";

const Hero = () => {
  return (
    <section className="pt-24">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-full aspect-[16/10] rounded-none overflow-hidden">
          <img
            src="/images/aerial.webp"
            alt="Brevana Hotel Boutique - Caribbean Coast"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
