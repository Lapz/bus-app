import React, { Component } from "react";

import "./App.css";

import NavBar from "./Components/NavBar/NavBar.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default App;
