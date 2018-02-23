import React, { Component } from 'react'
import './Home.css';
import Carrousel from '../Carrousel/Carrousel.js';




class Home extends Component{

	render(){



		return(
			<div>
				<div id="home">
					<h3 class="header">Woah, check it out!</h3>

					<Carrousel/>
					<p>Featured Items up in hurrr!!!</p>
	
				


				</div>

			</div>

			)
	}
}






export default Home;