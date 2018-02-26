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
      isDisplayed: true
    }
  }



  hideDisplay = () =>{
    const state = this.state;
    state.isDisplayed = false;
    console.log('Hi Gio!!!!')
    this.setState(state);
  }

  showDisplay = (e) =>{
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

            <Route path="/home"  render={(props) => <Home {...props} display={this.hideDisplay} />} />
            <Route path="/alllistings"  component={AllListings}/>
            <Route path="/item"  component={Item}/>
            <Route path="/cart"  component={Cart}/>





            <Footer/>
          </div>
         </Router>









      </div>
    );
  }
}

export default App;
