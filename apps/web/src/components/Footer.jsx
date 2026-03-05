import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <span className="text-2xl font-bold text-primary">Sugar Rush</span>
            <p className="text-muted-foreground">
              Handcrafted sweetness, baked fresh daily with love and the finest ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-foreground">Quick Links</span>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                Menu
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Hours of Operation */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-foreground">Hours</span>
            <div className="space-y-2 text-muted-foreground">
              <p>Monday - Friday: 7am - 7pm</p>
              <p>Saturday: 8am - 8pm</p>
              <p>Sunday: 9am - 6pm</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-foreground">Contact</span>
            <div className="space-y-2 text-muted-foreground">
              <p>123 Sweet Street</p>
              <p>Bakery City, BC 12345</p>
              <p>(555) 123-4567</p>
              <p>hello@sugarrush.com</p>
            </div>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2026 Sugar Rush. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;