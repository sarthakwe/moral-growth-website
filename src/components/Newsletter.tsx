
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Newsletter = () => {
  return (
    <section className="section-padding bg-brand-neutral">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title">Stay Connected</h2>
            <p className="text-xl text-gray-600">
              Join our community and receive updates, exclusive content, and inspiration.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <form>
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    id="email"
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Optional message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-blue" 
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-brand-blue text-white hover:bg-blue-600 transition"
                >
                  Get Updates
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
