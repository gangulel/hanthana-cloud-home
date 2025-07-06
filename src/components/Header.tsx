import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            The Cloud Hanthana
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#rooms" className="text-foreground hover:text-primary transition-colors">
              Rooms
            </a>
            <a href="#dining" className="text-foreground hover:text-primary transition-colors">
              Dining
            </a>
            <a href="#experiences" className="text-foreground hover:text-primary transition-colors">
              Experiences
            </a>
          </nav>

          <Button variant="default" className="hidden md:block">
            Book Now
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#rooms" className="text-foreground hover:text-primary transition-colors">
                Rooms
              </a>
              <a href="#dining" className="text-foreground hover:text-primary transition-colors">
                Dining
              </a>
              <a href="#experiences" className="text-foreground hover:text-primary transition-colors">
                Experiences
              </a>
              <Button variant="default" className="mt-4">
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;