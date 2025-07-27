import React from 'react';
import './Header.css';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="header">
      <div className="header-overlay"></div>
      <div className="header-contents">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="header-title"
        >
          Order your <span className="highlight">favourite</span> food here
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="header-subtitle"
        >
          "Choose from a diverse menu featuring a delectable array of dishes crafted with the perfect blend of tradition and innovation."
        </motion.p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="header-button"
        >
          View Menu
        </motion.button>
      </div>
    </header>
  );
};

export default Header;