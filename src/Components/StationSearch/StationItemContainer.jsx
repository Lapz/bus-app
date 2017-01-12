import React, {Component} from 'react';
import StationItem from './StationItem.jsx';

class StationItemContainer  extends Component {

	render() {
	 
    if(this.props.stationArray){
      var stationsForList = this.props.stationArray;

    stationsForList = stationsForList.map((item,index)=>{
        return(
          <StationItem outboundTrains={this.props.outboundTrains} inboundTrains={this.props.inboundTrains} stationName={item.name || item.commonName} key={item.id} stationId={item.id} stationServices={item.modes} handleTimeTableClick={this.props.handleTimeTableClick}/>
        )
      })
    };

		return (
			<div className="stationItems">
        <ul>
            {stationsForList}
        </ul>
			</div>
		);
	}
}

export default StationItemContainer
