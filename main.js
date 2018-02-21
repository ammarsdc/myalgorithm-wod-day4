function convert(timeIn) {
    var hours = parseInt(timeIn.substring(0,2));
    var minutes = parseInt(timeIn.substring(3,5));
    var seconds = parseInt(timeIn.substring(6,8));
    var meridian = timeIn.substring(8, 10).toLowerCase();
    var military = "";

    if (meridian === "am" && hours == 12){
        hours = 0;
    }
    if (meridian === "pm" && hours >= 1 && hours <= 11){
        hours += 12;
    }

    if (hours < 10) {
        military += "0" + hours;
    } else {
        military += hours;
    }

    military += ":";

    if (minutes < 10) {
        military += "0" + minutes;
    } else {
        military += minutes;
    }

    military += ":";

    if (seconds < 10) {
        military += "0" + seconds;
    } else {
        military += seconds;
    }

    document.write(timeIn + " => " + military + "<br />");
}