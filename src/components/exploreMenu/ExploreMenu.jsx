import React from 'react';
import './exploreMenu.css';
import { menu_list } from '../../assets/assets';
import { motion } from 'framer-motion';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore our menu
      </motion.h1>
      
      <motion.p 
        className='explore-menu-text'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Choose from a diverse menu featuring a delectable array
      </motion.p>
      
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => setCategory(prev => prev === item.menu_name ? 'all' : item.menu_name)}
            className='explore-menu-list-items'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            <img 
              className={category === item.menu_name ? 'active' : ""} 
              src={item.menu_image} 
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </motion.div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu;