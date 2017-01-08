import React, { Component } from 'react';

import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import  {createStationQueryUrl,getHubStationCodes,completeMatches, filterHubIDS,createHubStationUrl,hubIDStationRequest} from './Helpers/StationQuery';
import StationItemContainer from './StationItemContainer.jsx'
import {Link} from 'react-router';
class StationSearch extends Component{
    constructor(){
    super()

    this.state = {
      stations:[],
      error:false
    }
  }

  render(){
      return(
    <div className="wrapper">
        <SearchBar handleSubmitText={this.handleSubmitText} />
        <Link to ="/">Tube Service Status</Link>

        {
          (this.state.error === false) ?  <StationItemContainer stationArray={this.state.stations}/> : <p> Their was an error</p>
        }
       
      </div>
      )
  }

  handleSubmitText = (text) => {
    console.log(text);
    var url = createStationQueryUrl(text);
  
    // getHubStationCodes("HUBSRA");
  
    axios.get(url)
    .then((response) => {
    console.log(response);

    var d =	completeMatches(response);
    console.log(d);
    return d;

    })
    .then((array) =>{
      var hubID = "HUBSRA";
      var hubIDS = array[0]

      var getRequest = hubIDS.map((hub,index) => {
      
      return function() {
//adsf
          return axios.get(`https://api.tfl.gov.uk/StopPoint/${hub.id}/`)
      }
            // .then((data) => {
            //   return filterHubIDS(data);
            // })
      }) 
      console.log(getRequest[0]())
      return axios.all([getRequest]) 
    })
    .then(axios.spread((data) =>{
      console.log(data)
    }))
    .catch((error) => {
  		console.log(error);
      this.setState({
        error:true
      })
  	})


}
}


export default StationSearch
