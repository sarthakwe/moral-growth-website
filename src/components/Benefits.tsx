
import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M18 17V9" />
          <path d="M13 17V5" />
          <path d="M8 17V13" />
        </svg>
      ),
      title: "Personal Growth",
      description: "Consistent, bite-sized learning that fits into your daily routine.",
      color: "bg-blue-50 text-brand-blue"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "Ethical Development",
      description: "Build a strong moral compass through intentional practice.",
      color: "bg-green-50 text-brand-green"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Self-Reflection",
      description: "Gain deeper insights into your thoughts, actions, and motivations.",
      color: "bg-purple-50 text-brand-purple"
    }
  ];

  return (
    <section id="benefits" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose 11WorldClub?</h2>
          <p className="section-subtitle">
            Transform your mindset, build meaningful habits, and become the most authentic version of yourself.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`mb-6 rounded-xl p-4 inline-block ${benefit.color}`}>
                {benefit.icon}
              </div>
              <h3 className="font-display font-semibold text-xl mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10k+", label: "Active Users" },
            { value: "30+", label: "Daily Lessons" },
            { value: "94%", label: "User Satisfaction" },
            { value: "4.8", label: "App Store Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
