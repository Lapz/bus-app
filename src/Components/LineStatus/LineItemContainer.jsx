import React, {Component} from 'react';
import axios from 'axios';
import LineItem from './LineItem.jsx';
import LineRefreshBtn from './LineRefreshBtn.jsx';
// import '../css/LineItem.css';

class LineItemContainer extends Component {
  constructor(){
    super()
    this.state = {
      trainLines: [],
      refreshTime: "",
      error: false
    }
  }
	render() {
    var desruptionReason;

    if(this.state.trainLines){
      var lineList = this.state.trainLines;

      lineList  = lineList.map((item,index) => {
        if(item.lineStatuses[0].reason){
          desruptionReason = item.lineStatuses[0].reason
          return(
            <LineItem lineName={item.id} distruptionReason={desruptionReason} key={index} status={item.lineStatuses[0].statusSeverityDescription}/>
          )
        }

          return(
            <LineItem lineName={item.id} key={index} status={item.lineStatuses[0].statusSeverityDescription}/>
          )

      })

    }
		return (
			<div className="lineList">
    <LineRefreshBtn callRefresh = {this.callRefresh} refreshTime = {this.state.refreshTime}/>
        <ul>
          {lineList}
        </ul>
			</div>
		);
	}

  componentDidMount(){
    axios.get('https://api.tfl.gov.uk/Line/Mode/tube/Status ')
    .then((response) => {
      console.log(response)
      this.setState({
          trainLines:response.data,
      })
    })
    .catch((error) => console.log(error));
  }

  callRefresh = () => {
    console.log("Calling A refresh");
    axios.get('https://api.tfl.gov.uk/Line/Mode/tube/Status ')
    .then((response) => {
      console.log(response)
    
      this.setState({
          trainLines:response.data,
          refreshTime: Date.now()
      })
    })
    .catch((error) => console.log(error));
  }

}

export default LineItemContainer
