import React, {Component} from 'react';


class LineItem extends Component {
	render() {

    if(this.props.distruptionReason){
      var distruptionReason = this.props.distruptionReason.split(":")[1];
      return (


        <li>
          <div className="App">
            <p id="title">Name: {this.props.lineName} Line</p>
            <p> Status: {this.props.status}</p>
            <p> Reason: <br></br>{distruptionReason}</p>
          </div>
        </li>

  		);

    }
		return (


      <li>
        <div className="App">
          <p>Name: {this.props.lineName} Line</p>
          <p> Status: {this.props.status}</p>
        </div>
      </li>

		);
	}
}

export default LineItem
