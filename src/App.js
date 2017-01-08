import React, { Component } from 'react';
import './App.css';
// import SearchBar from './Components/SearchBar.jsx';
// import  {createStationQueryUrl} from './Helpers/StationQuery';
// import StationItemContainer from './Components/StationItemContainer.jsx'

import {Router, Route, browserHistory} from 'react-router';
import StationSearch from './Components/StationSearch/StationSearch.jsx';
import LineStatus from './Components/LineStatus/LineItemContainer.jsx'

class App extends Component {

  constructor(){
    super()

    this.state = {
      stations:[]
    }
  }
  render() {
    return (
      <Router history={browserHistory} >
      <Route path={'/'} component={LineStatus}></Route>
      <Route path={'/findStation'} component={StationSearch}></Route>
      </Router>
     
    );
  }
}

export default App;
