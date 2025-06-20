
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About PFMRS', path: '/about' },
    { name: 'Strategy & Results', path: '/strategy' },
    { name: 'Reports & Publications', path: '/reports' },
    { name: 'Reforms in Action', path: '/reforms' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const resources = [
    { name: 'PFM Strategy 2023-2028', path: '/strategy' },
    { name: 'M&E Framework', path: '/monitoring' },
    { name: 'Annual Reports', path: '/reports' },
    { name: 'Media Resources', path: '/media' },
    { name: 'FAQs', path: '/faqs' }
  ];

  return (
    <footer className="bg-secondary-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg">PFMRS</h3>
                <p className="text-gray-300 text-sm">National Treasury of Kenya</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Reforming Public Finance for a Better Kenya. Strengthening financial management systems across government for improved service delivery.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-200">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-200">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>National Treasury</p>
                  <p>Treasury Building, Harambee Avenue</p>
                  <p>P.O. Box 30007-00100</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300 text-sm">+254 20 2252299</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300 text-sm">info@pfmr.go.ke</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © 2024 Public Financial Management Reforms Secretariat. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                Terms of Use
              </Link>
              <button className="text-gray-300 hover:text-white transition-colors duration-200">
                English | Kiswahili
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
