function createStationQueryUrl(query) {
	return `https://api.tfl.gov.uk/Stoppoint/search/${query}?modes=tube`;
}
function createOutBoundUrl(id) {
	return `https://api.tfl.gov.uk/StopPoint/${id}/`
}
export {createStationQueryUrl, createOutBoundUrl}
