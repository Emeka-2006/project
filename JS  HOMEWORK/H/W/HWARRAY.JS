// Initial shopping cart array
let cart = ["Laptop", "Phone", "Shoes", "Watch", "Headphones"];

console.log("Initial Cart:", cart);

// 1. Add an item to the end
cart.push("Tablet");
console.log("After Adding 'Tablet' to the End:", cart);

// 2. Remove the last item
cart.pop();
console.log("After Removing the Last Item:", cart);

// 3. Add an item to the beginning
cart.unshift("Smartwatch");
console.log("After Adding 'Smartwatch' to the Beginning:", cart);

// 4. Remove the first item
cart.shift();
console.log("After Removing the First Item:", cart);

// 5. Display the updated cart
console.log("Final Updated Cart:", cart);

//push("Tablet") → Adds "Tablet" to the end of the array.
//pop() → Removes the last item from the array.
//unshift("Smartwatch") → Adds "Smartwatch" to the 
// beginning of the array.
//shift() → Removes the first item from the array.

let queue = [
    Jake = {
        order: "peperoni pizza, bottle of coke"
    },    
    Max = {
        order: "chicken pizza, bottle of water"
    },
    Ruby = {
        order: "BBQ pizza, chicken wings, bottle of fanta"
    } 
]

queue.shift()
console.log("queue:", queue);

queue.push ("margarita pizza, bottle of water")
console.log(queue);


