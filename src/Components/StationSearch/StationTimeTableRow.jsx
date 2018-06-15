import React, { Component } from "react";

class StationTimeTableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.line}</td>
        <td>{this.props.platformName}</td>
        <td>{this.props.destination}</td>
        <td>{this.props.eta} minutes </td>
      </tr>
    );
  }
}

export default StationTimeTableRow;
