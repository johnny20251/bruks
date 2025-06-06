import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, Music2, User, Disc, Video, Newspaper, BookOpen, Mail, Image, Facebook, Twitter, Instagram } from 'lucide-react';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const navItems = [
    { path: '/', label: 'Home', icon: Music2 },
    { path: '/mystory', label: 'My Story', icon: User },
    { path: '/discography', label: 'Discography', icon: Disc },
    { path: '/videos', label: 'Videos', icon: Video },
    { path: '/press', label: 'Press', icon: Newspaper },
    { path: '/blog', label: 'Blog', icon: BookOpen },
    { path: '/contact', label: 'Contact', icon: Mail },
    { path: '/gallery', label: 'Gallery', icon: Image },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <motion.div 
      className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex flex-col"
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="container-custom py-5 flex justify-between items-center">
        <span className="font-bold text-2xl text-white">BRUKLIN</span>
        <button 
          onClick={onClose}
          className="text-white hover:text-accent-400 transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
      
      <nav className="flex-grow flex items-center justify-center">
        <ul className="flex flex-col space-y-6 text-center w-full px-8">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.li 
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => 
                    `flex items-center justify-center gap-3 text-2xl ${
                      isActive ? 'text-accent-400 font-medium' : 'text-white hover:text-accent-400'
                    } transition-colors duration-300`
                  }
                  onClick={onClose}
                  end={item.path === '/'}
                >
                  <Icon size={24} />
                  {item.label}
                </NavLink>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      <div className="container-custom py-8">
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent-400 transition-colors p-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (0.1 * index) }}
                aria-label={social.label}
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;