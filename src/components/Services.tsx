import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, BarChart, Briefcase, Users } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Technology',
    description: 'Digital transformation and innovation strategies to keep you ahead of the curve.',
    path: '/technology'
  },
  {
    icon: Briefcase,
    title: 'Business',
    description: 'Strategic planning and operational excellence to drive sustainable growth.',
    path: '/business'
  },
  {
    icon: BarChart,
    title: 'Finance',
    description: 'Financial modeling and investment strategies for optimal returns.',
    path: '/finance'
  },
  {
    icon: Users,
    title: 'Leadership',
    description: 'Executive coaching and organizational development for peak performance.',
    path: '/leadership'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.path}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-[#D4AF37] mb-4">
                <service.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;