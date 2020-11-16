const myHeading = document.querySelector('h1');
myHeading.textContent = 'Stopwatch';

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

var stopWatch = function(){
  var start = Date.now();
  var elapsedTime = 0;
  
  var clock = document.getElementById("clock");
  let startButton = document.getElementById("start");
  let stopButton = document.getElementById("stop");
  let resetButton = document.getElementById("reset");

  resetTime();
  

  function constructTimeoutPromise(){
    return new Promise(function(resolve, reject){
      setTimeout(resolve, 1000);
    });
  }

  function callback(){
    timeFunction();
    constructTimeoutPromise().then(callback);
  }

  function runTime(){
    var totalTime = Math.round((Date.now() - start) / 1000);
    var s = totalTime % 3600 % 60;
    var m = Math.round(((totalTime - s) % 3600) / 60);
    var h = Math.round((totalTime - s - 60 * m) / 3600);
    clock.innerText =  addZero(h) + ":" + addZero(m) + ":" + addZero(s);
  }

  function startTime(){
    start = Date.now() - elapsedTime;
    timeFunction = runTime;
    callback();
  }

  function stopTime(){
    timeFunction = function(){};
    elapsedTime = Date.now() - start;
  }

  function resetTime(){
    timeFunction = function(){
      clock.innerText =  "00:00:00";
      elapsedTime = 0;
      start = Date.now();
    }
    timeFunction();
  }

  startButton.onclick = function(){
    if (timeFunction != runTime){
      startTime();
    }
  }

  stopButton.onclick = function(){
    stopTime();
  }

  resetButton.onclick = function(){
    resetTime();
  }

};

stopWatch();