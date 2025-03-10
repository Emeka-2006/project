//Function in javascript is a block of reassembled code that performs a specific.
//Function helps make code organised, reusable and easy to manage.
function parameter(){//parameters or the name of thebfunction declared
    console.log();//CODE TO EXECUTE
}

parameter()//To carry out a function 

function nameofthefunction(x, y){
    console.log(x + y) //arithmetic code
}

nameofthefunction(5, 5)//to carryout arithmetic operation in the function declared

//types of function

//simple function
function greet(name) {
    console.log("Hello, student!");  
}
greet();

// Function with dynamic parameter
function greet(name) {
    console.log(`hello, ${name}`);
    
}

greet("EMEKA")

//Function with parameters: a function that take input called parameters and use them in it operation
function subtract(b, c){
    console.log(b - c);   
}

subtract(5, 6)
//returning a value: a function that returns a value using statement

function multiply(a, b, c, d){
    return a* b* c* d //code to execute
}
//let result = multiply(5, 6)
const output = multiply(1, 2, 1, 3)
console.log(output);

