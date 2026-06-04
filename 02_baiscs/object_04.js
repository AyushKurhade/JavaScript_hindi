

// // singleton object 

// const flipcardUser = new Object() 
// console.log(flipcardUser); 

// // returns empty object 




// Non Singleton object 

const flipcardUser = {}; 

flipcardUser.id = '123abc'
flipcardUser.name = 'username108'
flipcardUser.isLoggedin = false

console.log(flipcardUser);
console.log(Object.keys(flipcardUser)) // retured in array 
console.log(Object.values(flipcardUser)) // returned in array 
console.log(Object.entries(flipcardUser)) // returned in array in array
console.log(flipcardUser.hasOwnProperty('isloggedin')); // cjecking weather value present or not



const snapUser = {
    nickname : "Dimple",
    address : "Amravati",
    Username : {
            Firstname : "mrunal",
            Lastname : 'thakur',
            Middlename : 'Dhiraj'
        
    }
}
// console.log(snapUser);
console.log(snapUser.Username);
// console.log(snapUser.Username.Firstname);

const user1 = { 1 : 'a', 2 : 'b'}
const user2 = { 3 : 'a', 4 : 'b'}
const user3 = { 5 : 'a', 6 : 'b'}

const user4_1 = {user1,user2,user3}
console.log(user4); // not promising 



const user4_2 = Object.assign({}, user1,user2,user3) 
console.log(user4);


const user4_3 = {...user1,...user2,...user3} // spread operator 
console.log(user4_3);
// used in morden javascript
