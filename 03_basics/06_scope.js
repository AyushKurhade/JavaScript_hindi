var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Ayush"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()



if (true) {
    const username = "Ayush"
    if (username === "Ayush") {
        const website = " youtube"
         console.log(username + website);
    }
    // console.log(website); // no access to website variable outside the if block
}

// console.log(username); // no access to username variable outside the if block


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5)) // execute cause only funtion is declared 

// function addone(num){
//     return num + 1
// }


// hosting 
// addTwo(5)  
// throws an error cause first declared then it is assigened to an variable 
// const addTwo = function(num){
//     return num + 2
// }