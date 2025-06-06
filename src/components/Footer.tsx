import { Facebook, Twitter, Instagram, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Music2, href: 'https://spotify.com', label: 'Spotify' },
  ];

  return (
    <footer className="bg-black/90 backdrop-blur-lg py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link to="/" className="font-bold text-2xl mb-4 md:mb-0 hover:text-accent-400 transition-colors">
            BRUKLIN
          </Link>
          
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon p-2 hover:scale-110 transition-transform"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="https://bruklin.us/wp-content/uploads/2025/04/Electronic-Press-Kit-Bruklin-updated.pdf"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Grab Bruklin's Press Kit – Media Goodies Inside!
            </a>
          </div>
          
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Bruklin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;