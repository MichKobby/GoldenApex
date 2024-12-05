import React from 'react';
import { TrendingUp, Target, Users, BarChart2, ArrowRight } from 'lucide-react';

const Business = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Strategic Planning',
      description: 'Develop comprehensive business strategies aligned with your organizational goals.'
    },
    {
      icon: Target,
      title: 'Market Analysis',
      description: 'In-depth market research and competitive analysis to identify opportunities.'
    },
    {
      icon: Users,
      title: 'Organizational Design',
      description: 'Optimize your organizational structure for maximum efficiency and growth.'
    },
    {
      icon: BarChart2,
      title: 'Performance Optimization',
      description: 'Improve operational efficiency and business process management.'
    }
  ];

  const insights = [
    {
      title: 'Digital Transformation Success Stories',
      description: 'Learn how leading companies are leveraging digital technologies to transform their operations.',
      date: 'March 12, 2024'
    },
    {
      title: 'The Future of Work',
      description: 'Exploring emerging trends in workplace dynamics and organizational structure.',
      date: 'March 8, 2024'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative py-24">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Business Consulting</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Strategic solutions to drive growth, optimize operations, and achieve sustainable success.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-50 p-8 rounded-lg">
                <service.icon className="h-12 w-12 text-[#D4AF37] mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((insight) => (
              <div key={insight.title} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3">{insight.title}</h3>
                <p className="text-gray-600 mb-4">{insight.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{insight.date}</span>
                  <button className="inline-flex items-center text-[#D4AF37] hover:text-[#B08F2D]">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;