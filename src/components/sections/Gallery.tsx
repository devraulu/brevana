import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const images = [
  {
    src: "/images/elixir.webp",
    alt: "Brevana suite with ocean view",
    width: 600,
    height: 800,
  },
  {
    src: "/images/aerial.webp",
    alt: "Caribbean coastline",
    width: 800,
    height: 600,
  },
  {
    src: "/images/cortezas-bar.webp",
    alt: "Mamajuana preparation",
    width: 500,
    height: 700,
  },
  {
    src: "/images/main-lobby.webp",
    alt: "Hotel exterior at sunset",
    width: 700,
    height: 500,
  },
  {
    src: "/images/walk.webp",
    alt: "River Yeguada flowing",
    width: 600,
    height: 900,
  },
  {
    src: "/images/main-lobby-2.webp",
    alt: "Local cultural experience",
    width: 900,
    height: 600,
  },
  {
    src: "/images/bar.webp",
    alt: "Dining experience",
    width: 550,
    height: 750,
  },
  {
    src: "/images/shared-jacuzzi.webp",
    alt: "Wellness and spa",
    width: 750,
    height: 550,
  },
  {
    src: "/images/chaise.webp",
    alt: "Tropical garden views",
    width: 650,
    height: 850,
  },
  {
    src: "/images/pool.webp",
    alt: "Pool deck area",
    width: 800,
    height: 500,
  },
  {
    src: "/images/lobby.webp",
    alt: "Sunset terrace dining",
    width: 550,
    height: 800,
  },
  {
    src: "/images/driveway.webp",
    alt: "Private beach access",
    width: 700,
    height: 600,
  },
  {
    src: "/images/driveway-2.webp",
    alt: "Nature trail exploration",
    width: 600,
    height: 750,
  },
  {
    src: "/images/main-lobby-3.webp",
    alt: "Local market experience",
    width: 900,
    height: 500,
  },
  {
    src: "/images/elixir-2.webp",
    alt: "Yoga pavilion",
    width: 500,
    height: 900,
  },
  {
    src: "/images/bar-2.webp",
    alt: "Rum tasting session",
    width: 750,
    height: 650,
  },
  {
    src: "/images/pool-3.webp",
    alt: "Adventure tour activities",
    width: 650,
    height: 700,
  },
  {
    src: "/images/main-lobby-4.webp",
    alt: "Breakfast with a view",
    width: 800,
    height: 650,
  },
  {
    src: "/images/cortezas.webp",
    alt: "Stone pathway through gardens",
    width: 600,
    height: 800,
  },
  {
    src: "/images/lobby-2.webp",
    alt: "Evening lounge area",
    width: 850,
    height: 600,
  },
  {
    src: "/images/cortezas-2.webp",
    alt: "Local artisan crafts",
    width: 550,
    height: 750,
  },
  {
    src: "/images/elixir-3.webp",
    alt: "Rainforest canopy view",
    width: 700,
    height: 550,
  },
  {
    src: "/images/cortezas-3.webp",
    alt: "Fire pit evening gatherings",
    width: 600,
    height: 900,
  },
  {
    src: "/images/main-lobby-5.webp",
    alt: "Organic farm visit",
    width: 900,
    height: 550,
  },
  {
    src: "/images/shared-jacuzzi-2.webp",
    alt: "Hammock relaxation spot",
    width: 650,
    height: 800,
  },
  {
    src: "/images/pool-4.webp",
    alt: "Coral reef diving",
    width: 750,
    height: 700,
  },
  {
    src: "/images/shared-jacuzzi-3.webp",
    alt: "Meditation garden space",
    width: 800,
    height: 750,
  },
  {
    src: "/images/shared-jacuzzi-4.webp",
    alt: "Stargazing deck at night",
    width: 550,
    height: 650,
  },
];

const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Set initial state

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  // Custom navigation bar component

  return (
    <section id="gallery" className="pt-16 bg-white overflow-hidden">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 md:gap-12 lg:gap-16 -ml-2 md:-ml-4 items-center">
              {images.map((image, index) => {
                // Calculate natural aspect ratio
                const aspectRatio = image.width / image.height;

                // Set width and calculate height based on aspect ratio
                const baseWidth = 320; // 320px base width
                const maxHeight = 480; // Max height constraint
                const calculatedHeight = Math.min(
                  Math.round(baseWidth / aspectRatio),
                  maxHeight,
                );

                return (
                  <div
                    key={index}
                    className="pl-2 md:pl-4"
                    style={{
                      flex: `0 0 ${baseWidth}px`,
                      minWidth: 0,
                    }}
                  >
                    <motion.div
                      className="relative overflow-hidden group cursor-pointer"
                      style={{
                        width: `${baseWidth}px`,
                        height: `${calculatedHeight}px`,
                      }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <NavigationBar
            currentSlide={emblaApi?.selectedScrollSnap() ?? 0}
            scrollTo={scrollTo}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;

const NavigationBar = ({
  currentSlide,
  scrollTo,
}: {
  currentSlide: number;
  scrollTo: (index: number) => void;
}) => {
  return (
    <div className="flex gap-1 justify-center mt-24">
      <div className="flex w-full max-w-md">
        {images.map((_, index) => (
          <button
            key={index}
            className="flex-1 py-4 group cursor-pointer"
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={cn(
                `w-full h-[1.5px] transition-all duration-300`,
                index === currentSlide
                  ? "bg-neutral-800"
                  : "bg-neutral-300 group-hover:bg-neutral-400",
                index === 0 && "rounded-tl-full rounded-bl-full",
                index === images.length - 1 &&
                  "rounded-tr-full rounded-br-full",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
