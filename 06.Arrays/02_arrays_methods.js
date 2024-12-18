// 🗂 Adding/Removing Elements

// push()
let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']

// pop()
let last = fruits.pop();
console.log(fruits); // ['apple', 'banana']
console.log(last);   // 'orange'

// unshift()
let numbers = [2, 3];
numbers.unshift(1);
console.log(numbers); // [1, 2, 3]

// shift()
let first = numbers.shift();
console.log(numbers); // [2, 3]
console.log(first);   // 1

// splice()
let colors = ['red', 'blue', 'green'];
colors.splice(1, 1, 'yellow'); // Replace 1 element at index 1
console.log(colors); // ['red', 'yellow', 'green']

// 🔄 Iterating Over Arrays

// forEach()
numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));
// Output: 2, 4, 6

// map()
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

// filter()
let even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2]

// reduce()
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6

// 🔍 Searching in Arrays

// find()
let result = numbers.find(num => num > 2);
console.log(result); // 3

// findIndex()
let index = numbers.findIndex(num => num === 2);
console.log(index); // 1

// includes()
fruits = ['apple', 'banana'];
console.log(fruits.includes('banana')); // true

// indexOf()
console.log(fruits.indexOf('orange')); // -1

// 🧩 Combining Arrays

// concat()
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]

// join()
let words = ['hello', 'world'];
console.log(words.join(' ')); // 'hello world'

// 🔄 Transforming Arrays

// slice()
numbers = [1, 2, 3, 4];
console.log(numbers.slice(1, 3)); // [2, 3]

// sort()
fruits = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'orange']

// reverse()
numbers.reverse();
console.log(numbers); // [4, 3, 2, 1]

// 🆕 ES6+ Methods

// flat()
let nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat(2)); // [1, 2, 3, 4, 5]

// flatMap()
numbers = [1, 2, 3];
result = numbers.flatMap(num => [num, num * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]

// some()
console.log(numbers.some(num => num > 2)); // true

// every()
console.log(numbers.every(num => num > 0)); // true
