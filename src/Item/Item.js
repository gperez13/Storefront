import React, { Component } from 'react'
import './Item.css';




class Item extends Component{

	render(){



		return(
			<div>
				<div id="item">
					<h3 class="header">One is the loneliest number of them all :(</h3>
						<br/>


						<div class="item">
							<img class="item-picture" src="./walrus.png"/>
							<br/>
							<h6>Walrus</h6>
						</div>

						<div class="description">

							<p>The walrus (Odobenus rosmarus) is a large flippered marine
							 mammal with a discontinuous distribution about the North Pole 
							 in the Arctic Ocean and subarctic seas of the Northern Hemisphere. 
							 The walrus is the only living species in the family Odobenidae 
							 and genus Odobenus. This species is subdivided into three 
							 subspecies the Atlantic walrus (O. r. rosmarus) which lives 
							 in the Atlantic Ocean, the Pacific walrus (O. r. divergens) 
							 which lives in the Pacific Ocean, and O. r. laptevi, which lives 
							 in the Laptev Sea of the Arctic Ocean.</p>


						</div>
					
	
				


				</div>



			</div>

			)
	}
}






export default Item;