const marval_hero = ["ironman", "thor", "hulk", "captain america", "spiderman"]
const dc_hero = ["superman", "batman", "wonder women", "flash", "aquaman"]


marval_hero.push(dc_hero)  // push() method
console.log(marval_hero);
console.log(marval_hero[5][0]) 


marval_hero.concat(dc_hero) 
// This method returns a new array without modifying any existing arrays.

console.log(marval_hero);
const all_hero = marval_hero.concat(dc_hero)

// both are concatenated and returned in new array i.e is stored in all_hero

console.log(all_hero);

const all_new_heros = [...marval_hero, ...dc_hero]  // spread operator
console.log(all_new_heros);

const myarray = [1, 2, 3,[101,102,103,[201,202,203]] ,4, 5, 6,[401,402,403]]
const flatarray = myarray.flat(Infinity)  // flat() method
console.log(flatarray);

console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));
console.log(Array.from({name :"Ayush"})); 
// This line tries to use Array.from() on an object {name: "Ayush"}, Kyunki objects by default iterable nahi hote, yeh empty array [] return karta hai 

const score1 =  100
const score2 =  200
const score3 =  300
console.log(Array.of(score1, score2, score3)); 
// Array.of() just puts whatever values you give it into a new array.
