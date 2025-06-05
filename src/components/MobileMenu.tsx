import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/mystory', label: 'My Story' },
    { path: '/discography', label: 'Discography' },
    { path: '/videos', label: 'Videos' },
    { path: '/press', label: 'Press' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
    { path: '/gallery', label: 'Gallery' },
  ];

  return (
    <motion.div 
      className="fixed inset-0 bg-black z-50 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container-custom py-5 flex justify-between items-center">
        <span className="font-bold text-2xl text-white">BRUKLIN</span>
        <button 
          onClick={onClose}
          className="text-white"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
      
      <nav className="flex-grow flex items-center justify-center">
        <ul className="flex flex-col space-y-6 text-center">
          {navItems.map((item) => (
            <motion.li 
              key={item.path}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * navItems.indexOf(item) }}
            >
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  `text-2xl ${isActive ? 'text-accent-400 font-medium' : 'text-white'}`
                }
                onClick={onClose}
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default MobileMenu;