let myMap = new Map();
myMap.set('name', 'Alice');
myMap.set(42, 'The answer');
myMap.set(true, 'Boolean value');
console.log(myMap);

console.log(myMap.get('name')); // Output: Alice
console.log(myMap.get(42));     // Output: The answer

console.log(myMap.has('name')); // Output: true
console.log(myMap.has('age'));  // Output: false

myMap.delete(42);
console.log(myMap.has(42)); // Output: false


for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}


myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

console.log(myMap.size); // Output: 2

myMap.clear();
console.log(myMap.size); // Output: 0

let contacts = new Map([
    ['Alice', '123-456'],
    ['Bob', '987-654'],
    ['Charlie', '555-555']
  ]);
  
  contacts.set('David', '111-222'); // Add a new entry
  console.log(contacts.get('Alice')); // Output: 123-456
  console.log(contacts.has('Bob'));   // Output: true
  
  contacts.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  // Output:
  // Alice: 123-456
  // Bob: 987-654
  // Charlie: 555-555
  // David: 111-222
  