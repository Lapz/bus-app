import React, { Component } from 'react';
import './App.css';



import {Router, Route, hashHistory} from 'react-router';
import StationSearch from './Components/StationSearch/StationSearch.jsx';
import LineStatus from './Components/LineStatus/LineItemContainer.jsx'

class App extends Component {

  render() {
    return (
      <Router history={hashHistory}>
      
      <Route path={'/'} component={LineStatus}></Route>
      <Route path={'/findStation'} component={StationSearch}></Route>
      </Router>
     
    );
  }
}

export default App;
