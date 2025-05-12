
import React from 'react';
import { Apple, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Download = () => {
  return (
    <section id="download" className="section-padding overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl bg-cta-gradient text-white p-8 md:p-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Start Your Journey Today
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-xl">
                Download 11WorldClub and take the first step towards becoming the best version of yourself.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-brand-blue hover:bg-gray-100 transition-all">
                  <Apple size={20} className="mr-2" />
                  <span>Download on App Store</span>
                </Button>
                
                <Button className="bg-white text-brand-green hover:bg-gray-100 transition-all">
                  <Play size={20} className="mr-2" />
                  <span>Get it on Google Play</span>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="flex items-center gap-6">
                <div className="bg-white p-3 rounded-xl shadow-lg">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500">
                    QR Code
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Scan to Download</p>
                  <p className="text-sm opacity-80">Quick access to 11WorldClub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
