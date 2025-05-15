import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import {BrowserRouter , Routes ,Route} from 'react-router-dom';
import Signup from './landing_page/signup/Signup.js'
import Pricing from './landing_page/home/Pricing.js';
import Footer from './landing_page/Footer.js';
import Navbar from './landing_page/home/Navbar.js';
import SupportPage from './landing_page/support/SupportPage.js'
import NotFound from './landing_page/NotFound.js';
import AboutPage from './landing_page/about/AboutPage.js';
import ProductsPage from './landing_page/products/ProductsPage.js';
import PricingPage from './landing_page/pricing/PricingPage.js';
// import { Link } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/product' element={<ProductsPage/>}/>
  <Route path='/support' element={<SupportPage/>}/>
  <Route path='/pricing' element={<PricingPage/>}/>
  <Route path='*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

