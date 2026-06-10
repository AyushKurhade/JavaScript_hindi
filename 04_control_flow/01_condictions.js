// if 

const isloggedin = true;

if(isloggedin) {
   // code to execute if condition is true
    console.log("User is logged in");
} 

if (2 == "2") {
    console.log("Condition 1 is true");
}

if(2 === "2") { // type checking strict checking
    console.log("Condition 2 is true");
}
if (2 !== "2"){
    console.log("Condition 3 is true");
}

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}


 const score = 120
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`)
// error because power is block scope variable and it is not accessible outside the block    

const balance = 1000

if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}