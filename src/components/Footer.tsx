import React from 'react';
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
              <a href="#" className="text-gray-400 hover:text-[#D4AF37]">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37]">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37]">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#D4AF37]">About Us</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Services</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Our Team</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#D4AF37]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Golden Apex Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;