import React, {Component} from 'react';
import {getColourCode} from "./Helpers/refreshTime"


class LineItem extends Component {
  


	render() {
    var liStyle = {
    background:getColourCode(this.props.lineName),
  }

  console.log(liStyle.background)
  

  

    if(this.props.distruptionReason){
      var distruptionReason = this.props.distruptionReason.split(":")[1];
      return (

        <li style={liStyle}>
          <div className="station-name">
            <p id="title">Name: {this.props.lineName} Line</p>
            </div>
            <div className="station-info">
            <p> Status: {this.props.status}</p>
            <p> Reason: <br></br>{distruptionReason}</p>
            </div>
        </li>

  		);

    }
		return (


      <li style={liStyle}>
        <div className="station-name">
          <p>Name: {this.props.lineName} Line</p>
        </div>
        <div className="station-info">
          <p> Status: {this.props.status}</p>
       </div>
      </li>

		);
	}
}

export default LineItem
