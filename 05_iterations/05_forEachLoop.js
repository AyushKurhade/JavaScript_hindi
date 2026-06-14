// Array.prototype.forEach()
// high order function 


// Syntax
const array = ["a", "b", "c"];

array.forEach( function (val) {
// console.log(val)
});

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"



// arrw funtion 
// syntax :
// arrName.forEach( (item) => { console.log(item)})


const lang = ["java", "python", "javascript"];

// lang.forEach((element) => console.log(element));

// Expected output: "java"
// Expected output: "python"
// Expected output: "javascript"

lang.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )


// array k ander obj 
// [] -> {}
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

