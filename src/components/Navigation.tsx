import { NavLink } from 'react-router-dom';
import { Music2, User, Disc, Video, Newspaper, BookOpen, Mail, Image } from 'lucide-react';

const Navigation = () => {
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

  return (
    <nav>
      <ul className="flex space-x-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  `nav-link flex items-center gap-2 ${isActive ? 'nav-link-active' : ''}`
                }
                end={item.path === '/'}
              >
                <Icon size={18} />
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;