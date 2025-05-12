
import React from 'react';
import { Button } from '@/components/ui/button';
import { Apple, Play } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-neutral to-white z-0"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-blue/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 flex flex-col lg:flex-row items-center z-10">
        <div className="lg:w-1/2 text-left lg:pr-12 mb-12 lg:mb-0">
          <h1 className="animate-fade-in text-5xl md:text-6xl xl:text-7xl font-display font-bold text-brand-dark mb-6">
            <span className="gradient-text">11WorldClub</span>
            <br />
            <span className="text-3xl md:text-4xl">Personal Growth Companion</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl">
            Build a better you — one moral choice at a time. Cultivate ethical habits and become the best version of yourself.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="button-primary">
              <Apple size={20} className="mr-2" />
              <span>Download on App Store</span>
            </Button>
            
            <Button className="button-secondary">
              <Play size={20} className="mr-2" />
              <span>Get it on Google Play</span>
            </Button>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-1.5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
              ))}
            </div>
            <span>Join 10,000+ users growing every day</span>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center lg:justify-end animate-scale-in">
          <div className="relative">
            {/* Phone frame with glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 via-brand-purple/20 to-brand-green/20 rounded-[2.5rem] blur-xl"></div>
            <div className="relative z-10 bg-white rounded-[2rem] border border-gray-200 shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" 
                alt="11WorldClub App Screenshot"
                className="w-[250px] md:w-[300px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center">
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
