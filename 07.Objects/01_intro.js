const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    "weight-kg": 70,
    sayMyName: function(){
        console.log(this.firstName + " " + this.lastName);
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
};

// Stringify Object
let myString = JSON.stringify(person);
console.log(myString);

// Build a Text
// let text = "";
// for (let x in person) {
//   text += person[x] + " ";
// };
// console.log(text);

// console.log(person);
console.log(person['firstName']);
console.log(person.lastName);
console.log(person['weight-kg']);
// console.log(person.sayMyName);  // this will return function definition
person.sayMyName();
console.log(person.sayMyName());
// console.log(person.keys());

// Create an Array
const myArrayOfValues = Object.values(person);
const myArrayOfKeys = Object.keys(person);
console.log(myArrayOfValues);
console.log(myArrayOfKeys);
console.log(myArrayOfValues.length);
console.log(myArrayOfKeys.length);

const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}
console.log(text);