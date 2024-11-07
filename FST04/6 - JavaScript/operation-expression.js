//ARITHMETIC OPERATORS

let num1 = 5;
let num2 = 10;

console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num2 - num1);
console.log("Multiplication (*):", num1 * num2);
console.log("Division(/):", num1 / num2);
console.log("Modulo (%):", num2 % num1);
console.log("Exponent (**):", num1 ** 1);

//PEMDAS - Parenthesis / Exponential / Multiplication / Division / Addition / Subtraction

let result = 3 + (4 * (5 - 2) ** 2) / 2;
console.log("This is the result of PEMDAS: ", result);

//CONCATINATION
let greet = "Hi!";
let myName = "Miko";

console.log(greet + myName + " I am yout Instructor for today.");

//COMPARISON OPERATORS
//Produces True or False / Boolean Data Types

//Equal to
console.log("Equal (==)", 5 == 5); // shows true
//Not Equal to
console.log("Not equal(!=)", 5 != 5); //shows false
//Strictly equal, check data types
console.log("Strictly Equal(===)", "5" === 5); //shows false
//Strictly Not Equal
console.log("Strictly Not Equal(!==)", "5" !== 5); //shows true

//Greater than, Less Than
console.log("Greater Than(>):", 5 > 3);
console.log("Less Than(>):", 5 > 3);
console.log("Greater than or Equal to (>=):", 5 >= 3);
console.log("Less than or Equal to (<=):", 5 <= 3);

//LOGICAL OPERATORS
// && - AND - Ampersand
//|| - OR - Pipe
// ! -NOT - Exclamation Mark

let sunny = true;
let warm = false;

console.log("Is it both Sunny and Warm?", sunny && warm);
console.log("Is it Sunny or Warm?", sunny || warm);
console.log("Is it not Sunny", !sunny);

//ASSIGNMENT ADDITION (+=)

let num3 = 10;
let num4 = 5;

num3 += num4; // num3 = num3+num4 - 10+5
console.log("The new value of the num3 is:", num3);

//SUBTRACTION ASSIGNMENT (-=)

num3 -= num4; // num3 = num3 - num4 - 15-5
console.log("The new value of the num3 is: ", num3);

//MULTIPLICATION ASSIGNMENT (*=)

num4 *= num3;
console.log("The new value of the num4 is: ", num4);

//DIVISION ASSIGNMENT (/=)

num3 /= num4;
console.log("The new value of the num3 is: ", num3);

//MODULO ASSIGNMENT (%=)

num4 %= num3;
console.log("The new value of the num4 is: ", num4);

//EXPONENT ASSIGNMENT (**=)

num4 **= num3;

console.log("The new value of the num4 is: ", num4);
