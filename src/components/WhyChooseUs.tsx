import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Proven Expertise',
      description: 'Our team brings decades of combined experience across multiple industries.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes and tangible value.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to achieve your goals.',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning consultancy with a track record of excellence.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Golden Apex</h2>
          <p className="mt-4 text-xl text-gray-600">
            We deliver excellence through expertise, innovation, and dedication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1"
            >
              <reason.icon className="h-12 w-12 text-[#D4AF37] mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;