// JavaScript Map Methods Demonstration

// 1. Creating a new Map
const myMap = new Map();

// 2. Using the set() method to add key-value pairs
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('country', 'USA');
console.log('Initial Map:', myMap);

// 3. Using the get() method to retrieve a value by key
console.log("Name:", myMap.get('name')); // Output: John

// 4. Using the has() method to check if a key exists
console.log("Has 'age' key:", myMap.has('age')); // Output: true
console.log("Has 'gender' key:", myMap.has('gender')); // Output: false

// 5. Using the delete() method to remove a key-value pair
myMap.delete('country');
console.log('Map after deleting "country":', myMap);

// 6. Using the size property to get the number of key-value pairs
console.log('Size of the Map:', myMap.size); // Output: 2

// 7. Using the forEach() method to iterate over key-value pairs
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// 8. Using the keys() method to get an iterator for keys
console.log('Keys:', myMap.keys());

// 9. Using the values() method to get an iterator for values
console.log('Values:', myMap.values());

// 10. Using the entries() method to get an iterator for [key, value] pairs
console.log('Entries:', myMap.entries());

// 11. Iterating over entries using a for...of loop
for (const [key, value] of myMap.entries()) {
    console.log(`${key}: ${value}`);
}

// 12. Clearing all entries in the Map with clear()
myMap.clear();
console.log('Map after clear():', myMap); // Output: Map(0) { }
