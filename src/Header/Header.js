import React, { Component } from 'react'
import './Header.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';



class Header extends Component{

	render(){



		return(
			<div>
				<div id="nav">
					<h3 class="header">Navigation</h3>

                  <Link to="/Home"><p class="smoothScroll btn btn-default">Home</p></Link>
                  <Link to="/AllListings"><p class="smoothScroll btn btn-default">Listings</p></Link>
                  <Link to="/Item"><p class="smoothScroll btn btn-default">Item</p></Link>
                  <Link to="/Cart"><p class="smoothScroll btn btn-default">Cart</p></Link>
	
				


				</div>




			</div>

			)
	}
}






export default Header;