import React, { Component } from "react";
import StationTrainTable from "./StationTrainTable.jsx";
import axios from "axios";
import { createArrivals, filterTrains } from "./Helpers/StationQuery";
import Star from "./img/star.svg";
import * as firebase from "firebase";
import { get_logo } from "./Helpers/logo";

class StationItem extends Component {
  constructor() {
    super();
    this.state = {
      inboundTrains: [],
      outboundTrains: [],
      loading: true,
      error: false
    };
  }

  render() {
    var stationServices = this.props.stationServices.map(
      (transportType, index) => {
        var style = {
          height: "50px"
        };
        return (
          <li key={index}>
            <img src={get_logo(transportType)} alt="log" style={style} />
          </li>
        );
      }
    );

    return (
      <div>
        {this.state.loading == false ? (
          <li>
            <div>
              <h1>{this.props.stationName}</h1>
              <ul className="logo">{stationServices}</ul>

              {this.state.error === false ? (
                <StationTrainTable
                  outboundTrains={this.state.outboundTrains}
                  inboundTrains={this.state.inboundTrains}
                  handleRefresh={this.handleTimeTableClick}
                />
              ) : (
                <div>
                  <p>An error ocurred </p>{" "}
                  <button onClick={this.handleTimeTableClick}> Retry </button>
                </div>
              )}
            </div>
          </li>
        ) : (
          <div className="loader" />
        )}
      </div>
    );
  }
  /// Stop the rerender ///
  componentDidMount() {
    var url = createArrivals(this.props.stationId);

    axios
      .get(url)
      .then(response => {
        var newOutboundTrains, newInboundTrains;

        [newOutboundTrains, newInboundTrains] = filterTrains(response.data);

        this.setState({
          inboundTrains: newInboundTrains,
          outboundTrains: newOutboundTrains,
          error: false,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  }

  addFavourite = () => {
    var database = firebase.database();
    var rootRef = database.ref().child("users/lenard");

    var usersFavouritesRefs = rootRef.child("favouriteStations");

    usersFavouritesRefs.push({
      [this.props.stationName]: this.props.stationId
    });
  };

  handleTimeTableClick = () => {
    var url = createArrivals(this.props.stationId);

    axios
      .get(url)
      .then(response => {
        var newOutboundTrains, newInboundTrains;

        [newOutboundTrains, newInboundTrains] = filterTrains(response.data);

        this.setState({
          inboundTrains: newInboundTrains,
          outboundTrains: newOutboundTrains,
          error: false
        });
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  };
}

export default StationItem;
