const btnElement = document.querySelector('.js-btn');
const containerElement = document.querySelector('.js-container');

function generateGrid(row, column) {
  for (let i = 1; i <= row*column; i++) {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    containerElement.appendChild(cellElement);
  
    cellElement.addEventListener('mouseenter', () => {
      let randomColour = getRandomColour();
      cellElement.style.backgroundColor = randomColour;
    });
  
    cellElement.addEventListener('mouseleave', () => {
      let randomColour = getRandomColour();
      cellElement.style.backgroundColor = randomColour;
    });
  };
  containerElement.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
};

let rows = 16;
let columns = 16;
generateGrid(rows, columns);

btnElement.addEventListener('click', () => {
  let userInput = Number(prompt('Enter the number of columns:', 10));
  
  containerElement.textContent = '';

  if(userInput > 30) {
    alert('Error! Maximum input should be 30');
  } else if (!isNaN(userInput) && userInput > 0) {
    rows = userInput;
    columns = userInput;

    generateGrid(rows, columns);
  } else {
    alert('Please, enter a positive number');
  }
});

function getRandomColour() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};