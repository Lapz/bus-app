import React, {Component} from 'react';
import StationTimeTableRow from './StationTimeTableRow.jsx';

class StationTrainTable extends Component {
    render(){
    var inboundTrainsRows = this.props.inboundTrains;
		inboundTrainsRows = inboundTrainsRows.map((rowData,index) =>{
			return(
				<StationTimeTableRow key= {index} eta={Math.round((rowData.timeToStation/60))} platformName = {rowData.platformName} line={rowData.lineName} />
				)
		}).slice(0,5);
		
		var outboundTrainsRows = this.props.outboundTrains;
		
		outboundTrainsRows= outboundTrainsRows.map((rowData,index) =>{
			return(
				<StationTimeTableRow key= {index} eta={Math.round((rowData.timeToStation/60))} platformName = {rowData.platformName} line={rowData.lineName} />
				)
		}).slice(0,5);


        console.log(outboundTrainsRows);
		

        return (
            <div className="App">
				<table>
					<thead>
						<tr>
							<th> Line </th>
							<th> Platfrom </th>
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

}

export default StationTrainTable