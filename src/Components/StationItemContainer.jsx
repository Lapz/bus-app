import React, {Component} from 'react';
import StationItem from './StationItem.jsx';

class StationItemContainer  extends Component {

	render() {
    if(this.props.stationArray){
      var stationsForList = this.props.stationArray;

    stationsForList = stationsForList.map((item,index)=>{
        return(
          <StationItem stationName={item.name} key={item.id} stationId = {item.id}/>
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
