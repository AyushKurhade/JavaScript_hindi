// Arrays
myArr = ['ayush', 'sachin', 'rohit', 1, 30 , 29, 2, true, false]
console.log(myArr[0]);

const myhero = ['ironman', 'captain america', 'thor', 'hulk' ]
console.log(myhero[2]);

console.log(myhero.length); 

// Array Methods

myhero.push('thanos')
console.log(myhero);

myhero.push('loki')
console.log(myhero);

myhero.pop()
console.log(myhero); // last value removed 

myhero.unshift('spiderman')
console.log(myhero); // insert the value spiderman at the beginning 

myhero.shift()
console.log(myhero); // first value removed

 // boolean based methods

console.log(myhero.includes('thor'));
console.log(myhero.includes('batman'));

console.log(myhero.indexOf('thor'))

const newarr = myArr.join() // converts the array into string and returns the string
console.log(myArr);
console.log(newarr);
console.log(typeof newarr); // string

// slice or spice

 let arr = [10, 20, 30, 40, 50];
console.log(arr);

let sliced = arr.slice(0, 3);


let spliced = arr.splice(0, 2);
 
console.log("sliced:", sliced);
console.log("spliced:", spliced);
console.log("original arr:", arr);



// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);