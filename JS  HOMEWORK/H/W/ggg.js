let a = {
    sex: "male",
    age: "70"
}

console.log(a);

a.skin = "black"

//console.log(Object.freeze(a))

a.skin = "white"

console.log(a)

delete a.sex
console.log(a);





