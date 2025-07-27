import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';
import { motion } from 'framer-motion';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        For Better Experience Download <br /> Tomato App
      </motion.p>
      
      <motion.div 
        className="app-download-platforms"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.img 
          src={assets.play_store} 
          alt="Google Play Store"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        <motion.img 
          src={assets.app_store} 
          alt="Apple App Store"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </motion.div>
    </div>
  );
}

export default AppDownload;