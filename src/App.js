import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { productData as data } from "./assets/product-data";
import Home from "./components/Home";
import About from "./components/About";
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Bag from './components/Bag';

function App() {

  const [bagItems, setBagItems] = useState([]);

  function findBagItemIndex(item) {
    const bagItemIndex = bagItems.findIndex(bagItem => bagItem.title === item.title);
    return bagItemIndex;
  }

  function addToBag(item) {
    const bagItemIndex = findBagItemIndex(item);
    if (bagItemIndex === -1) {
      const updatedBagItems = [...bagItems, item];
      setBagItems(updatedBagItems);
    } else {
      const updatedBagItems = JSON.parse(JSON.stringify(bagItems));
      updatedBagItems[bagItemIndex].quantity++;
      setBagItems(updatedBagItems);
    }
  }

  function quantityUpdater(item, e) {
    const bagItemIndex = findBagItemIndex(item);
    const updatedItems = JSON.parse(JSON.stringify(bagItems));
    updatedItems[bagItemIndex].quantity = e.target.value;
    setBagItems(updatedItems);
  }

  function deleteItem(item) {
    const bagItemIndex = findBagItemIndex(item);
    const updatedBagItems = JSON.parse(JSON.stringify(bagItems)); 
    updatedBagItems.splice(bagItemIndex, 1);
    setBagItems(updatedBagItems);
  }

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
          <Route path='/products' element={<Products data={data} addToBag={addToBag}/>} />
          <Route path='/products/:id' element={<ProductDetails data={data} addToBag={addToBag}/>} />
          <Route 
            path='/bag' 
            element={<Bag 
              items={bagItems}
              quantityUpdater={quantityUpdater}
              deleteItem={deleteItem}
              />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
