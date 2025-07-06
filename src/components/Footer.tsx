import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Instagram, Facebook, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Call to Action Section */}
          <div className="text-center mb-12 pb-12 border-b border-primary-foreground/20">
            <h3 className="text-3xl md:text-4xl font-light mb-4">
              Ready to Experience The Cloud Hanthana?
            </h3>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Your second home in the misty hills of Hanthana awaits. Book your minimalist, eco-friendly retreat today.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3"
            >
              Book Your Stay Now
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Hanthana Hills, Kandy, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">+94 XX XXX XXXX</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">hello@cloudhanthana.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Home
                </a>
                <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  About Us
                </a>
                <a href="#rooms" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Accommodations
                </a>
                <a href="#dining" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Dining
                </a>
                <a href="#experiences" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Experiences
                </a>
              </div>
            </div>

            {/* Experiences */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Experiences</h4>
              <div className="space-y-2">
                <span className="block text-primary-foreground/80 text-sm">Pekoe Trail Hiking</span>
                <span className="block text-primary-foreground/80 text-sm">Tea Tasting Tours</span>
                <span className="block text-primary-foreground/80 text-sm">Bird Watching</span>
                <span className="block text-primary-foreground/80 text-sm">Cultural Tours</span>
                <span className="block text-primary-foreground/80 text-sm">Botanical Gardens</span>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4 mb-4">
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
              <p className="text-primary-foreground/80 text-sm mb-2">
                #TheCloudHanthana
              </p>
              <p className="text-primary-foreground/80 text-sm">
                Share your moments with us
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/20 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-2xl font-bold">
                The Cloud Hanthana
              </div>
              <div className="text-primary-foreground/80 text-sm">
                <p>Minimalist. Eco-Friendly. Authentic. Just Like Home.</p>
              </div>
              <div className="text-primary-foreground/60 text-xs">
                <p>&copy; 2024 The Cloud Hanthana. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;