import './App.css'
// import {createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout/layout';
import Home from './pages/home/home';
import Shop from './pages/shop.jsx/shop';
import Contact from './pages/contact/contact';
import Cart from './pages/cart/cart';
import Productdes from './pages/productdes/productdes';
// import Sidebar from './pages/sidebar/sidebar';
//import { Provider } from 'react-redux';
// import {shopping} from './pages/shopping/shopping';
//import { store } from './pages/shopping/shoppingcart';
// import ShoppingProvider from './pages/shopping/shopping';
import { CartProvider } from './pages/shopping/shopping';
// import { Sidebar } from '@syncfusion/ej2-react-navigations';


function App() {
 


 
  
  return (
    <>
      <BrowserRouter>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart ></Cart>} />
          <Route path={`productdes/:id`} element={<Productdes/>}/>
        </Route>
      </Routes>
      </CartProvider>
    </BrowserRouter>
     </> 
  )
}

export default App
