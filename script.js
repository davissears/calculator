//* Operator Functions
let operationResult;
export function add(a, b) {
  operationResult = a + b;
  return operationResult;
}

export function subtract(a, b) {
  operationResult = a - b;
  return operationResult;
}
export function multiply(a, b) {
  operationResult = a * b;
  return operationResult;
}

export function divide(a, b) {
  if (b === 0) {
    operationResult = "Error: Cannot divide by zero";
  } else {
    operationResult = a / b;
  }
  return operationResult;
}

export function operate() {}
