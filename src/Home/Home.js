import React, { Component } from 'react'
import './Home.css';
import Carrousel from '../Carrousel/Carrousel.js';




class Home extends Component{

	constructor(props) {
		super(props);

	}


	handleDisplay= (e) =>{
		
		console.log(this.props);
	}

	render(){



		return(
			<div>
				<div id="home">
					<h3 class="header">Woah, check it out!</h3>

					<Carrousel/>
					<p>Featured Items up in hurrr!!!</p>
						
					<button onClick={this.props.display}>Display</button>
				


				</div>

			</div>

			)
	}
}






export default Home;