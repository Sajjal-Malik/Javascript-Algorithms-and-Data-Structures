// File: object_methods.js

// Example JavaScript Object with Methods
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,

    // Method to get the full name
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },

    // Method to greet
    greet: function() {
        return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
    },

    // Method to update the age
    updateAge: function(newAge) {
        this.age = newAge;
    },

    // Method using shorthand syntax
    displayInfo() {
        console.log(this.greet());
    }
};

// Using the object methods
console.log(person.getFullName()); // "John Doe"
console.log(person.greet());       // "Hello, my name is John Doe and I am 30 years old."

// Updating age and displaying info
person.updateAge(35);
person.displayInfo();              // "Hello, my name is John Doe and I am 35 years old."

// Adding a new method dynamically
person.sayGoodbye = function() {
    console.log("Goodbye!");
};

person.sayGoodbye();               // "Goodbye!"
