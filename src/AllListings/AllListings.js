import React, { Component } from 'react'
import './AllListings.css';
import Footer from '../Footer/Footer.js';




class AllListings extends Component{

	render(){

	

		const tori = this.props.invent.map((t, i) => {
			return (
				<div class="listing" key={i}>
					<img class="listing-picture" src="./walrus.png"/>
					<h6>{t}</h6>
				</div>
			)
		});


		return(
			<div>
				<div id="allListings">
					<h3 class="header">Here are all the items!</h3>


					<div>{tori}</div>

	
			




				</div>


			</div>

			)
	}
}






export default AllListings;