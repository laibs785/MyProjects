import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setShowLogin(false), 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="login">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="login-popup-container"
          >
            <div className="login-popup-title">
              <h2>{currState}</h2>
              <motion.img
                onClick={handleClose}
                src={assets.cross_icon}
                alt="Close"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
            <div className="login-popup-inputs">
              {currState === "Sign Up" && (
                <motion.input
                  type="text"
                  placeholder="Your name"
                  required
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <input type="email" placeholder="Your email" required />
              <input type="password" placeholder="Password" required />
            </div>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {currState === "Sign Up" ? "Create account" : "Login"}
            </motion.button>
            <div className="login-popup-condition">
              <input type="checkbox" required />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currState === "Login" ? (
              <p>
                Create a new account?{" "}
                <motion.span
                  onClick={() => setCurrState("Sign Up")}
                  className="create-acc"
                  whileHover={{ scale: 1.05 }}
                >
                  Click here
                </motion.span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <motion.span
                  onClick={() => setCurrState("Login")}
                  className="create-acc"
                  whileHover={{ scale: 1.05 }}
                >
                  Login here
                </motion.span>
              </p>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Login;