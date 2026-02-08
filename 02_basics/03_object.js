// litreal declare = no singleton 

// constructor = singleton
// Object.create



// object litrals

 const mySym = Symbol("key1") // symbol 

 const jsuser = {  // object declaration
    name : "Ayush",
    age : 20,
    email : "username@gmail.com",
    upi : "8830000000@oksbi",
    isLogedin : false ,
    "My Address" : "Amravati , Maharashtra",
    // using symbol as key
    [mySym] : "mykey1"
 }



 console.log(jsuser.name);  // use dot member access operator frequently 
 // dot notation
 // used when the identifier is valid and does not cointain the special symbol and spaces
 
 console.log(jsuser["name"]);
//  bracket notation is more flexible for dynamic or special property names. 
//use for  variables or strings that aren't valid identifiers.

// console.log(jsuser.My Address); 
// not accessible due to space in property name
console.log(jsuser["My Address"]);

// console.log(jsuser.mySym); // returns undefined
// not accessible due to symbol key
console.log(jsuser[mySym]);

// changing values in object
console.log(jsuser);
jsuser.name = "Satish";
console.log(jsuser); // value has been overridden

// freezing the object 
console.log(jsuser);
Object.freeze(jsuser);
jsuser.name = "Anush";
console.log(jsuser);



jsuser.greeting = function(){
   console.log("Hello Jarvis :)");
   
}

jsuser.greeting2 = function(){
   console.log(`Hello my name is , ${this.name}`);
   
}
console.log(jsuser.greeting); // [Function (anonymous)] 
console.log(jsuser.greeting()); // [Function (anonymous)] 
console.log(jsuser.greeting2()); 


