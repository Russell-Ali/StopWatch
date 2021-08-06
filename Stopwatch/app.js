//Variables
const hoursHTML = document.getElementById("hours");
const minsHTML = document.getElementById("mins");
const secsHTML = document.getElementById("secs");
let displayHours;
let displayMins;
let displaySecs;
let globalSecs;
let totalSecs = 0;
let hours;
let mins;
let secs;
var refreshCounter;
//Variables End
//Functions
var counter = () => {
    ++totalSecs;
    globalSecs = totalSecs;
};
var start = () => {
    refreshCounter = setInterval(counter, 1000);
    setInterval(startClock, 1000);
    console.log("%c start", "color:green");
};
var stop2 = () => {
    clearInterval(refreshCounter);
    console.log("%c stop", "color:red");
};
var reset = () => {
    clearInterval(refreshCounter);
    totalSecs = 0;
    globalSecs = 0;
    console.log("%c reset", "color:orange");
};
//Functions End
//Test
var startClock = () => {
    hours = Math.floor(globalSecs / 3600);
    mins = Math.floor(globalSecs / 60);
    secs = Math.floor(globalSecs);
    //Seconds
    if (secs < 60) {
        if (secs <= 9) {
            displaySecs = "0" + secs;
        }
        else {
            displaySecs = secs;
        }
    }
    else if (secs > 60) {
        if (secs % 60 <= 9) {
            displaySecs = "0" + (secs % 60);
        }
        else {
            displaySecs = secs % 60;
        }
    }
    else {
        displaySecs = "00";
    }
    secsHTML.innerHTML = displaySecs;
    //Seconds End
    //Minutes
    if (mins < 60) {
        if (mins <= 9) {
            displayMins = "0" + mins;
        }
        else {
            displayMins = mins;
        }
    }
    else if (mins > 60) {
        if (mins % 60 <= 9) {
            displayMins = "0" + (mins % 60);
        }
        else {
            displayMins = mins % 60;
        }
    }
    else {
        displayMins = "00";
    }
    minsHTML.innerHTML = displayMins;
    //Minutes End
    //Hours
    if (hours <= 9) {
        displayHours = "0" + hours;
    }
    else {
        displayHours = hours;
    }
    hoursHTML.innerHTML = displayHours;
    //Hours End
};
//Test End
//# sourceMappingURL=app.js.map