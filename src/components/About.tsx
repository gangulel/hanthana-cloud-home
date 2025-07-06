import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Heart, Globe, Home } from 'lucide-react';

const About = () => {
  const philosophyItems = [
    {
      icon: <Leaf className="w-8 h-8 text-nature-tea" />,
      title: "Minimalist Design",
      description: "Clean spaces. Thoughtful details. Inspired by nature."
    },
    {
      icon: <Globe className="w-8 h-8 text-nature-mountain" />,
      title: "Eco-Friendly Living",
      description: "We reduce plastic, conserve water, and honor the environment."
    },
    {
      icon: <Heart className="w-8 h-8 text-nature-earth" />,
      title: "Authentic Experiences",
      description: "Local cuisine, cultural trails, tea gardens, and warm smiles."
    },
    {
      icon: <Home className="w-8 h-8 text-accent-deep" />,
      title: "Your 2nd Home",
      description: "More than a stay — it's a feeling you carry with you."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
              About Us
            </h2>
            <h3 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
              A Place to Breathe. A Place to Belong.
            </h3>
            <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
              At The Cloud Hanthana, we believe less is more. That's why we've created a space that is both minimalist and meaningful — using local materials, supporting sustainable practices, and welcoming guests like family. Just 10 minutes from Kandy, yet miles away in spirit, we offer the warmth of a home with the elegance of a boutique escape.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-light text-primary text-center mb-12">
              Our Philosophy
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {philosophyItems.map((item, index) => (
                <Card key={index} className="shadow-soft hover:shadow-nature transition-shadow duration-300 border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-3">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center bg-gradient-mist rounded-2xl p-8 md:p-12">
            <blockquote className="text-xl md:text-2xl text-foreground font-light italic max-w-3xl mx-auto">
              "Hidden in the cool, misty hills of Hanthana, The Cloud Hanthana is a boutique villa designed for those who seek simplicity, sustainability, and soul. With panoramic views, personalized hospitality, and a calm that embraces you — this is where luxury meets mindfulness."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;