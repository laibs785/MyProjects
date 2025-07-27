import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { motion } from 'framer-motion';

export const Footer = () => {
  const footerLinks = [
    { text: 'Home' },
    { text: 'About us' },
    { text: 'Delivery' },
    { text: 'Privacy Policy' }
  ];

  const contactInfo = [
    { text: '03345312247' },
    { text: 'laiba47163@gmail.com' }
  ];

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        {/* Left Section */}
        <motion.div 
          className="footer-content-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={assets.logo} alt="Company Logo" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ispe jdgaf khdgdbkh kdhgsgjbd mnbvc lkjhgfd lkjhgfkjh kjhg lkj lkjh</p>
          <div className="footer-social-icons">
            <motion.img 
              src={assets.facebook_icon} 
              alt="Facebook"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.img 
              src={assets.twitter_icon} 
              alt="Twitter"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.img 
              src={assets.linkedin_icon} 
              alt="LinkedIn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
        </motion.div>

        {/* Center Section */}
        <motion.div 
          className="footer-content-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2>Company</h2>
          <ul>
            {footerLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {link.text}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="footer-content-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>Get in Touch</h2>
          <ul>
            {contactInfo.map((info, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {info.text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      <hr />
      
      <motion.p 
        className='footer-copyright'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Copyright 2025 @ tomato.com - All rights reserved
      </motion.p>
    </div>
  );
}