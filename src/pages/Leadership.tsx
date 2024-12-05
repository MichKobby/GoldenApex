import React from 'react';
import { Users, Target, Lightbulb, Award, ArrowRight } from 'lucide-react';

const Leadership = () => {
  const services = [
    {
      icon: Users,
      title: 'Executive Coaching',
      description: 'One-on-one coaching for senior executives and emerging leaders.'
    },
    {
      icon: Target,
      title: 'Leadership Development',
      description: 'Comprehensive programs to develop next-generation leaders.'
    },
    {
      icon: Lightbulb,
      title: 'Change Management',
      description: 'Guide organizations through transformational change.'
    },
    {
      icon: Award,
      title: 'Team Excellence',
      description: 'Build and nurture high-performing leadership teams.'
    }
  ];

  const programs = [
    {
      title: 'Executive Leadership Program',
      duration: '12 weeks',
      description: 'Comprehensive leadership development program for senior executives.',
      features: ['Strategic thinking', 'Decision making', 'Change management', 'Team building']
    },
    {
      title: 'Emerging Leaders Program',
      duration: '8 weeks',
      description: 'Designed for high-potential managers and future leaders.',
      features: ['Leadership fundamentals', 'Communication skills', 'Problem solving', 'Innovation']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative py-24">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Leadership Development</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Developing visionary leaders who drive organizational success and innovation.
          </p>
        </div>
      </div>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Leadership Services</h2>
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

      {/* Leadership Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-[#D4AF37] mb-4">Duration: {program.duration}</p>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-2">
                  {program.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Target className="h-4 w-4 text-[#D4AF37] mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 inline-flex items-center text-[#D4AF37] hover:text-[#B08F2D]">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;