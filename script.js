const HOURHAND   = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let minPosition = 120;
let secPosition = 10;
let hrPososition = 253;

var date = new Date();
console.log(date);
let hr  = date.getHours();
let sec = date.getSeconds();
let min = date.getMinutes;
console.log(hr +" "+ min);




HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + hrPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + hrPosition + "deg)";
