 // numbers and maths 

 const score = 100
 console.log(score);

 const amt = new Number(100)
 console.log(amt);
 
 console.log(amt.toString())
 console.log(amt.toString().length)
 console.log(amt.toFixed(2)) //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 
const num = 123.892
console.log(num.toPrecision(3)); // digit k baad round off kar deta hai 

const money = 1000000
console.log(money.toLocaleString('en-IN')); // convert to indian currency format

// ***********************Math Object************************

console.log(Math.PI.toFixed(3));
console.log(Math.E.toFixed(3));
console.log(Math.round(4.6));

// The Math.ceil() static method always *rounds up* and returns integer greater than or equal to a given number.
console.log(Math.ceil(4.23));

// The Math.floor() static method always *rounds down* and returns integer less than or equal to a given number.
 
console.log(Math.floor(4.99));


console.log(Math.min(4, 89, 6, 2, -23, 0));
console.log(Math.max(4, 89, 6, 2, -23, 0));

console.log(Math.random()); // 0 to 1 mostly decimal
console.log(Math.random()*10 +1); // 1 to 10 mostly decimal
console.log(Math.floor(Math.random()*10)+1); // 1 to 10 whole number

