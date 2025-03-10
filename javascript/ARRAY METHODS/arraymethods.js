//#1
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.length); // Output: 3
//The array contains three elements, so length returns 3.

//#2
console.log(fruits.toString()); // Output: "Apple,Banana,Mango"

//#3
console.log(fruits.at(-1));  // Output: "Mango" (last element)
// console.log(fruits.at(1));   Output: "Banana"

//#4
console.log(fruits.join(" - ")); // Output: "Apple - Banana - Mango"
//join(" - ") creates a string where elements are separated by " - ".

//#5
console.log(fruits.pop());  // Output: "Mango"
console.log(fruits);        // Output: ["Apple", "Banana"]
//The last element "Mango" is removed.

//#6
console.log(fruits.push("Grapes")); // Output: 3
console.log(fruits); // Output: ["Apple", "Banana", "Grapes"]
//"Grapes" is added at the end, and the new length 3 is returned.

//#7
console.log(fruits.shift()); // Output: "Apple"
console.log(fruits); // Output: ["Banana", "Grapes"]
//The first element "Apple" is removed.

//#8
console.log(fruits.unshift("Pineapple")); // Output: 3
console.log(fruits); // Output: ["Pineapple", "Banana", "Grapes"]
//"Pineapple" is added at the start, making the new length 3.

//#9
delete fruits[1];
console.log(fruits); // Output: ["Pineapple", undefined, "Grapes"]
//The element is deleted, but the array still keeps the slot empty.

//#10
let moreFruits = ["Kiwi", "Papaya"];
let combined = fruits.concat(moreFruits);
console.log(combined); // Output: ["Pineapple", undefined, "Grapes", "Kiwi", "Papaya"]
//The concat() method merges fruits and moreFruits.

//#11
let nums = [1, 2, 3, 4, 5];
nums.copyWithin(1, 3); 
console.log(nums); // Output: [1, 4, 5, 4, 5]
//It copies elements from index 3 (4, 5) into index 1.

//#12
let nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat(2)); // Output: [1, 2, 3, 4, 5, 6]
//The flat(2) method flattens two levels of nesting.

//#13
let numbers = [10, 20, 30, 40];
numbers.splice(2, 1, 25, 26); 
console.log(numbers); // Output: [10, 20, 25, 26, 40]
//Removes 30 at index 2 and inserts 25, 26.

//#14
let newNumbers = numbers.toSpliced(2, 1, 99);
console.log(newNumbers); // Output: [10, 20, 99, 26, 40]
console.log(numbers); // Original remains unchanged
//Unlike splice(), toSpliced() does not modify numbers.

//#15
let sliced = numbers.slice(1, 3);
console.log(sliced); // Output: [20, 25]
//Extracts elements from index 1 to 3 (excluding 3).

