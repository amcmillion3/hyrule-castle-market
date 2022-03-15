import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { productData as data } from "./assets/product-data";
import Home from "./components/home";
import About from "./components/about";
import Products from './components/products';
import ProductDetails from './components/product-details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Hyrule Castle Market</h1>
          <Link to='/' >Home</Link>
          <Link to='/about' >About</Link>
          <Link to='/products' >Products</Link>
          <Link to='/bag' >Bag</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products data={data}/>} />
          <Route path='/products/:id' element={<ProductDetails data={data}/>} />
          {/* <Route path='/bag' element={<Bag />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
