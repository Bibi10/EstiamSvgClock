const HOURHAND   = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let minPosition = 120;
let secPosition = 10;
let hrPososition = 253;

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + hrPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + hrPosition + "deg)";
