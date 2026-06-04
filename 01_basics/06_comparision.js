console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);
console.log(2<=1);
console.log(2>=1);

console.log("\n")

console.log("2">1);
console.log("02">1);

console.log("\n")

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// *****Comparisons (> and >=)***********
// Comparison operators convert values to numbers.
//JavaScript converts null to the number 0.
// null > 0 becomes 0 > 0 (false).null >= 0 becomes 0 >= 0 (true)

// *********Equality Checks (==)***********
//It does not convert null to 0.
//null only loosely equals null or undefined
//Therefore, null == 0 evaluates to false.

console.log("\n")



console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);


console.log("\n")


// === check strictly (check datatypes)

console.log("2"== 2); // check nahi hota datatype same hai ya nahi direct conversion ho jata ai 
console.log("2"=== 2); // isme pehle data type check hota hai ager sa,e datatype hoga to hi vo pehle convert karega otherwise direct false




