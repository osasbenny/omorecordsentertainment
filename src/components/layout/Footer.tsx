import { Link } from 'react-router-dom';
import { Disc3, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="F.OMO Records" className="w-12 h-12" />
              <span className="text-xl font-bold tracking-tight font-display">
                F.OMO Records
              </span>
            </Link>
            <p className="mb-4 text-gray-400">
              Bringing the best of music to the global stage. Discover, experience, 
              and celebrate exceptional talent with F.OMO Records Entertainment.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href="#" icon={<Facebook size={20} />} label="Facebook" />
              <SocialLink href="#" icon={<Youtube size={20} />} label="YouTube" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/artists">Our Artists</FooterLink>
              <FooterLink to="/events">Events</FooterLink>
              <FooterLink to="/media">Media</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">34 East Main Street</p>
              <p className="mb-2">Ayer, MA 01432, USA</p>
              <p className="mb-2">info@fomorecords.com</p>
              <p className="mb-2">+1 347-845-2425</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for the latest updates on artists, 
              events, and exclusive content.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} F.OMO Records Entertainment. 
            Designed by <a 
              href="https://wa.me/message/DNWFRNWQULOSB1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-500 hover:text-accent-400 transition-colors"
            >
              Cactus Digital Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-primary-600 transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <li>
    <Link
      to={to}
      className="text-gray-400 hover:text-white transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Footer;