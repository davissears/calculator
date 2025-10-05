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

export function operate(o, a, b) {
  // let operandL = a;
  // let operandR = b;
  // let operator = o;
  if (o === `+`) {
    return add(a, b);
  } else if (o === `-`) {
    return subtract(a, b);
  } else if (o === `/`) {
    return divide(a, b);
  } else if (o === `*`) {
    return multiply(a, b);
  } else {
    return "Error: Invalid operator";
  }
}
operate("/", 6, 3);
