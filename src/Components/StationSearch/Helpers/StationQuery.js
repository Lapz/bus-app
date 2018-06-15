import axios from "axios";

function completeMatches(responseData) {
  var trainStationArray = responseData.data.matches;

  var hubStations = trainStationArray.filter(station => {
    var stationIdFirstLetter = station.id.split("")[0];
    if (stationIdFirstLetter === "H") {
      return true;
    }
  });

  var normalStations = trainStationArray.filter(station => {
    var stationIdFirstLetter = station.id.split("")[0];
    if (stationIdFirstLetter !== "H") {
      return true;
    }
  });

  return [hubStations, normalStations];
}

function filterHubIDS(hubData) {
  var allIds = hubData.data.children;
  var tubeIds = allIds.filter(stationData => {
    return (
      stationData.stopType === "NaptanMetroStation" ||
      stationData.stopType === "NaptanRailStation"
    );
  });
  return tubeIds;
}
function hubIDStationRequest(hubIDSArray) {
  var hubUrls = hubIDSArray.forEach(hubData => {
    var hubReqUrl = createHubStationUrl(hubData.id);
    return axios.get(hubReqUrl);
  });
  return hubUrls;
}

// var ds = hubStations.forEach((hubData) => {
// 			var hubReqUrl = createHubStationUrl(hubData.id);
// 			axios.get(hubReqUrl)
// 			.then((response) =>{
//
// 			})
// 			.then((array) => {
// 				var completeArray = normalStations.concat(array);

// 			console.log(completeArray);
// 			})

// 		})

// 		return ds;

function createStationQueryUrl(query) {
  return `https://api.tfl.gov.uk/Stoppoint/search/${query}?modes=tube`;
}

function createArrivals(stationID) {
  return `https://api.tfl.gov.uk/StopPoint/${stationID}/Arrivals?mode=tube`;
}
function createOutBoundUrl(id) {
  return `https://api.tfl.gov.uk/StopPoint/${id}/`;
}
function createHubStationUrl(hubID) {
  return `https://api.tfl.gov.uk/StopPoint/${hubID}/`;
}
function getHubStationCodes(hubID) {
  return axios.get(`https://api.tfl.gov.uk/StopPoint/${hubID}/`);
}

function filterTrains(trainArray) {
  var outBoundStations = trainArray.filter(train => {
    return train.direction === "outbound";
  });
  var inBoundStations = trainArray.filter(train => {
    return train.direction === "inbound";
  });

  return [outBoundStations, inBoundStations];
}

// // function getFormattedData(url){

//      var normalIDS;
//      var getMatches = axios.get(url);
//      var matchesArrayByType = getMatches.then((response) => {  // [hubIDS, normalIDS
//                 return completeMatches(response)
//      });
//      var mappedHubArrayQuerys = matchesArrayByType.then((array)=>{
//             var hubIds = array[0];
//             normalIDS = array[1];
//             var getRequests = hubIDS.map((hub,index) => {
//                 var hubID = hub.id

//           return axios.get(`https://api.tfl.gov.uk/StopPoint/${hubID}/`)
//       })
//         return getRequests
//      });

//      var mappedHubArrayQuerysResults = mappedHubArrayQuerys.then((ArrayOfUrls)=>{
//             return axios.all(ArrayOfUrls);
//      });

// var QuerysResultsSorting = mappedHubArrayQuerysResults.then((response) =>{
//          var results = response.map((item,index) => {
//        var hubStations = filterHubIDS(item)
//        return hubStations
//     })

//     var results = [...results];

//     return results
// })

// var mergedStationsData = QuerysResultsSorting.then((data) =>{
//     var mergedArray = [...data,...normalIDS];

//     var flattendArray = [].concat.apply([],mergedArray);

//     return flattendArray

// })

// return mergedStationsData

//  }

// arrayOfGetReq

export {
  createStationQueryUrl,
  createOutBoundUrl,
  filterTrains,
  getHubStationCodes,
  completeMatches,
  createHubStationUrl,
  createArrivals,
  filterHubIDS,
  hubIDStationRequest
};
