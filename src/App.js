import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { productData as data } from "./assets/product-data";
import Home from "./components/home";
import About from "./components/about";
import Products from './components/products';
import ProductDetails from './components/ProductDetails';
import Bag from './components/bag';

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
    <div className="App bg-gradient-to-br from-white to-slate-300 overflow-hidden min-h-screen">
      <BrowserRouter>
        <nav className='text-3xl flex justify-center my-10 gap-4 bg-violet-700 text-white w-3/4 m-auto rounded'>
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
