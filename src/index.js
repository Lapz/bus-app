import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, hashHistory} from 'react-router';
import StationSearch from './Components/StationSearch/StationSearch.jsx';
import LineStatus from './Components/LineStatus/LineItemContainer.jsx';

class Index extends Component {
  render() {
    return (
    <Router history={hashHistory}>
    <Route component={App}>
        <Route path={'/'} component={LineStatus}></Route>
        <Route path={'/findStation'} component={StationSearch}></Route>
      </Route>
     
      </Router>
     
    );
  }
}



ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
