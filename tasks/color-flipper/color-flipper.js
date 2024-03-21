const btn = document.querySelector('.js-btn');
const span = document.querySelector('.js-span');

//generate a random color function
function getRandomColor() {
  let randomColor = Math.floor(Math.random() * 255);
  return randomColor;
}

//generate rgb random color function
let color;
function changeColor() {
  let r = getRandomColor();
  let g = getRandomColor();
  let b = getRandomColor();

  color = `rgb(${r},${g},${b})`;
  return color;
}

btn.addEventListener('click', () => {
  //call changeColor function
  changeColor();

  //access the browser body
  document.body.style.backgroundColor = color;

  //access the html span innerHtml
  span.innerHTML = color;
})