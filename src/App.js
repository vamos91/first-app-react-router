import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/blog/Blog'
import Signin from './pages/signin/Signin'
import Signup from './pages/signup/Signup'
import BurgerShop from './pages/burger/BurgerShop'
import Dashboard from './pages/Dashboard'
import Articles from './pages/Articles';
import NavigationBar from './components/navbar/NavigationBar';
import Todo from './pages/todo/TodoList'

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/burger-shop" element={<BurgerShop />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/article/:id" element={<Articles />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;