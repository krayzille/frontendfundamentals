
console.log("Hello World");
//This is a single line comment
/*This is a multiline 
comment */

//Variables - storage of our code
//Let is a changeable variable  (can be updated)
//Let - block scope
let firstName = "John"; //Camelcase typing
console.log("My first name is", firstName);

//Var can be a changeable variable (can be updated)
//Var - global scope
var lastname = "Doe";
console.log("My last nme is", lastname);

//Const are unchangeable
const birthday = "10 - 23 - 2024";
console.log(firstName, lastname, "'s birthday is ",birthday);

firstName = "Joshua";
console.log("My first name is", firstName);

// birthday="02 - 02 - 2000";
// console.log(firstName, lastname, "'s birthday is ",birthday); - Creates an error

 // conditional block if(true)
if(true){
//this is a block scope which is within a code block
    var email = "krayzille@gmail.com"
    let username = "kray";
    console.log(username, email);
}
//Global scope can be declared outside the code block
email = "morita@gmail.com";
username="Joshua";
console.log(username); //was declared
console.log(email); // not declared
