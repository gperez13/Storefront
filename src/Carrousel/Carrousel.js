import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import './Carrousel.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';





class Carrousel extends Component{

	render(){



		return(
			<div>
				<div id="carrousel">
					
						<Carousel>
			                <div>
			                    <img src="./puppy1.jpg" />
			                    <p className="legend">Legend 1</p>
			                </div>
			                <div>
			                    <img src="./puppy2.jpg" />
			                    <p className="legend">Legend 2</p>
			                </div>
			                <div>
			                    <img src="./puppy3.jpg" />
			                    <p className="legend">Legend 3</p>
			                </div>
			            </Carousel>
	
				


				</div>




			</div>

			)
	}
}






export default Carrousel;