import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog'
import Signin from './pages/Sigin'
import Signup from './pages/Signup'
import BurgerShop from './pages/BurgerShop'
import Dashboard from './pages/Dashboard'
import Articles from './pages/Articles';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/burger-shop" element={<BurgerShop />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/article/:id" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;