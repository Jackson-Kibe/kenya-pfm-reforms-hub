
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About PFM', path: '/about' },
    { name: 'Our Strategy', path: '/strategy' },
    { name: 'Development Partners', path: '/partners' },
    { name: 'PFM Reform Areas', path: '/reform-areas' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-primary'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-primary' : 'bg-white'
            } group-hover:scale-110 shadow-lg`}>
              <span className={`font-bold text-xl lg:text-2xl transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-primary'
              }`}>P</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-poppins font-bold text-xl lg:text-2xl transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                PFMRS
              </h1>
              <p className={`text-sm lg:text-base transition-colors duration-300 ${
                isScrolled ? 'text-secondary-foreground' : 'text-blue-100'
              }`}>
                National Treasury of Kenya
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-poppins font-medium hover:scale-105 whitespace-nowrap ${
                  isScrolled 
                    ? 'text-secondary-foreground hover:text-primary hover:bg-accent hover:shadow-md'
                    : 'text-white hover:text-blue-100 hover:bg-white/10 hover:shadow-lg'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className={`hidden sm:flex transition-all duration-300 hover:scale-110 hover:shadow-md ${
                isScrolled ? 'text-secondary-foreground hover:text-primary hover:bg-accent' : 'text-white hover:text-blue-100 hover:bg-white/10'
              }`}
            >
              <Search className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className={`lg:hidden transition-all duration-300 hover:scale-110 ${
                isScrolled ? 'text-secondary-foreground hover:bg-accent' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-in shadow-lg">
            <nav className="py-4">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-3 text-secondary-foreground hover:text-primary hover:bg-accent transition-all duration-200 font-poppins font-medium hover:scale-105 hover:shadow-sm animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
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
