import React, { useContext } from "react";
import "./foodDisplay.css";
import { StoreContext } from "../context/StoreContext";
import { FoodItem } from "../foodItem/FoodItem";
import { motion } from "framer-motion";

export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Top Dishes Near You
      </motion.h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "all" || category === item.category) {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <FoodItem
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              </motion.div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};