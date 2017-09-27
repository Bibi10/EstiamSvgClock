const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

    let hr = date.getHours();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let minPosition = (hr * 360 / 60) + (sec * (360 / 60 / 60));
    let secPosition = (sec * 360 / 60);
    let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);

function runClock() {
  
    hrPosition  = hrPosition+(3/360);
    secPosition = secPosition+6;
    minPosition = minPosition+(6/60);

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + hrPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + hrPosition + "deg)";

}

 var interval = setInterval(runClock, 1000);
