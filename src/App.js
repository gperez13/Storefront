import React, { Component } from 'react';

import './App.css';
import AllListings from './AllListings/AllListings.js';
import Footer from './Footer/Footer.js';
import Header from './Header/Header.js';
import Home from './Home/Home.js';
import Item from './Item/Item.js';
import Cart from './Cart/Cart.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
      <Header/>
      <Home/>
      <AllListings/>
      <Item/>
      <Cart/>
      <Footer/>







      </div>
    );
  }
}

export default App;
