const HOURHAND   = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let minPosition = (hr*360/60)+(sec*(360/60/60));
let secPosition = (sec*360/60);
let hrPosition = (hr*360/12)+(min*(360/60)/12);

var date = new Date();
console.log(date);
let hr  = date.getHours();
let sec = date.getSeconds();
let min = date.getMinutes();
console.log(sec);




HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + hrPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + hrPosition + "deg)";
