//Function
//() are callled Parameters. It is used for a placeholder

//Annonymous Parameters
function greet() {
  console.log("Hello, World");
}

greet();
greet();
greet();
greet();
greet();

//With Parameters
function sum(num1, num2) {
  console.log("We have used the parameter(arguements) instead.");
  return num1 + num2;
}

console.log(sum(5, 10));

function product(mulplier, multiply) {
  return mulplier * multiply;
}
console.log(product(10,10));
