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

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The reason is that an equity check i.e == > < >= <= works diffrently 
// comparisions converts null to the number , treating it as a 0 
// thats why in third operation null >= 0 is true i.e 1 
// similarly null is > 0 is false


console.log("\n")



console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);


console.log("\n")


// === check strictly (check datatypes)

console.log("2"== 2); // check nahi hota datatype same hai ya nahi direct conversion ho jata ai 
console.log("2"=== 2); // isme pehle data type check hota hai ager sa,e datatype hoga to hi vo pehle convert karega otherwise direct false




