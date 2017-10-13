import React, {Component} from 'react';
import {getColourCode} from "./Helpers/refreshTime"


const LineItem = ({props}) => (
  <li style={getColourCode(props.lineName)}>
  (props.distruptionReason) ? (
    <div className="station-name">
            <p id="title">Name: {props.lineName} Line</p>
            </div>
            <div className="station-info">
            <p> Status: {props.status}</p>
            <p> Reason: <br></br>{props.distruptionReason.split(":")[1]}</p>
            </div>
  ) : ( <div className="station-name">
          <p>Name: {props.lineName} Line</p>
        </div>
        <div className="station-info">
          <p> Status: {props.status}</p>
       </div>)
  </li>
)

export default LineItem;
