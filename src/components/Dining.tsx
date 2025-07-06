import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Coffee, Sunset, Leaf } from 'lucide-react';
import diningImage from '@/assets/dining-terrace.jpg';

const Dining = () => {
  const diningOptions = [
    {
      icon: <Coffee className="w-8 h-8 text-nature-earth" />,
      title: "Breakfast",
      description: "Sri Lankan, Continental, or Vegetarian options to start your day right",
      time: "7:00 AM - 10:00 AM"
    },
    {
      icon: <Utensils className="w-8 h-8 text-nature-tea" />,
      title: "Lunch & Dinner", 
      description: "À la carte or set menus featuring local ingredients and authentic flavors",
      time: "On Request"
    },
    {
      icon: <Sunset className="w-8 h-8 text-nature-mountain" />,
      title: "Candlelit Terrace Dinners",
      description: "Romantic dining under the stars with panoramic mountain views",
      time: "Prior Booking Required"
    }
  ];

  return (
    <section id="dining" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
              Dining
            </h2>
            <h3 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
              Flavors of Sri Lanka and Beyond
            </h3>
            <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
              Enjoy homemade meals prepared with local ingredients and warm hospitality. Every dish tells a story of Sri Lankan tradition, crafted with love and served with care.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={diningImage} 
                alt="Candlelit terrace dining with mountain views" 
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-6 h-6 text-nature-tea" />
                <h4 className="text-2xl font-semibold text-primary">
                  Farm-to-Table Philosophy
                </h4>
              </div>
              <p className="text-foreground leading-relaxed mb-6">
                We source our ingredients from local farmers and gardens, ensuring every meal is fresh, sustainable, and bursting with authentic Sri Lankan flavors. Our chefs blend traditional recipes with modern presentation, creating dishes that delight both the palate and the eye.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Special dietary requirements? We're happy to accommodate vegetarian, vegan, and other dietary preferences with advance notice.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {diningOptions.map((option, index) => (
              <Card key={index} className="shadow-soft hover:shadow-nature transition-shadow duration-300 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {option.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-3">
                    {option.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {option.description}
                  </p>
                  <p className="text-sm text-nature-tea font-medium">
                    {option.time}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 bg-gradient-mist rounded-2xl p-8 md:p-12">
            <h4 className="text-2xl font-semibold text-primary mb-4">
              Special Dining Experiences
            </h4>
            <p className="text-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Let us create unforgettable dining moments for you. From romantic candlelit dinners on our rooftop terrace to traditional Sri Lankan feast experiences, we'll customize your culinary journey to match your special occasions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;