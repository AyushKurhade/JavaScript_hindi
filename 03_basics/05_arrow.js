
const user = {
    username: "Ayush",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);

function chai(){
  //  console.log(this); // returns the global object (window in browsers) because arrow functions do not have their own 'this' context and instead inherit it from the surrounding scope, which is the global scope in this case.
    let username = "Ayush"
    console.log(this.username);
}

chai()

const chai = function () {
    let username = "Ayush"
    console.log(this.username);
}

chai()      // undefined 



//Arrow function *******************************************
const chai =  () => {
    let username = "Ayush"
    // console.log(this);
}
chai()


//************basics arrow function 
const addTwo = (num1, num2) => {
    return num1 + num2
}


//implicit return function 
const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Ayush"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
