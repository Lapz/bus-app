import React, {Component} from 'react';
import StationItem from './StationItem.jsx';
import './css/StationItemContainer.css';

class StationItemContainer  extends Component {

	render() {
	 
    if(this.props.stationArray){
      var stationsForList = this.props.stationArray;

    stationsForList = stationsForList.map((item,index)=>{
        return(
          <StationItem stationName={item.name || item.commonName} key={item.id} stationId={item.id} stationServices={item.modes} />
        )
      })
    };

		return (
			<div className="station-items">
        <ul>
            {stationsForList}
        </ul>
			</div>
		);
	}
}

export default StationItemContainer
