import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Plane,
  Ship,
  Navigation,
  Coffee,
  TreePine,
  Waves,
  Mountain
} from 'lucide-react';

const Location = () => {
  const transportation = [
    {
      icon: Plane,
      title: "Aeropuerto Internacional",
      description: "Aeropuerto Internacional de Punta Cana",
      distance: "50 minutos",
      details: "Servicio de transfer disponible 24/7"
    },
    {
      icon: Car,
      title: "En Automóvil",
      description: "Desde Santo Domingo",
      distance: "2.5 horas",
      details: "Carretera Miches - El Cedro, bien señalizada"
    },
    {
      icon: Ship,
      title: "Marina Turística",
      description: "Puerto deportivo más cercano",
      distance: "54 minutos",
      details: "Ideal para embarcaciones privadas"
    }
  ];

  const nearbyAttractions = [
    {
      icon: Waves,
      name: "Playa Esmeralda",
      distance: "5 min",
      type: "Playa virgen"
    },
    {
      icon: TreePine,
      name: "Reserva Natural",
      distance: "15 min",
      type: "Área protegida"
    },
    {
      icon: Mountain,
      name: "Mirador El Seibo",
      distance: "25 min",
      type: "Vista panorámica"
    },
    {
      icon: Coffee,
      name: "Pueblo de Miches",
      distance: "20 min",
      type: "Centro cultural"
    }
  ];

  return (
    <section id="location" className="py-20 lg:py-32 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-teal-50 border-teal-200 text-teal-800">
            <MapPin className="w-4 h-4 mr-2" />
            Nuestra Ubicación
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Donde el <span className="text-amber-600">Caribe</span> se encuentra<br />
            <span className="text-teal-600">con el río Yeguada</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Estratégicamente ubicado en el corazón de la zona turística premium de Miches,
            con acceso inmediato a las mejores atracciones naturales y culturales de la región.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Map and Address */}
          <div>
            {/* Interactive Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
              <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 to-amber-100 relative">
                {/* Map container for future map integration */}
                <div className="w-full h-full flex items-center justify-center text-neutral-600">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                    <p className="text-lg font-medium">Mapa Interactivo</p>
                    <p className="text-sm">Carretera Miches - El Cedro</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Location Pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Interactive Map Button */}
                <Button
                  className="absolute bottom-4 right-4 bg-white/90 text-neutral-900 hover:bg-white"
                  size="sm"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Ver en Google Maps
                </Button>
              </div>
            </div>

            {/* Address Card */}
            <Card className="border-neutral-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-neutral-900">
                  <MapPin className="w-5 h-5 text-amber-600 mr-2" />
                  Dirección Completa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-neutral-700">
                  <p className="font-medium">Carretera Miches – El Cedro</p>
                  <p>Zona rural al norte del municipio de Miches</p>
                  <p>Provincia El Seibo, República Dominicana</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white flex-1">
                    <Navigation className="w-4 h-4 mr-2" />
                    Cómo Llegar
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar Ahora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information and Transportation */}
          <div className="space-y-8">
            {/* Contact Card */}
            <Card className="border-neutral-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-neutral-900">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-teal-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Teléfonos</p>
                    <p className="text-neutral-600">+1 (829) 357-9841</p>
                    <p className="text-neutral-600">+1 (829) 320-0043</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-teal-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Correo Electrónico</p>
                    <p className="text-neutral-600">info@brevana.com</p>
                    <p className="text-neutral-600">reservas@brevana.com</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-teal-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Horarios</p>
                    <p className="text-neutral-600">Recepción: 24 horas</p>
                    <p className="text-neutral-600">Reservas: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation Options */}
            <Card className="border-neutral-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-neutral-900">Cómo Llegar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {transportation.map((transport, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-neutral-50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <transport.icon className="w-5 h-5 text-teal-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-neutral-900">{transport.title}</h4>
                          <Badge variant="outline" className="bg-amber-50 border-amber-200 text-amber-800">
                            {transport.distance}
                          </Badge>
                        </div>
                        <p className="text-sm text-neutral-600 mb-1">{transport.description}</p>
                        <p className="text-xs text-neutral-500">{transport.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              Atractivos Cercanos
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Descubre las maravillas naturales y culturales que rodean a Brevana
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyAttractions.map((attraction, index) => (
              <Card key={index} className="border-neutral-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-100 to-amber-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <attraction.icon className="w-8 h-8 text-teal-700" />
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                    {attraction.name}
                  </h4>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {attraction.distance}
                    </Badge>
                    <Badge variant="secondary" className="text-xs bg-neutral-100 text-neutral-700">
                      {attraction.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-amber-50 to-teal-50 rounded-2xl p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
            ¿Necesitas ayuda para planificar tu viaje?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de concierge está disponible para ayudarte con el transporte,
            recomendaciones locales y cualquier necesidad especial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Contactar Concierge
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="w-5 h-5 mr-2" />
              Enviar Consulta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
