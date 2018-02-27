import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './App.css';
import AllListings from './AllListings/AllListings.js';
import Footer from './Footer/Footer.js';
import Header from './Header/Header.js';
import Home from './Home/Home.js';
import Item from './Item/Item.js';
import Cart from './Cart/Cart.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      isDisplayed: true,
      recs: ['Peanut Butter Wafers', 'Hair Pomade', 'Rancillio Grinder', 'Guitar Pick Set', 'Rubber Gloves', 'Tweezers'],
      inventory: ['Blood Orange Wax', 'Bacon Scented Cellophane', 'Black Styrephoam Scrub', 'Bottled Peach Ambar', 'Yiddish Muffin']
    }
  }



  hideDisplay = () =>{
    const state = this.state;
    state.isDisplayed = false;
    console.log('Hi Gio!!!!')
    this.setState(state);
  }

  showDisplay = () =>{
    const state = this.state;
    state.isDisplayed = true;
    this.setState(state);
  }







  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>

            <Route path="/home"  render={(props) => <Home {...props} display={this.hideDisplay} recommendations={this.state.recs}/>} />
            <Route path="/alllistings"  render={(props) => <AllListings {...props} invent={this.state.inventory} />} />
            <Route path="/item"  render={(props) => <Item {...props} recommendations={this.recs} invent={this.inventory}/>}/>} />
            <Route path="/cart"  render={(props) => <Cart {...props} display={this.hideDisplay} />} />





            <Footer/>
          </div>
         </Router>









      </div>
    );
  }
}

export default App;
