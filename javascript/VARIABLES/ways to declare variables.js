// different ways to declare a variable
// var
// let
//const

//1. using var
//'var' is the old way to declare variables
//example:
var name = "john"
console.log(name);//output john

// 'var' allows re-declaration and re-assignment:
var name = "Doe"
console.log(name);// output: Doe

//2. using 'let'
//'let' is the modern way to declare variables.
//example:
let age = 25
console.log(age);// output: 25

//you can re-assign 'let' variables:
//let age = 35 //error: identifier 'age' has already been declared

//3. using 'const'
//'const' is used for constants or values that dont change.
//example:
const pi = 3.14
console.log(pi);// output: 3.14

//You cannot re-assign or re-declare a 'const' variable:
//pi == 3.14159; //error: Assignment to constant variable
//const pi = 3.14159; //error: Identifier 'pi' has already been declared

