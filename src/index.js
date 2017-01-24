import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, hashHistory} from 'react-router';
import StationSearch from './Components/StationSearch/StationSearch.jsx';
import LineStatus from './Components/LineStatus/LineItemContainer.jsx';
import Favourite from './Components/Favourites/Favourites.jsx';
import * as firebase from 'firebase';



var config = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId
  };

firebase.initializeApp(config);

class Index extends Component {
  render() {
    return (
    <Router history={hashHistory}>
    <Route component={App}>
        <Route path={'/'} component={LineStatus}></Route>
        <Route path={'/findStation'} component={StationSearch}></Route>
        <Route path="favourites" component={Favourite}></Route>
      </Route>
     
      </Router>
     
    );
  }
}



ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
