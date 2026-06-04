



function printMyName() {
console.log("A");
console.log("A");
console.log("Y");
console.log("U");
console.log("S");
console.log("H");
}
printMyName();



function addTwoNumbers(num1, num2) // parameters  
{
    console.log(num1 + num2); // just printing the sum of two numbers
}

addTwoNumbers(); // NaN - Not a Number
addTwoNumbers("A"); // undefined + "A" = NaN - Not a Number 
addTwoNumbers("A",30); // NaN - Not a Number
addTwoNumbers(null,30);  // returns 30 because null is considered as 0 in addition
addTwoNumbers(undefined,30); // NaN - Not a Number because undefined is not considered as 0 in addition
addTwoNumbers(5, 10); // arguments - values that we pass in function

const result = addTwoNumbers(100, 200); 
console.log(result); // undefined because our function is not returning anything, it is just printing the sum of two numbers



// ****************************************************************************************************





function addTwoNumbers(num1, num2) // parameters  
{
    return num1 + num2; // now our function is returning the sum of two numbers
}
const result1 = addTwoNumbers(100, 200);
console.log(result1); // 300 because our function is now returning the sum of two numbers







// *************************************************************************************** 

function loginUser(username = "Someone"){
    if(username === undefined) // (!username) 
        {  
        console.log("Please provide a username");
        return
    }
    return `${username} just logged in;
    `
}
loginUser("Ayush"); // this will not print anything because we are not printing the return value of the function
// console.log(loginUser("Ayush"));
console.log(loginUser()); // undefined 
