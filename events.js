//* Module Imports
import { operate } from "./script.js";

//reference for entire form
const calculatorForm = document.getElementById("calculator-Form");
//* display variables
const operandDisplayL = document.getElementById("operand-Display-L");
const operatorDisplay = document.getElementById("operator-Display");
const operandDisplayR = document.getElementById("operand-Display-R");
const resultDisplay = document.getElementById("operate-Result");
//*State Management variables
let currentState = "leftOperand";

//*callback functions

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
	const a = operandDisplayL.textContent;
	console.log(a);
	const o = operatorDisplay.textContent;
	console.log(o);
	const b = operandDisplayR.textContent;
	console.log(b);
	return { a: a, o: o, b: b };
}
const equalSign = document.getElementById("equals-Sign-Display");
const equals = document.getElementById("equals-Button");
equals.addEventListener("click", () => {
	const opVar = getOperation();
	const a = Number(opVar.a);
	const b = Number(opVar.b);
	equalSign.textContent = "=";
	resultDisplay.textContent = operate(opVar.o, a, b);
});
