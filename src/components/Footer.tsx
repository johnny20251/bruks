import { Facebook, Twitter, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link to="/" className="font-bold text-2xl mb-4 md:mb-0">BRUKLIN</Link>
          
          <div className="flex space-x-4">
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TikTok">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M16.6 5.82C16.6 5.82 16.6 5.82 16.6 5.82C16.4 5.59 16.2 5.38 16.1 5.15C15.8 4.75 15.6 4.28 15.6 3.72C15.6 3.51 15.6 3.3 15.6 3H12.5V13.92C12.5 14.11 12.5 14.3 12.4 14.49C12.3 14.95 12 15.35 11.6 15.58C11.4 15.73 11.1 15.83 10.8 15.83C10.3 15.83 9.8 15.6 9.5 15.27C9.3 15.04 9.2 14.78 9.2 14.49C9.2 13.78 9.8 13.2 10.5 13.2C10.7 13.2 10.9 13.25 11.1 13.34V10.18C10.9 10.14 10.7 10.11 10.5 10.11C8.1 10.11 6.2 12.06 6.2 14.48C6.2 15.85 6.8 17.08 7.8 17.94C8.5 18.52 9.4 18.89 10.4 18.89C13 18.89 15 16.87 15 14.31V8.73C15.9 9.37 17 9.75 18.2 9.75V6.66C17.9 6.66 17.6 6.6 17.3 6.5C17 6.38 16.8 6.12 16.6 5.82Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X">
              <Twitter size={24} />
            </a>
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