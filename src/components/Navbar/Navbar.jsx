import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

export const Navbar = ({ setShowLogin }) => {
  const [activeMenu, setActiveMenu] = useState('home');
  const { getTotalCartAmount } = useContext(StoreContext);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'Menu', label: 'Menu', href: '#explore-menu' },
    { id: 'mobile-app', label: 'Mobile App', href: '#app-download' },
    { id: 'contact-us', label: 'Contact Us', href: '#footer' }
  ];

  return (
    <nav className="navbar-container">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          FoodExpress
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          {navItems.map((item) => (
            <div 
              key={item.id}
              className="navbar-menu-item"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
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

        {/* Right side icons and button */}
        <div className="navbar-right">
          <FiSearch className="navbar-icon" />
          
          <div className="navbar-cart">
            <Link to="/cart">
              <FiShoppingCart className="navbar-icon" />
              {getTotalCartAmount() > 0 && (
                <span className="cart-badge">{getTotalCartAmount()}</span>
              )}
            </Link>
          </div>
          
          <button 
            className="sign-in-button"
            onClick={() => setShowLogin(true)}
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};