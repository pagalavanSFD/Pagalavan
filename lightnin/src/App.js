// import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Product from './components/pages/product';
import Shop from './components/pages/shop';
import ShopCategory from './components/pages/ShopCategory';

import LoginSignUp from './components/pages/LoginSignUp';
import Footer from './components/Footer/Footer';
import FAQs from './components/FAQs/FAQs';
import Signup from './components/pages/signin';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/Services' element={<ShopCategory category="Service"/>}/>
      <Route path='/Products' element={<ShopCategory category="Product"/>}/>
      <Route path='/About' element={<ShopCategory category="About"/>}/>
      <Route path="/product" element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
        </Route>
        {/* <Route path='/cart' element={<Cart/>}/> */}
        <Route path='/login' element={<LoginSignUp/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
        <Route path='/FAQs' element={<FAQs/>}/>
    </Routes>
    <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
