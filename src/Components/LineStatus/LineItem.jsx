import React, {Component} from 'react';


class LineItem extends Component {
	render() {

    if(this.props.distruptionReason){
      return (


        <li>
          <div className="App">
            <p>Name: {this.props.lineName} Line</p>
            <p> Status: {this.props.status}</p>
            <p> Reason {this.props.distruptionReason}</p>
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
