const display = document.querySelector('#display');
const stop2 = document.querySelector('.stop');
const start = document.querySelector('.start');

let digital;
function getTime() {
  let hour = new Date().getHours();
  let mins = new Date().getMinutes();
  let sec = new Date().getSeconds();

  //make the time diplay in 2digits
  hour = String(hour).padStart(2, '0');
  mins = String(mins).padStart(2, '0');
  sec = String(sec).padStart(2, '0');

  digital = `${hour}:${mins}:${sec}`;
  display.innerHTML = digital;
}

let timer;
//start the time/interval
start.addEventListener('click', () => {
  timer = setInterval(() => {
    getTime();
  }, 1000);
})

//stop the time/interval
stop2.addEventListener('click', () => {
  clearInterval(timer);
})