import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bed, Bath, Wifi, Coffee, Mountain, Wind } from 'lucide-react';
import roomImage from '@/assets/room-view.jpg';

const Accommodations = () => {
  const amenities = [
    { icon: <Bed className="w-5 h-5" />, text: "King-sized beds with premium linens" },
    { icon: <Bath className="w-5 h-5" />, text: "En-suite bathrooms with hot water" },
    { icon: <Mountain className="w-5 h-5" />, text: "Private balconies with mountain views" },
    { icon: <Wind className="w-5 h-5" />, text: "Air conditioning & ceiling fans" },
    { icon: <Wifi className="w-5 h-5" />, text: "Free high-speed Wi-Fi" },
    { icon: <Coffee className="w-5 h-5" />, text: "Daily housekeeping service" }
  ];

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
              Accommodations
            </h2>
            <h3 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
              Elegant Rooms with a View
            </h3>
            <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
              Our tastefully designed villa features 7 guest rooms, each offering a private balcony that opens up to breathtaking views of the Hanthana hills. The rooftop terrace provides a 360-degree panoramic view — perfect for sunrise meditations, sunset teas, or simply gazing at the stars.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={roomImage} 
                alt="Luxurious room with mountain view" 
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-primary mb-6">
                Thoughtfully Designed Spaces
              </h4>
              <p className="text-foreground leading-relaxed mb-8">
                Our rooms blend Sri Lankan tradition with modern luxury, creating spaces that feel both exotic and familiar. Each detail has been carefully considered to provide the perfect balance of comfort and authenticity.
              </p>
              
              <div className="grid gap-4 mb-8">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 text-foreground">
                    <div className="text-nature-tea">
                      {amenity.icon}
                    </div>
                    <span>{amenity.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-soft hover:shadow-nature transition-shadow duration-300">
              <CardContent className="p-8">
                <h4 className="text-2xl font-semibold text-primary mb-4">
                  Deluxe Rooms
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Spacious and serene, our deluxe rooms offer the perfect retreat for couples or solo travelers seeking tranquility in the hills.
                </p>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-nature transition-shadow duration-300">
              <CardContent className="p-8">
                <h4 className="text-2xl font-semibold text-primary mb-4">
                  Family Suites
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Larger accommodations perfect for families, featuring additional space and multiple balconies to enjoy the mountain vistas.
                </p>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-8 py-3">
              Check Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;