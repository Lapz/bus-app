import React, {Component} from 'react';
import axios from 'axios';
import {createOutBoundUrl} from './Helpers/StationQuery';

class StationItemMoreDetailOutbound extends Component {
	constructor(){
		super()

		this.state = {
			lineName:"",
			currentLocation: "",
			destinationName:""
		}
	}

    render() {
        return (
            <div className="App">
                <h2>
                    Outbound Train</h2>
                <h3>
                    Current Station is {this.state.currentLocation} < /h3>
					<h3> Train Line is {this.state.lineName}</h3 >
						<h3>Final Destination is {this.state.destinationName}</h3>

            </div>
        );
    }

    // componentDidMount() {
    //     var url = createOutBoundUrl(this.props.stationId);
    //     console.log(url);
    //     axios.get(url).then((response) => {
    //         //console.log(response);
		//
    //         var incomingTrains = response.data.filter((station)=>{
		// 					return station.direction === "inbound";
		// 				});
		//
		// 				console.log(incomingTrains)
		//
		// 				var newLineName;
		// 				var newCurrentLocation;
		// 				var newDestinationName;
		//
		// 		incomingTrains.map((station,index) => {
		// 					newLineName = station.lineName;
		// 					newCurrentLocation = station.currentLocation;
		// 					newDestinationName = station.destinationName;
		// 				})
		//
		// 				this.setState({
		// 					lineName:newLineName,
		// 					currentLocation:newCurrentLocation,
		// 					destinationName:newDestinationName
		// 				})
		//
    //     })
		// 	}
}

export default StationItemMoreDetailOutbound
