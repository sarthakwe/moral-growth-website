
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold gradient-text">11WorldClub</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="space-x-8">
            <a href="#features" className="text-gray-700 hover:text-brand-blue transition-colors">Features</a>
            <a href="#benefits" className="text-gray-700 hover:text-brand-blue transition-colors">Benefits</a>
            <a href="#testimonials" className="text-gray-700 hover:text-brand-blue transition-colors">Testimonials</a>
          </div>
          <a href="#download">
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full px-6">
              Download App
            </Button>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-5 bg-white border-t shadow-inner flex flex-col items-center space-y-4">
          <a 
            href="#features" 
            className="text-gray-700 hover:text-brand-blue transition-colors w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#benefits" 
            className="text-gray-700 hover:text-brand-blue transition-colors w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Benefits
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-700 hover:text-brand-blue transition-colors w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#download" 
            className="w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full px-6 w-full">
              Download App
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
