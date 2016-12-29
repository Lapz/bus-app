import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar.jsx';
import  {createStationQueryUrl} from './Helpers/StationQuery';
import StationItemContainer from './Components/StationItemContainer.jsx'
import axios from 'axios';

class App extends Component {

  constructor(){
    super()

    this.state = {
      stations:[]
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar handleSubmitText={this.handleSubmitText} />
        <StationItemContainer stationArray={this.state.stations}/>

      </div>
    );
  }

  handleSubmitText = (text) => {
    console.log(text);
    var url = createStationQueryUrl(text);

  	axios.get(url).then((response) => {
  		console.log(response)
  		console.log(response.data.matches)
      this.setState({
        stations:response.data.matches
      })
  	}).catch((error) => {
  		console.log(error);
  	})

  }


}

export default App;
