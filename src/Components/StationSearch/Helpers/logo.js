import Underground from '../img/Underground.svg';
import nrail from '../img/national-rail.svg';
import tfrail from '../img/tflrail.svg';
import bus from '../img/bus.svg';
import overground from '../img/overground.svg';
import dlr from '../img/dlr.svg';
function get_logo(txt)  {
    switch (txt) {
        case "tube":
            return Underground

        case "national-rail":
            return nrail

        case  "tflrail":
            return tfrail
        case "bus":
            return bus
        case "overground":
            return overground
        case "dlr":
            return dlr


        default:
            return "unknown rail type:"+txt

    }
}
export {get_logo}