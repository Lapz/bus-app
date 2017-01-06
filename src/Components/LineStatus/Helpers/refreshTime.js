function getFormatedCurrentDate() {
    var currentTime = new Date
    var currentTimeString = currentTime.toISOString().slice(11, 16).replace(/T/g, " ");
    var currentDayMonthYear = currentTime.toISOString().slice(0, 10).replace(/-/g, " ").split(" ").reverse().join("-")
    var fullFormatedString = currentDayMonthYear + " " + currentTimeString;

    return fullFormatedString
}


export {getFormatedCurrentDate}