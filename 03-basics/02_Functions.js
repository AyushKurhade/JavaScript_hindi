function calculateCarPrice(...num1) {
  // ... rest operator
  return num1;
}
console.log(calculateCarPrice(1000));
console.log(calculateCarPrice(5000, 2000, 3000));

const user = {
  username: "John Cena",
  email: "abc@123",
};

function handleobject(anyobject) {
  console.log(
    `username is ${anyobject.username} and email is ${anyobject.email}`,
  );
}

handleobject({
  username: "John Cena", // function k ander obj pass kar diya
  email: "abc@123",
});

const mynewArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function returnValues(getArray) {
  return getArray[1]; // array k ander se 1st index return kar diya
}

console.log(returnValues(mynewArry)); // function k ander array pass kar diya

console.log(returnValues([11, 12, 13, 14, 15])); // function k ander array pass kar diya