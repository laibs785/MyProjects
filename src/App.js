import React, { useState } from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PlaceOrder } from './pages/placeorder/PlaceOrder';
import Cart from './pages/cart/Cart';
import { Home } from './pages/home/Home';
import { Footer } from './components/footer/Footer';
import Login from './components/loginpopup/Login';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();
  
  // Check if current path is '/cart'
  const isCartPage = location.pathname === '/cart';

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      {/* Only show Footer if not on cart page */}
      {!isCartPage && <Footer />}
    </>
  );
}

export default App;