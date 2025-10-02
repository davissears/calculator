const {
  add,
  subtract,
  multiply,
  divide,
  operate,
} = require("./script");

describe("Calculator functions", () => {
  test("add function should correctly add two numbers", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, -1)).toBe(-2);
    expect(add(0, 0)).toBe(0);
  });

  test.skip("subtract function should correctly subtract two numbers", () => {
    expect(subtract(2, 1)).toBe(1);
    expect(subtract(-1, -1)).toBe(0);
    expect(subtract(0, 0)).toBe(0);
  });

  test.skip("multiply function should correctly multiply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });

  test.skip("divide function should correctly divide two numbers", () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(-6, 3)).toBe(-2);
    expect(divide(0, 5)).toBe(0);
  });

  test.skip("divide function should handle division by zero", () => {
    expect(divide(5, 0)).toBe("Error: Cannot divide by zero");
  });

  test.skip("operate function should correctly call the appropriate operation", () => {
    expect(operate("+", 1, 2)).toBe(3);
    expect(operate("-", 2, 1)).toBe(1);
    expect(operate("*", 2, 3)).toBe(6);
    expect(operate("/", 6, 3)).toBe(2);
  });

  test.skip("operate function should handle invalid operators", () => {
    expect(operate("^", 2, 3)).toBe("Error: Invalid operator");
  });
});