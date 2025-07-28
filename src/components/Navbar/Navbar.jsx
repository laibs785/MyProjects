import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { FiSearch, FiShoppingCart, FiX, FiMenu } from 'react-icons/fi';

export const Navbar = ({ setShowLogin }) => {
  const [activeMenu, setActiveMenu] = useState('home');
  const { getTotalCartAmount } = useContext(StoreContext);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'menu', label: 'Menu', href: '#explore-menu' },
    { id: 'mobile-app', label: 'Mobile App', href: '#app-download' },
    { id: 'contact-us', label: 'Contact Us', href: '#footer' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setShowSearch(false);
    setSearchQuery('');
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setShowSearch(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-inner">
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button hidden-on-desktop" 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <FiMenu />
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className="navbar-logo" 
          onClick={() => setActiveMenu('home')}
        >
          FoodExpress
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-menu hidden-on-mobile">
          {navItems.map((item) => (
            <div key={item.id} className="navbar-menu-item">
              {item.path ? (
                <Link
                  to={item.path}
                  className={`navbar-menu-link ${activeMenu === item.id ? 'active' : ''}`}
                  onClick={() => setActiveMenu(item.id)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={`navbar-menu-link ${activeMenu === item.id ? 'active' : ''}`}
                  onClick={() => setActiveMenu(item.id)}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Right Side Icons and Button */}
        <div className="navbar-right">
          {/* Desktop Search */}
          <div className={`search-container hidden-on-mobile ${showSearch ? 'active' : ''}`}>
            {showSearch ? (
              <form onSubmit={handleSearch} className="search-form">
                <input
                  type="text"
                  placeholder="Search food, drinks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="search-submit">
                  <FiSearch />
                </button>
                <button 
                  type="button" 
                  className="search-close" 
                  onClick={() => setShowSearch(false)}
                >
                  <FiX />
                </button>
              </form>
            ) : (
              <FiSearch className="navbar-icon" onClick={toggleSearch} />
            )}
          </div>

          {/* Mobile Search */}
          <div className={`mobile-search-container hidden-on-desktop ${showSearch ? 'active' : ''}`}>
            {showSearch ? (
              <form onSubmit={handleSearch} className="mobile-search-form">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="search-submit">
                  <FiSearch />
                </button>
                <button 
                  type="button" 
                  className="search-close" 
                  onClick={() => setShowSearch(false)}
                >
                  <FiX />
                </button>
              </form>
            ) : (
              <FiSearch className="navbar-icon" onClick={toggleSearch} />
            )}
          </div>

          {/* Cart Icon */}
          <div className="navbar-cart">
            <Link to="/cart">
              <FiShoppingCart className="navbar-icon" />
              {getTotalCartAmount() > 0 && <span className="cart-dot"></span>}
            </Link>
          </div>

          {/* Sign In Button */}
          <button 
            className={`sign-in-button ${showSearch ? 'hidden-on-mobile' : ''}`}
            onClick={() => setShowLogin(true)}
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu hidden-on-desktop ${mobileMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <div key={item.id} className="mobile-menu-item">
            {item.path ? (
              <Link
                to={item.path}
                className="mobile-menu-link"
                onClick={() => {
                  setActiveMenu(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </Link>
            ) : (
              <a
                href={item.href}
                className="mobile-menu-link"
                onClick={() => {
                  setActiveMenu(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};