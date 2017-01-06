import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import  {createStationQueryUrl} from './Helpers/StationQuery';
import StationItemContainer from './StationItemContainer.jsx'

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
        {
          (this.state.error === false) ?  <StationItemContainer stationArray={this.state.stations}/> : <p> Their was an error</p>
        }
       
      </div>
      )
  }

  handleSubmitText = (text) => {
    console.log(text);
    var url = createStationQueryUrl(text);
  
  	axios.get(url).then((response) => {
  		console.log(response)
  		console.log(response.data.matches)
      this.setState({
        stations:response.data.matches,
        error:true
      })
  	}).catch((error) => {
  		console.log(error);
      this.setState({
        error:true
      })
  	})
  
  }

}


export default StationSearch
