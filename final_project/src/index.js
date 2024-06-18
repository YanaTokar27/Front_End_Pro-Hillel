import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
// import Preview from './pages/Preview/Preview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    <Products />
    {/* <Preview /> */}
  </React.StrictMode>
);

