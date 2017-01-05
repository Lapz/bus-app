import React, {Component} from 'react';

import StationItemMoreDetailInbound from './StationItemMoreDetailInbound';

import StationItemMoreDetailOutbound from './StationItemMoreDetailOutbound';

class StationItemMoreDetail extends Component {
	render() {
		return (
			<div className="App">
				<StationItemMoreDetailOutbound stationId = {this.props.stationId} />
				<StationItemMoreDetailInbound />

			</div>
		);
	}
}

export default StationItemMoreDetail
