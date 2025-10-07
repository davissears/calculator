//* Module Imports

import { add, subtract, multiply, divide, operate } from "./script.js";

//* display variables
const calculatorForm = document.getElementById("calculator-Form");
const operandDisplayL = document.getElementById("operand-Display-L");
const operatorDisplay = document.getElementById("operator-Display");
const operandDisplayR = document.getElementById("operand-Display-R");
const resultDisplay = document.getElementById("operate-Result");

//*State Management
// keeps track of display state

let currentState = "leftOperand";

//*callback functions
//updates display
function updateDisplay(displayContent) {
  getDisplayState(currentState);
  currentState = displayContent;
  console.log(currentState);
}

//* button Events

calculatorForm.addEventListener(
  "click",
  //event capture
  (e) => {
    //attach the event to preventDefault() method

    // getDisplayState(currentState);

    const button = e.target;
    const displayContent = button.value;
    const operatorButton =
      calculatorForm.getElementsByClassName("operator-Button");

    if (button.className === `button`) {
      if (currentState === "leftOperand") {
        operandDisplayL.append(displayContent);
      } else if (currentState !== "leftOperand") {
        operandDisplayR.append(displayContent);
      }
    } else if (button.className === "operator-Button") {
      currentState = "rightOperand";
      operatorDisplay.append(displayContent);
    }

    e.preventDefault();
  }
);
