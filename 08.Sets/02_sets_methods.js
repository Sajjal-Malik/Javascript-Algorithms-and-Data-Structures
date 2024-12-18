// JavaScript Set Methods Example

// Create a new Set
const mySet = new Set();

// Add elements to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add("Hello");
mySet.add({ name: "Alice" });

console.log("Initial Set:", mySet);

// Check if an element exists in the Set
console.log("Has 2?", mySet.has(2)); // true
console.log("Has 4?", mySet.has(4)); // false

// Delete an element from the Set
mySet.delete(3);
console.log("After deleting 3:", mySet);

// Get the size of the Set
console.log("Size of Set:", mySet.size);

// Iterate through the Set
console.log("Iterating over Set:");
mySet.forEach((value) => {
  console.log(value);
});

// Convert Set to an array
const setToArray = Array.from(mySet);
console.log("Set as an array:", setToArray);

// Clear all elements from the Set
mySet.clear();
console.log("After clearing Set:", mySet);

// Using the Set constructor to create a Set from an array
const numbers = [1, 2, 3, 4, 4, 2];
const uniqueNumbersSet = new Set(numbers);
console.log("Unique numbers from array:", uniqueNumbersSet);

// Spread operator to convert Set back to an array
const uniqueNumbersArray = [...uniqueNumbersSet];
console.log("Unique numbers as array:", uniqueNumbersArray);
