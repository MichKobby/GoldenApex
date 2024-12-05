import React from 'react';
import { DollarSign, PieChart, TrendingUp, Shield, ArrowRight } from 'lucide-react';

const Finance = () => {
  const services = [
    {
      icon: DollarSign,
      title: 'Financial Planning',
      description: 'Strategic financial planning and analysis for sustainable growth.'
    },
    {
      icon: PieChart,
      title: 'Investment Strategy',
      description: 'Optimize investment portfolios and capital allocation.'
    },
    {
      icon: TrendingUp,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies.'
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'Ensure regulatory compliance and financial governance.'
    }
  ];

  const insights = [
    {
      title: 'ESG Investment Trends',
      description: 'Understanding the growing importance of environmental, social, and governance factors in investment decisions.',
      date: 'March 15, 2024'
    },
    {
      title: 'Digital Finance Transformation',
      description: 'How digital technologies are reshaping financial services and operations.',
      date: 'March 10, 2024'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative py-24">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Financial Advisory</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Expert financial guidance to optimize your organization's financial performance and growth.
          </p>
        </div>
      </div>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Financial Services</h2>
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

      {/* Market Insights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Market Insights</h2>
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

export default Finance;