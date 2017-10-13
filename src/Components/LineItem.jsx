import React, {Component} from 'react';

function getColourCode(stationName){
    switch(stationName){
        case "Bakerloo":
            return "#894E24";
          
        case "Central":
            return "#DC241F";
           
        case "Circle":
            return "#FFCE00"
       
        case  "District":
            return "#007229"
           
        case "Hammersmith & City":
            return "#D087A1"
           
        case "Jubilee":
            return "#6A7278"
           
        case "Metropolitan":
            return "#751056"
           
        case "Northern":
            return "#000000"
           
        case "Piccadilly":
            return "#00158F"
           
        case "Victoria":
            return "#00A0E2"
            
        case "Waterloo & City":
            return "#76D0BD"
            
        default:
            return ""
           
    }
    
}

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
