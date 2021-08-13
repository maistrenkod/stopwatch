let seconds = 0;
let minutes = 0;
let hours = 0;
let clockSeconds = 0;
let clockMinutes = 0;
let clockHours = 0;

let interval = null;

let status = "stopped";

function stopWatch(){

    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    }

    if(seconds < 10){
        clockSeconds = "0" + seconds.toString();
    }
    else{
        clockSeconds = seconds;
    }

    if(minutes < 10){
        clockMinutes = "0" + minutes.toString();
    }
    else{
        clockMinutes = minutes;
    }

    if(hours < 10){
        clockHours = "0" + hours.toString();
    }
    else{
        clockHours = hours;
    }

    document.getElementById("clock").innerHTML = clockHours + ":" + clockMinutes + ":" + clockSeconds;

}



function startStop(){

    if(status === "stopped"){
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
}

function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("clock").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";

}

function nice(){
    alert("Have a nice day :)")
}
