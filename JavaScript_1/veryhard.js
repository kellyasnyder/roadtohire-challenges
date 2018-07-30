// VERY HARD: Create a simple calculator that prompts the user for a number, an operator 
// (either +, -, * or /) and another number, and then uses the functions created in the hard challenge 
// to output the value in sentence form.
// Example output: "3 + 4 = 7"

var numOne = prompt("Please enter a number");
var numTwo = prompt("Please enter another number");
var op = prompt("Please enter an operation");
var answer;
switch (op) {
  case "+":
    answer = add(parseInt(numOne), parseInt(numTwo));
    break;
  case "-":
    answer = subtract(parseInt(numOne), parseInt(numTwo));
    break;
  case "*":
    answer = multiply(parseInt(numOne), parseInt(numTwo));
    break;
  case "/":
    answer = divide(parseInt(numOne), parseInt(numTwo));
    break;
  default:
    answer = "No avalible answer";
}
console.log(numOne + op + numTwo + "=" + answer);