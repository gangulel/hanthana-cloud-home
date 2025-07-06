import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mountain, Binoculars, Coffee as TeaCup, GraduationCap, Flower, MapPin } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      icon: <Mountain className="w-8 h-8 text-nature-tea" />,
      title: "Pekoe Trail (Phases 1 & 2)",
      description: "Scenic hikes through the breathtaking Hanthana mountain range with panoramic views of tea plantations.",
      duration: "2-6 hours",
      difficulty: "Moderate"
    },
    {
      icon: <Binoculars className="w-8 h-8 text-nature-mountain" />,
      title: "Bird Watching",
      description: "Discover exotic species at the nearby Hanthana International Bird Park in a lush natural sanctuary.",
      duration: "2-3 hours",
      difficulty: "Easy"
    },
    {
      icon: <TeaCup className="w-8 h-8 text-nature-earth" />,
      title: "Tea Tasting Experience",
      description: "Learn the story of Ceylon tea at the historic Ceylon Tea Museum, just minutes from our villa.",
      duration: "2 hours",
      difficulty: "Easy"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-accent-deep" />,
      title: "Campus Tours",
      description: "Explore the iconic University of Peradeniya with its stunning colonial architecture and rich history.",
      duration: "2-3 hours",
      difficulty: "Easy"
    },
    {
      icon: <Flower className="w-8 h-8 text-nature-tea" />,
      title: "Botanical Gardens",
      description: "Wander through the 147-acre Royal Botanical Gardens, a floral paradise with rare and exotic plants.",
      duration: "3-4 hours",
      difficulty: "Easy"
    },
    {
      icon: <MapPin className="w-8 h-8 text-nature-mountain" />,
      title: "Cultural Kandy Tours",
      description: "Visit the Temple of the Tooth, Kandy Lake, and explore the vibrant shopping streets of this historic city.",
      duration: "4-6 hours",
      difficulty: "Easy"
    }
  ];

  const nearbyAttractions = [
    "Pekoe Trail (Phases 1 & 2) - Long-distance hiking trail",
    "Ceylon Tea Museum - Historic tea factory",
    "Hanthana International Bird Park - Exotic bird sanctuary",
    "University of Peradeniya - Iconic colonial campus",
    "Peradeniya Teaching Hospital - Leading medical center",
    "Royal Botanical Gardens - 147-acre floral paradise",
    "Paradise Park & Clock Tower - Peaceful local walks"
  ];

  return (
    <section id="experiences" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
              Experiences
            </h2>
            <h3 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
              Explore, Relax, and Reconnect
            </h3>
            <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
              Whether you're escaping the noise, exploring Kandy's heritage, or working remotely in nature, discover the perfect blend of adventure and tranquility in the heart of Sri Lanka's hill country.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {experiences.map((experience, index) => (
              <Card key={index} className="shadow-soft hover:shadow-nature transition-shadow duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {experience.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-3 text-center">
                    {experience.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-center">
                    {experience.description}
                  </p>
                  <div className="flex justify-between text-sm text-nature-tea font-medium">
                    <span>{experience.duration}</span>
                    <span>{experience.difficulty}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-mist rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl md:text-3xl font-light text-primary text-center mb-8">
              Nearby Attractions
            </h3>
            <p className="text-center text-foreground mb-8 text-lg">
              Explore the Best of Kandy — Just Minutes from The Cloud Hanthana
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {nearbyAttractions.map((attraction, index) => (
                <div key={index} className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 bg-nature-tea rounded-full flex-shrink-0"></div>
                  <span>{attraction}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-semibold text-primary mb-4">
              Ready for Your Adventure?
            </h4>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team will help you plan the perfect itinerary based on your interests, fitness level, and available time. From sunrise hikes to cultural immersions, we'll make your stay unforgettable.
            </p>
            <Button size="lg" className="px-8 py-3">
              Plan Your Experience
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;