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

						<div class="container">
							<div class="row">

								<div class="col-1">
									<img id="nav-logo" src="./walrus.png"/>

								</div>



								<div class="col-1">
									<h4 class="header">ManaTee</h4>

								</div>



								<div class="col-10">

				                  <Link to="/Home"><p class="smoothScroll btn btn-default link">Home</p></Link>
				                  <Link to="/AllListings"><p class="smoothScroll btn btn-default link">Listings</p></Link>
				                  <Link to="/Item"><p class="smoothScroll btn btn-default link">Item</p></Link>
				                  <Link to="/Cart"><p class="smoothScroll btn btn-default link">Cart</p></Link>
				                  

								</div>
								

							</div>
						</div>


				</div>
			</div>

			)
	}
}






export default Header;