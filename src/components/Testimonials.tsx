
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "11WorldClub has been a game-changer in my personal development journey. The daily lessons are thought-provoking and practical.",
      name: "Sarah K.",
      role: "Young Professional",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
    },
    {
      quote: "I love how the app helps me stay accountable and make more intentional choices every day. It's become an essential part of my morning routine.",
      name: "Mike T.",
      role: "Student",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
    },
    {
      quote: "The community support and journaling features have truly helped me grow and understand myself better. Highly recommend to anyone on a self-improvement journey.",
      name: "Emma L.",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-brand-neutral relative">
      {/* Decorative element */}
      <div className="absolute inset-0 bg-gradient-radial from-white to-brand-neutral opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Users Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="mb-6 flex justify-center">
                <svg width="42" height="36" className="text-brand-blue/40">
                  <path
                    d="M13.14 8.92C15.35 4.21 17.56 1.84 20.16 0h1.68c-1.4 3.07-3.29 8.18-3.29 13.16 0 9.66 5.88 11.22 9.59 11.22 5.47 0 10.22-4.06 10.22-11.22 0-6.3-3.92-11.35-10.92-11.35C18.67 1.81 12.51 7.02 7.01 19.76c-3.36 7.7-4.76 12.19-4.76 16.24C2.25 47.59 9.26 54 19.18 54c8.96 0 13.86-4.34 16.88-9.45l-1.82-1.12c-2.38 3.22-6.16 6.86-13.44 6.86-8.96 0-14.84-5.46-14.84-15.19 0-3.5 1.4-8.4 3.5-13.72A57.3 57.3 0 0 0 13.14 8.92zM37.1 8.92C39.31 4.21 41.52 1.84 44.12 0h1.68c-1.4 3.07-3.3 8.18-3.3 13.16 0 9.66 5.88 11.22 9.6 11.22 5.46 0 10.21-4.06 10.21-11.22 0-6.3-3.92-11.35-10.92-11.35-8.76 0-14.84 5.21-20.42 17.95-3.36 7.7-4.76 12.19-4.76 16.24 0 11.6 7 18 16.93 18 8.96 0 13.86-4.34 16.88-9.45l-1.82-1.12c-2.38 3.22-6.16 6.86-13.44 6.86-8.96 0-14.84-5.46-14.84-15.19 0-3.5 1.4-8.4 3.5-13.72A56.18 56.18 0 0 0 37.1 8.92z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p className="text-gray-600 mb-6 text-center">{testimonial.quote}</p>
              <div className="flex items-center justify-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover rounded-full border-2 border-white shadow-sm mr-4" 
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
