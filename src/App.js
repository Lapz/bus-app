import React, { Component } from 'react';

import './App.css';

import NavBar from './Components/NavBar/NavBar.jsx';

class App extends Component {

  render() {
    return (
      <div>
      <NavBar />

      <div>
      {this.props.children}
      </div>
      </div>

     
    );
  }
}

export default App;
