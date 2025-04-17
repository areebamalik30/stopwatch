var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var min = 0;
var sec = 0;
var msec = 0;
var interval;



function startTimer() {
  msec++
  msecHeading.innerHTML = msec;
 
  if (msec >= 100) {
      sec++;
      secHeading.innerHTML = sec;
      msec = 0;
  }


  if (sec >= 60) {
      min++;
      minHeading.innerHTML = min;
      sec = 0;
  }
}

function start() {
    var btn = document.getElementById("start");
    interval = setInterval(startTimer, 10);
    btn.disabled = true;
  }
  
function stop() {
    var btn = document.getElementById("startbtn");
    clearInterval(interval);
    btn.disabled = false;
  }
  
function reset() {
    min = 0;
    sec = 0;
    msec = 0;


    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
  }