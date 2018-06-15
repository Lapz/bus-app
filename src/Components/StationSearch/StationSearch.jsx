import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar.jsx";
import {
  createStationQueryUrl,
  completeMatches,
  filterHubIDS
} from "./Helpers/StationQuery";
import StationItemContainer from "./StationItemContainer.jsx";
class StationSearch extends Component {
  constructor() {
    super();

    this.state = {
      stations: [],
      error: false
    };
  }

  render() {
    return (
      <div className="wrapper">
        <SearchBar handleSubmitText={this.handleSubmitText} />

        {this.state.error === false ? (
          <StationItemContainer stationArray={this.state.stations} />
        ) : (
          <p>Their was an error</p>
        )}
      </div>
    );
  }
  //////////// CUSTOM METHODS ////////////////////

  handleSubmitText = text => {
    var normalIDS;
    var url = createStationQueryUrl(text);
    axios
      .get(url)
      .then(response => {
        var matchesArrayByType = completeMatches(response);

        return matchesArrayByType;
      })
      .then(array => {
        var hubIds = array[0];
        normalIDS = array[1];

        var getRequests = hubIds.map((hub, index) => {
          var hubID = hub.id;

          return axios.get(`https://api.tfl.gov.uk/StopPoint/${hubID}/`);
        });

        return getRequests;
      })
      .then(arrayOfGetReq => {
        return axios.all(arrayOfGetReq);
      })
      .then(arrayOfResults => {
        var results = arrayOfResults.map((item, index) => {
          var hubStations = filterHubIDS(item);
          return hubStations;
        });

        results = [...results];
        return results;
      })
      .then(hubData => {
        var mergedArray = [...hubData, ...normalIDS];
        var flattendArray = [].concat.apply([], mergedArray);

        this.setState({ stations: flattendArray, error: false });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  };
}

export default StationSearch;
