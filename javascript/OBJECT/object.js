let person = {
    name: "emeka",
    age: 16,
    email:"eeze200611@gmail.com",
    isStudent: false,
    IsMarried: false,
    AccBalance: null,
    FavFood: ["rice", "noodles", "garri"] 
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.AccBalance);
console.log(person.FavFood);
console.log(person.isStudent);


console.log(Object.keys(person));//outputs the keys of that object
console.log(Object.values(person));//outputs the values of that object



const smartphone = {
    brand: "samsung",
    model: 16,
    price: 350000,
    has5g: false,
    specs: {
        screensize: "6.1 inches",
        battery: "3700mAh",
        camera: "50MP",
    }
}

console.log(smartphone.model);
console.log(smartphone.specs.battery);





