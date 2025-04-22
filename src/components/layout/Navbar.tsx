import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Disc3 } from 'lucide-react';

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
          <Disc3 className="w-8 h-8 text-primary-600" />
          <span className="text-xl font-bold tracking-tight font-display">
            Omorecords
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <NavItem to="/" onClick={closeMenu}>Home</NavItem>
            <NavItem to="/about" onClick={closeMenu}>About</NavItem>
            <NavItem to="/artists" onClick={closeMenu}>Artists</NavItem>
            <NavItem to="/events" onClick={closeMenu}>Events</NavItem>
            <NavItem to="/media" onClick={closeMenu}>Media</NavItem>
            <NavItem to="/contact" onClick={closeMenu}>Contact</NavItem>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden"
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
              <NavItem to="/" onClick={closeMenu}>Home</NavItem>
              <NavItem to="/about" onClick={closeMenu}>About</NavItem>
              <NavItem to="/artists" onClick={closeMenu}>Artists</NavItem>
              <NavItem to="/events" onClick={closeMenu}>Events</NavItem>
              <NavItem to="/media" onClick={closeMenu}>Media</NavItem>
              <NavItem to="/contact" onClick={closeMenu}>Contact</NavItem>
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
}

const NavItem = ({ to, children, onClick }: NavItemProps) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative px-2 py-1 font-medium transition-colors ${
          isActive ? 'text-primary-600' : 'hover:text-primary-600'
        }`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  </li>
);

export default Navbar;