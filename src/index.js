import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import StoreContextprovider from './components/context/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/MyProjects">
    <StoreContextprovider>
      <App />
    </StoreContextprovider>
  </BrowserRouter>
);

reportWebVitals();
