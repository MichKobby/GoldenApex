import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Golden Apex Advisory</h3>
            <p className="text-gray-400 mb-6">
              Guiding businesses to achieve their full potential through expert consulting in technology, business, finance, and leadership.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37]">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37]">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37]">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#D4AF37]">About Us</Link></li>
              <li><Link to="/technology" className="hover:text-[#D4AF37]">Technology</Link></li>
              <li><Link to="/business" className="hover:text-[#D4AF37]">Business</Link></li>
              <li><Link to="/finance" className="hover:text-[#D4AF37]">Finance</Link></li>
              <li><Link to="/leadership" className="hover:text-[#D4AF37]">Leadership</Link></li>
              <li><Link to="/team" className="hover:text-[#D4AF37]">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4AF37]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-[#D4AF37]">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-[#D4AF37]">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-[#D4AF37]">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            {new Date().getFullYear()} Golden Apex Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;