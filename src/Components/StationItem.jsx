import React, {Component} from 'react';
import StationItemMoreDetail from './StationItemMoreDetail.jsx';
import axios from 'axios';
import {createOutBoundUrl} from '../Helpers/StationQuery';

class StationItem extends Component {
	constructor() {
		super()

		this.state = {
			stationOutboundTrains: []
		}
	}
    render() {
        return (

            <li>
                <div onClick={this.handleClick}>

                    <h1>{this.props.stationName}</h1>

                    <StationItemMoreDetail stationId={this.props.stationId} stationInfo = {this.state.stationInfor}/>

                </div>

            </li>
        );
    }

    handleClick = (e) => {
        //console.log(this.props.stationId);
    }

		componentDidMount(){
			var url = createOutBoundUrl(this.props.stationId);
			console.log(url);
	  axios.get(url)
		.then((response)=>{
			console.log(response.data)
})
}
}

export default StationItem;
