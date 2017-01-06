import React, {Component} from 'react';
import axios from 'axios';
import LineItem from './LineItem.jsx';
import LineRefreshBtn from './LineRefreshBtn.jsx';
import {Link} from 'react-router';

import './css/LineItem.css';

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
			<div className="wrapper">
      
      <div className = "Header">
        <LineRefreshBtn callRefresh = {this.callRefresh} refreshTime = {this.state.refreshTime}/>
        <Link to="/findStation"> Find Stations </Link>
      </div>
    
    {
        (this.state.error === false ) ? <div className = "lineList"><ul>{lineList} </ul></div> :<p> Their was an error </p>
      }
        
			</div>
		);
	}

  componentDidMount(){
    axios.get('https://api.tfl.gov.uk/Line/Mode/tube/Status ')
    .then((response) => {
      console.log(response)
      this.setState({
          trainLines:response.data
      })
    })
    .catch((error) => {
      console.log(error)

      this.setState({
        error:true
      })
    });
  }

  callRefresh = () => {
    console.log("Calling A refresh");
    axios.get('https://api.tfl.gov.uk/Line/Mode/tube/Status ')
    .then((response) => {

      console.log(response)
      var currentTime = new Date
      // toISOString().replace(/[^0-9]/g, "")
      var currentTimeString = currentTime.toISOString().slice(11,16).replace(/T/g," ");
      var currentDayMonthYear = currentTime.toISOString().slice(0,10).replace(/-/g," ").split(" ").reverse().join("-")
      var fullString = currentDayMonthYear + " " +currentTimeString;
      this.setState({
          trainLines:response.data,
          refreshTime: fullString,
          error:false
      })
    })
    .catch((error) => {
      console.log(error)

      this.setState({
        error:true
      })
    });
  }

}

export default LineItemContainer
