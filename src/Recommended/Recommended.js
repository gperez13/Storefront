import React, { Component } from 'react'
import './Recommended.css';





class Recommended extends Component{

	render(){

	const recs = this.props.foryou.map((r, i) => {
	return (
		<div class="recs" key={i}>
			<img class="recs-picture" src="./walrus.png"/>
			<h6>{r}</h6>
		</div>
		)
	});



		return(
			<div>
				<div id="recommended">
					<h3 class="header">Here are Your recommendations!</h3>

					{recs}
	
				


				</div>


			</div>

			)
	}
}






export default Recommended;