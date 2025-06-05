import { NavLink } from 'react-router-dom';

const Navigation = () => {
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
    <nav>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink 
              to={item.path} 
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : 'nav-link'
              }
              end={item.path === '/'}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;