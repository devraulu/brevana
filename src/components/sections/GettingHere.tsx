import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { MapPin, Plane, Navigation } from "lucide-react";
import { Button } from "../ui/button";

// Set Mapbox access token from environment variable
mapboxgl.accessToken = import.meta.env.PUBLIC_MAPBOX_ACCESS_TOKEN;

const GettingHere = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Coordinates: 18°59'12.3"N 69°02'23.6"W
  const coordinates: [number, number] = [-69.039889, 18.98675];

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: coordinates,
      zoom: 12,
    });

    // Add marker
    new mapboxgl.Marker().setLngLat(coordinates).addTo(map.current);

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <section id="getting-here" className="pt-10 md:pt-16">
      <div className="text-center mb-8">
        <span className="text-xs block uppercase text-center">
          18°59'12.3"N 69°02'23.6"W
        </span>
        <h2 className="text-3xl md:text-4xl font-light text-brevana-900 mt-4 block">
          Cómo llegar
        </h2>

        {/* Map Container - Full Width */}
        <div
          ref={mapContainer}
          className="w-full h-96 bg-gray-200 relative overflow-hidden my-8"
        ></div>

        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          {/* Location Info */}
          <div className="flex flex-wrap items-start justify-center space-x-8 space-y-6">
            {/* Address */}
            <div className="flex items-start justify-center space-x-3">
              <MapPin className="w-5 h-5 text-neutral-600 mt-0.5" />
              <div className="text-neutral-700">
                <div>Carretera Miches – El Cedro</div>
                <div>Miches, Provincia El Seibo</div>
              </div>
            </div>

            {/* Flight Time */}
            <div className="flex items-start justify-center space-x-3">
              <Plane className="w-5 h-5 text-neutral-600" />
              <div className="text-neutral-700">
                Aeropuerto Internacional de Punta Cana
                <br />
                1h 30min en auto
              </div>
            </div>

            {/* Get Directions Button */}
            <Button
              onClick={() =>
                window.open(
                  `https://www.google.com/maps?q=${coordinates[1]},${coordinates[0]}`,
                  "_blank",
                )
              }
              className="inline-flex items-center space-x-2 uppercase hover:scale-105 transition-all duration-300"
            >
              <Navigation className="w-4 h-4" />
              Ver direcciones
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingHere;
