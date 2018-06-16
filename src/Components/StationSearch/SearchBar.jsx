import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="group">
        <input
          type="text"
          placeholder="Train Station Name"
          ref="stationQuery"
        />
         <span class="highlight"></span>
        <span class="bar"></span>
      
        <button className="button"> Find Station</button>
        </div>
      </form>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmitText(this.refs.stationQuery.value);
  };
}

export default SearchBar;
