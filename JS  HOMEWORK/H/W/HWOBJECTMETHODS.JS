
// 1. Using Object.keys
const obj = { name: "Alice", age: 25, country: "USA" };
console.log("Keys:", Object.keys(obj)); // ["name", "age", "country"]

// 2. Using Object.values
console.log("Values:", Object.values(obj)); // ["Alice", 25, "USA"]

// 3. Using Object.entries
console.log("Entries:", Object.entries(obj)); 
// [["name", "Alice"], ["age", 25], ["country", "USA"]]

// 4. Using Object.assign
const obj2 = { profession: "Developer" };
const combinedObj = Object.assign({}, obj, obj2);
console.log("Combined Object:", combinedObj);
// { name: "Alice", age: 25, country: "USA", profession: "Developer" }

// 5. Using Object.freeze
let frozenObj = Object.freeze({ city: "New York" });
frozenObj.city = "Los Angeles"; // This won't work, as the object is frozen
console.log("Frozen Object:", frozenObj); // { city: "New York" }

// 6. Using Object.seal
const sealedObj = Object.seal({ hobby: "Reading" });
sealedObj.hobby = "Writing"; // Allowed
sealedObj.newProp = "Painting"; // Not allowed
console.log("Sealed Object:", sealedObj); // { hobby: "Writing" }

// 7. Using Object.create
const parentObj = { greet() { console.log("Hello!"); } };
const childObj = Object.create(parentObj);
childObj.name = "Charlie";
childObj.greet(); // Hello!
console.log("Child Object:", childObj.name); // "Charlie"

// 8. Using Object.hasOwn
console.log("Has own 'name':", Object.hasOwn(obj, "name")); // true
console.log("Has own 'toString':", Object.hasOwn(obj, "toString")); // false

// 9. Using Object.prototype.toString
const date = new Date();
console.log("Type of date object:", Object.prototype.toString.call(date)); 
// "[object Date]"

// 10. Using Object.getPrototypeOf
console.log("Prototype of childObj:", Object.getPrototypeOf(childObj)); 
// parentObj


//Explanation
//1. `Object.keys`: Gets the keys of an object.
//2. `Object.values`: Gets the values of an object.
//3. `Object.entries`: Gets key-value pairs of an object as an array of arrays.
//4. `Object.assign`: Combines multiple objects into one.
//5. `Object.freeze`: Makes an object immutable. Freezing an object does not allow new properties 
// to be added to the object and prevents removing or altering the existing properties.
//6. `Object.seal`: Prevents adding/removing properties but allows modification of existing ones.
//7. `Object.create`: Creates a new object with a specified prototype.
//8. `Object.hasOwn`: Checks if an object has a property as its own (not inherited).
//9. `Object.prototype.toString`: Provides a string representation of an object's type.
//10.`Object.getPrototypeOf`: Retrieves the prototype of an object.

