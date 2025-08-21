import React from "react";
import { ResponsiveImage } from "../ui/responsive-image";

const Hero = () => {
  return (
    <section className="pt-24">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-full aspect-[16/10] rounded-none overflow-hidden">
          <ResponsiveImage
            src="aerial"
            alt="Brevana Hotel Boutique - Caribbean Coast"
            className="w-full h-full object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
