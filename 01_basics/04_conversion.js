let score = 33
let score1 = '33abc'

console.log(typeof (score));
console.log(typeof (score1));

let valueInNumber = Number(score1)
console.log(typeof (valueInNumber));
console.log(valueInNumber)

console.log("\n");

let NullValue = null
console.log(NullValue);
console.log(typeof NullValue);
let ChangedNullvalue = Number(NullValue);       
console.log(typeof ChangedNullvalue);
console.log(ChangedNullvalue);


console.log("\n");

// "33" => 33
// "33abc" => NaN (Not a Number) type of nan is number
// true => false and vice versa (1 = true  => 0 = false)

let isLoggedin = 1
let booleanIsLogein = Boolean(isLoggedin)
console.log(typeof booleanIsLogein);
console.log( booleanIsLogein);

// 1 = true 
// 0 = > false 
// empty string ("")=> false 
// ayush => true 

console.log("\n");


let x = 33
let s = String(x)
console.log(s);
console.log(typeof s);



