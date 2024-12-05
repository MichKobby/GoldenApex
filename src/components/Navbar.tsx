import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: [
        { name: 'Technology', href: '/technology' },
        { name: 'Business', href: '/business' },
        { name: 'Finance', href: '/finance' },
        { name: 'Leadership', href: '/leadership' }
      ]
    },
    { name: 'Insights', href: '/insights' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#D4AF37]">Golden Apex</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="inline-flex items-center text-gray-700 hover:text-[#D4AF37] px-3 py-2 text-sm font-medium cursor-pointer">
                    <span>{item.name}</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                    <div className="invisible group-hover:visible absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-1 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-200">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37]"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-[#D4AF37] px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                {item.dropdown ? (
                  <>
                    <div className="px-3 py-2 text-base font-medium text-gray-700">
                      {item.name}
                    </div>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-[#D4AF37] hover:bg-gray-50 pl-6"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#D4AF37] hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;