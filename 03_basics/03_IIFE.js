// IIFE _ the function which execute immediately after its creation
// Immediately Invoked Function Expression

// probelm occures due to global scope variable
// to overcome this problem we can use IIFE

// normal function
function addTwo(num1, num2) {
    return num1 + num2
}
console.log(addTwo(3, 4));

// while writing another IIFE it is recomemded to provode semicolon at the end of previous function because if we forget to provide semicolon then it will throw error because it will consider it as a function call of previous function

// IIFE
(function addTwo(num1, num2) {
    console.log(num1 + num2);
})(3, 4);


// two IIFE
(function Amazon() {
    console.log("Database is connected");
})(); // must be end with semicolon

// using arrow function
( (/*  can be passed paramater*/) => {
    console.log("Database is connected");
})( /* can be passed argument */);

// example of IIFE

((name) => {
    console.log(` Hello ${name}, Welcome to website`);
}) ("Ayush")


