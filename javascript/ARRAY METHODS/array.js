//array is a collection of elements such as number string and object stored in a list like structure

let arr_of_objects = [
  person = {
    favfood: "rice",
    position: "first"
},

car = {
    brand: "audi",
    house: "duplex"
},

Kode10x = {
    males: 55,
    females: 12
}
]

console.log(arr_of_objects);

let arr_of_numbers = [1,2,3,4,2,6,7,8,9,10]
console.log(arr_of_numbers);

let arr_of_strings = [
    "goat", "cows", "hen", "birds"
]
console.log(arr_of_strings);

console.log(arr_of_numbers.indexOf(2));
console.log(arr_of_numbers[2]);

let arr_of_obj = [

]
arr_of_obj.push[{sex: "male", food: "yam"}]
console.log(arr_of_obj);

arr_of_obj.push(5)
console.log(arr_of_obj);

arr_of_obj.push("Naomi")
console.log(arr_of_obj);

arr_of_obj.push([])
console.log(arr_of_obj);

arr_of_obj.push([
    person = {
        class: "year1",
        deparment: "commercial",
        semester: 3
    }
])

console.log(arr_of_obj);


arr_of_obj.pop()

arr_of_obj.shift()

console.log(arr_of_obj);

let logbook = [{
    patient1: "samuel",
    age: 33,
    diagnosis: "mild cough and catarrh",
    address: "festac 3rd avenue"
}]

//let detail = logbook[0].address
//console.log(detail);

//logbook.unshift(3)
//console.log(logbook);

//let logbook2 = [{
  //  patient2: "jack",
    //age: 10,
    //diagnosis: "diarrhea",
    //address: "Banana island"
//}]

//let logg = logbook2.concat(logbook)
//console.log(logg);

logbook.unshift({
    patient2: "jack",
    age: 10,
    diagnosis: "diarrhea",
    address: "Banana island"
})
console.log(logbook);









