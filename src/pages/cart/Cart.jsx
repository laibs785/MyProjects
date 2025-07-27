import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../components/context/StoreContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingBag, FiArrowRight, FiPlus, FiMinus, FiX } from "react-icons/fi";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  
  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "FOODIE20") {
      setDiscount(getTotalCartAmount() * 0.2); // 20% discount
    } else {
      alert("Invalid promo code");
    }
  };

  const totalAmount = getTotalCartAmount();
  const deliveryFee = 2;
  const grandTotal = totalAmount + deliveryFee - discount;

  return (
    <div className="cart">
      {totalAmount > 0 ? (
        <>
          <motion.div 
            className="cart-items"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="cart-items-title">
              <p>Item</p>
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            
            <AnimatePresence>
              {food_list.map((item, index) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <motion.div 
                      key={index}
                      className="cart-items-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <img src={item.image} alt={item.name} />
                      <p>{item.name}</p>
                      <p>${item.price.toFixed(2)}</p>
                      <div className="quantity-control">
                        <button 
                          className="quantity-btn"
                          onClick={() => removeFromCart(item._id)}
                        >
                          <FiMinus />
                        </button>
                        <span>{cartItems[item._id]}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => addToCart(item._id)}
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                      <button 
                        className="remove-btn"
                        onClick={() => {
                          removeFromCart(item._id);
                          // Animation will handle the removal
                        }}
                      >
                        <FiX />
                      </button>
                    </motion.div>
                  );
                }
                return null;
              })}
            </AnimatePresence>
          </motion.div>

          <div className="cart-bottom">
            <motion.div 
              className="cart-total"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>Order Summary</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>${totalAmount.toFixed(2)}</p>
                </div>
                {discount > 0 && (
                  <>
                    <div className="cart-total-details">
                      <p>Discount</p>
                      <p style={{ color: '#4CAF50' }}>-${discount.toFixed(2)}</p>
                    </div>
                    <hr />
                  </>
                )}
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>${deliveryFee.toFixed(2)}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>${grandTotal.toFixed(2)}</b>
                </div>
              </div>
              <motion.button
                className="checkout-btn"
                onClick={() => navigate('/order')}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceed to Checkout <FiArrowRight />
              </motion.button>
            </motion.div>

            <motion.div 
              className="cart-promocode"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div>
                <p>Have a promo code?</p>
                <div className="cart-promocode-input">
                  <input 
                    type="text" 
                    placeholder="Enter promo code" 
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button 
                    className="promo-submit-btn"
                    onClick={applyPromoCode}
                  >
                    Apply
                  </button>
                </div>
                {discount > 0 && (
                  <p style={{ color: '#4CAF50', marginTop: '0.5rem' }}>
                    🎉 20% discount applied!
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </>
      ) : (
        <motion.div 
          className="empty-cart"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FiShoppingBag size={80} color="#ff6b35" />
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added anything to your cart yet</p>
          <motion.button
            className="shop-btn"
            onClick={() => navigate('/')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Continue Shopping
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;