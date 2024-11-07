//Arrays - list of objects that can be grouped together

let fruits = [
  "Banana",
  "Apple",
  "Pear",
  "Orange",
  "Passionfruit",
  "Mango",
  "Grape",
  "Kiwi",
  "Watermelon",
  "Dragon fruit",
];

console.log("The fruits available are:", fruits);

//Array length =.length
console.log("Fruits Length:", fruits.length);
//JS is an OOP language - Object Oriented Language
//console is an object and log is a method

//Accessing the array index
console.log("First fruit is: ", fruits[0]);
//adding -1 will make it true to the number
console.log("Last Fruit is:", fruits[fruits.length-1]);

//Push and Pop

//Adding array - push method
//Pushes it to the last array
fruits.push("Berry");
console.log("Updated Fruits: ", fruits);
console.log("Last Fruit is:", fruits[fruits.length-1]);

//Deleting array -pop method
//Pops the last array

fruits.pop();
console.log("New Updated Fruits: ", fruits);
console.log("Last Fruit is:", fruits[fruits.length-1]);

//Searching Elements - .includes method
console.log("Is Mango available?", fruits.includes('Mango')); //returns true

//Looping inside the array - .forEach method
fruits.forEach(function(fruit){
    console.log("Fruits:", fruit);
});
