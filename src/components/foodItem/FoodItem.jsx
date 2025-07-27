import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../context/StoreContext';
import { motion } from 'framer-motion';

export const FoodItem = ({id, name, price, description, image}) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className='food-item'>
        <div className="food-item-img-container">
          <img className='food-item-image' src={image} alt={name} />
          {!cartItems[id] ? (
            <motion.img 
              className='add'
              onClick={() => addToCart(id)}
              src={assets.add_icon_white} 
              alt='Add to cart'
              initial={{ scale: 0.9 }}
              animate={{ scale: isHovered ? 1.1 : 0.9 }}
              transition={{ type: "spring", stiffness: 500 }}
            />
          ) : (
            <motion.div 
              className='food-item-counter'
              initial={{ scale: 0.9 }}
              animate={{ scale: isHovered ? 1.05 : 0.9 }}
            >
              <img 
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red} 
                alt='Remove'
              />
              <p>{cartItems[id]}</p>
              <img 
                onClick={() => addToCart(id)}
                src={assets.add_icon_green} 
                alt='Add'
              />
            </motion.div>
          )}
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="Rating" />
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </motion.div>
  );
}