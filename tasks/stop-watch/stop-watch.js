const start = document.querySelector('.js-start');
const stop2 = document.querySelector('.stop');
const reset = document.querySelector('.js-reset');
const display = document.querySelector('.display');


let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

start.addEventListener('click', () => {
    startTime = Date.now() - elapsedTime;

    if(!isRunning) {

        timer = setInterval(() => {
          isRunning = true;

          let currentTime = Date.now();
          elapsedTime = currentTime - startTime;
          
          //  convert elapsed time into hours, mins, secs, and milliseconds
          let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
          let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
          let secs = Math.floor(elapsedTime / 1000 % 60);
          let millSecs = Math.floor(elapsedTime % 1000 / 10);

          // convert time into strings with double zero digits
          hours = hours.toString().padStart(2, '0');
          mins = mins.toString().padStart(2, '0');
          secs = secs.toString().padStart(2, '0');
          millSecs = millSecs.toString().padStart(2, '0');

          display.innerHTML = `${hours}:${mins}:${secs}:${millSecs}`;
      }, 10);
    }
})

stop2.addEventListener('click', () => {
  
  if(isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
})

reset.addEventListener('click', () => {
  display.innerHTML = `00:00:00:00`;

  timer = null;
  startTime = 0;
  elapsedTime = 0;
})