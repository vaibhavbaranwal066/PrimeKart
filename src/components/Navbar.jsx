import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, User, Menu, X, Sun, Moon, Search } from 'lucide-react';
import { useCartStore, useThemeStore, useWishlistStore } from '../store';
import { useScrollPosition } from '../hooks';
import './Navbar.css';

const Navbar = ({ onCartClick, onSearchOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { items: cartItems } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();
  const { theme, toggleTheme } = useThemeStore();
  const scrollPosition = useScrollPosition();

  const cartCount = cartItems.length;
  const wishlistCount = wishlistItems.length;

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Categories', path: '/categories' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      className={`navbar ${scrollPosition > 50 ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="logo-icon">✨</span>
          <span className="logo-text">PrimeKart</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="navbar__menu">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link to={item.path} className="navbar__link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="navbar__actions">
          <button
            className="navbar__action-btn"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <button
            className="navbar__action-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link to="/wishlist" className="navbar__action-btn navbar__action-btn--with-badge">
            <Heart size={20} />
            {wishlistCount > 0 && <span className="badge-count">{wishlistCount}</span>}
          </Link>

          <button
            className="navbar__action-btn navbar__action-btn--with-badge"
            onClick={onCartClick}
            aria-label="Cart"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="badge-count">{cartCount}</span>}
          </button>

          <Link to="/profile" className="navbar__action-btn">
            <User size={20} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="navbar__mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="navbar__mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}

      {/* Search Bar */}
      {searchOpen && (
        <motion.div
          className="navbar__search"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <input
            type="text"
            placeholder="Search products..."
            className="navbar__search-input"
            autoFocus
            onChange={(e) => onSearchOpen?.(e.target.value)}
          />
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
