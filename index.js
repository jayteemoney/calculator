const calculator = document.querySelector('.calculator');
const result = document.getElementById('inputField');
console.log(result);

let currentOperand = '';
let operator = null;
let previousOperand = '';

calculator.addEventListener('click', (event) => {
  const target = event.target;
  const value = target.dataset.value;


  if (value === '=') {
    calculate();
  } else if (value === "") {
    clear();
  } else if (value === '+' || value === '-' || value === '*' || value === '/') {
    handleOperator(value);
  } else {
    handleNumber(value);
  }
});

function handleNumber(number) {
  currentOperand += number;
  result.value = currentOperand;
}

function handleOperator(op) {
  if (previousOperand === '') {
    previousOperand = currentOperand;
  } else {
    calculate();
  }
  operator = op;
  currentOperand = '';
}

function calculate() {
  let resultValue;
  switch (operator) {
    case '+':
      resultValue = parseFloat(previousOperand) + parseFloat(currentOperand);
      break;
    case '-':
      resultValue = parseFloat(previousOperand) - parseFloat(currentOperand);
      break;
    case '*':
      resultValue = parseFloat(previousOperand) * parseFloat(currentOperand);
      break;
    case '/':
      resultValue = parseFloat(previousOperand) / parseFloat(currentOperand);
      break;
    default:
      resultValue = currentOperand;
  }
  result.value = resultValue;
  previousOperand = resultValue;
  currentOperand = '';
}

function clear() {
  previousOperand = '';
  currentOperand = '';
  operator = null;
  result.value = '';
}