import React, { Component } from 'react'
import './Home.css';
import Carrousel from '../Carrousel/Carrousel.js';
import Recommended from '../Recommended/Recommended.js';




class Home extends Component{

	constructor(props) {
		super(props);

	}


	handleDisplay= (e) =>{
		
	
	}

	render(){



		return(
			<div>
				<div id="home">

					<Carrousel/>
					<h3 class="header">Woah, check it out!</h3>

					<Recommended foryou={this.props.recommendations}/>


				


				</div>

			</div>

			)
	}
}






export default Home;