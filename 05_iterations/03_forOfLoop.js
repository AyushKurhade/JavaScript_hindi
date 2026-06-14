// for of

// ["", "", ""]
// [{}, {}, {}]

// ***********************************************
// Syntax 
// const array = ["a", "b", "c"];
// for (const element of array) {
//   console.log(element);
// }
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}
 
// ************************************************
// Feature
// Iterables (Arrays, Strings, Maps, Sets)
// returns Element values
 

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('MH', "MAHARASHTRA")
map.set('RJ', "RAJASTHAN")
map.set('TN', "TAMILNADU") 
map.set('MH', "MAHARASHTRA") // REPETATION DOES NOT ALLOWED 


// console.log(map);

for (const [key, value] of map) {
    console.log(key, '->', value);
}
