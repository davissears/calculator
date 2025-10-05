//* Operator Functions
let operationResult;
function add(a, b) {
  operationResult = a + b;
  return operationResult;
}

function subtract(a, b) {
  operationResult = a - b;
  return operationResult;
}
function multiply(a, b) {
  operationResult = a * b;
  return operationResult;
}

function divide(a, b) {
  if (b === 0) {
    operationResult = "Error: Cannot divide by zero";
  } else {
    operationResult = a / b;
  }
  return operationResult;
}

function operate() {}
//* exports
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  operate,
};
