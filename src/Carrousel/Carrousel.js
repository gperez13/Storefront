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
			                    
			                </div>
			                <div>
			                    <img src="./puppy2.jpg" />
			                    
			                </div>
			                <div>
			                    <img src="./puppy3.jpg" />
			                    
			                </div>
			            </Carousel>
	
				


				</div>




			</div>

			)
	}
}






export default Carrousel;