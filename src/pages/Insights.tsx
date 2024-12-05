{/* Previous Insights.tsx content with updated hero section */}
import React from 'react';
import { Clock, User, Tag } from 'lucide-react';

const Insights = () => {
  const articles = [
    {
      title: 'The Future of AI in Enterprise',
      category: 'Technology',
      author: 'Dr. Sarah Chen',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Exploring how artificial intelligence is reshaping business operations and decision-making processes.'
    },
    {
      title: 'Sustainable Finance Trends',
      category: 'Finance',
      author: 'Michael Roberts',
      date: 'March 12, 2024',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Understanding the growing importance of ESG factors in investment decisions.'
    },
    {
      title: 'Leadership in the Digital Age',
      category: 'Leadership',
      author: 'Emma Thompson',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Key skills and strategies for leading teams in an increasingly digital workplace.'
    },
    {
      title: 'Digital Transformation Strategy',
      category: 'Business',
      author: 'James Wilson',
      date: 'March 8, 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: 'A comprehensive guide to successful digital transformation initiatives.'
    },
    {
      title: 'Cybersecurity Best Practices',
      category: 'Technology',
      author: 'Alex Rivera',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1675557009875-915f90033db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Essential cybersecurity measures for modern businesses.'
    },
    {
      title: 'Building High-Performance Teams',
      category: 'Leadership',
      author: 'Lisa Chen',
      date: 'March 3, 2024',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Strategies for developing and maintaining high-performing teams.'
    }
  ];

  return (
    <div className="pt-16">
      <div className="relative py-24">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Insights</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Expert analysis, industry trends, and thought leadership from our consultants.
          </p>
        </div>
      </div>

      {/* Rest of the Insights page content remains the same */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Tag className="h-4 w-4 mr-1" />
                    <span>{article.category}</span>
                    <Clock className="h-4 w-4 ml-4 mr-1" />
                    <span>{article.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <button className="mt-4 text-[#D4AF37] hover:text-[#B08F2D] font-medium">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter for the latest insights and industry trends.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="bg-[#D4AF37] text-white px-6 py-2 rounded-md hover:bg-[#B08F2D] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;