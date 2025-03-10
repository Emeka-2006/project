// Function to greet a user
function greet(name) {
    return `Hello, ${name}!`;
}

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to square a number
function square(num) {
    return num * num;
}

// Function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}


console.log(greet("Alice")); // "Hello, Alice!"
console.log(add(5, 3)); // 8
console.log(multiply(4, 6)); // 24
console.log(square(7)); // 49
console.log(isEven(10)); // true
console.log(isEven(7)); // false
