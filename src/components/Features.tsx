
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v3m0 12v3" />
          <path d="M12 2a7 7 0 1 0 7 7" />
          <path d="M21 22l-2-1-2-1-2 1-2 1-2-1-2-1-2 1-2 1-2-1-2-1" />
          <path d="M7 12l2-1h6l2 1" />
        </svg>
      ),
      title: "Daily Moral Lessons",
      description: "Short, powerful insights to inspire ethical thinking and personal growth."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
      ),
      title: "Reflective Journaling",
      description: "Track your personal growth through guided, introspective writing prompts."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Community Support",
      description: "Connect with like-minded individuals on a journey of personal development."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 22h8" />
          <path d="M9 22V3l-3 2" />
          <path d="M15 3l-3 2v17" />
        </svg>
      ),
      title: "Goal Tracking",
      description: "Set, monitor, and achieve personal and ethical development goals."
    }
  ];

  return (
    <section id="features" className="section-padding bg-brand-neutral relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Grow Yourself, One Choice at a Time</h2>
          <p className="section-subtitle">
            11WorldClub is more than an app—it's a personal growth companion designed to help you cultivate ethical
            habits, reflect on your journey, and become the best version of yourself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="mb-6 text-brand-blue group-hover:text-brand-purple transition-colors duration-300 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="font-display font-semibold text-xl mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* App screenshot in landscape view */}
        <div className="mt-24 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 rounded-2xl blur-xl"></div>
            <div className="relative overflow-hidden rounded-xl border border-gray-100 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000" 
                alt="11WorldClub Dashboard" 
                className="w-full max-w-4xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
