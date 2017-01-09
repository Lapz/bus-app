import React, {Component} from 'react';
import StationItemMoreDetail from './StationItemMoreDetail.jsx';
import axios from 'axios';
import {createOutBoundUrl} from './Helpers/StationQuery';

class StationItem extends Component {
	constructor() {
		super()

		this.state = {
			stationOutboundTrains: []
		}
	}


    render() {
        var stationServices = this.props.stationServices.map((transportType,index) =>{
            return(
                <li key ={index}>
                {transportType}
                </li>
            )
        });
        return (

            <li>
                <div>

                    <h1>{this.props.stationName}</h1>
                    <p>Methods of transport offered: </p>
                    <ul>
                    {stationServices}
                    </ul>

                    <button onClick={this.handleClick}>Show incoming Train</button>

                        
                </div>

            </li>
        );
    }

    handleClick = (e) => {
       console.log("More Info Clicked")
       this.props.handleTimeTableClick(this.props.stationId);
    }

	componentDidMount() { 
		var url = createOutBoundUrl(this.props.stationId);
		console.log(url);
	    axios.get(url)
        .then((response)=>{
            console.log(response.data)
        })
    }
}

export default StationItem;
