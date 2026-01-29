const accountId = 123456;
let accountEmail = "User1211@example.com";
let accountPass = 'mySecretPass';
var city = "Amravati";
Verified = true;

let LoginStatus;
// not defined yet

// change not allowed
// accountId = 654321; 
// TypeError: Assignment to constant variable.

accountPass = 'newmySecretPass'; 
city = "Nagpur"; 
accountEmail = "User1212@example.com"; 

/* prefer not to use var because of block scope and functional scope */

console.table([accountId, accountPass, city, accountEmail, Verified, LoginStatus]);

 
