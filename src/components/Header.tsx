
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      submenu: [
        { name: 'About PFMRS', path: '/about' },
        { name: 'FAQs', path: '/faqs' }
      ]
    },
    { name: 'Strategy & Results', path: '/strategy' },
    { name: 'M&E', path: '/monitoring' },
    { name: 'Reports', path: '/reports' },
    { name: 'Reforms in Action', path: '/reforms' },
    { name: 'News & Blog', path: '/news' },
    { name: 'Media Hub', path: '/media' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-primary'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg lg:text-xl">P</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-poppins font-bold text-lg lg:text-xl ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                PFMRS
              </h1>
              <p className={`text-xs lg:text-sm ${
                isScrolled ? 'text-secondary-foreground' : 'text-blue-100'
              }`}>
                National Treasury of Kenya
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 font-poppins font-medium ${
                    isScrolled 
                      ? 'text-secondary-foreground hover:text-primary hover:bg-accent'
                      : 'text-white hover:text-blue-100 hover:bg-white/10'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-3 text-secondary-foreground hover:text-primary hover:bg-accent first:rounded-t-lg last:rounded-b-lg transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className={`hidden sm:flex ${
                isScrolled ? 'text-secondary-foreground hover:text-primary' : 'text-white hover:text-blue-100'
              }`}
            >
              <Search className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className={`lg:hidden ${
                isScrolled ? 'text-secondary-foreground' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-in">
            <nav className="py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-3 text-secondary-foreground hover:text-primary hover:bg-accent transition-colors duration-200 font-poppins font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
