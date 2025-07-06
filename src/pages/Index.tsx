import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Accommodations from '@/components/Accommodations';
import Dining from '@/components/Dining';
import Experiences from '@/components/Experiences';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Accommodations />
      <Dining />
      <Experiences />
      <Footer />
    </div>
  );
};

export default Index;