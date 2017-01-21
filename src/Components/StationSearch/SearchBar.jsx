import React, { Component } from 'react';

class SearchBar extends Component{
  render(){
    return(
      <form onSubmit={this.handleSubmit} >
          <input type="text" placeholder="Train Station Name" ref="stationQuery" ></input>
          <button> Find Station</button>
      </form>
    )
  }


handleSubmit =(e) =>{
    e.preventDefault();
    console.log("Handling the Click");
    this.props.handleSubmitText(this.refs.stationQuery.value);

  }

}

export default SearchBar;
