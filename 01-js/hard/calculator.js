/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  currentResult;

  // Constants for readability
  END_MARKER = "#";
  ARITHMETIC_OPERATORS = ["+", "-", "*", "/"];
  OPERATORS_AND_IDENTIFIERS = [
    ...this.ARITHMETIC_OPERATORS,
    ")",
    this.END_MARKER,
  ];

  constructor() {
    this.currentResult = 0;
  }

  // Basic arithmetic operations
  add(number) {
    this.currentResult += number;
  }

  subtract(number) {
    this.currentResult -= number;
  }

  multiply(number) {
    this.currentResult *= number;
  }

  divide(number) {
    if (number !== 0) {
      this.currentResult /= number;
    } else {
      throw new Error("Division by zero is not allowed");
    }
  }

  // Clear the calculator result
  clear() {
    this.currentResult = 0;
  }

  // Get the current result
  getResult() {
    return this.currentResult;
  }

  // Main method to evaluate and update the result
  calculate(expression) {
    this.currentResult = eval(expression);
    if (!Number.isFinite(this.currentResult)) {
      throw new Error(`Infinite value detected`);
    }
  }
}

module.exports = Calculator;
