import React, { Component } from "react";

class FavouriteItem extends Component {
  render() {
    var serviceItem = this.props.services.map((service, index) => {
      return <li key={index}>{service}</li>;
    });

    var transportItems = this.props.methods.map((service, index) => {
      return <li key={index}>{service}</li>;
    });
    return (
      <div>
        <p> Station Name: {this.props.name}</p>
        <p> Services offered:</p>
        <ul>{serviceItem}</ul>

        <p> Methods of transport offered</p>
        <ul>{transportItems}</ul>
      </div>
    );
  }
}

export default FavouriteItem;
