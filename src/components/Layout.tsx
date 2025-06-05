import { useState, useEffect } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import { Menu } from 'lucide-react';

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark-900/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="font-bold text-2xl text-white hover:text-accent-400 transition-colors">
            BRUKLIN
          </Link>
          
          <div className="hidden md:block">
            <Navigation />
          </div>
          
          <button 
            className="md:hidden text-white hover:text-accent-400 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={toggleMobileMenu} />
        )}
      </AnimatePresence>
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;