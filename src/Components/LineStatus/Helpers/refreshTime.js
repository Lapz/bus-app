function getFormatedCurrentDate() {
    var currentTime = new Date();
    var currentTimeString = currentTime.toISOString().slice(11, 16).replace(/T/g, " ");
    var currentDayMonthYear = currentTime.toISOString().slice(0, 10).replace(/-/g, " ").split(" ").reverse().join("-")
    var fullFormatedString = currentDayMonthYear + " " + currentTimeString;

    return fullFormatedString
}

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

export {getFormatedCurrentDate,getColourCode}