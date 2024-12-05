import React from 'react';
import { Users, Award, Building2, Globe2 } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Clients Served',
    },
    {
      icon: Award,
      value: '98%',
      label: 'Client Satisfaction',
    },
    {
      icon: Building2,
      value: '15+',
      label: 'Years Experience',
    },
    {
      icon: Globe2,
      value: '20+',
      label: 'Countries',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gray-50 transform transition-all duration-300 hover:-translate-y-1"
            >
              <stat.icon className="h-8 w-8 text-[#D4AF37] mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;