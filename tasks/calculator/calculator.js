function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
};

const displayBtn = document.querySelector('.js-display');
const btn1Element = document.querySelector('.btn-1');
const btn2Element = document.querySelector('.btn-2');
const btn3Element = document.querySelector('.btn-3');
const btn4Element = document.querySelector('.btn-4');
const btn5Element = document.querySelector('.btn-5');
const btn6Element = document.querySelector('.btn-6');
const btn7Element = document.querySelector('.btn-7');
const btn8Element = document.querySelector('.btn-8');
const btn9Element = document.querySelector('.btn-9');
const btn0Element = document.querySelector('.btn-0');
const divideBtnElement = document.querySelector('.divide-btn');
const multiplyBtnElement = document.querySelector('.multiply-btn');
const subtractBtnElement = document.querySelector('.subtract-btn');
const operateBtnElement = document.querySelector('.operate-btn');
const addBtnElement = document.querySelector('.add-btn');
const clearBtnElement = document.querySelector('.clear-btn');
const displayElement = document.querySelector('.js-display');
const dotBtnElement = document.querySelector('.dot-btn');
const backSpaceBtnElement = document.querySelector('.backSpace-btn');

let decimalUsed = false;

function displayEvent(button) {
  button.addEventListener('click', () => {
    if (button.textContent === '.' && decimalUsed) {
      return; 
    }
    if (button.textContent === '.') {
      decimalUsed = true;
    }
    displayElement.value += button.textContent;
  });
};

clearBtnElement.addEventListener('click', () => {
  displayElement.value = '';
  result = 0;
});

displayOperatorEvent(divideBtnElement);
displayOperatorEvent(multiplyBtnElement);
displayOperatorEvent(subtractBtnElement);
displayOperatorEvent(addBtnElement);

displayEvent(btn0Element);
displayEvent(btn1Element);
displayEvent(btn2Element);
displayEvent(btn3Element);
displayEvent(btn4Element);
displayEvent(btn5Element);
displayEvent(btn6Element);
displayEvent(btn7Element);
displayEvent(btn8Element);
displayEvent(btn9Element);
displayEvent(dotBtnElement);

let firstNumber = 0;
let operator = '';
let secondNumber = 0;
let result = 0;

function operate(firstNumber, operator, secondNumber) {
  if(operator === '/' && secondNumber === 0 || operator === undefined || secondNumber === 0) {
    result = " ";
  } else if (operator === '+') {  
    result = add(firstNumber, secondNumber);
  } else if (operator === '-') {
    result = subtract(firstNumber, secondNumber);
  } else if (operator === 'x') {
    result = multiply(firstNumber, secondNumber);
  } else if (operator === '/') {
    result = divide(firstNumber, secondNumber);
  }
  displayElement.value = result;
};

operateBtnElement.addEventListener('click', () => {
    let currentDisplay = displayElement.value.split(" ")

    firstNumber = Number(currentDisplay[0]);
    operator = currentDisplay[1];
    secondNumber = Number(currentDisplay[2]);
  
    operate(firstNumber, operator, secondNumber);
});

function displayOperatorEvent(button) {
  button.addEventListener('click', () => {
    let currentDisplay = displayElement.value.split(" ")
  
    firstNumber = Number(currentDisplay[0]);
    operator = currentDisplay[1];
    secondNumber = Number(currentDisplay[2]);

    if (secondNumber > 0) {
      operate(firstNumber, operator, secondNumber);
      displayElement.value += button.textContent;
    } else {
      displayElement.value += button.textContent; 
    }
  });
};

backSpaceBtnElement.addEventListener('click', () => {
  let removeLastItem = displayElement.value.slice(0, -1);
  displayElement.value = removeLastItem;
});