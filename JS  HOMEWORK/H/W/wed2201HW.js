// 1
let a = "ADA liked Saturday choir practice! She loves to run and play basketball. How many letters does this contain?" 
a = a.replace("ADA", "YourName");
a = a.replace("basketball", "table tennis")
console.log(a);
console.log(a.length);

// 2
let b = "ZYXWVUTSRQPONMLKJIHGFEDCBA"
console.log(b.indexOf(""));
console.log(b.includes("WXYZ"));

// 3
let c = " Welcome to JavaScript World! "
console.log(c.trim());
console.log(c.startsWith("Welcome"));

// 4
let d = "programming"
console.log(d.concat(" with", " javascript", " is", " amazing!"));

// 5
let e = "Full Stack Development"
console.log(e.slice(5, 10));
console.log(e.includes("Frontend"));

// 6
let f = "i love to watch movies"
console.log(f.includes("love"));
console.log(f.replace("movies", "anime"));

let g = "I love working on web development" 
console.log(g.replace("web", "mobile"));

// 7
// Create the string variable
let activities = "Reading,Writing,Coding,Debugging";

// Split the string by commas
let mList = activities.split(',');

// Log each word on a new line
mList.forEach(m => {
    console.log(m);
});

 





