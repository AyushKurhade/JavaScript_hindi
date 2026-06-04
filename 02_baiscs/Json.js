const course = {
    courseName: "JavaScript",   
    price : 1000,
    courseInstructor : "John Cena"
}
// course.courseInstructor
const { courseInstructor} = course; // Object Destructuring
const { courseInstructor: tutor} = course; // Object Destructuring
console.log(courseInstructor);
console.log(tutor);


// API concept 
// apna kaam kisi or k sir pr daal dena hai  
// JSON - JavaScript Object Notation

//  {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Ms",
//         "first": "Gonca",
//         "last": "Sezek"
//       },
//       "location": {
//         "street": {
//           "number": 8436,
//           "name": "Filistin Cd"
//         },
//         "city": "Nevşehir",
//         "state": "Tekirdağ",
//         "country": "Turkey",
//         "postcode": 74387,
//         "coordinates": {
//           "latitude": "71.0182",
//           "longitude": "21.9625"
//         },
//         "timezone": {
//           "offset": "-1:00",
//           "description": "Azores, Cape Verde Islands"
//         }
//       },
//       "email": "gonca.sezek@example.com",
//       "login": {
//         "uuid": "7bd6d99b-beb4-4e93-88e0-01a8838479ae",
//         "username": "angrybear188",
//         "password": "train",
//         "salt": "4Tr4LmrH",
//         "md5": "c93585988f2b2c5c7763dc6e5f5a8367",
//         "sha1": "cdc8b8b1a2848038bb3207eb027143371824cb8d",
//         "sha256": "80e0403db744e2d21d65b8c7ab0fb1049af99c6a01c997647ee536037ee55918"
//       },
//       "dob": {
//         "date": "1983-08-07T10:19:49.933Z",
//         "age": 42
//       },
//       "registered": {
//         "date": "2012-06-26T21:21:58.015Z",
//         "age": 13
//       },
//       "phone": "(252)-456-8949",
//       "cell": "(209)-009-0197",
//       "id": {
//         "name": "",
//         "value": null
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/women/51.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg"
//       },
//       "nat": "TR"
//     }
//   ],
//   "info": {
//     "seed": "ba2e3f3e729be8b5",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }
