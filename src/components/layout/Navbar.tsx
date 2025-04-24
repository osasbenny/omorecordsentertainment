import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img src="/logo.png" alt="F.OMO Records" className="w-8 h-8" />
          <span className={`text-xl font-bold tracking-tight font-display ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}>
            F.OMO Records
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <NavItem to="/" onClick={closeMenu} isScrolled={isScrolled}>Home</NavItem>
            <NavItem to="/about" onClick={closeMenu} isScrolled={isScrolled}>About</NavItem>
            <NavItem to="/artists" onClick={closeMenu} isScrolled={isScrolled}>Artists</NavItem>
            <NavItem to="/events" onClick={closeMenu} isScrolled={isScrolled}>Events</NavItem>
            <NavItem to="/media" onClick={closeMenu} isScrolled={isScrolled}>Media</NavItem>
            <NavItem to="/contact" onClick={closeMenu} isScrolled={isScrolled}>Contact</NavItem>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`p-2 md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden bg-white bg-opacity-95 animate-fade-in pt-20">
          <nav className="w-full px-4">
            <ul className="flex flex-col items-center space-y-6 text-lg">
              <NavItem to="/" onClick={closeMenu} isScrolled={true}>Home</NavItem>
              <NavItem to="/about" onClick={closeMenu} isScrolled={true}>About</NavItem>
              <NavItem to="/artists" onClick={closeMenu} isScrolled={true}>Artists</NavItem>
              <NavItem to="/events" onClick={closeMenu} isScrolled={true}>Events</NavItem>
              <NavItem to="/media" onClick={closeMenu} isScrolled={true}>Media</NavItem>
              <NavItem to="/contact" onClick={closeMenu} isScrolled={true}>Contact</NavItem>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
  isScrolled: boolean;
}

const NavItem = ({ to, children, onClick, isScrolled }: NavItemProps) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative px-2 py-1 font-medium transition-colors ${
          isActive 
            ? 'text-primary-600' 
            : isScrolled 
              ? 'text-gray-900 hover:text-primary-600'
              : 'text-white hover:text-primary-200'
        }`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  </li>
);

export default Navbar;