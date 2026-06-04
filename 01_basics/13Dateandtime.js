let myDate = new Date();
console.log(myDate.toString()); // full date and time
console.log(myDate.toDateString()); // without time
console.log(myDate.toISOString()); // date and time in ISO 8601 format, which is a standardized international forma
console.log(myDate.toUTCString()); // date and time in UTC (Coordinated Universal Time)
console.log(myDate.toLocaleDateString()); //  date part only in a locale-specific format based on the user's system setting
console.log(myDate.toLocaleString()); // date + time in a locale-specific format
console.log(myDate.toTimeString()); //only the time part (without date) in a readable string format.
console.log(myDate.toLocaleTimeString()); //  time part with sec in a locale-specific format.
console.log(myDate.getFullYear()); // year as a four-digit number
console.log(myDate.toJSON()); // The toJSON() method returns a string like "2022-10-05T21:48:00.000Z" (same as toISOString()). It's used when serializing Date objects to JSON, ensuring a standardized, parseable format for data interchange.
    



 console.log("\n")
 console.log("\n")
 
 console.log("\n")

console.log(typeof myDate); // object types

 console.log("\n"); console.log("\n"); console.log("\n");
 
 let dob = new Date(2005, 5, 30);
console.log(dob.toLocaleString());

 console.log("\n"); console.log("\n"); console.log("\n");

 let mytime = Date.now();
console.log(mytime); // number of milliseconds since January 1, 1970, 00:00:00 UTC (the Unix epoch)


 console.log("\n"); console.log("\n"); console.log("\n");
let myDate2 = new Date(" 1-14-2020"); 
console.log(myDate2.getTime()); // number of milliseconds since January 1, 1970, 00:00:00 UTC (the Unix epoch) for the specified date string.

 console.log("\n"); console.log("\n"); console.log("\n");

 let curruntdate = Date.now();
 console.log(Math.floor(curruntdate/1000))

