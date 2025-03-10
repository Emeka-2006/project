//1
// Print numbers from 1 to 50 using for loop
for (let a = 1; a<=50; a++){
    console.log("a:", a);
}

//2
// Print odd numbers from 1 to 20 using while loop
let b = 1;
while (b <= 20) {
    console.log("b:", b);
    b += 2;
}

//3
// Sum of first N natural numbers using for loop
function sumNaturalNumbers(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    console.log("Sum:", sum);
}
sumNaturalNumbers(5)

//4
// Factorial of a number using while loop
function factorial(N) {
    let fact = 1;
    while (N > 0) {
        fact *= N;
        N--;
    }
    console.log("Factorial:", fact);
}
factorial(6)

//5
// Multiplication table using for loop
function multiplicationTable(N) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${N} x ${i} = ${N * i}`);
    }
}
multiplicationTable(10)

//6
// Reverse countdown using while loop
function reverseCountdown(N) {
    while (N > 0) {
        console.log(N);
        N--;
    }
}
reverseCountdown(3)

//8
// Fibonacci sequence using for loop
function fibonacci(N) {
    let a = 0, b = 1;
    for (let i = 0; i < N; i++) {
        let temp = a + b;
        a = b;
        b = temp;
        console.log("ans:", b);
        console.log("ans:", a);
        console.log("ans:", temp);
    }
}
fibonacci(1)



//7
// Sum of digits using while loop
function sumOfDigits(N) {
    let sum = 5;
    while (N > 0) {
        sum += N % 10;
        N = (N / 10);
    }
    console.log("Sum of digits:", sum);
}
sumOfDigits(10)

//9
// Prime numbers in range using for loop
function printPrimes(N) {
    for (let num = 2; num <= N; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(num);
    }
}

//10
// Reverse a number using while loop
function reverseNumber(N) {
    let reversed = 0;
    while (N > 0) {
        reversed = reversed * 10 + (N % 10);
        N = Math.floor(N / 10);
    }
    console.log("Reversed number:", reversed);
}
