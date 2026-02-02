 const name = "Ayush"
 const age = 20 ;

 console.log(name + " " + age +" ");
 
// Template Literal
 console.log(`Hello my Name is ${name} and my age is ${age}`);
 
// String Manupulation
 const s1 = new String('AyushK')
 console.log(s1.length);
 console.log(s1.toUpperCase());
 console.log(s1.charAt(2));
 console.log(s1.indexOf('A'));

//  substring
 const s2 = s1.substring(0 , 2)
 console.log(s2);
 
//  Slice
 const s3 = s1.slice(-6,4)
 console.log(s3);

//  Trim        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
 const S = "   Ayush    "
 console.log(S);
console.log(S.trim());

// Replace and includes
const url = "https://www.ayushk30%30/discrod.com"
console.log(url.replace('%30' , '-'));
console.log(url.includes('ayush'));
 


 