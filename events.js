//* Module Imports

import { add, subtract, multiply, divide, operate } from "./script.js";
//reference for entire form
const calculatorForm = document.getElementById("calculator-Form");
//* display variables
const operandDisplayL = document.getElementById("operand-Display-L");
const operatorDisplay = document.getElementById("operator-Display");
const operandDisplayR = document.getElementById("operand-Display-R");
const resultDisplay = document.getElementById("operate-Result");
//*State Management variables
// keeps track of display state
let currentState = "leftOperand";

//*callback functions
//updates display
// function updateDisplay(displayContent) {
//   getDisplayState(currentState);
//   currentState = displayContent;
//   console.log(currentState);
// }

//* button Events
calculatorForm.addEventListener("click", (e) => {
  e.preventDefault();
  const button = e.target;
  const displayContent = button.value;
  //* display state management
  if (button.className === "button") {
    if (currentState === "leftOperand") {
      operandDisplayL.append(displayContent);
    } else if (currentState === "rightOperand") {
      operandDisplayR.append(displayContent);
    }
    //* operator button event handling
  } else if (button.className === "operator-Button") {
    if (operandDisplayL.textContent !== "") {
      currentState = "rightOperand";
      operatorDisplay.textContent = displayContent;
      // getOperation();
    }
    //* clear button state management
  } else if (button.className === "clearButton") {
    operandDisplayL.textContent = "";
    operatorDisplay.textContent = "";
    operandDisplayR.textContent = "";
    resultDisplay.textContent = "";
    getOperation();
    currentState = "leftOperand";
  }
});
//* Call & display Operate
function getOperation() {
  let a = operandDisplayL.textContent;
  console.log(a);
  let o = operatorDisplay.textContent;
  console.log(o);
  let b = operandDisplayR.value;
  console.log(b);
  return { a: a, o: o, b: b };
}

const equals = document.getElementById("equals-Button");
equals.addEventListener("click", (e) => {
  const opVar = getOperation();

  operate(opVar, opVar.a, opVar.o, opVar.b);
  console.log(operationResult);

  resultDisplay.textContent = operate(opVar, opVar.a, opVar.o, opVar.b);
});
