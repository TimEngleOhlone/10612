'strict mode'

function updateTime() {

let now = new Date();
let hours = now.getHours();
if(hours < 10){
hours = "0" + hours;
} else {
hours = "" + hours;
}

let minutes = now.getMinutes();
let minutesToSt;
if minutes<10{
    minutesToSt = `0${minutes}`
} else {
    minutesToSt = minutes.toString();
}

let seconds = now.getSeconds();
if(seconds<10){
    seconds = "0" + seconds;
    } else {
    seconds = "" + seconds;
    }
let currentTime = hours + ':' + minutesToSt + ':' + seconds;

let myClock = document.getElementById('clock');
myClock.innerHTML = currentTime;
}

