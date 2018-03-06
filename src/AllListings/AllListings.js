import React, { Component } from 'react'
import './AllListings.css';
import Footer from '../Footer/Footer.js';




class AllListings extends Component{

	render(){

		
		console.log(this.props.test.data);

		const babs = this.props.test.data.map((f,i) => {
			return (
				<div class="listing row" key={i}>
					<div class="col-6">
						<img class="listing-picture" src="./walrus.png"/>
						<h6>{f.name}</h6>
					</div>

					

				</div>
			)

		});

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

					<div class="container">
						<div>{babs}</div>
					</div>



	
			




				</div>


			</div>

			)
	}
}






export default AllListings;