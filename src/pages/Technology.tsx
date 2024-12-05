import React from 'react';
import { Brain, Cpu, Network, Lock, ArrowRight } from 'lucide-react';

const Technology = () => {
  const aiSolutions = [
    {
      icon: Brain,
      title: 'AI Strategy Development',
      description: 'We help organizations develop comprehensive AI strategies aligned with their business objectives.'
    },
    {
      icon: Cpu,
      title: 'Machine Learning Implementation',
      description: 'Custom ML solutions for process automation, predictive analytics, and decision support systems.'
    },
    {
      icon: Network,
      title: 'AI Integration',
      description: 'Seamless integration of AI systems with existing infrastructure and workflows.'
    },
    {
      icon: Lock,
      title: 'AI Governance',
      description: 'Establishing ethical AI frameworks and governance models for responsible AI adoption.'
    }
  ];

  const caseStudies = [
    {
      title: 'AI-Driven Process Automation',
      description: 'How we helped a Fortune 500 company achieve 70% reduction in processing time through AI implementation.',
      metrics: ['70% faster processing', '45% cost reduction', '99.9% accuracy']
    }
  ];

  const articles = [
    {
      title: 'The Future of AI in Enterprise',
      date: 'March 15, 2024',
      category: 'AI & Machine Learning'
    },
    {
      title: 'Implementing Ethical AI Frameworks',
      date: 'March 10, 2024',
      category: 'AI Governance'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative py-24">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Technology Consulting</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Transforming businesses through cutting-edge technology solutions and innovative digital strategies.
          </p>
        </div>
      </div>

      {/* AI Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">AI Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiSolutions.map((solution) => (
              <div key={solution.title} className="bg-gray-50 p-8 rounded-lg">
                <solution.icon className="h-12 w-12 text-[#D4AF37] mb-4" />
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Case Study</h2>
            {caseStudies.map((study) => (
              <div key={study.title}>
                <h3 className="text-2xl font-semibold mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {study.metrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                      <span className="text-[#D4AF37] font-bold">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <div key={article.title} className="bg-gray-50 p-6 rounded-lg">
                <span className="text-sm text-[#D4AF37] font-medium">{article.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{article.title}</h3>
                <p className="text-gray-500 text-sm">{article.date}</p>
                <button className="mt-4 inline-flex items-center text-[#D4AF37] hover:text-[#B08F2D]">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;