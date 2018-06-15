import React, {Component} from 'react';
import StationTimeTableRow from './StationTimeTableRow.jsx';
import './css/TrainTable.css';
class StationTrainTable extends Component {
    render(){
    var inboundTrainsRows = this.props.inboundTrains;
		inboundTrainsRows = inboundTrainsRows.map((rowData,index) =>{
			return(
				<StationTimeTableRow destination={rowData.destinationName} key={index} eta={Math.round((rowData.timeToStation/60))} platformName={rowData.platformName} line={rowData.lineName} />
				)
		}).slice(0,5).sort((firstValue,nextValue) => {
			return firstValue.props.eta - nextValue.props.eta;
		});
		
		var outboundTrainsRows = this.props.outboundTrains;
		
		outboundTrainsRows= outboundTrainsRows.map((rowData,index) =>{
			return(
				<StationTimeTableRow destination={rowData.destinationName} key={index} eta={Math.round((rowData.timeToStation/60))} platformNam={rowData.platformName} line={rowData.lineName} />
				)
		}).slice(0,5).sort((firstValue,nextValue) => {
			return firstValue.props.eta - nextValue.props.eta;
		});
	

        return (
            <div className="tbl-header">

					<button onClick={this.handleTimeTableRefresh}>Refresh Incoming Trains</button>
				<table  cellPadding="0" cellSpacing="0">
					<thead>
						<tr>
							<th> Line </th>
							<th> Platfrom </th>
							<th> Destination </th>
							<th> E.T.A </th>
							
						</tr>
					</thead>
					<tbody>
					{outboundTrainsRows}
					</tbody>
				</table>
				<table>
					<thead>
						<tr>
							<th> Line </th>
							<th> Platfrom </th>
							<th> Destination </th>
							<th> E.T.A </th>
						</tr>
					</thead>
					<tbody>
					{inboundTrainsRows}
					</tbody>
				</table>
				

			</div>
        )
    }

	handleTimeTableRefresh = () => {
	
		this.props.handleRefresh()
	}

}

export default StationTrainTable