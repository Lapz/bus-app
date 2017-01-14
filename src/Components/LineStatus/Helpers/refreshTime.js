function getFormatedCurrentDate() {
    var currentTime = new Date
    var currentTimeString = currentTime.toISOString().slice(11, 16).replace(/T/g, " ");
    var currentDayMonthYear = currentTime.toISOString().slice(0, 10).replace(/-/g, " ").split(" ").reverse().join("-")
    var fullFormatedString = currentDayMonthYear + " " + currentTimeString;

    return fullFormatedString
}

function getColourCode(stationName){
    switch(stationName){
        case "Bakerloo":
            return "#894E24"
            break; 
        case "Central":
            return "#DC241F"
            break;
        case "Circle":
            return "#FFCE00"
            break;
        case  "District":
            return "#007229"
            break;
        case "Hammersmith & City":
            return "#D087A1"
            break;
        case "Jubilee":
            return "#6A7278"
            break;
        case "Metropolitan":
            return "#751056"
            break;
        case "Northern":
            return "#000000"
            break;
        case "Piccadilly":
            return "#00158F"
            break;
        case "Victoria":
        return "#00A0E2"
            break;
        case "Waterloo & City":
            return "#76D0BD"
            break;
        default:
            return ""
            break;
    }
    
}

export {getFormatedCurrentDate,getColourCode}