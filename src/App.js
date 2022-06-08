import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/notFound'
import Layout from './components/Layout'



function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path='cart' element={<Cart />}/>
        <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
